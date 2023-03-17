import React from 'react';
import { useEffect } from 'react';
import axios from "axios";
import Users from "./Users";
import Loader from "../loader/loader"


const UsersContainerApi = (props) => {
    
    useEffect(() => {
        props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
            .then(response => {
                props.toggleIsFetching(false);
                props.setUsers(response.data.items);
                props.setTotalUsersCount(response.data.totalCount);
            });
    }, [props.currentPage, props.pageSize, props.setUsers, props.setTotalUsersCount, props.toggleIsFetching]);

    const onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`)
            .then(response => {
                props.toggleIsFetching(false);
                props.setUsers(response.data.items);
            });
    }

    return (
        <>
            {props.isFetching ? <Loader/> : null}
            <Users 
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={onPageChanged}
                users={props.users}
                follow={props.follow}
                unfollow={props.unfollow}
            />
        </>
    );
};

export default UsersContainerApi;
