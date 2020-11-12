export const ACTION_SET_DATA = "ACTION_SET_DATA";
export const ACTION_SET_LOADING = "ACTION_SET_LOADING"
export const ACTION_SET_LOADED = "ACTION_SET_LOADED"

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