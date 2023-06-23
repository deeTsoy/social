import React, {useState} from 'react';
import styles from "./Users.module.css";

const PagesLine = ({ currentPage, onPageChanged,totalUsersCount, pageSize }) => {
    let pages = [];
    for (let i = 1; i <= 200; i++) {
      pages.push(i);
    }

    let pagesCount =  Math.ceil(totalUsersCount / pageSize );
    let portionCount = Math.ceil(pagesCount / 15);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * 15 + 1;
    let rightPortionPageNumber = portionNumber * 15;
  

    return <div className={styles.paginator}>
        { portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }

            {pages
                .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map((p) => {
                return <button 
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</button>
            })}
        { portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }
    </div>
  };
  
  export default PagesLine;