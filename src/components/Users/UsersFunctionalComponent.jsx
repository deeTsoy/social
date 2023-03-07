import React from "react";
import styles from "./Users.module.css"
import axios from "axios";


const Users = (props) => {
    let getUsers =() => {
        if(props.users.length === 0){
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(res => {props.setUsers(res.data.items);}) 
        }
    }

    console.log(props)

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={"https://cms.bitent.com/assets/games/thumbs/mega_anime_avatar_creator_630e38ccc00ad.png"} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
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
                        {/* <div>{u.location.country}</div> */}
                        {/* <div>{u.location.city}</div> */}
                    </span>
                </span>
            </div>)
        }
    </div>
};
export default Users;