import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleWare from "redux-thunk";
import authReducer from "./auth-reducer";


let reducers = combineReducers({
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare))

window.store = store;

export default  store;