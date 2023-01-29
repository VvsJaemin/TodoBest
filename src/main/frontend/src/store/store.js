import {combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {logger} from "redux-logger/src";
import todos from '../components/todo/reducer/todo.reducer'

const rootReducer = combineReducers({todos});


export default configureStore({
    reducer : rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})