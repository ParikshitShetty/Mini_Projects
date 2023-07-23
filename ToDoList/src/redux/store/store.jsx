import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import ToDoReducer from "../reducers/toDoReducer";
import ActiveReducer from "../reducers/ActiveReducer";



const rootReducer = combineReducers({
    ToDoReducer,
    ActiveReducer,
});

const store = configureStore({reducer : rootReducer});

export default store;