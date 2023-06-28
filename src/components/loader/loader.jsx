import React from "react";
import loader from "./Loader.svg"
import styles from "./Loader.module.css"

let Loader = () => {
    return <div  className={styles.center}>
        <img src={loader}/> 
    </div> 
};
export default Loader;