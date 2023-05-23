import React from "react";
import styles from "./HeroSection.module.scss";
import img from "./../../../assets/img/gallery-5.jpeg";


const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <header className={styles.heroHeader}>
          <p className={styles.heroLabel}>30 days</p>
          <h2 className={styles.heroHeading}>Shedded Meal Plan</h2>
          <p className={styles.heroText}>
          Ideal for beginner fitness people with busy schedules. In this 3 day split you will learn to make the most out of your time in the gym with an efficient total-body workouts. All workouts are designed to be flexible for working out at home.
          </p>
          <form className={styles.heroForm}>
            <input className={styles.heroInput} type="number" defaultValue="1" step="1" min="1" />
            <button type="submit" className={styles.heroBtn}>Add to card</button>
          </form>
        </header>
        <div className={styles.heroImg}>
          <img src={img} alt=""></img>{" "}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
