import { useEffect } from 'react';
import { getUserProfile } from '../Redux/profileReducer';
import Profile from './Profile';
import { useParams, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const ProfileContainer = (props) => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profilePage.profile);
  const isAuth = useSelector(state => state.auth.isAuth)

  useEffect(() => {
    dispatch(getUserProfile(userId || 2));
  }, [dispatch, userId]);

  if(!isAuth) return <Navigate to='/login' />


  return <Profile profile={profile} />;
};

export default ProfileContainer;