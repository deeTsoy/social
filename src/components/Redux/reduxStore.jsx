import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import usersReducer from "./userReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    usersPage: usersReducer

});

let store = createStore(reducers);

export default store;