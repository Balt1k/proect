import React from "react";
import styles from './Footer.module.css';

const Footer = () => {
// Информация об авторе
 const author = "Андронов А.И."; //  имя
 const group = "1"; // группа

 return(
    <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.content}>
                <p>@ {author} | группа: {group}
                    (первая версия)
                </p>
            </div>
        </div>
    </footer>
 )
};
export default Footer;