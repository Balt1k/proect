import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Article.module.css';
import NewsPage from '../../../pages/NewsPage';
import AboutPage from '../../../pages/AboutPage';
import ContactsPage from '../../../pages/ContactsPage';
import NotFoundPage from '../../../pages/NotFoundPage';

const Article = () => {
const location = useLocation();

 const getContent = () => {
    switch(location.pathname) {
        case '/news':
            return NewsPage();
            case '/about':
                return AboutPage();
                case '/contacts':
                    return ContactsPage();
                    case '/':
                        return {
                        title: "главная",
                        text: "какой-то текст"
                        };
                        default:
                            return NotFoundPage();
    }
 };

 const content = getContent();

 return (
 <article className={styles.article}>
    <h2 className={styles.title}>{content.title}</h2>
    <div className={styles.content}>
        {content.text.split('/n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
        ))}
 </div>
 </article>
 );
};
export default Article;