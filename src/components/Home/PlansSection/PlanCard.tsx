import React from "react";
import styles from "./PlanCard.module.scss";

import { Link } from "react-router-dom";
interface props {
  id: string,
  img: string;
  title: string;
  duration: string;
  price: number;
  buttonText: string;
  onClick?: any
}
const PlanCard: React.FC<props> = ({
  id,
  img,
  title,
  duration,
  price,
  buttonText,
  onClick
}) => {
  const to = `${price === 0 ? `/free-workouts/${id}` : `/shop/${id}`}`
  return (

    <Link to={to} className={styles.card}>
      <div className={styles.cardImg}>
        <img src={img} alt="trainer"></img>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardDuration}>
          <span className={styles.cardTime}>{duration}</span>
          <span className={styles.cardSubText}>{`${price ===0 ? "Free" :  `$ ${price} usd` }`}</span>
        </div>
        <h3 className={styles.cardHeading}>
          {title}
        </h3>
        <button onClick={onClick} className={styles.cardBtn}>
          {buttonText}
        </button>
      </div>
    </Link>
  );
};

export default PlanCard;
