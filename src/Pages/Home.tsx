import React from "react";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import StaticSection from "../components/Home/StaticSection/StaticSection";
import FeaturesSection from "../components/Home/FeaturesSection/FeaturesSection";
import PlansSection from "../components/Home/PlansSection/PlansSection";
import PhotoSection from "../components/Home/PhotoSection/PhotoSection";
import CallSection from "../components/Home/CallSection/CallSection";
import CtaSection from "../components/Home/CtaSection/CtaSection";
import BlogSection from "../components/Home/BlogSection/BlogSection";
import GallerySection from "../components/Home/GallerySection/GallerySection";
import { getCourses } from "../utils/course";
import { useLoaderData } from "react-router-dom";
export interface plans {
  id: string,
  duration: string,
  price: number,
  buttonText: string,
  title: string,
  img: string,
  type?: string []
}

export interface course {
  _id: string,
  duration: string,
  price: number,
  instructor: string,
  schedule: string,
  description: string,
  image: string,
  title: string,
  type: string []

}
const Home = () => {
  const plans = useLoaderData() as course[]
  const freePlans = plans.filter(plan => {
    return plan.price === 0
  }).map((plan) => {
    return {
      title: plan.title,
      id: plan._id,
      duration: plan.duration,
      price: plan.price,
      img: plan.image,
      buttonText: "View All"
    }
  })
  const paidPlans = plans.filter(plan => {
    return plan.price !== 0
  }).map((plan) => {
    return {
      title: plan.title,
      id: plan._id,
      duration: plan.duration,
      price: plan.price,
      img: plan.image,
      buttonText: "View All"
    }
  })

  return (
    <>
      <HeroSection></HeroSection>
      <StaticSection />
      <FeaturesSection/>
      <PlansSection plansList={freePlans} title="Free home workouts and fitness plans" description="With free online classes people who don’t have the time or money to afford a personal coach can make change their lives forever." buttonTitle="View All"/>
      <PlansSection plansList={paidPlans} title="Free home workouts and fitness plans"description="I’ve created these premium fitness classes for everyone starting from beginner to advanced level with an in depth FAQ." buttonTitle="View All" primaryColor/>
      <PhotoSection/> 
      <CallSection/>
      <CtaSection/>
      <BlogSection/>
      <GallerySection/>
    </>
  );
};

export const getPlans = async () => {
  try {
    const courses = await getCourses()
    return courses.data
  } catch (err) {
    return err
  }
}

export default Home;
