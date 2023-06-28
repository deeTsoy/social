import samuraiAPI from "../service/samuraiAPI";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';
const ADD_PROFILE_PHOTO = 'ADD_PROFILE_PHOTO';
const SET_PROFILE_INFO = 'SET_PROFILE_INFO';

let initialState = {
  postsData: [
    { id: 1, post: "holla!", like: 22 },
    { id: 2, post: "How are you?!", like: 56 },
    { id: 3, post: "Sugoi", like: 10 },
    { id: 4, post: "HOla holaaaaa", like: 12 }
  ],
  profile: null,
  status: '', 

};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: Math.random(),
        post: action.newPostData,
        likesCount: 0
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost]
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }
    case SET_USER_STATUS: {
      return { ...state, status: action.status }
    }
    case ADD_PROFILE_PHOTO: {
      return {...state, profile: {...state.profile, photos: action.photos }}  
    }
    case DELETE_POST:{
      return { ...state, postsData: state.postsData.filter(p => p.id !== action.postId)}
    }
    case SET_PROFILE_INFO: {
      return { ...state, profile: action.profile }
    }
    default:
      return state;
  }
};

export const addPost = (newPostData) => ({ type: ADD_POST, newPostData });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const addProfilePhoto =  (photos) => ({type: ADD_PROFILE_PHOTO, photos});
export const setProfileInfo = (profile) => ({ type: SET_PROFILE_INFO, profile });



export const getUserProfile = (userId) => async (dispatch) => {
  let response = await samuraiAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId) => async (dispatch) => {
  let response = await samuraiAPI.getStatus(userId);
  dispatch(setUserStatus(response.data));
};

export const updateUserStatus = (status) => async (dispatch) => {
  let response = await samuraiAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};

export const addPhoto = (file) => async (dispatch) => {
  let response = await samuraiAPI.updatePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(addProfilePhoto(response.data.data.photos));
  }
};
export const updateProfileInfo = (profile) => async (dispatch, getState) => {
  const id = getState().auth.userId
  let response = await samuraiAPI.updateProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(setProfileInfo(response.data.data.profile));
    dispatch(getUserProfile(id))
  }
};

export default profileReducer;
