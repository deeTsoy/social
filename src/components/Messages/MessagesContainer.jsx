import React from "react";
import Messages from "./Messages";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../Redux/messageReducer';


const MessagesContainer = (props) => {
   
    let state = props.store.getState();
    let addMessage = () => {
        let action = sendMessageActionCreator();
        props.store.dispatch(action);
    };

    let onChangeMessage = (text) =>{
        let action = updateNewMessageTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (    
        <Messages 
        addMessage={addMessage}
        updateNewMessageText={onChangeMessage} 
        state ={state.messagesPage}
        />
    );
};
export default MessagesContainer;

