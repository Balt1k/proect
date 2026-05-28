import React from 'react';
import myImage from '../../assets/Images/i4.png';
import Styles from '../../styles/AboutPage.module.css';

const AboutPage = () => {
    return (
        <>
      <h2>About the author</h2>
      <p className={Styles.Text}>Our workshop will help you bring your dream furniture to life. We take on the full cycle — from design development to installation. We value an individual approach, so we create furniture of any complexity exactly to your style and budget. We work only with proven materials and provide free interior design advice — we'll tell you how to make an item not just functional, but truly aesthetic. Our main goal is not just to make a cabinet or kitchen, but to help you find your dream space.
      </p>
      <div className={Styles.main}>
        <div className={Styles.imageContainer}>
          <img src={myImage} alt='logo' className={Styles.image} />
        </div>
      </div>
      <div className={Styles.TextContainer}>
        <p className={Styles.Text}>The website was prepared by students of the Southern Federal University as part of the final project for the discipline "Website building".</p>
      </div>

    </>
    );
};

export default AboutPage;