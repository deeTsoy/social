import { useEffect } from 'react';
import { getUserProfile, getUserStatus, updateUserStatus, addPhoto, updateProfileInfo } from '../Redux/profileReducer';
import Profile from './Profile';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import withAuthRedirect from "../HOC/withAuthRedirect"


const ProfileContainer = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();

  const { profile, status, authorizedUserId } = useSelector(state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId
  }));
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
    if (!authorizedUserId) {
      navigate("/login");
    } else {
    dispatch(getUserProfile(authorizedUserId));
    dispatch(getUserStatus(authorizedUserId));
    }
    } else {
    dispatch(getUserProfile(userId));
    dispatch(getUserStatus(userId));
    }
    }, [dispatch, navigate, userId, authorizedUserId]);
  


  return <Profile 
  isOwner={!userId}
   profile={profile} 
   status={status} 
   updateUserStatus={(status) => dispatch(updateUserStatus(status))} 
   addPhoto={(photo) => dispatch(addPhoto(photo))}
   updateProfileInfo= {(profile) => dispatch(updateProfileInfo(profile))}/>
};

export default withAuthRedirect(ProfileContainer);