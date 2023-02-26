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
        followAC : (id) =>{
            let action = followAC(id);
            dispatch(action);
        },
        unFollowAC : (id) =>{
            let action = unFollowAC(id);
            dispatch(action);
        },
        setUsers : (users) =>{
            let action = setUsers(users);
            dispatch(action);
        },
    };
};

const UsersContainer = connect(mapState, mapDispatch)(Users);

export default UsersContainer;