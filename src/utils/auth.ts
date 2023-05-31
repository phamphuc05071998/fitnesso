import axiosInstance from "./axios";

export const logUserIn = async ( email:string, password:string ) => {
  try {
    const response = await axiosInstance.post("/users/login", {
      email,
      password,
    });
    
    return response.data;
  } catch (err) {
    throw err
  }
};
export const signUpUser = async ( email:string, password:string, name:string, passwordConfirm: string ) => {
  try {
    const response = await axiosInstance.post("/users/signup", {
      email,
      password,
      name,
      passwordConfirm
    });
    
    return response.data;
  } catch (err) {
    throw err
  }
};
