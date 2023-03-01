import React from "react";
import { connect } from 'react-redux';
import Users from './Users';
import {followAC, unFollowAC, setUsers} from './../Redux/userReducer';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsers(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);