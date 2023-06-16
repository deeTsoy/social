import React from 'react';
import styles from "./Users.module.css";

const PagesLine = ({ currentPage, onPageChanged }) => {
    let pages = [];
    for (let i = 1; i <= 25; i++) {
      pages.push(i);
    }
  
    return (
      <div className={styles.middleLine}>
        {pages.map(p => (
          <button
            className={currentPage === p ? styles.selectedPage : ''}
            onClick={() => onPageChanged(p)}
            key={p}
          >
            {p}
          </button>
        ))}
      </div>
    );
  };
  
  export default PagesLine;