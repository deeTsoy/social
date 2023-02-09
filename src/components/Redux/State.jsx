import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";

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
            messagesData : [
                {id: 1, message: "Hola!"},
                {id: 2, message: "How are you?!"},
                {id: 3, message: "Sugoi"},
                {id: 4, message: "Sugoiii!!"}
            ],
            newMessageData : 'lok'
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
       this._state.profilePage = profileReducer(this._state.profilePage, action);
       this._state.messagesPage = messageReducer(this._state.profilePage, action);
       this._callSubscriber(this._state);
    }

};

export default store;