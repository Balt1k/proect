import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import FooterRu from './FooterRu';
import FooterEn from './EN/FooterEN';

const Footer = () => {
  const { lang } = useLanguage();
  return lang === 'ru' ? <FooterRu /> : <FooterEn />;
};

export default Footer;