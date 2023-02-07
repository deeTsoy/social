
const ADD_POST =  'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
          let newPost = {
            id: 5,
            post: state.newPostData, 
            like:0
          };
          state.postsData.push(newPost);
          state.newPostData = '';
          return state;
        case UPDATE_NEW_POST_TEXT:
          state.newPostData = action.newText;
          return state;
        default:
            return state;;
    };
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export default profileReducer;