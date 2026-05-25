import React from "react";
import { Link } from "react-router-dom";
import styles from './Head.module.css';
import myImage from '../assets/Images/logo.png';

const Head = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div></div>
                <Link to="/"><img src={myImage} className={styles.logo} alt="Logo" /></Link>
                <div className={styles.lang}>
                    <button className={styles.langButton}>RU</button>
                </div>
            </div>
        </header>
    );
};

export default Head;