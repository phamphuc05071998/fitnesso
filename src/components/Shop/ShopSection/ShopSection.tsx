import React, { ReactEventHandler, useState } from "react";
import styles from "./ShopSection.module.scss";
import { plans } from "../../../Pages/Home";
import PlanCard from "../../Home/PlansSection/PlanCard";
const plansList2: plans[] = [
  {
    id: "p1",
    duration: "3 days a week",
    price: "$ 19.99 usd",
    img: require("./../../../assets/img/Rectangle-439.png"),
    buttonText: "View",
    title: "Home burn",
    type: ["training"]
  },
  {
    id: "p2",
    duration: "30 days",
    price: "$ 29.99 usd",
    img: require("./../../../assets/img/back-small.jpeg"),
    buttonText: "View",
    title: "Shedded Meal Plan",
    type: [ "nutrition"]

  },
  {
    id: "p3",
    duration: "40 minutes",
    price: "$ 89.99 usd",
    img: require("./../../../assets/img/high-intensity-800.jpeg"),
    buttonText: "View",
    title: "High intensity training",
    type: ["training", "nutrition"]

  },
];
const ShopSection = () => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [plansList, setPlansList] = useState(plansList2)
  const buttonHandler = (buttonId: any, e:any) => {
    setSelectedButton(buttonId);
    
    const value = e.target.value
    if (value === "all") {
      return setPlansList(plansList2)
    }
    setPlansList(plansList2.filter(plan => plan.type?.includes(value)))
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
            onClick={buttonHandler.bind(this,1)}
            className={classBtn(1)}
            value="all"
          >
            All
          </button>
          <button
            type="button"
            onClick={buttonHandler.bind(this,2)}
            className={classBtn(2)}
            value="nutrition"
          >
            Nutrition
          </button>
          <button
            type="button"
            onClick={buttonHandler.bind(this,3)}
            className={classBtn(3)}
            value="training"
          >
            Training
          </button>
        </div>
        <div className={styles.shopContent}>
          {plansList.map((plan) => (
            <PlanCard

              key={plan.id}
              id={plan.id}
              duration={plan.duration}
              title={plan.title}
              price={plan.price}
              buttonText={plan.buttonText}
              img={plan.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
