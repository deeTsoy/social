import React from "react";
import {NavLink} from "react-router-dom"

import styles from "./../Messages.module.css";

const DialogItem = ({id, name}) => {
    let path = "/messages/" + id;

    return <div className={styles.diolog + " " + styles.active}>
        <NavLink to={path} >{name}</NavLink>
    </div>
}
 

export default DialogItem;

