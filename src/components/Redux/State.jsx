
const ADD_POST =  'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';
const ADD_NEW_MESSAGE_TEXT ='ADD_NEW_MESSAGE_TEXT';

let store = {
    _state: {
        messagesPage: {
            dialogData : [
                {id : 1,
                name : "Oleg"
                },
                {id : 2,
                name : "petr"
                },
                {id : 3,
                name : "almaz"
                },
                {id : 4,
                name : "sergey"
                },
                {id : 5,
                name : "kana"
                 },
                {id : 6,
                name : "korzh"
                }
              ],
            massagesData : [
                {id: 1, massage: "Hola!"},
                {id: 2, massage: "How are you?!"},
                {id: 3, massage: "Sugoi"},
                {id: 4, massage: "Sugoiii!!"}
            ],
            newMessageData : ''
        },
        profilePage : {
            postsData : [
                {id: 1, post: "holla!", like: 22},
                {id: 2, post: "How are you?!", like: 56},
                {id: 3, post: "Sugoi", like: 10},
                {id: 4, post: "HOla holaaaaa", like:12}
                ],
            newPostData: 'newText'
        }
       },
    _callSubscriber(){
        console.log('updateTree');
    },

    getState(){
        return this._state;
    },
    
    sub(observer){
        this._callSubscriber= observer;
    },
    
    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                id: 5,
                post: this._state.profilePage.newPostData, 
                like:0
            };
        
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostData ='';
            this._state.profilePage.newPostData = action.newText;
            this._callSubscriber(this._state);

        }else if(action.type === UPDATE_NEW_POST_TEXT){
                this._state.profilePage.newPostData = action.newText;
                this._callSubscriber();

        }else if(action.type === SEND_MESSAGE){
            let newMessage = {
                id: 7,
                message: this._state.messagesPage.newMessageData
            };
            this._state.messagesPage.massagesData.push(newMessage);
            this._state.messagesPage.newMessageData ='';
            this._callSubscriber();

        }else if(action.type === ADD_NEW_MESSAGE_TEXT){
                this._state.messagesPage.newMessageData = action.newText;
                this._callSubscriber(this._state);
        }
    }
};
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const sendMessageActionCreator = () => ({type:SEND_MESSAGE});
export const updateNewMessageTextActionCreator =(text) => ({type:ADD_NEW_MESSAGE_TEXT, newText: text})


export default store;