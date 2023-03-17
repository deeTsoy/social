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

let mapDispatchToProps = {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching }

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainerApi);