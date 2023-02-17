
const ADD_POST =  'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState =  {
  postsData : [
      {id: 1, post: "holla!", like: 22},
      {id: 2, post: "How are you?!", like: 56},
      {id: 3, post: "Sugoi", like: 10},
      {id: 4, post: "HOla holaaaaa", like:12}
      ],
  newPostData: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
          let newPost = {
            id: Math.random(),
            post: state.newPostData, 
            like:0
          };
          let stateCopy = {...state}

          stateCopy.postsData = [...state.postsData]
          stateCopy.postsData.push(newPost);
          stateCopy.newPostData = '';
          return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:{     
          let stateCopy = {...state}
          stateCopy.newPostData = action.newText;
          return stateCopy;
        }
        default:
            return state;;
    };
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export default profileReducer;