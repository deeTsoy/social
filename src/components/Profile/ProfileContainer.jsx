import { useEffect } from 'react';
import { getUserProfile, getUserStatus, updateUserStatus } from '../Redux/profileReducer';
import Profile from './Profile';
import { useParams, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import withAuthRedirect from "../HOC/withAuthRedirect"


const ProfileContainer = (props) => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profilePage.profile);
  const isAuth = useSelector(state => state.auth.isAuth);
  const status = useSelector(state => state.profilePage.status);

  useEffect(() => {
    dispatch(getUserProfile(userId || 2));
    dispatch(getUserStatus(userId));
  }, [dispatch, userId]);

  if(!isAuth ) return <Navigate to='/login' />


  return <Profile profile={profile} status={status} updateUserStatus = {updateUserStatus}/>;
};

export default withAuthRedirect(ProfileContainer);