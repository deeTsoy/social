import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Messages.module.css";
import MessageItem from "./MessageItem/MessageItem";
import { useRef } from 'react';


const Messages = (props) => {
    let dialogs = props.state.dialogData.map(item => <DialogItem name={item.name} id= {item.id}/>);
    let massages = props.state.massagesData.map(item => <MessageItem message ={item.massage} id = {item.id}/>);

    let newMessage = useRef();

    let addMessage = () => {
    props.dispatch({type:'ADD_MESSAGE'});
    };

    let onChangeMessage = () =>{
        let text = newMessage.current.value;
        props.dispatch({type:'ADD_NEW_MESSAGE_TEXT', newText: text});
    }

    return (
        <div className={styles.diologs}>
            <div className={styles.diologsItems}>
            {dialogs}
            </div>
            <div className={styles.messages}>
               {massages}
            </div>
            <div>
            <textarea 
                ref={newMessage}
                onChange={onChangeMessage}
                value ={props.state.newMessageData}/>
            </div>
            <div>
                <button onClick={addMessage}>add Message</button>
            </div>
        </div>
    )
};
export default Messages;

