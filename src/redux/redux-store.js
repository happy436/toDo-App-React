import { combineReducers, createStore } from "redux";
import themeReducer from "./themeReducer"
import taskReducer from "./taskReducer"


let reducers = combineReducers(
    {
        themeReducer: themeReducer,
        taskReducer: taskReducer, 
        
    });

let store = createStore(reducers);

export default store;