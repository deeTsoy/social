import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Messages.module.css";
import MessageItem from "./MessageItem/MessageItem";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../Redux/messageReducer';


const Messages = (props) => {
   
    
    let state = props.state;
    let dialogs = state.dialogData.map(item => <DialogItem name={item.name} id= {item.id}/>);
    let messages = state.messagesData.map(item => <MessageItem message ={item.message} id = {item.id}/>);
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
                { dialogs } 
            </div> 
            <div className={styles.messages}> 
                <div>{ messages }</div> 
                <div> 
                    <div>
                        <textarea 
                            value={newMessage} 
                            onChange={onChangeMessage} 
                            placeholder='Enter your message'
                        />
                    </div> 
                    <div>
                        <button onClick={addMessage}>Send</button>
                    </div> 
                </div> 
            </div> 
        </div> 
    );
};
export default Messages;

