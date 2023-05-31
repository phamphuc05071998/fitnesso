import React from "react";
import styles from "./HeroSection.module.scss";
import { addItemsToCart } from "../../../utils/cart";
import { useDispatch } from "react-redux";
import { addItems } from "../../../store/cartProvider";
import { toast } from "react-toastify";
interface props {
  title: string,
  img: string,
  duration: string,
  description: string,
  instructor: string,
  id: string,
  price: number
}

const HeroSection:React.FC<props> = ({title, img, duration, description, instructor, id, price }) => {
  const dispatch = useDispatch()
  const errToast = (message:string) => {
   toast.error(message)
  }
  const addToCart =  async (e:React.FormEvent) => {
    e.preventDefault()
    const token = localStorage.getItem("token");
    if (!token) return errToast('Please login to continue')
    try {
      const response = await addItemsToCart(token, id);
      console.log(response)
      dispatch(
        addItems({ 
          id: id,
          title: title,
          price: price,
          img: img
        })
      );
     
    } catch (err) {

      errToast("Some thing went wrong");
    }
  }
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <header className={styles.heroHeader}>
          <p className={styles.heroLabel}>{duration} </p>
          <h2 className={styles.heroHeading}>{title}</h2>
          <p className={styles.heroText}>
         {description}
          </p>
          <form className={styles.heroForm} onSubmit={addToCart}>
            <input className={styles.heroInput} type="number" defaultValue="1" step="1" min="1" max="1" />
            <button type="submit" className={styles.heroBtn}>Add to card</button>
          </form>
        </header>
        <div className={styles.heroImg}>
          <img src={img} alt=""></img>{" "}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
