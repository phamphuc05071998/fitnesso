import React from "react";
import styles from "./CallSection.module.scss";
import img from "./../../../assets/img/time.png";
import Button from "../../UI/Button/Button";
const CallSection = () => {
  return (
    <section className={styles.callSection}>
      <div className={styles.callContainer}>
        <div className={styles.callContent}>
          <h2 className={styles.callHeading}>
            Who can benefit from a fully custom online fitness plan and
            nutrition?
          </h2>
          <p className={styles.callText}>
            Literally everyone. I’m currently helping people from 12 to 60+
            years old. Everyone is getting an adjusted program and a meal plan.
          </p>
          <Button>Book a call</Button>
        </div>
        <div className={styles.callCard}>
          <div className={styles.callCardImg}>
            <img  src={img} alt="trainer"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallSection;
