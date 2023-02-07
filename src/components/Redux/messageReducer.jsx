const SEND_MESSAGE = 'SEND_MESSAGE';
const ADD_NEW_MESSAGE_TEXT ='ADD_NEW_MESSAGE_TEXT';

const messageReducer = (state, action) => {
    switch (action.type) {
    case SEND_MESSAGE: {
        const newMessage = {
            id: 6,
            message: state.newMessageData
        };
        state.massagesData.push(newMessage);
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