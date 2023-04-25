
import samuraiAPI from "../service/samuraiAPI";

const ADD_POST =  'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState =  {
  postsData : [
      {id: 1, post: "holla!", like: 22},
      {id: 2, post: "How are you?!", like: 56},
      {id: 3, post: "Sugoi", like: 10},
      {id: 4, post: "HOla holaaaaa", like:12}
    ],
  newPostData: '',
  profile: null
};

const profileReducer = (state = initialState, action) => {

  switch(action.type) {
      case ADD_POST: {
          let newPost = {
              id: Math.random(),
              message: state.newPostData,
              likesCount: 0
          };
          let stateCopy = {...state};
          stateCopy.postsData = [...state.postsData];
          stateCopy.postsData.push(newPost);
          stateCopy.newPostData = '';
          return stateCopy;
      }
      case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostData = action.newText;
            return stateCopy;
      }
      case SET_USER_PROFILE: {
          return {...state, profile: action.profile}
      }
      default:
          return state;
  }
};


export const addPost = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostText = (text) =>({type: UPDATE_NEW_POST_TEXT, newText: text })

export const getUserProfile = (userId) => (dispatch) => {
    samuraiAPI.getProfile(userId)  
      .then(response => {
        dispatch(setUserProfile(response.data));
      });
}

export default profileReducer;