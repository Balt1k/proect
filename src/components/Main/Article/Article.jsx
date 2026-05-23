import { useLocation } from 'react-router-dom';
import styles from './Article.module.css';
import NewsPage from '../../../pages/NewsPage';
import AboutPage from '../../../pages/AboutPage';
import ContactsPage from '../../../pages/ContactsPage';
import NotFoundPage from '../../../pages/NotFoundPage';
import myImage from '../../../assets/Images/i3.png';

const Article = () => {
  const location = useLocation();

  const getContent = () => {
    switch (location.pathname) {
      case '/news':
        return <NewsPage />;
      case '/about':
        return <AboutPage />;
      case '/contacts':
        return <ContactsPage />;
      case '/':
        return (
          <>
            <h2 className={styles.title}>Главная</h2>
            <div className={styles.grid}>
              <div className={styles.gridRow}>
                <div className={styles.gridImage}>
                  <img src={myImage} alt="описание" />
                </div>
                <div className={styles.gridText}>
                  <p>Текст первого блока</p>
                </div>
              </div>
              <div className={styles.gridRow}>
                <div className={styles.gridImage}>
                  <img src={myImage} alt="описание" />
                </div>
                <div className={styles.gridText}>
                  <p>Текст второго блока (картинка справа)</p>
                </div>
              </div>
              <div className={styles.gridRow}>
                <div className={styles.gridImage}>
                  <img src={myImage} alt="описание" />
                </div>
                <div className={styles.gridText}>
                  <p>Третий блок – снова картинка слева</p>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return <NotFoundPage />;
    }
  };

  return <article className={styles.article}>{getContent()}</article>;
};

export default Article;