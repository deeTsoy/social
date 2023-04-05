import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import usersReducer from "./userReducer";
import authReducer from "./authReducer"

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer

});

let store = createStore(reducers);

export default store;