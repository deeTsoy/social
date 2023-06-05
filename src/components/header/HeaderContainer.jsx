import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import {  logout } from '../Redux/authReducer';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const { isAuth, login } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return <Header isAuth={isAuth} login={login} logout={handleLogout} />;
};

export default HeaderContainer;