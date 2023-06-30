import { useEffect } from 'react';
import { getUserProfile, getUserStatus, updateUserStatus, addPhoto, updateProfileInfo } from '../Redux/profileReducer';
import Profile from './Profile';
import { follow, unfollow } from '../Redux/userReducer';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import withAuthRedirect from "../HOC/withAuthRedirect"
import { compose } from 'redux';



const ProfileContainer = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();

  const { profile, status, authorizedUserId,followingInProgress,users} = useSelector(state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    followingInProgress:state.usersPage.followingInProgress,
    users: state.usersPage
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
  

    const handleFollow = (userId) => {
      dispatch(follow(userId));
    };
  
    const handleUnfollow = (userId) => {
      dispatch(unfollow(userId));
    };

  return <Profile 
  isOwner={!userId}
   profile={profile} 
   status={status} 
   updateUserStatus={(status) => dispatch(updateUserStatus(status))} 
   addPhoto={(photo) => dispatch(addPhoto(photo))}
   updateProfileInfo= {(profile) => dispatch(updateProfileInfo(profile))}
    />
};

export default compose(withAuthRedirect)(ProfileContainer);