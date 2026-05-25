import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Aside.module.css';

const Aside = () => {
    return (
        <aside className={styles.aside}>
            <nav className={styles.Nav}>
                <p>Панель навигации</p>
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/about">О проекте</Link></li>
                    <li><Link to="/contacts">Контакты</Link></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Aside;