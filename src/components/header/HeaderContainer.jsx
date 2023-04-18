import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData, authUser} from "../Redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authUser()
    }


    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);