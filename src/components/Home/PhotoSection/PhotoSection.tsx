import React from "react";
import styles from "./PhotoSection.module.scss";
import line from "./../../../assets/icon/Lines.svg";
const PhotoSection = () => {
  return (
    <section className={styles.photoSection}>
      <img className={styles.photoImg} src={line} alt="squad"></img>
      <div className={styles.photoText}>sweat. gian. do</div>
    </section>
  );
};

export default PhotoSection;
