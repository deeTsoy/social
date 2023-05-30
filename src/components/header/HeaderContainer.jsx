import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import { getAuthUserData, logout } from '../Redux/authReducer';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const { isAuth, login } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAuthUserData());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return <Header isAuth={isAuth} login={login} logout={handleLogout} />;
};

export default HeaderContainer;