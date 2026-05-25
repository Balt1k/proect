import React from 'react';
import Styles from '../styles/ContactsPage.module.css';
import myImage from '../assets/Images/i5.png';

const ContactsPage = () => {
  return (
    <div className={Styles.AuthorContainer}>
      <div className={Styles.mainRow}>
        <div className={Styles.contactSection}>
          <p>Вы можете связаться с нами по телефону</p>
          <div className={Styles.ContactPhone}>
            <p>+7 (999) 999-99-99</p>
          </div>
          <p>Или оставить сообщение на почте</p>
          <div className={Styles.ContactMail}>
            <p>fromclient@example.com</p>
          </div>
        </div>

        <div className={Styles.photoSection}>
          <img
            src={myImage}
            alt="картинка"
            className={Styles.contactPhoto}
          />
        </div>
      </div>

      <h2 className={Styles.authorsTitle}>Над сайтом работали:</h2>
      <div className={Styles.GridContainer}>
        <div className={Styles.cell}>Андронов А.И.</div>
        <div className={Styles.cell}>Программист</div>
        <div className={Styles.cell}>Написание сайта и логики</div>
        <div className={Styles.cell}>Кравцова Д.А.</div>
        <div className={Styles.cell}>Тестировщик</div>
        <div className={Styles.cell}>Проведение тестов</div>
        <div className={Styles.cell}>Березюк И.А.</div>
        <div className={Styles.cell}>роль</div>
        <div className={Styles.cell}>Создание концепции сайта</div>
        <div className={Styles.cell}>Воробьев А.А.</div>
        <div className={Styles.cell}>роль</div>
        <div className={Styles.cell}>Создание дизайна сайта</div>
      </div>
    </div>
  );
};

export default ContactsPage;