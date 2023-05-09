import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Messages.module.css";
import MessageItem from "./MessageItem/MessageItem";
import NewMessageInput from "./NewMessageInput"

const Messages = (props) => {
  

    
    let dialogs = props.state.dialogData.map(item => <DialogItem name={item.name} key={item.id} id= {item.id}/>);
    let messages = props.state.messagesData.map(item => <MessageItem message ={item.message} key={item.id} id = {item.id}/>);


    let addNewMessage = (value) => {
        props.addMessage(value.newMessageData);
    }
    
    return (    
        <div className={styles.diologs}> 
            <div className={styles.diologsItems}> 
                { dialogs } 
            </div> 
            <div className={styles.messages}> 
                <div>{ messages }</div> 
                <div> 
                    <NewMessageInput onSubmit={addNewMessage}/>
                </div> 
            </div> 
        </div> 
    );
};
export default Messages;

