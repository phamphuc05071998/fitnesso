import React from 'react'
import styles from "./SuggestSection.module.scss"
import HeadingSecondary from '../../UI/Heading/HeadingSecondary'
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
  
const SuggestSection = () => {
  return (
   <section className={styles.suggestSection}>
    <div className={styles.suggestContainer}>
        <HeadingSecondary primaryColor>More workouts you might like...</HeadingSecondary>
        <div className={styles.suggestContent}>
            {plansList1.map(plan => <PlanCard id={plan.id} title={plan.title} duration={plan.duration} img={plan.img} buttonText={plan.buttonText} price={plan.price} key={plan.id}/>) }
        </div>
    </div>
   </section>
  )
}

export default SuggestSection