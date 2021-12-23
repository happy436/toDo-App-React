import { combineReducers, createStore } from "redux";
import themeReducer from "./themeReducer"
import taskReducer from "./taskReducer"


const persistedState = localStorage.getItem('reduxState')
                        ? JSON.parse(localStorage.getItem('reduxState')) : {}

let reducers = combineReducers(
    {
        themeReducer: themeReducer,
        taskReducer: taskReducer, 
        
    });

let store = createStore(reducers, persistedState);

export default store;