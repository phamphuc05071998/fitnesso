import React from "react";
import styles from "./PlansSection.module.scss";

import Button from "../../UI/Button/Button";
import PlanCard from "./PlanCard";
import { plans } from "../../../Pages/Home";

interface props {
  title: string;
  plansList: plans[];
  description: string;
  buttonTitle: string;
  primaryColor?: boolean;
}

const PlansSection: React.FC<props> = ({
  title,
  plansList,
  description,
  primaryColor,
  buttonTitle,
}) => {
  const headingClasses = `${styles.plansHeading} ${
    primaryColor ? styles.PrimaryColor : ""
  }`;
  const textClasses = `${styles.plansText} ${
    primaryColor ? styles.PrimaryColor : ""
  }`;
  const sectionClasses = `${styles.plansSection} ${
    primaryColor ? styles.PrimaryColor : ""
  }`;
  return (
    <section className={sectionClasses}>
      <div className={styles.plansContainer}>
        <h2 className={headingClasses}>{title}</h2>
        <p className={textClasses}>{description}</p>
        <div className={styles.plansBtn}>
          <Button href={`${primaryColor? "shop" :"free-workouts"}`} white={primaryColor ? true : false}>{buttonTitle}</Button>
        </div>
        <div className={styles.plansList}>
        {plansList.map((item) => (
          <PlanCard
            key={item.id}
            id={item.id}
            img={item.img}
            buttonText="View all"
            price={item.price}
            title={item.title}
            duration={item.duration}
          />
        ))}

        </div>
      </div>
    </section>
  );
};

export default PlansSection;
