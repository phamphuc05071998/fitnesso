import React from 'react'
import styles from "./PricingSection.module.scss"
import { plans } from '../../../Pages/Home'
import PlanCard from '../../Home/PlansSection/PlanCard'
const  plansList1: plans [] = [
    {
      id: "p1",
      duration: "30 minutes",
      price: "free",
      img: require('./../../../assets/img/gallery-5.jpeg'),
      buttonText: "View All",
      title: "The perfect outdoor workouts"
    }, {
      id: "p2",
      duration: "1 hours",
      price: "free",
      img: require('./../../../assets/img/pull-500.jpeg'),
      buttonText: "View All",
      title: "Back day"
  
    },{
      id: "p3",
      duration: "40 minutes",
      price: "free",
      img: require('./../../../assets/img/gallery-9.jpeg'),
      buttonText: "View All",
      title: "The ultimate abs tabata"
    }
  ]
const PricingSection = () => {
  return (
    <section className={styles.pricingSection}>
        <div className={styles.pricingContainer}>
            {plansList1.map(plan => <PlanCard key={plan.id} duration={plan.duration} title={plan.title} price={plan.price} buttonText={plan.buttonText} img={plan.img}/>)}
        </div>
    </section>
  )
}

export default PricingSection