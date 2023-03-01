import React from "react";
import styles from "./Users.module.css"

const Users = (props) => {
    if(props.users.length === 0){
        props.setUsers([
            {id: 1, photoUrl:'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg', followed:false, fullName: 'Dmitriy', status: "holla!", location: {city:"Los Angeles", country: "USA"}},
            {id: 2, photoUrl:'https://cms.bitent.com/assets/games/thumbs/mega_anime_avatar_creator_630e38ccc00ad.png', followed:true, fullName: 'Oleg', status: "Living my perfect life!", location: {city:"Los Angeles", country: "USA"}},
            {id: 3, photoUrl:'https://www.pngkey.com/png/detail/572-5723307_kaneki-ken-kanekiken-kaneki-anime.png',followed:false, fullName: 'Petr', status: "Just you and me", location: {city:"Los Angeles", country: "USA"}},
            {id: 4, photoUrl:'https://img.faceyourmanga.com/mangatars/2/78/2078772/large_1882160.png',followed:true, fullName: 'Domo', status: "Became insane!", location: {city:"Los Angeles", country: "USA"}},
            {id: 5, photoUrl:'https://pub-static.fotor.com/assets/projects/pages/e174890b7d614925a4f275b67873ffb7/300w/fotor-01b0203e5e414695890876d329e551d3.jpg',followed:false, fullName: 'Hon See', status: "Bam bam MF", location: {city:"Los Angeles", country: "USA"}},
            {id: 6, photoUrl:'https://pub-static.fotor.com/assets/projects/pages/1bd9e5e88594483ba733ca32245f007f/300w/fotor-39237a95a12545389fcfaf11a1e97c69.jpg',followed:false, fullName: 'Dapindar', status: "deus ex machina", location: {city:"Los Angeles", country: "USA"}},
            ]);
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};
export default Users;