import React, { useEffect } from 'react';
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthUserData } from '../Redux/authReducer';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth);
  const login = useSelector(state => state.auth.login);

  useEffect(() => {
    dispatch(getAuthUserData());
  }, [dispatch]);

  return <Header isAuth={isAuth} login={login} />;
};

export default HeaderContainer;