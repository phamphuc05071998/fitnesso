import React, { useState } from "react";
import styles from "./ShopSection.module.scss";
import { course } from "../../../Pages/Home";
import PlanCard from "../../Home/PlansSection/PlanCard";

interface props {
  paidCourses: course[];
}
const ShopSection: React.FC<props> = ({ paidCourses }) => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [plansList, setPlansList] = useState(paidCourses);

  const buttonHandler = (buttonId: any, e: any) => {
    setSelectedButton(buttonId);
    const value = e.target.value;
    if (value === "all") {
      return setPlansList(paidCourses);
    }
    setPlansList(paidCourses.filter((plan) => plan.type?.includes(value)));
  };
  const classBtn = (buttonId: number) => {
    return `${styles.shopCategoriesBtn} ${
      selectedButton === buttonId ? styles.active : ""
    }`;
  };

  return (
    <section className={styles.shopSection}>
      <div className={styles.shopContainer}>
        <div className={styles.shopCategories}>
          <h5 className={styles.shopHeading}> CATEGORIES</h5>
          <button
            type="button"
            onClick={buttonHandler.bind(this, 1)}
            className={classBtn(1)}
            value="all"
          >
            All
          </button>
          <button
            type="button"
            onClick={buttonHandler.bind(this, 2)}
            className={classBtn(2)}
            value="nutrition"
          >
            Nutrition
          </button>
          <button
            type="button"
            onClick={buttonHandler.bind(this, 3)}
            className={classBtn(3)}
            value="training"
          >
            Training
          </button>
        </div>
        <div className={styles.shopContent}>
          {plansList.map((plan) => (
            <PlanCard
              key={plan._id}
              id={plan._id}
              duration={plan.duration}
              title={plan.title}
              price={plan.price}
              buttonText="View All"
              img={plan.image}
           
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
