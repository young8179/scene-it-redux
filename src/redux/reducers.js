import { combineReducers } from "redux";
import { ACTION_SET_DATA, ACTION_SET_LOADED, ACTION_SET_LOADING, ADD_MOVIE, DELETE_MOVIE } from "./actions"

// const defaultState = {
//     loading: false,
//     results: [],
// }

function searchReducer(state=[], action){
    switch (action.type){
        
        case ACTION_SET_DATA:
            return action.payload.moviesArray
                
            
        
        default:
            return state;
    }
}

function loadingReducer(state = false, action){
    switch (action.type) {
        case ACTION_SET_LOADING:
            return true
        
        case ACTION_SET_LOADED:
            return false

        default:
            return state
    }
}


function favoritesReducer(state=[], action){
    switch (action.type){
        //action
        case ADD_MOVIE:
            return [...state, action.payload.movie]
            // return state.concat(action.payload.movie)
        case DELETE_MOVIE:
            return state.filter((favorite)=>{
                if(favorite.imdbID !== action.payload.imdbID){
                    return true
                }else{
                    return false
                }
            })
        default:
            return state
    }
}
export const rootReducer = combineReducers({
    loading: loadingReducer,
    results: searchReducer,
    favorites: favoritesReducer
})