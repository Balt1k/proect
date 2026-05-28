import { useLocation } from 'react-router-dom';
import styles from '../Article.module.css';
import NewsPage from '../../../../pages/EN/NewsPage';
import AboutPage from '../../../../pages/EN/AboutPage';
import ContactsPage from '../../../../pages/EN/ContactsPage';
import NotFoundPage from '../../../../pages/EN/NotFoundPage';
import Carousel from '../../../Carousel/Carousel';
import Car1 from '../../../../assets/Images/car1.png';
import Car2 from '../../../../assets/Images/car2.png';
import Car3 from '../../../../assets/Images/car3.png';
import Car4 from '../../../../assets/Images/car4.png';
import Car5 from '../../../../assets/Images/car5.png';
import Car6 from '../../../../assets/Images/car6.png';
import Car7 from '../../../../assets/Images/car7.png';
import Car8 from '../../../../assets/Images/car8.png';
import Car9 from '../../../../assets/Images/car9.png';

const blocks = [
  {
    title: 'Low sideboard buffet in author\'s style',
    description: 'The body is made of solid wood and painted in a rich blue-turquoise color with a translucent effect. The facades are made with glass inserts and decorative metal forging. Due to its low profile, the cabinet is well suited for both the living room and the TV or dining area.',
    images: [Car1, Car2, Car3],
  },
  {
    title: 'Modern kitchen',
    description: 'A modern kitchen made in deep blue shades with an emphasis on texture and noble materials. Matte facades in classic frame milling are combined with a stone countertop, creating an atmosphere of restrained elegance. The linear composition and built-in appliances made it possible to maintain the pure geometry of the space and functionality. Warm lighting of the work area emphasizes the depth of color and texture of materials, and brass fittings add an exquisite character to the interior.',
    images: [Car4, Car5, Car6],
  },
  {
    title: 'Work area and storage areas in the children\'s room',
    description: 'A functional children\'s room made in a light minimalist palette with an emphasis on comfort and ergonomics. The central element was a built-in furniture composition around the window, combining a work area, storage systems and wardrobes. White matte facades visually expand the space and create a feeling of lightness, and thoughtful organization allows you to maintain order and comfort for the child.',
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
              Our furniture is a true work of art
            </h2>
            <p className={styles.MainText2}>
              We manufacture and install furniture created according to your ideas. The price will depend on 
              the material you choose and the complexity of the work. Contact us in the "Contact us" section 
              for details. Also on this page you can see our past projects.
            </p>
            <h3 className={styles.title}>Completed projects</h3>
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
              <h1 className={styles.lastText}>More to come</h1>
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