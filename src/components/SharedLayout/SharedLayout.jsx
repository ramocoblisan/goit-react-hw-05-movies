import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SharedLayout.module.css';
import { Outlet } from "react-router-dom";

const NavigationBar = () => {
    return (
        <nav className={styles.menuNav}>
            <div className={styles.containerPages}>
            <NavLink to="/goit-react-hw-05-movies" className={`${styles.link} ${styles.btnLink}`}>Home</NavLink>
            <NavLink to="/movies" className={`${styles.link} ${styles.btnLink}`}>Movies</NavLink>
            </div>
            <Outlet/>
        </nav>
    );
};

export default NavigationBar;