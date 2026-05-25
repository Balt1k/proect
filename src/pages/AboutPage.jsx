import React from 'react';
import myImage from '../assets/Images/i4.png';
import Styles from '../styles/AboutPage.module.css';

const AboutPage = () => {
    return (
        <>
      <h2>О проекте</h2>
      <p className={Styles.Text}>Наша мастерская поможет вам воплотить в жизнь мебель вашей мечты. Мы берём на себя полный цикл — 
        от разработки дизайн-проекта до монтажа. Для нас важен индивидуальный
           подход, поэтому мы создаём мебель любой сложности точно под ваш стиль и бюджет.
            Мы работаем только с проверенными материалами и бесплатно помогаем
             с интерьерными решениями — подскажем, как сделать предмет не просто удобным, а по-настоящему
              эстетичным. Наша главная цель — не просто изготовить шкаф или кухню, а помочь вам обрести
               пространство мечты.
      </p>
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