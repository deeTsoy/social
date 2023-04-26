import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Messages.module.css";
import MessageItem from "./MessageItem/MessageItem";
import { Navigate } from "react-router-dom";


const Messages = (props) => {
  

    
    let dialogs = props.state.dialogData.map(item => <DialogItem name={item.name} key={item.id} id= {item.id}/>);
    let messages = props.state.messagesData.map(item => <MessageItem message ={item.message} key={item.id} id = {item.id}/>);
    let newMessage = props.state.newMessageData;

    let onAddMessage = () => {
        props.addMessage();
    };

    let onChangeMessage = (e) =>{
        let text = e.target.value;
        props.updateNewMessageText(text);
    }
    
    if(!props.isAuth ) return <Navigate to='/login' />

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
                        <button onClick={onAddMessage}>Send</button>
                    </div> 
                </div> 
            </div> 
        </div> 
    );
};
export default Messages;

