import React from "react";
import styles from "./HeroSection.module.scss";
import img from "./../../../assets/img/gallery-5.jpeg";

import trainerImg from "./../../../assets/img/alexander-hipp-iEEBWgY_6lA-unsplash.jpg"
import Button from "../../UI/Button/Button";
const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroImg}>
          <img src={img} alt=""></img>{" "}
        </div>
        <header className={styles.heroHeader}>
            <p className={styles.heroLabel}>
                30 minutes
            </p>
            <h2 className={styles.heroHeading}>The Perfect Outdoor Workout</h2>
            <p className={styles.heroText}>
            Muscles fit dip major tuck flex extension. Walkout heart rate barbell, leg press running bounce stretch kick weighted pectorals crosstraining.
            </p>
            <div className={styles.trainer}>
                
                <img src={trainerImg} className={styles.trainerImg} alt=""></img>
                <p className={styles.trainerName}> alexander hipp</p>
            </div>
            <Button>Start workout</Button>
        </header>
      </div>
    </section>
  );
};

export default HeroSection;
