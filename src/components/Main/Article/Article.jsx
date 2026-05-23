import React from 'react';
import styles from './Article.module.css';

const Article = ({ content }) => {
 // Временное содержимое по умолчанию
 const defaultContent = {
 title: "Основная часть с картинками и текстом",
 text: "Это основной контент страницы (60% возможно в будущем 80% ширины). Здесь будет отображаться информация в зависимости от выбранного пункта меню."
 };
 const displayContent = content || defaultContent;
 return (
 <article className={styles.article}>
    <h2 className={styles.title}>{displayContent.title}</h2>
    <div className={styles.content}>
        <p>{displayContent.text}</p>
        <p>Этот компонент будет изменять своё содержимое при клике на ссылки в шапке сайта.</p>
 </div>
 </article>
 );
};
export default Article;