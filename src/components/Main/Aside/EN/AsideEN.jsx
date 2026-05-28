import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Aside.module.css';

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <nav className={styles.Nav}>
        <p className={styles.head}>Navigation panel</p>
        <ul>
          <li><Link to="/">Products & services (home)</Link></li>
          <li><Link to="/about">About author</Link></li>
          <li><Link to="/contacts">Contact us</Link></li>
          <li><Link to="/news">News</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;