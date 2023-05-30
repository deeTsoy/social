import React, { useEffect } from 'react';
import Header from './Header';
import { useSelector, useDispatch,connect } from 'react-redux';
import { getAuthUserData, logout } from '../Redux/authReducer';

const HeaderContainer = (props) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth);
  const login = useSelector(state => state.auth.login);

  useEffect(() => {
    dispatch(getAuthUserData());
  }, [dispatch]);

  return <Header isAuth={isAuth} login={login} logout= {props.logout}/>;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default  connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);