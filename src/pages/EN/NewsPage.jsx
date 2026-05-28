import React from 'react';
import Styles from '../../styles/NewsPage.module.css';
import myImage from "../../assets/Images/g.gif";

const NewsPage = () => {
 return (
  <div className={Styles.page}>
      <h2>News</h2>
      <p className={Styles.mainText}>This is the news page. It's empty at the moment :(</p>
      <p className={Styles.secondText}>However, we are actively preparing new stories with our happy clients for you.</p>
      <div className={Styles.imageContainer}>
                <img src={myImage} alt='animation' className={Styles.image} />
              </div>
    </div>
 );
};
export default NewsPage;