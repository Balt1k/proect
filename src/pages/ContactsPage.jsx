import React from 'react';
import Styles from '../styles/ContactsPage.module.css';
import myImage from '../assets/Images/i5.png';

const ContactsPage = () => {
  return (
    <div className={Styles.AuthorContainer}>
      <div className={Styles.mainRow}>
        <div className={Styles.contactSection}>
          <p>Вы можете связаться с нами по телефону (отвечаем на звонки и SMS, так же мы есть в Telegram, watsapp и MAX)</p>
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
        <div className={Styles.cell}>androno@sfedu.ru</div>
        <div className={Styles.cell}>Кравцова Д.А.</div>
        <div className={Styles.cell}>Тестировщик</div>
        <div className={Styles.cell}>dakravtsova@sfedu.ru</div>
        <div className={Styles.cell}>Березюк И.А.</div>
        <div className={Styles.cell}>Администратор</div>
        <div className={Styles.cell}>ibereziuk@sfedu.ru</div>
        <div className={Styles.cell}>Воробьев А.А.</div>
        <div className={Styles.cell}>Дизайнер</div>
        <div className={Styles.cell}>artevo@sfedu.ru</div>
      </div>
    </div>
  );
};

export default ContactsPage;