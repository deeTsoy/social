import React from 'react'; 
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({isOwner, profile,status,updateUserStatus,addPhoto,store}) => {
    return (
    <div> 
      <ProfileInfo 
      isOwner= {isOwner}
      profile ={profile} 
      status= {status}
      updateUserStatus = {updateUserStatus} 
      addPhoto ={addPhoto}/>
      <MyPostsContainer store = {store}/>
    </div> 
    );
};
 
export default Profile;