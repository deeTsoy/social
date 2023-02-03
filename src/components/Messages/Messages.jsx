import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Messages.module.css";
import MessageItem from "./MessageItem/MessageItem";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../Redux/State';


const Messages = (props) => {
    let state = props.store.getState().messagesPage;
    let dialogs = state.dialogData.map(item => <DialogItem name={item.name} id= {item.id}/>);
    let massages = state.massagesData.map(item => <MessageItem message ={item.massage} id = {item.id}/>);
    let newMessage = state.newMessageData;


    let addMessage = () => {
        let action = sendMessageActionCreator();
        props.dispatch(action);
    };

    let onChangeMessage = (e) =>{
        let text = e.target.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={styles.diologs}>
            <div className={styles.diologsItems}>
            {dialogs}
            </div>
            <div className={styles.messages}>
               <div>
                {massages}
               </div>
            </div>
            <div>
            <textarea 
                onChange={onChangeMessage}
                value ={newMessage}
                placeholder = 'here'/>
            </div>
            <div>
                <button onClick={addMessage}>add Message</button>
            </div>
        </div>
    )
};
export default Messages;

