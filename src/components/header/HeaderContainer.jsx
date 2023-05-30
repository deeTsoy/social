import React, { useEffect } from 'react';
import Header from './Header';
import { useDispatch,connect } from 'react-redux';
import { getAuthUserData, logout } from '../Redux/authReducer';

const HeaderContainer = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthUserData());
  }, [dispatch]);

  return <Header isAuth={props.isAuth} login={props.login} logout= {props.logout}/>;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default  connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);