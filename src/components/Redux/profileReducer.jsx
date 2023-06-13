
import samuraiAPI from "../service/samuraiAPI";

const ADD_POST =  'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const ADD_PROFILE_PHOTO= 'ADD_PROFILE_PHOTO';
const DELETE_POST = 'DELETE_POST'; 

let initialState =  {
  postsData : [
      {id: 1, post: "holla!", like: 22},
      {id: 2, post: "How are you?!", like: 56},
      {id: 3, post: "Sugoi", like: 10},
      {id: 4, post: "HOla holaaaaa", like:12}
    ],
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {

  switch(action.type) {
      case ADD_POST: {
          let newPost = {
              id: Math.random(),
              post: action.newPostData,
              likesCount: 0
          };
          let stateCopy = {...state};
          stateCopy.postsData = [...state.postsData];
          stateCopy.postsData.push(newPost);
          return stateCopy;
      }
      case SET_USER_PROFILE: {
          return {...state, profile: action.profile}
      }
      case SET_USER_STATUS: {
        return {...state, status: action.status}
      }
      case ADD_PROFILE_PHOTO: {
        return { ...state, profile: { ...state.profile, photos: action.photo } };
      }
      case DELETE_POST: 
            return {...state, posts: state.posts.filter(p => p.id != action.postId)} 
        default:
            return state;
    }
};


export const addPost = (newPostData) => ({type: ADD_POST , newPostData})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})
export const addProfilePhoto = (photo) => ({type: ADD_PROFILE_PHOTO, photo})
export const deletePost = (postId) => ({type: DELETE_POST, postId}) 
 



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

export const addPhoto =(photo) => (dispatch) =>{
  samuraiAPI.updatePhoto(photo)
  .then(response => {
    if(response.data.resultCode === 0){
      dispatch(addProfilePhoto(response.data.data.photos));
  }
})
}


export default profileReducer;