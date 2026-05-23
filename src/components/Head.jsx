import React from "react";
import { Link } from "react-router-dom";
import styles from './Head.module.css';
import myImage from '../assets/Images/logo.png';
const Head = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                
                <Link to="/"><img src={myImage} className={styles.logo} /></Link>
                
                <nav className={styles.nav}>
                  <ul className={styles.navList}> 
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/about">О проекте</Link></li>
                    <li><Link to="/contacts">Контакты</Link></li>
                  </ul>   
                </nav>
                
                <div className={styles.lang}>
                    <button className={styles.langButton}>RU</button>
                    </div>
            </div>
        </header>
    )
}
export default Head;