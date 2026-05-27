import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Aside.module.css';

const Aside = () => {
    return (
        <aside className={styles.aside}>
            <nav className={styles.Nav}>
                <p className={styles.head}>Панель навигации</p>
                <ul>
                    <li><Link to="/">Продукты и услуги (главная)</Link></li>
                    <li><Link to="/about">Об авторе</Link></li>
                    <li><Link to="/contacts">Обратная связь</Link></li>
                    <li><Link to="/news">новости</Link></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Aside;