import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Messages.module.css";
import MessageItem from "./Message/MessageItem";


let dialogData = [
    {id : 1,
    name : "Oleg"
    },
    {id : 2,
    name : "petr"
    },
    {id : 3,
    name : "almaz"
    },
    {id : 4,
    name : "sergey"
    },
    {id : 5,
    name : "kana"
     },
    {id : 6,
    name : "korzh"
    }
];

let massagesData = [
    {id: 1, massage: "Hola!"},
    {id: 2, massage: "How are you?!"},
    {id: 3, massage: "Sugoi"},
    {id: 4, massage: "Sugoiii!!"}
];


let dialogs = dialogData.map(item => <DialogItem name={item.name} id= {item.id}/>);
let massages = massagesData.map(item => <MessageItem message ={item.massage}/>);

const Messages = (props) => {
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

