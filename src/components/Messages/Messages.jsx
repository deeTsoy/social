import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Messages.module.css";
import MessageItem from "./MessageItem/MessageItem";
import { useRef } from 'react';


const Messages = (props) => {
    let dialogs = props.state.dialogData.map(item => <DialogItem name={item.name} id= {item.id}/>);
    let massages = props.state.massagesData.map(item => <MessageItem message ={item.massage}/>);

    let newMessage = useRef();

    const addPost = () => {
    let text = newMessage.current.value;
    alert(text);
    };

    return (
        <div className={styles.diologs}>
            <div className={styles.diologsItems}>
            {dialogs}
            </div>
            <div className={styles.messages}>
               {massages}
            </div>
            <div>
            <textarea ref={newMessage}> </textarea>
            </div>
            <div>
                <button onClick={addPost}>addMessage</button>
            </div>
        </div>
    )
};
export default Messages;

