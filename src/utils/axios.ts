import axios from "axios"
const API = "https://fitnessobackend.onrender.com/"
const axiosInstance = axios.create({
    baseURL: API
  });
export default axiosInstance