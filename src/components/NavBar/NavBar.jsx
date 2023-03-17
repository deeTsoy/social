import React from "react";
import styles from'./NavBar.module.css'
import { NavLink } from "react-router-dom";

const  NavBar = () => {

    return (
        <nav className= {styles.nav}>
                <div className = {styles.item} >
                    <NavLink to="/profile" className={styles.activeLink}> Profile</NavLink>
                </div>
                <div className = {styles.item}>
                    <NavLink to= "/users" className = {styles.activeLink}> Users</NavLink>
                </div>
                <div className = {styles.item}>
                    <NavLink to= "/messages" className = {styles.activeLink}> Messages</NavLink>
                </div>
                <div className = {styles.item}>
                    <NavLink to= "/news" className = {styles.activeLink}> News</NavLink>
                </div>
                <div className = {styles.item}>
                    <NavLink to= "/music" className = {styles.activeLink}> Music</NavLink>
                </div>
                <div className = {styles.item}>
                    <NavLink to= "/settings" className = {styles.activeLink}> Settings</NavLink>
                </div>
        </nav>
    );
};

export default NavBar;