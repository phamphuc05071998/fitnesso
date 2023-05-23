import React, { useState } from "react";
import styles from "./VideoSection.module.scss";
import HeadingSecondary from "../../UI/Heading/HeadingSecondary";
import img from "./../../../assets/img/video-p-1600.jpeg";
import { ReactComponent as PlayBtn } from "./../../../assets/icon/Play-Button.svg";
import Modal from "../../UI/Modal/Modal";

const VideoSection = () => {
  const [isOenModal, setIsoOpenModal] = useState(false);
  return (
    <section className={styles.videoSection}>
      <div className={styles.videoContainer}>
        <div className={styles.videoHeading}>
          <HeadingSecondary center primaryColor>
            How does online fitness coaching work ?
          </HeadingSecondary>
          <p className={styles.videoText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla.
          </p>
        </div>
        <div
          className={styles.videoContain}
          onClick={() => setIsoOpenModal(true)}
        >
          <img className={styles.videoImg} alt="" src={img}></img>
          <div className={styles.videoPlayBtn}>
            <PlayBtn className={styles.videoPlayIcon} />
          </div>
        </div>
      </div>
      {isOenModal && (
        <Modal onCloseModal={() => setIsoOpenModal(false)}>
          
            <iframe
              height="730px"
              width="1120px"
                className={styles.detailVideoIframe}
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

export default VideoSection;
