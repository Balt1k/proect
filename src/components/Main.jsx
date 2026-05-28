import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import styles from './Main.module.css';

// Русские версии
import SectionRu from './Main/Section/Section';
import ArticleRu from './Main/Article/Article';
import AsideRu from './Main/Aside/Aside';

// Английские версии (из папок EN)
import SectionEn from './Main/Section/EN/SectionEN';
import ArticleEn from './Main/Article/EN/ArticleEN';
import AsideEn from './Main/Aside/EN/AsideEN';

const Main = () => {
  const { lang } = useLanguage();

  const Section = lang === 'ru' ? SectionRu : SectionEn;
  const Article = lang === 'ru' ? ArticleRu : ArticleEn;
  const Aside = lang === 'ru' ? AsideRu : AsideEn;

  return (
    <main className={styles.main}>
      <div className={styles.gridContainer}>
        <Section />
        <Article />
        <Aside />
      </div>
    </main>
  );
};

export default Main;