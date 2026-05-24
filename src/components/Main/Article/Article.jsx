import { useLocation } from 'react-router-dom';
import styles from './Article.module.css';
import NewsPage from '../../../pages/NewsPage';
import AboutPage from '../../../pages/AboutPage';
import ContactsPage from '../../../pages/ContactsPage';
import NotFoundPage from '../../../pages/NotFoundPage';
import myImage from '../../../assets/Images/i3.png';
import Carousel from '../../Carousel/Carousel';
import Car1 from '../../../assets/Images/car1.png';
import Car2 from '../../../assets/Images/car2.png';
import Car3 from '../../../assets/Images/car3.png';
import Car4 from '../../../assets/Images/car4.png';
import Car5 from '../../../assets/Images/car5.png';
import Car6 from '../../../assets/Images/car6.png';
import Car7 from '../../../assets/Images/car7.png';
import Car8 from '../../../assets/Images/car8.png';
import Car9 from '../../../assets/Images/car9.png';

const blocks = [
  {
    text: 'Текст первого блока',
    images: [Car1, Car2, Car3],
  },
  {
    text: 'Текст второго блока (картинка справа)',
    images: [Car4, Car5, Car6],
  },
  {
    text: 'Третий блок – снова картинка слева',
    images: [Car9, Car7, Car8],
  },
];

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
              {blocks.map((block, index) => (
                <div className={styles.gridRow} key={index}>
                  <div className={styles.gridImage}>
                    <Carousel images={block.images} autoPlayInterval={4000} />
                  </div>
                  <div className={styles.gridText}>
                    <p>{block.text}</p>
                  </div>
                </div>
              ))}
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