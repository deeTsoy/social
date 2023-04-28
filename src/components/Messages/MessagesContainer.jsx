import Messages from "./Messages";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../Redux/messageReducer';
import { connect } from "react-redux";
import withAuthRedirect from "../HOC/withAuthRedirect"




let mapState = (state) => {
    return {
        state:state.messagesPage,
        isAuth: state.auth.isAuth
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
 
const MessagesContainer = withAuthRedirect(connect(mapState, mapDispatch)(Messages));


export default MessagesContainer;

