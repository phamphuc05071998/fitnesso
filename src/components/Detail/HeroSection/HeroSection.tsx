import React from "react";
import styles from "./HeroSection.module.scss";


import trainerImg from "./../../../assets/img/alexander-hipp-iEEBWgY_6lA-unsplash.jpg"
import Button from "../../UI/Button/Button";
interface props {
  title: string,
  img: string,
  duration: string,
  description: string,
  instructor: string
}
const HeroSection:React.FC<props> = ({title, img, duration, description, instructor}) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroImg}>
          <img src={img} alt=""></img>{" "}
        </div>
        <header className={styles.heroHeader}>
            <p className={styles.heroLabel}>
                {duration}
            </p>
            <h2 className={styles.heroHeading}>{title}</h2>
            <p className={styles.heroText}>
           {description}
            </p>
            <div className={styles.trainer}>
                
                <img src={trainerImg} className={styles.trainerImg} alt=""></img>
                <p className={styles.trainerName}>{instructor}</p>
            </div>
            <Button>Start workout</Button>
        </header>
      </div>
    </section>
  );
};

export default HeroSection;
