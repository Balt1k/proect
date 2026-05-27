import { useLocation } from 'react-router-dom';
import styles from './Article.module.css';
import NewsPage from '../../../pages/NewsPage';
import AboutPage from '../../../pages/AboutPage';
import ContactsPage from '../../../pages/ContactsPage';
import NotFoundPage from '../../../pages/NotFoundPage';
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
    title: 'Низкий шкаф-буфет в авторском стиле',
    description: 'Корпус изготовлен из массива дерева и окрашен в насыщенный сине-бирюзовый цвет с полупрозрачным эффектом. Фасады выполнены со стеклянными вставками и декоративной металлической ковкой. Благодаря невысокой посадке шкаф хорошо подходит как для гостиной, так и для зоны ТВ или столовой.',
    images: [Car1, Car2, Car3],
  },
  {
    title: 'Современная кухня',
    description: 'Современная кухня, выполненная в глубоких синих оттенках с акцентом на фактуру и благородные материалы. Матовые фасады в классической рамочной фрезеровке сочетаются с каменной столешницей, создавая атмосферу сдержанной элегантности. Линейная композиция и встроенная техника позволили сохранить чистую геометрию пространства и функциональность. Теплая подсветка рабочей зоны подчеркивает глубину цвета и текстуру материалов, а латунная фурнитура добавляет интерьеру изысканный характер.',
    images: [Car4, Car5, Car6],
  },
  {
    title: 'Рабочая зона и зоны хранения в детской',
    description: 'Функциональная детская комната, выполненная в светлой минималистичной гамме с акцентом на удобство и эргономику. Центральным элементом стала встроенная мебельная композиция вокруг окна, объединяющая рабочую зону, системы хранения и шкафы для одежды. Белые матовые фасады визуально расширяют пространство и создают ощущение легкости, а продуманная организация позволяет сохранить порядок и комфорт для ребенка.',
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
            <h2 className={styles.MainText}>
              Наша мебель - это настоящее произведение искусства
            </h2>
            <p className={styles.MainText2}>Мы изготавливаем и устанавливаем мебель созданную по вашим идеям. Цена будет зависеть от 
              выбранного вами материала и сложности работы. Свяжитесь снами в разделе "Обратная связь"
              для получения подробностей. Так же на этой странице вы можете ознакомиться с нашими прошлыми проектами
            </p>
            <h3 className={styles.title}>Реализованные проекты</h3>
            <div className={styles.grid}>
              {blocks.map((block, index) => (
                <div className={styles.gridRow} key={index}>
                  <div className={styles.gridImage}>
                    <Carousel images={block.images} autoPlayInterval={7000} />
                  </div>
                  <div className={styles.gridText}>
                    <h4 className={styles.blockTitle}>{block.title}</h4>
                    <p className={styles.blockDescription}>{block.description}</p>
                  </div>
                </div>
              ))}
              <h1 className={styles.lastText}>Дальше - больше</h1>
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