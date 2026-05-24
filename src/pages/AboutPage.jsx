import React from 'react';
import myImage from '../assets/Images/i4.png';
import Styles from '../styles/AboutPage.module.css';

const AboutPage = () => {
    return (
        <>
      <h2>О проекте</h2>
      <div className={Styles.main}>
        <div className={Styles.imageContainer}>
          <img src={myImage} alt='логотип' className={Styles.image} />
        </div>
      </div>
      <div className={Styles.TextContainer}>
        <p className={Styles.Text}>Сайт подготовлен студентами Южного Федерального Университета
           в рамках итогового проекта по дисциплине "сайтостроение".</p>
      </div>

    </>
    );
};

export default AboutPage;