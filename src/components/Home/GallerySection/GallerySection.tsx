import React, { useRef } from "react";
import styles from "./GallerySection.module.scss";
import img1 from "./../../../assets/img/gallery-4.jpeg";
import img2 from "./../../../assets/img/gallery-1.jpeg";
import img3 from "./../../../assets/img/gallery-2.jpeg";
import img4 from "./../../../assets/img/gallery-3.jpeg";
import img5 from "./../../../assets/img/gallery-5.jpeg";
import img6 from "./../../../assets/img/gallery-6.jpeg";
import img7 from "./../../../assets/img/gallery-8.jpeg";
import img8 from "./../../../assets/img/gallery-9.jpeg";
import { ReactComponent as TwitterLogo } from "./../../../assets/icon/twitter-logo-button.svg";
import { ReactComponent as LinkinLogo } from "./../../../assets/icon/linkedin-logo-button.svg";
import { ReactComponent as InstaLogo } from "./../../../assets/icon/instagram.svg";
import { ReactComponent as YoutubeLogo } from "./../../../assets/icon/youtube.svg";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const GallerySection = () => {
  // const {scrollYProgress} = useScroll()

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Page scroll: ", latest)
  // })
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0, },
  };
  return (
    <section className={styles.gallerySection}>
      <motion.div
        variants={variants}
        transition={{
          duration: 2,
        }}
        whileInView="visible"
        initial="hidden"
        className={styles.galleryContainer}
      >
        <motion.div className={styles.galleryImgContain}>
          <div className={styles.galleryImg}>
            <img src={img1} alt=""></img>
          </div>

          <div className={styles.galleryImg}>
            <img src={img4} alt=""></img>
          </div>
          <div className={styles.galleryImg}>
            <img src={img8} alt=""></img>
          </div>
          <div className={styles.galleryImg}>
            <img src={img5} alt=""></img>
          </div>
          <div className={styles.galleryImg}>
            <img src={img2} alt=""></img>
          </div>
        </motion.div>
        <motion.div className={styles.galleryImgContain}>
          <div className={styles.galleryImg}>
            <img src={img2} alt=""></img>
          </div>
          <div className={styles.galleryImg}>
            <img src={img2} alt=""></img>
          </div>
          <div className={styles.galleryImg}>
            <img src={img3} alt=""></img>
          </div>
          <div className={styles.galleryImg}>
            <img src={img6} alt=""></img>
          </div>
          <div className={styles.galleryImg}>
            <img src={img7} alt=""></img>
          </div>
        </motion.div>
        <div className={styles.galleryContent}>
          <a className={styles.galleryLink} href="?">
            <TwitterLogo className={styles.galleryLogo} />
            <div className={styles.galleryText}>@fitnesso</div>
          </a>
          <a className={styles.galleryLink} href="?">
            <LinkinLogo className={styles.galleryLogo} />
            <div className={styles.galleryText}>@fitnesso</div>
          </a>
          <a className={styles.galleryLink} href="?">
            <InstaLogo className={styles.galleryLogo} />
            <div className={styles.galleryText}>@fitnesso</div>
          </a>
          <a className={styles.galleryLink} href="?">
            <YoutubeLogo className={styles.galleryLogo} />
            <div className={styles.galleryText}>@fitnesso</div>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default GallerySection;
