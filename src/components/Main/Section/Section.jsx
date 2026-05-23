import React from "react";
import styles from "./Section.module.css";
import myImage from "../../../assets/Images/i2.png";

const Section = () => {
    return (
        <section className={styles.section}>
            <h3 className={styles.title}>Раздел (Section)</h3>
            <div className={styles.imagecontainer}>
                <img
                src={myImage}
                alt="картинка"
                className={styles.image}
                />
            </div>
            <p className={styles.text}>
                {/*текст*/}
            </p>
        </section>
    );
};
export default Section;