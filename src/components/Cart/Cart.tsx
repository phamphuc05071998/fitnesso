import React from "react";
import styles from "./Cart.module.scss";

interface props {
  id: string;
  img: string;
  price: number;
  title: string;
  onRemove: any
}

const Cart: React.FC<props> = ({ id, img, price, title, onRemove }) => {
  return (
    <div className={styles.cart}>
      <div className={styles.cartImg}>
        <img src={img} alt=""></img>
      </div>
      <div className={styles.cartContent}>
        <div className={styles.cartPrice}>$ {price} usd</div>
        <div className={styles.cartTitle}>{title}</div>
      
      </div>
      <button onClick={onRemove} className={styles.cartRemove}>Remove</button>
    </div>
  );
};

export default Cart;
