import React from 'react';
import styles from "./Users.module.css";



let PagesLine = ({ currentPage, onPageChanged}) => {

    
    let pages = [];
    for (let i = 1; i <= 35; i++) {
        pages.push(i);

    }

    return (
        <div className={styles.middleLine}>
            {pages.map(p => {
                return (
                    <button className={currentPage === p && styles.selectedPage}
                    onClick={(e) => {
                        onPageChanged(p);
                    }}>{p}</button>
                );
            })}
        </div>
    )
}

export default PagesLine;