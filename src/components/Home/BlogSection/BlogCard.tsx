import React from "react";
import styles from "./BlogCard.module.scss";
import { Link } from "react-router-dom";
interface props {
    img: string,
    profile: any,
   title: string
}

const BlogCard:React.FC<props>= ({img, profile,title}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardProfile}>
          <img src={profile.img} alt=""></img>
          <p>{profile.name}</p>
        </div>
        <p className={styles.cardDescription}>
          {title}
        </p>
        <Link className={styles.cardLink} to="">
          Read more
        </Link>
      </div>
      <img className={styles.cardImg} src={img} alt=""></img>
    </div>
  );
};

export default BlogCard;
