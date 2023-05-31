import React from 'react'
import HeroSection from '../components/FreeWorkout/HeroSeciton/HeroSection'
import CtaSection from '../components/Home/CtaSection/CtaSection'
import GallerySection from '../components/Home/GallerySection/GallerySection'
import PricingSection from '../components/FreeWorkout/PricingSection/PricingSection'
import { getFreeCourses } from '../utils/course'
import { useLoaderData } from 'react-router-dom'
import { course } from './Home'
const FreeWorkout = () => {
  const course = useLoaderData() as course[] 
  return (
    <>
    <HeroSection/>
    <PricingSection freeCourses={course}/>
    <CtaSection/>
    <GallerySection/>
    </>
  )
}

export const loader =  async() => {
  try {
    const courses = await getFreeCourses()
    return courses.data
  } catch (err) {
    throw err
  }
}
export default FreeWorkout