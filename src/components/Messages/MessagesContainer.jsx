import Messages from "./Messages";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../Redux/messageReducer';
import { connect } from "react-redux";
import withAuthRedirect from "../HOC/withAuthRedirect"
import { compose } from "redux";



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
 


export default compose(withAuthRedirect,
                        connect(mapState, mapDispatch))
                        (Messages);

