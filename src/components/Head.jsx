import React from "react";
import styles from './Head.module.css';

const Head = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.logo}>будущий логотип</h1>
                <nav className={styles.nav}>
                  <ul className={styles.navList}> 
                    <li><a href="/news">Главная</a></li>
                    <li><a href="/about">О проекте</a></li>
                    <li><a href="/contacts">Контакты</a></li>
                  </ul>   
                </nav>
            </div>
        </header>
    )
}
export default Head;