import React from "react";
import Messages from "./Messages";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../Redux/messageReducer';
import { connect } from "react-redux";


let mapState = (state) => {
    return {
        state:state.messagesPage 
    }
}

let mapDispatch =(dispatch) => {
    return {
        addMessage: () => {
            let action = sendMessageActionCreator();
            dispatch(action);
        },
        updateNewMessageText :(text) =>{
            let action = updateNewMessageTextActionCreator(text);
            dispatch(action);
        }
    }
}
 
const MessagesContainer = connect(mapState, mapDispatch)(Messages);


export default MessagesContainer;

