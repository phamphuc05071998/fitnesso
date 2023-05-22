import React from "react";
import styles from "./PlanCard.module.scss";

import { Link } from "react-router-dom";
interface props {
  id: string,
  img: string;
  title: string;
  duration: string;
  price: string;
  buttonText: string;
}
const PlanCard: React.FC<props> = ({
  id,
  img,
  title,
  duration,
  price,
  buttonText,
}) => {
  return (

    <Link to={id} className={styles.card}>
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
    </Link>
  );
};

export default PlanCard;
