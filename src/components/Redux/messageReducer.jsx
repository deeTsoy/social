const SEND_MESSAGE = 'SEND_MESSAGE';
const ADD_NEW_MESSAGE_TEXT ='ADD_NEW_MESSAGE_TEXT';

let initialState = { 
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
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
    case SEND_MESSAGE: {
        const newMessage = {
            id: 6,
            message: state.newMessageData
        };
        state.messagesData.push(newMessage);
        state.newMessageData = '';
        return state;
    }
    case ADD_NEW_MESSAGE_TEXT: {
        state.newMessageData = action.newText;
        return state;
    }
    default: {
        return state;
    }
    };
};

export const sendMessageActionCreator = () => ({type:SEND_MESSAGE});
export const updateNewMessageTextActionCreator =(text) => ({type:ADD_NEW_MESSAGE_TEXT, newText: text});
export default  messageReducer;