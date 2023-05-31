import React from 'react'
import HeroSection from '../components/Shop/HeroSection/HeroSection'
import ShopSection from '../components/Shop/ShopSection/ShopSection'
import CtaSection from '../components/Home/CtaSection/CtaSection'
import GallerySection from '../components/Home/GallerySection/GallerySection'
import { getPaidCourses } from '../utils/course'
import { useLoaderData } from 'react-router-dom'
import { course } from './Home'
const Shop = () => {
  const courses = useLoaderData() as course[]
  return (
    <>
    <HeroSection/>
    <ShopSection paidCourses={courses}/>
    <CtaSection/>
    <GallerySection/>
    </>
  )
}
export const loader =  async() => {
  try {
    const courses = await getPaidCourses()
    return courses.data
  } catch (err) {
    throw err
    
  }
}
export default Shop