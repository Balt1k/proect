import React from 'react';
import styles from './Aside.module.css';
const Aside = () => {
 return (
 <aside className={styles.aside}>
    <h3 className={styles.title}>Боковая панель (Aside)</h3>
    <div className={styles.widget}>
        <h4>Последние новости (Заменится на часто задаваемые вопросы)</h4>
        <ul>
            <li>Новость 1</li>
            <li>Новость 2</li>
            <li>Новость 3</li>
        </ul>
    </div> 
         <div className={styles.widget}>
            <h4>Популярное (мб фулл уйдёт)</h4>
        <ul>
            <li>Статья 1</li>
            <li>Статья 2</li>
            <li>Статья 3</li>
        </ul>
 </div>
     </aside>
 );
};
export default Aside;