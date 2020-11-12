import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MovieCard from '../components/MovieCard'
import SearchForm from '../components/SearchForm'

export default function Favorites() {
    const movies = useSelector((state) => state.favorites)

    return (
        <div>
            <Typography variant="h1" align="center" >Favorites</Typography>
            <Link to="/">Home</Link>
            <SearchForm />
            <Grid container spacing={3}>
                {movies.map(movie => {
                    return (
                        <Grid item xs={3} key={movie.imdbID}>
                            <MovieCard movie={movie} />
                        </Grid>

                    )
                })}

            </Grid>
        </div>
    )
}
