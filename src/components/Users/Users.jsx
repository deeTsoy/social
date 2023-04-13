import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "./userPhoto.png";
import { NavLink } from 'react-router-dom';
import axios from "axios";



let Users = (props) => {

    //let pagesCount = Math.ceil((props.totalUsersCount / props.pageSize));
    
    let pages = [];
    for (let i = 1; i <= 15; i++) {
        pages.push(i);

    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <NavLink to={`/profile/${u.id}`}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                className={styles.userPhoto}/>
                    </NavLink>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.samuraiAPI.deleteId(u.id)
                                .then(response => {
                                    if (response.data.resultCode === 0){
                                        props.follow(u.id)
                                    }
                                });
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.samuraiAPI.postID(u.id)
                                .then(response => {
                                    if (response.data.resultCode === 0){
                                        props.unfollow(u.id)
                                    }
                                });
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        {/* <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div> */}
                    </span>
                </span>
            </div>)
        }
        <div>
            {pages.map(p => {
                return <button className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}</button>
            })}
        </div>
    </div>
}

export default Users;