import Messages from "./Messages";
import {sendMessageActionCreator} from '../Redux/messageReducer';
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
        addMessage: (newMessageData) => {
            let action = sendMessageActionCreator(newMessageData);
            dispatch(action);
        }
    }
}
 


export default compose(withAuthRedirect,
                        connect(mapState, mapDispatch))
                        (Messages);

