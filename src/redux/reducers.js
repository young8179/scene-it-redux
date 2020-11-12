import { ACTION_SET_DATA, ACTION_SET_LOADED, ACTION_SET_LOADING } from "./actions"

const defaultState = {
    loading: false,
    results: [],
}

export function searchReducer(state=defaultState, action){
    switch (action.type){
        case ACTION_SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case ACTION_SET_DATA:
            return {
                ...state,
                results: action.payload.moviesArray,
                loading: false
            }
        case ACTION_SET_LOADED:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}