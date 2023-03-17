
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
              id: 5,
              message: state.newPostText,
              likesCount: 0
          };
          return {
              ...state,
              posts: [...state.posts, newPost],
              newPostText: ''
          };
      }
      case UPDATE_NEW_POST_TEXT: {
          return {
              ...state,
              newPostText: action.newText
          }
      }
      case SET_USER_PROFILE: {
          return {...state, profile: action.profile}
      }
      default:
          return state;
  }
};


export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;