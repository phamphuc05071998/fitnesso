import axiosInstance from "./axios";

export const getCartItems = async (token: string) => {
  try {
    const response = await axiosInstance.get("/cart/items", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      withCredentials: false,
    });
    return response.data.cart;
  } catch (err) {
    throw err;
  }
};
export const addItemsToCart = async (token: string, courseId: string) => {
  try {
    const response = await axiosInstance.post(
      "/cart/items",
      {
        courseId: courseId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        withCredentials: false,
      }
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const removeItemsFromCart = async (token: string, courseId: string) => {
  try {
    const response = await axiosInstance.delete(`/cart/items/${courseId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      withCredentials: false,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};
