import React from 'react'
import styles from "./FeatureCard.module.scss"

interface props {
    title: string,
    img: string,
    description: string,
}
const FeatureCard:React.FC<props> = ({title, img, description}) => {
  return (
    <div className={styles.card}>
    <div className={styles.cardImg}>
      <img src={img} alt="trainer"></img>
    </div>
    <div className={styles.cardGradient}>&nbsp;</div>
    <h4 className={styles.cardHeading}>
      {title}
    </h4>
    <p className={styles.cardText}>
      {description}
    </p>
  </div>
  )
}

export default FeatureCard