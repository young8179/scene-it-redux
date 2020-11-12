import { Button, Grid, InputBase, Paper } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loaded, loading, setData } from '../redux/actions'

export default function SearchForm() {
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()

    const encodedSearch = encodeURIComponent(search)
  const handleSearch = (e) =>{
    e.preventDefault()
    dispatch(loading())
    //get movies from api
    fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${encodedSearch}`)
    .then(res=> res.json())
    .then(data=>{
      console.log(data.Search)
      dispatch(setData(data.Search))
      dispatch(loaded())
    })

  }
    return (
        <div>
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
        </div>
    )
}
