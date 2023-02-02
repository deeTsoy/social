import React from 'react'; 
import MyPosts from './MyPosts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => { 
    return (
    <div> 
      <ProfileInfo/>
      <MyPosts 
        postsData={props.profilePage.postsData} 
        dispatch={props.dispatch} 
        newPostData={props.profilePage.newPostData}/>
    </div> 
    );
};
 
export default Profile;