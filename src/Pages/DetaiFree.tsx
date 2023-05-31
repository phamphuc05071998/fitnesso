import React from "react";
import HeroSection from "../components/Detail/HeroSection/HeroSection";
import DetailSection from "../components/Detail/Detail/DetailSection";
import Description from "../components/Detail/Description/Description";
import SuggestSection from "../components/Detail/SuggestSection/SuggestSection";
import { useLoaderData } from "react-router-dom";
import { getDetailCourse } from "../utils/course";
export interface course {
  title: string,
  image: string,
  duration: string,
  description: string,
  instructor: string,
  _id: string,
  price: number
}

const Detail = () => {
const course = useLoaderData() as course

  return (
    <>
      <HeroSection title={course.title} img={course.image} description={course.description} instructor={course.instructor} duration={course.duration} />
      <DetailSection />
      <Description/>
      <SuggestSection/>
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
export default Detail;
