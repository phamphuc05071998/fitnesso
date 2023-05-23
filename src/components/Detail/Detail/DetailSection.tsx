import React, { useState } from "react";

import styles from "./DetailSection.module.scss";
import Modal from "../../UI/Modal/Modal";
import { ReactComponent as PlayBtn } from "./../../../assets/icon/Play-Button.svg";
import img from "./../../../assets/img/gallery-3.jpeg"
const DetailSection = () => {
  const [isOenModal, setIsoOpenModal] = useState(false);
  return (
    <section className={styles.detailSection}>
      <div className={styles.detailContainer}>
        <div className={styles.detailContent}>
          <h5 className={styles.detailHeading}>Exercises</h5>
          <ul className={styles.detailList}>
            <li className={styles.detailItem}>Stretching</li>
            <li className={styles.detailItem}>Jumping Jacks 30x3</li>
            <li className={styles.detailItem}>Crunch 30x3</li>
            <li className={styles.detailItem}>Burpees 30x3</li>
            <li className={styles.detailItem}>Knee Squat 20x3</li>
            <li className={styles.detailItem}>Clap Push Up 10x3</li>
          </ul>
        </div>
        <div
          className={styles.detailVideo}
          onClick={() => setIsoOpenModal(true)}
        >
          <img className={styles.detailVideoImg} alt="" src={img}></img>
          <div className={styles.detailVideoPlayBtn}>
            <PlayBtn className={styles.detailVideoPlayIcon} />
          </div>
        </div>
      </div>
      {isOenModal && (
        <Modal onCloseModal={() => setIsoOpenModal(false)}>
          
            <iframe
              height="730px"
              width="1120px"
                className={styles.videoIframe}
              src="https://www.youtube.com/embed/iCQ2gC4DqJw?controls=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
         
        </Modal>
      )}
     
    </section>
  );
};

export default DetailSection;
