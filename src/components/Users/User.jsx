import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "./userPhoto.png";
import { NavLink } from 'react-router-dom';


let User = ({u, followingInProgress, unfollow, follow}) => {
    return (
        <div>
        <span>
            <NavLink to={`/profile/${u.id}`}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto}
                        className={styles.userPhoto}/>
            </NavLink>
            <div>
                {u.followed
                    ? <button disabled={followingInProgress.some(id => id === u.id)} 
                    onClick={() => {unfollow(u.id)}}>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === u.id)} 
                    onClick={() => { follow(u.id)}}>Follow</button>}
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
    </div>
    )
}

export default User;