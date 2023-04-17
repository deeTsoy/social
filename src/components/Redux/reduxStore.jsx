import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import usersReducer from "./userReducer";
import authReducer from "./authReducer"
import thunk from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer

});

let store = createStore(reducers,applyMiddleware(thunk));

export default store;