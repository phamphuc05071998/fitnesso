import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface cart {
  id: string;
  img: string;
  price: number;
  title: string;
}

export interface CounterState {
  totalPrice: number;
  carts: cart[];
  totalAmount: number;
}

const initialState: CounterState = {
  totalPrice: 0,
  carts: [],
  totalAmount: 0,
};
interface payload {
  totalPrice: number;
  carts: cart[];
}
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (stage, action) => {
      const cart = action.payload;
      console.log(cart);
      const cartId = cart.id;
      const carts = stage.carts;
      const isExist = carts.findIndex((cart) => cart.id === cartId);
      if (isExist === -1) {
        stage.carts.push(action.payload);
        stage.totalAmount++;
        stage.totalPrice += Math.round((cart.price)*100)/100;;
      } else {
        alert("All ready have this a items in cart");
      }
    },
    removeAllItems: (stage) => {
      stage.carts = [];
      stage.totalAmount = 0;
      stage.totalPrice = 0;
    },
    fetchItems: (stage, action: PayloadAction<payload>) => {
      stage.carts = action.payload.carts;
      stage.totalPrice = action.payload.totalPrice;
      stage.totalAmount = action.payload.carts.length;
    },
    removeItem: (stage, action) => {
      const carts = stage.carts;
      const removeCart = carts.find((cart) => {
      return  cart.id === action.payload
      })
      console.log(removeCart)
      if (!removeCart) return;
      stage.carts = carts.filter((cart) => {
        return cart.id !== action.payload;
      });
      stage.totalAmount--;
      stage.totalPrice =  Math.round((stage.totalPrice - removeCart.price)*100)/100;
    },
  },
});
export const { addItems, removeAllItems, fetchItems, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
