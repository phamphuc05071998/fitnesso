import React from "react";
import sandraImg from "./../../../assets/img/Rectangle-439.png";
import Button from "../../UI/Button/Button";
import styles from "./HeroSection.module.scss";
import { motion, Variants } from "framer-motion";
const HeroSection = () => {
  const variants: Variants = {
    initial: {
      scale: 1.2,
      rotate: 12,
      opacity: 0
    },
    inView: {
      scale: 1,
      rotate: 0,
      opacity: 1
    }
  }
  const slideIn: Variants = {
    initial: {
      y: 100,
      opacity: 0
    },
    inView : {
      y: 0,
      opacity: 1
    }
  }
  return (
    <section className={styles.heroSection}>
      <motion.div  variants={slideIn} initial="initial" animate="inView"  transition={{duration: 0.5,  staggerChildren: 100}} className={styles.heroContainer}>
        <div className={styles.heroImgContainer}>
          <motion.h2 variants={variants} animate="inView" initial="initial" className={styles.heroSubTitle}>Sandra Lyons</motion.h2>
          <motion.img variants={variants} animate="inView" initial="initial" src={sandraImg} alt="trainer" className={styles.heroImg} />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>HI I'M SANDRA LYONS</div>
          <h1 className={styles.heroHeading}>
            Your go to online fitness trainer and nutritionist.
          </h1>
          <p className={styles.heroText}>
            After getting a bachelors in nutrition and fitness training I
            started working with people all around and changing their lives
            forever.
          </p>
          <Button>Online coaching</Button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
