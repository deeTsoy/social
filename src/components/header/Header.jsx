import React from "react";
import s from'./header.module.css'
import { NavLink } from "react-router-dom";


const  Header = (props) => {
    return (
        <header className= {s.header}>
            <img src= 'https://www.adobe.com/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium'/> 
            <div className={s.loginBlock}>
            { props.isAuth
                ? <div>
                    <div className={s.Activeframe}>{ 'is active!'} </div>
                    <button className={s.button } onClick={props.logout}>Log out</button>
                  </div>
                : <div className={s.loginframe}>
                    <NavLink to={'/login'}>Login</NavLink>
                  </div>}
            </div>
        </header>
    )
};

export default Header;