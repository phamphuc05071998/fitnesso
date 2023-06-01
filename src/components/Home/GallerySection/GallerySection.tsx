import React from "react";
import styles from "./GallerySection.module.scss";
import img1 from "./../../../assets/img/gallery-4.jpeg";
import img2 from "./../../../assets/img/gallery-1.jpeg";
import img3 from "./../../../assets/img/gallery-2.jpeg";
import img4 from "./../../../assets/img/gallery-3.jpeg";
import img5 from "./../../../assets/img/gallery-5.jpeg";
import img6 from "./../../../assets/img/gallery-6.jpeg";
import img7 from "./../../../assets/img/gallery-8.jpeg";
import img8 from "./../../../assets/img/gallery-9.jpeg";
import img9 from "./../../../assets/img/back-large.jpeg";
import img10 from "./../../../assets/img/drink-img-large.jpeg";
import img11 from "./../../../assets/img/high-intensity-800.jpeg";
import img12 from "./../../../assets/img/pre-workout.jpeg";
import img13 from "./../../../assets/img/guillaume-bolduc-1080.jpeg";
import img14 from "./../../../assets/img/pull-500.jpeg";



const GallerySection = () => {
  // const {scrollYProgress} = useScroll()

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Page scroll: ", latest)
  // })

  return (
    <section className={styles.gallerySection}>
      <div className={styles.galleryContent}>
        <div className={styles.galleryImg}>
          <img src={img1} alt=""></img>
        </div>
        <div className={styles.galleryImg}>
          <img src={img2} alt=""></img>
        </div>
        <div className={styles.galleryImg}>
          <img src={img3} alt=""></img>
        </div>
        <div className={styles.galleryImg}>
          <img src={img4} alt=""></img>
        </div>
        <div className={styles.galleryImg}>
          <img src={img5} alt=""></img>
        </div>
        <div className={styles.galleryImg}>
          <img src={img6} alt=""></img>
        </div>
        <div className={styles.galleryImg}>
          <img src={img7} alt=""></img>
        </div>
        <div className={styles.galleryImg}>
          <img src={img8} alt=""></img>
        </div>
        <div className={styles.galleryImg}>
          <img src={img9} alt=""></img>
        </div>
        <div className={styles.galleryImg}>
          <img src={img10} alt=""></img>
        </div>
        <div className={styles.galleryImg}>
          <img src={img11} alt=""></img>
        </div>
        <div className={styles.galleryImg}>
          <img src={img12} alt=""></img>
        </div>
        <div className={styles.galleryImg}>
          <img src={img13} alt=""></img>
        </div>
        <div className={styles.galleryImg}>
          <img src={img14} alt=""></img>
        </div>

      </div>

     
    </section>
  );
};

export default GallerySection;
