import React from 'react';
import {connect} from "react-redux";
import {follow, setCurrentPage, setUsers, setTotalUsersCount, unfollow, toggleIsFetching} from "../Redux/userReducer";
import UsersContainerApi from "./UsersContainerApi";



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(follow(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollow(userId));
        },
        setUsers: (users) => {
            dispatch(setUsers(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPage(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCount(totalCount))
        },
        toggleIsFetching: (isFetching) =>{
            dispatch(toggleIsFetching(isFetching))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainerApi);