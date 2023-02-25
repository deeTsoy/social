import React from "react";
import { connect } from 'react-redux';
import Users from './Users';
import {followAC, unFollowAC, setUsers} from './../Redux/userReducer';

let mapState = (state)=> {
    return {
        users: state.usersPage.users     
    }
    };

let mapDispatch= (dispatch) =>{
    return {
        follow : (id) =>{
            let action = followAC(id);
            dispatch(action);
        },
        unFollow : (id) =>{
            let action = unFollowAC(id);
            dispatch(action);
        },
        setUsers : (users) =>{
            let action = setUsers(users);
            dispatch(action);
        },
    };
};

const usersContainer = connect(mapState, mapDispatch)(Users);

export default usersContainer;