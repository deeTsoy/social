import { addPost } from '../../Redux/profileReducer';
import MyPosts from './Myposts';
import { connect } from 'react-redux';


let mapState = (state) => {
  return {
    profilePage: state.profilePage
  }
};
let mapDispatch =(dispatch) => {
  return {
    addPost: (newPostData) => {
          let action = addPost(newPostData);
          dispatch(action);
      }
  }
}


const MyPostsContainer = connect(mapState, mapDispatch)(MyPosts);
 
export default MyPostsContainer;
