import { addPost, updateNewPostText } from '../../Redux/profileReducer';
import MyPosts from './Myposts';
import { connect } from 'react-redux';


let mapState = (state) => {
  return {
    profilePage: state.profilePage,
  }
};


const MyPostsContainer = connect(mapState, {addPost, updateNewPostText})(MyPosts);
 
export default MyPostsContainer;
