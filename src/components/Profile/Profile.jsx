import React from 'react'; 
import MyPosts from './MyPosts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => { 
    return (
    <div> 
      <ProfileInfo/>
      <MyPosts 
        postsData={props.state.postsData} 
        addPost={props.addPost} 
        newPostData={props.state.newPostData} 
        updateNewPostText ={props.updateNewPostText}/>
    </div> 
    );
};
 
export default Profile;