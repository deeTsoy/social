import React from "react";
import s from'./header.module.css'
import { NavLink } from "react-router-dom";


const  Header = ({isAuth, logout}) => {
    return (
        <header className= {s.header}>
            <img src= 'https://www.adobe.com/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium'/> 
            <div className={s.loginBlock}>
            { isAuth
                ? <div>
                    <div className={s.Activeframe}>{ 'active!'} </div>
                    <button className={s.button } onClick={logout}>Log out</button>
                  </div>
                : <div className={s.loginframe}>
                    <NavLink to={'/login'}>Login</NavLink>
                  </div>}
            </div>
        </header>
    )
};

export default Header;