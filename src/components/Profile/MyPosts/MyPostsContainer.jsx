import React from 'react'; 
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../Redux/profileReducer';
import MyPosts from './Myposts';

const MyPostsContainer = (props) => { 

  let state = props.store.getState();
  
  const addPost = () => {
    let action = addPostActionCreator();
    props.store.dispatch(action);
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
      <MyPosts 
      addPost = {addPost} 
      updateNewPost= {onPostChange} 
      postData = {state.profilePage.postsData} 
      newPostData={state.profilePage.newPostData}/>
      );
};

 
export default MyPostsContainer;
