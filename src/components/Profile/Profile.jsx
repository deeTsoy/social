import React from 'react'; 
import MyPosts from './MyPosts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => { 
    return (
    <div> 
      <ProfileInfo/>
      <MyPosts postsData={props.state.postsData}/>
    </div> 
    );
};
 
export default Profile;