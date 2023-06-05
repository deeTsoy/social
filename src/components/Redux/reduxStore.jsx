import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import usersReducer from "./userReducer";
import authReducer from "./authReducer"
import appReducer from "./appReducer"
import thunk from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer

});

let store = createStore(reducers,applyMiddleware(thunk));

export default store;