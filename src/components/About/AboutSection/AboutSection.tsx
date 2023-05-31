import React from "react";
import styles from "./AboutSection.module.scss";
import HeadingSecondary from "../../UI/Heading/HeadingSecondary";
import Button from "../../UI/Button/Button";
import img from "./../../../assets/img/gallery-5.jpeg";
import aboutImg from "./../../../assets/img/about-img.jpeg";

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <HeadingSecondary primaryColor>I am Aaron </HeadingSecondary>
          <p className={styles.aboutText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className={styles.aboutList}>
            <li className={styles.aboutItems}>
              <h5>01</h5> <div>Over 10 years of experience</div>
            </li>
            <li className={styles.aboutItems}>
              <h5>02</h5> <div>Coached 2,000+ people</div>
            </li>
            <li className={styles.aboutItems}>
              <h5>03</h5> <div>Bachelors in nutrition</div>
            </li>
          </ul>
          <Button>Schedule a call</Button>
        </div>
        <div className={styles.aboutImgContent}>
          <div className={styles.aboutImgContentBg}>&nbsp;</div>
          <div className={styles.aboutImg}>
            <img src={img} alt=""></img>
          </div>
        </div>
        <div className={styles.aboutImgContent}>
          <div className={styles.aboutImgContentBg1}>&nbsp;</div>
          <div className={styles.aboutImg}>
            <img src={aboutImg} alt=""></img>
          </div>
        </div>
        <div className={styles.aboutContent}>
          <HeadingSecondary primaryColor>I am Aaron </HeadingSecondary>
          <p className={styles.aboutText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className={styles.aboutList}>
            <li className={styles.aboutItems}>
              <h5>01</h5> <div>Over 10 years of experience</div>
            </li>
            <li className={styles.aboutItems}>
              <h5>02</h5> <div>Coached 2,000+ people</div>
            </li>
            <li className={styles.aboutItems}>
              <h5>03</h5> <div>Bachelors in nutrition</div>
            </li>
          </ul>
          <Button>Schedule a call</Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
