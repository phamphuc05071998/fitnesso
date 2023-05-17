import React from "react";
import styles from  "./StaticSection.module.scss";
const StaticSection = () => {
  return (
    <section className={styles.staticSection}>
      <div className={styles.staticContainer}>
        <div  className={styles.staticItems}>
          <h4>1900+ </h4>
          <p>Happy client </p>
        </div>
        <div className={styles.staticItems}>
          <h4>5yrs</h4>
          <p>OF EXPERIENCE</p>
        </div>
        <div className={styles.staticItems}>
          <h4>156K </h4>
          <p>FOLLOWING ME </p>
        </div>
      </div>
    </section>
  );
};

export default StaticSection;
