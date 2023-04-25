import { addPost, updateNewPostText } from '../../Redux/profileReducer';
import MyPosts from './Myposts';
import { connect } from 'react-redux';


let mapState = (state) => {
  return {
    profilePage: state.profilePage
  }
};
let mapDispatch =(dispatch) => {
  return {
    addPost: () => {
          let action = addPost();
          dispatch(action);
      },
      updateNewPostText :(text) =>{
          let action = updateNewPostText(text);
          dispatch(action);
      }
  }
}


const MyPostsContainer = connect(mapState, mapDispatch)(MyPosts);
 
export default MyPostsContainer;
