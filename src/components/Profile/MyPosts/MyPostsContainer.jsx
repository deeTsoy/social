import React from 'react'; 
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../Redux/profileReducer';
import MyPosts from './Myposts';
import { connect } from 'react-redux';


let mapState = (state) => {
  return {
    profilePage: state.profilePage,
  }
};

let mapDispatch = (dispatch) => {
  return {
    addPost: () => {
      let action = addPostActionCreator();
      dispatch(action);
    },
    PostChange: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    }
  }
};

const MyPostsContainer = connect(mapState, mapDispatch)(MyPosts);
 
export default MyPostsContainer;
