const SEND_MESSAGE = 'SEND_MESSAGE';

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
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
    case SEND_MESSAGE: {
        const newMessage = {
            id: Math.random(),
            message: action.newMessageData
        };
        let stateCopy = {...state};
        stateCopy.messagesData = [...state.messagesData];
        stateCopy.messagesData.push(newMessage);
        return stateCopy;
    }
    default: {
        return state;
    }
    };
};

export const sendMessageActionCreator = (newMessageData) => ({type:SEND_MESSAGE, newMessageData});
export default  messageReducer;