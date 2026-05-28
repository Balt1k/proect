import React from "react";
import styles from "../Section.module.css";
import myImage from "../../../../assets/Images/i2.png";

const Section = () => {
  return (
    <section className={styles.section}>
      <div className={styles.imageContainer}>
        <img src={myImage} alt="furniture sketch" className={styles.image} />
      </div>
      <p className={styles.text}></p>
    </section>
  );
};

export default Section;