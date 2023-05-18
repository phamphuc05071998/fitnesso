import React from "react";
import styles from "./PlanCard.module.scss";

interface props {
  img: string;
  title: string;
  duration: string;
  price: string;
  buttonText: string;
}
const PlanCard: React.FC<props> = ({
  img,
  title,
  duration,
  price,
  buttonText,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={img} alt="trainer"></img>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardDuration}>
          <span className={styles.cardTime}>{duration}</span>
          <span className={styles.cardSubText}>{price}</span>
        </div>
        <h3 className={styles.cardHeading}>
          {title}
        </h3>
        <a className={styles.cardLink} href="/plan">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default PlanCard;
