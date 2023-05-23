import React from "react";
import HeroSection from "../components/Detail/HeroSection/HeroSection";
import DetailSection from "../components/Detail/Detail/DetailSection";
import Description from "../components/Detail/Description/Description";
import SuggestSection from "../components/Detail/SuggestSection/SuggestSection";

const Detail = () => {
  return (
    <>
      <HeroSection />
      <DetailSection />
      <Description/>
      <SuggestSection/>
    </>
  );
};

export default Detail;
