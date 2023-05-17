import React from 'react'
import sandraImg from "./../../../assets/img/Rectangle-439.png"
import Button from '../../UI/Button/Button'
import styles from "./HeroSection.module.scss"
const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
            <div className={styles.heroImgContainer}>
                <h2 className={styles.heroSubTitle}>Sandra Lyons</h2>
                <img src={sandraImg} alt="trainer" className={styles.heroImg}/>
            </div>
            <div className={styles.heroContent}>
                <div className={styles.heroLabel}>HI I'M SANDRA LYONS</div>
                <h1 className={styles.heroHeading}>Your go to online fitness trainer and nutritionist.</h1>
                <p className={styles.heroText}>After getting a bachelors in nutrition and fitness training I started working with people all around and changing their lives forever.</p>
                <Button>Online coaching</Button>
            </div>
        </div>
    </section>
  )
}

export default HeroSection