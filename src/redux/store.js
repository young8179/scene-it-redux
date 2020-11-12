
import { applyMiddleware, compose, createStore } from "redux"
import { load, save } from "redux-localstorage-simple"
import { rootReducer} from "./reducers"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

const middleware = composeEnhancers(applyMiddleware(
    save()
))
   


// const defaultState = {
//     loading: true,
//     results: [],
// }


export const store = createStore(
    rootReducer,
    // defaultState
    load(),
    middleware
    )
    