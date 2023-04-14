import React from 'react';
import Users from "./Users";
import Loader from "../loader/loader"
import samuraiAPI from "../service/samuraiAPI"
import {connect} from "react-redux";
import {follow, setCurrentPage, setUsers, setTotalUsersCount, unfollow, toggleIsFetching, toggleIsFollowingProgress} from "../Redux/userReducer";


class UsersContainer extends React.Component {
    componentDidMount() {
        samuraiAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        samuraiAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.setUsers(data.items);
            });
    }

    render() {
        return<>{ this.props.isFetching ? null : <Loader/>}
        <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      samuraiAPI={samuraiAPI}
                      toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                      followingInProgress={this.props.followingInProgress}
        />
       </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

let mapDispatchToProps = {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);