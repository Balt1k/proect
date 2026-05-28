import React from 'react';
import styles from './Footer.module.css';

const FooterRu = () => {
  const author = "Андронов А.И.";
  const group = "1";
  const companyName = "Мастерская Димдимыча";

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.author}>
          <p className={styles.authorText}>
            Разработка: {author}<br />
            Группа: {group}
          </p>
        </div>

        <div className={styles.copyright}>
          <p>© 2026 {companyName}.<br />Все права защищены.</p>
        </div>

        <div className={styles.contacts}>
          <div>номер для связи: +7 (999) 999-99-99</div>
          <div>почта: fromclient@example.com</div>
        </div>
      </div>
    </footer>
  );
};

export default FooterRu;