import { useEffect } from 'react';
import { getUserProfile } from '../Redux/profileReducer';
import Profile from './Profile';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const ProfileContainer = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profilePage.profile);

  useEffect(() => {
    dispatch(getUserProfile(userId || 2));
  }, [dispatch, userId]);

  return <Profile profile={profile} />;
};

export default ProfileContainer;