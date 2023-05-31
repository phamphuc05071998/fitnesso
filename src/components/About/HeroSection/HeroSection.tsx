import React from 'react'
import sandraImg from "./../../../assets/img/pre-workout.jpeg"
import Button from '../../UI/Button/Button'
import styles from "./HeroSection.module.scss"
const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <div className={styles.heroLabel}>HI I'M SANDRA LYONS</div>
                <h1 className={styles.heroHeading}>Who can benefit from a fully custom online fitness plan & nutrition?</h1>
                <p className={styles.heroText}>Literally everyone. I’m currently helping people from 12 to 60+ years old. Everyone is getting an adjusted program and a meal plan.</p>
                <Button>Book a call</Button>
            </div>
            <div className={styles.heroImgContainer}>
                
                <img src={sandraImg} alt="trainer" className={styles.heroImg}/>
            </div>
        </div>
    </section>
  )
}
export default HeroSection