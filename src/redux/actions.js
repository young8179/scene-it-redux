export const ACTION_SET_DATA = "ACTION_SET_DATA";
export const ACTION_SET_LOADING = "ACTION_SET_LOADING"
export const ACTION_SET_LOADED = "ACTION_SET_LOADED"
export const ADD_MOVIE = "ADD_MOVIE"
export const DELETE_MOVIE = "DELETE_MOVIE"

export function loading(){
    return {
        type: ACTION_SET_LOADING
    }
}

export function loaded(){
    return {
        type: ACTION_SET_LOADED
    }
}

export function setData(moviesArray){
    return {
        type: ACTION_SET_DATA,
        payload:{
            moviesArray
        }
    }
}

export function addFavorite(movie){
    return {
        type: ADD_MOVIE,
        payload:{
            movie
        }
    }
}

export function deleteFavorite(imdbID){
    return {
        type: DELETE_MOVIE,
        payload:{
            imdbID
        }
    }
}