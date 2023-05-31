import React from "react";
import HeroSection from "../components/Product/HeroSection/HeroSection";
import CtaSection from "../components/Home/CtaSection/CtaSection";
import GallerySection from "../components/Home/GallerySection/GallerySection";
import { getDetailCourse } from "../utils/course";
import { useLoaderData } from "react-router-dom";
import { course } from "./DetaiFree";
const Product = () => {
  const courseDetail = useLoaderData() as course
  return (
    <>
      <HeroSection  id={courseDetail._id} title={courseDetail.title} img={courseDetail.image} description={courseDetail.description} duration={courseDetail.duration} instructor={courseDetail.instructor}  price={courseDetail.price}/>
      <CtaSection />
      <GallerySection />
    </>
  );
};
export const loadDetailCourse = async (para:any) => {
  const courseId = para.params.id
  try {
    const getDetail = await getDetailCourse(courseId)
   
    return getDetail.data
  } catch (err) {
    return null
  }
}

export default Product;
