import React from 'react'; 
import MyPosts from './MyPosts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => { 
  const {postsData, newPostData} = props.profilePage;
 
    return (
    <div> 
      <ProfileInfo/>
      <MyPosts 
        postsData={postsData} 
        dispatch={props.dispatch} 
        newPostData={newPostData}/>
    </div> 
    );
};
 
export default Profile;