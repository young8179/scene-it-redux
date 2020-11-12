import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, deleteFavorite } from '../redux/actions'

export default function MovieCard(props) {
    const {Title, Year, Poster } = props.movie
    const dispatch = useDispatch()
    const movies = useSelector((state) => state.favorites)

    const foundMovie = movies.find((movie) =>{
        return (movie.imdbID === props.movie.imdbID)
    })

    const handleRemoveMovie = () => {
        //dispatch delete favorite
        dispatch(deleteFavorite(props.movie.imdbID))
    }

    const handleAddMovie = () =>{
        //dispatch action
        //action = add movie
        dispatch(addFavorite(props.movie))
    }
    return (
        <Card>
            <CardActionArea>
                <CardMedia image={Poster} style={{ height: "400px"}}/>
                <CardContent>
                    <Typography variant="h5">{Title}</Typography>
                    <Typography color="textSecondary">{Year}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                { foundMovie ? (
                <Button color="primary" onClick={handleRemoveMovie}>remove</Button>)
            :(<Button color="primary" onClick={handleAddMovie}>add movie</Button>)}
                
            </CardActions>
        </Card>
    )
}
