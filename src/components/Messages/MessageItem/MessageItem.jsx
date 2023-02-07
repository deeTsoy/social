import React from "react";
import styles from "./../Messages.module.css";

 
const MessageItem = (props) => {
    
    return (
     <div className={styles.dialog} id ={props.id}>{props.message}</div>
    );
}


export default MessageItem;

