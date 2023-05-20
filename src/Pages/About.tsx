import React from "react";
import HeroSection from "../components/About/HeroSection/HeroSection";
import AboutSection from "../components/About/AboutSection/AboutSection";
import CtaSection from "../components/Home/CtaSection/CtaSection";
import GallerySection from "../components/Home/GallerySection/GallerySection";
import VideoSection from "../components/About/VideoSection/VideoSection";
const About = () => {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <AboutSection />
      <CtaSection/>
      <GallerySection/>
    </>
  );
};

export default About;
