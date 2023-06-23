import React from "react";
import styles from "./../Messages.module.css";

 
const MessageItem = ({id,message}) => {
    
    return (
     <div className={styles.dialog} id ={id}>{message}</div>
    );
}


export default MessageItem;

