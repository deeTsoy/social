import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Messages.module.css";
import MessageItem from "./MessageItem/MessageItem";


const Messages = (props) => {
    let dialogs = props.dialogData.map(item => <DialogItem name={item.name} id= {item.id}/>);
    let massages = props.massagesData.map(item => <MessageItem message ={item.massage}/>);

    return (
        <div className={styles.diologs}>
            <div className={styles.diologsItems}>
            {dialogs}
            </div>
            <div className={styles.messages}>
               {massages}
            </div>
        </div>
    )
};
export default Messages;

