import React from 'react';
import Styles from '../../styles/ContactsPage.module.css';
import myImage from '../../assets/Images/i5.png';

const ContactsPage = () => {
  return (
    <>
    <h2>Contact us</h2>
    <div className={Styles.AuthorContainer}>
      <div className={Styles.mainRow}>
        <div className={Styles.contactSection}>
          <p>You can contact us by phone (we answer calls and SMS, we are also on Telegram, WhatsApp and MAX)</p>
          <div className={Styles.ContactPhone}>
            <p>+7 (999) 999-99-99</p>
          </div>
          <p>Or leave a message by email</p>
          <div className={Styles.ContactMail}>
            <p>fromclient@example.com</p>
          </div>
        </div>

        <div className={Styles.photoSection}>
          <img
            src={myImage}
            alt="contact"
            className={Styles.contactPhoto}
          />
        </div>
      </div>

      <h2 className={Styles.authorsTitle}>The website was worked on by:</h2>
      <div className={Styles.GridContainer}>
        <div className={Styles.cell}>Andronov A.I.</div>
        <div className={Styles.cell}>Programmer</div>
        <div className={Styles.cell}>androno@sfedu.ru</div>
        <div className={Styles.cell}>Kravtsova D.A.</div>
        <div className={Styles.cell}>Tester</div>
        <div className={Styles.cell}>dakravtsova@sfedu.ru</div>
        <div className={Styles.cell}>Berezyuk I.A.</div>
        <div className={Styles.cell}>Administrator</div>
        <div className={Styles.cell}>ibereziuk@sfedu.ru</div>
        <div className={Styles.cell}>Vorobyov A.A.</div>
        <div className={Styles.cell}>Designer</div>
        <div className={Styles.cell}>artevo@sfedu.ru</div>
      </div>
    </div>
    </>
  );
};

export default ContactsPage;