
import samuraiAPI from "../service/samuraiAPI";

const ADD_POST =  'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';


let initialState =  {
  postsData : [
      {id: 1, post: "holla!", like: 22},
      {id: 2, post: "How are you?!", like: 56},
      {id: 3, post: "Sugoi", like: 10},
      {id: 4, post: "HOla holaaaaa", like:12}
    ],
  newPostData: '',
  profile: null,
  status: ''
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
      case SET_USER_STATUS: {
        return {...state, status: action.status}
    }
      default:
          return state;
  }
};


export const addPost = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})
export const updateNewPostText = (text) =>({type: UPDATE_NEW_POST_TEXT, newText: text })

export const getUserProfile = (userId) => (dispatch) => {
    samuraiAPI.getProfile(userId)  
      .then(response => {
        dispatch(setUserProfile(response.data));
      });
};
export const getUserStatus = (userId) => (dispatch) => {
  samuraiAPI.getStatus(userId)  
    .then(response => {
      dispatch(setUserStatus(response.data));
    });
};
export const updateUserStatus = (status) => (dispatch) => {
  samuraiAPI.updateStatus(status)  
    .then(response => {
      if(response.data.resultCode === 0){
        dispatch(setUserStatus(status));
      }
    });
}

export default profileReducer;