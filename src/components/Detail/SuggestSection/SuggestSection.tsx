import React, {useEffect, useState} from 'react'
import styles from "./SuggestSection.module.scss"
import HeadingSecondary from '../../UI/Heading/HeadingSecondary'

import PlanCard from '../../Home/PlansSection/PlanCard'
import { getFreeCourses } from '../../../utils/course'
import { course as courseType } from '../../../Pages/Home'

const SuggestSection = () => {
  const [courses, setCourse] = useState<courseType[]>() 
  useEffect(() => {
    const getCourses = async () => {
      const response = await getFreeCourses()
     setCourse(response.data)
    }
    getCourses()
  },[]) 
  return (
   <section className={styles.suggestSection}>
    <div className={styles.suggestContainer}>
        <HeadingSecondary primaryColor>More workouts you might like...</HeadingSecondary>
        <div className={styles.suggestContent}>
            {courses && courses.map(plan => <PlanCard id={plan._id} title={plan.title} duration={plan.duration} img={plan.image} buttonText='View All' price={plan.price} key={plan._id}/>) }
        </div>
    </div>
   </section>
  )
}

export default SuggestSection