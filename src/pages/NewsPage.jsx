import React from 'react';
import Styles from '../styles/NewsPage.module.css';

const NewsPage = () => {
 return (
  <div className={Styles.page}>
      <h2>Новости</h2>
      <p>Это страница с новостями. Здесь отображаются последние события и обновления проекта.</p>
    </div>
 );
};
export default NewsPage;