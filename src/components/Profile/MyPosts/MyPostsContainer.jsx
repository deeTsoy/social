import React from 'react';
import MyPosts from './Myposts';
import { useSelector, useDispatch } from 'react-redux';
import { addPost } from '../../Redux/profileReducer';

const MyPostsContainer = () => {
  const dispatch = useDispatch();
  const profilePage = useSelector((state) => state.profilePage);

  const handleAddPost = (newPostData) => {
    dispatch(addPost(newPostData));
  };

  return <MyPosts profilePage={profilePage} addPost={handleAddPost} />;
};

export default MyPostsContainer;
