import React from "react";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import StaticSection from "../components/Home/StaticSection/StaticSection";
import FeaturesSection from "../components/Home/FeaturesSection/FeaturesSection";

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <StaticSection />
      <FeaturesSection/>
    </>
  );
};

export default Home;
