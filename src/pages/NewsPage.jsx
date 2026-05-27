import React from 'react';
import Styles from '../styles/NewsPage.module.css';
import myImage from "../assets/Images/g.gif";

const NewsPage = () => {
 return (
  <div className={Styles.page}>
      <h2>Новости</h2>
      <p className={Styles.mainText}>Это страница с новостями. На данный момент здесь пусто :(</p>
      <p className={Styles.secondText}>Однако мы активно готовим для вас новые истории с нашими счастливыми клиентами.</p>
      <div className={Styles.imageContainer}>
                <img src={myImage} alt='анимация' className={Styles.image} />
              </div>
    </div>
 );
};
export default NewsPage;