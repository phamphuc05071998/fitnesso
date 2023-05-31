import React from 'react'
import styles from "./PricingSection.module.scss"
import { course } from '../../../Pages/Home'
import PlanCard from '../../Home/PlansSection/PlanCard'

 interface props {
  freeCourses: course []
 } 
const PricingSection:React.FC<props> = ({freeCourses}) => {

  return (
    <section className={styles.pricingSection}>
        <div className={styles.pricingContainer}>
            {freeCourses.map(plan => <PlanCard key={plan._id} id={plan._id} duration={plan.duration} title={plan.title} price={plan.price} buttonText="View All" img={plan.image}/>)}
        </div>
    </section>
  )
}

export default PricingSection