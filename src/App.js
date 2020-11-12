// import { NavLink, Route} from 'react-router-dom'
import './App.css';
import { Button, Container, Grid, IconButton, InputBase, Paper, TextField, Typography } from '@material-ui/core';
import Card from './components/MovieCard';
import MovieCard from './components/MovieCard';
import { useState } from 'react';
import { setData } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [search, setSearch] = useState("")
  const dispatch = useDispatch()
  const movies = useSelector((state)=> state.results)

  const encodedSearch = encodeURIComponent(search)
  const handleSearch = (e) =>{
    e.preventDefault()
    //get movies from api
    fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${encodedSearch}`)
    .then(res=> res.json())
    .then(data=>{
      console.log(data.Search)
      dispatch(setData(data.Search))
    })

  }

  return (
    <Container>
      <Typography variant="h1" align="center" >Scene it!</Typography>
        <Grid container direction="row" justify="center" alignItems="center">
          
            <Paper component="form" onSubmit={handleSearch} >
              <Grid direction="row" alignItems="center" justify="center">
                <InputBase
                  placeholder="Search"
                  inputProps={{"aria-label": "search Movies"}}
                  value={search} onChange={(e)=>{setSearch(e.target.value)}}
                />
                <Button size="large" variant="contained">Search</Button>

              </Grid>
              
            </Paper>
            {/* <TextField label="search" variant="outlined" value={search} onChange={(e)=>{setSearch(e.target.value)}}/> */}

         
      </Grid>
      <Grid container spacing={3}>
        {movies.map(movie=>{
          return (
          <Grid item xs={3} key={movie.imdbID}>
            <MovieCard movie={movie}/>
          </Grid>

          )
        })}
             
      </Grid>
    </Container>
  );
}

export default App;
