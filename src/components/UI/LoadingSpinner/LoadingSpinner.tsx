import React from "react";
import styles from "./LoadingSpinner.module.scss";
const LoadingSpinner = () => {
  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default LoadingSpinner;
