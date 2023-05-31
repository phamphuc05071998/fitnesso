import axiosInstance from "./axios";

export const getCourses = async () => {
  try {
    const respond = await axiosInstance.get("courses/");
    return respond.data
  } catch (err) {
    throw err;
  }
};
export const getDetailCourse = async (courseId: string) => {
    try {
        const respond = await axiosInstance.get(`courses/${courseId}`)
        return respond.data
    } catch(err) {
        throw err
    }
}
export const getFreeCourses = async () => {
    try {
      const respond = await axiosInstance.get("courses/?price=0");
      return respond.data
    } catch (err) {
      throw err;
    }
  };

export const getPaidCourses  = async () => {
    try {
      const respond = await axiosInstance.get("courses/?price[gte]=1");
      return respond.data
    } catch (err) {
      throw err;
    }
  }

