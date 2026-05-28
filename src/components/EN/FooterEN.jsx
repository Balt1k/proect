import React from 'react';
import styles from '../Footer.module.css';

const FooterEn = () => {
  const author = "Andronov A.I.";
  const group = "1";
  const companyName = "Dimdymych's Workshop";

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.author}>
          <p className={styles.authorText}>
            Development: {author}<br />
            Group: {group}
          </p>
        </div>

        <div className={styles.copyright}>
          <p>© 2026 {companyName}.<br />All rights reserved.</p>
        </div>

        <div className={styles.contacts}>
          <div>Contact number: +7 (999) 999-99-99</div>
          <div>Email: fromclient@example.com</div>
        </div>
      </div>
    </footer>
  );
};

export default FooterEn;