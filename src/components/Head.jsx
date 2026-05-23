import React from "react";
import { Link } from "react-router-dom";
import styles from './Head.module.css';

const Head = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.logo}>будущий логотип</h1>
                <nav className={styles.nav}>
                  <ul className={styles.navList}> 
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/about">О проекте</Link></li>
                    <li><Link to="/contacts">Контакты</Link></li>
                  </ul>   
                </nav>
            </div>
        </header>
    )
}
export default Head;