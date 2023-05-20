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

export interface plans {
  id: string,
  duration: string,
  price: string,
  buttonText: string,
  title: string,
  img: string
}

 const  plansList1: plans [] = [
  {
    id: "p1",
    duration: "30 minutes",
    price: "free",
    img: require('./../assets/img/gallery-5.jpeg'),
    buttonText: "View All",
    title: "The perfect outdoor workouts"
  }, {
    id: "p2",
    duration: "1 hours",
    price: "free",
    img: require('./../assets/img/pull-500.jpeg'),
    buttonText: "View All",
    title: "Back day"

  },{
    id: "p3",
    duration: "40 minutes",
    price: "free",
    img: require('./../assets/img/gallery-9.jpeg'),
    buttonText: "View All",
    title: "The ultimate abs tabata"
  }
]

const plansList2: plans [] = [
  {
    id: "p1",
    duration: "3 days a week",
    price: "$ 19.99 usd",
    img: require('./../assets/img/Rectangle-439.png'),
    buttonText: "View",
    title: "Home burn"
  }, {
    id: "p2",
    duration: "30 days",
    price: "$ 29.99 usd",
    img: require('./../assets/img/back-small.jpeg'),
    buttonText: "View",
    title: "Shedded Meal Plan"

  },{
    id: "p3",
    duration: "40 minutes",
    price: "$ 89.99 usd",
    img: require('./../assets/img/high-intensity-800.jpeg'),
    buttonText: "View",
    title: "High intensity training"
  }
]
const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <StaticSection />
      <FeaturesSection/>
      <PlansSection plansList={plansList1} title="Free home workouts and fitness plans" description="With free online classes people who don’t have the time or money to afford a personal coach can make change their lives forever." buttonTitle="View All"/>
      <PlansSection plansList={plansList2} title="Free home workouts and fitness plans"description="I’ve created these premium fitness classes for everyone starting from beginner to advanced level with an in depth FAQ." buttonTitle="View All" primaryColor/>
      <PhotoSection/> 
      <CallSection/>
      <CtaSection/>
      <BlogSection/>
      <GallerySection/>
    </>
  );
};

export default Home;
