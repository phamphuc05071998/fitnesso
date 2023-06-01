import React, { useState, useEffect } from "react";
import styles from "./Navigation.module.scss";
import logo from "./../../assets/icon/Black-logo.svg";
import { IoIosCart } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import Cart from "../../components/Cart/Cart";
import Button from "../../components/UI/Button/Button";
import { motion } from "framer-motion";
import { logIn, logOut } from "../../store/authProvider";
import { getCartItems, removeItemsFromCart } from "./../../utils/cart";
import { fetchItems, removeAllItems, removeItem } from "../../store/cartProvider";
const Navigation: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const cartsData = useSelector((state: RootState) => state.cart);
  const authData = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const openNavbarHandler = () => {
    setNavOpen((prev) => !prev);
  };
  const openerClasses = `${styles.navOpener} ${navOpen ? styles.clicked : ""}`;
  const openClasses = `${styles.navOpen} ${navOpen ? styles.clicked : ""}`;
  const navListStyles = `${styles.navList} ${navOpen ? styles.openNav : ""} `;
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userStr = localStorage.getItem("user");
    if (userStr && token) {
      const user = JSON.parse(userStr);
      dispatch(
        logIn({
          token: token,
          user: {
            name: user.name,
            email: user.email,
          },
        })
      );
    }
  }, []);
  useEffect(() => {
    const getCart = async () => {
      try {
        const token = authData.token;
        const response = await getCartItems(token);
        const cartItems = response.items.map((el:any) => {
          return {
            img: el.courseId.image,
            price: el.courseId.price,
            id: el.courseId._id,
            title: el.courseId.title,
          };
        });
  
        dispatch(fetchItems({totalPrice: response.totalPrice, carts: cartItems}))
      } catch (err) {
      //  alert(err)
      }
    };
    getCart();
  }, [authData, dispatch]);
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link
          to="/"
          onClick={() => {
            setCartOpen(false);
            setNavOpen(false);
          }}
        >
          <img src={logo} alt="logo" className={styles.navLogo} />
        </Link>
        <ul className={navListStyles}>
          <li
            className={styles.navItem}
            onClick={() => {
              setCartOpen(false);
              setNavOpen(false);
            }}
          >
            {" "}
            <Link className={styles.navLink} to="/about">
              About
            </Link>
          </li>
          <li
            className={styles.navItem}
            onClick={() => {
              setCartOpen(false);
              setNavOpen(false);
            }}
          >
            <Link className={styles.navLink} to="/free-workouts">
              Free Workout
            </Link>
          </li>
          <li
            className={styles.navItem}
            onClick={() => {
              setCartOpen(false);
              setNavOpen(false);
            }}
          >
            <Link className={styles.navLink} to="/shop">
              Shop
            </Link>
          </li>
          <li
            className={styles.navItem}
            onClick={() => {
              setCartOpen(false);
              setNavOpen(false);
            }}
          >
            {!authData.isAuthenticate && (
              <Link
                className={`${styles.navLink} ${styles.navBtn}`}
                to="/auth/login"
              >
                Get stared
              </Link>
            )}
            {authData.isAuthenticate && (
              <Link
                onClick={() => {
                  dispatch(logOut())
                  dispatch(removeAllItems());
                }}
                className={`${styles.navLink} ${styles.navBtn}`}
                to="/auth/login"
              >
                Logout
              </Link>
            )}
          </li>
        </ul>
        <div className={openerClasses} onClick={openNavbarHandler}>
          <span className={openClasses}>&nbsp;</span>{" "}
        </div>
        <motion.div
          initial={false}
          animate={cartOpen ? "open" : "closed"}
          className={styles.navCart}
        >
          <motion.div
            className={styles.navCartBtn}
            onClick={() => {
              setCartOpen((prev) => !prev);
            }}
          >
            <IoIosCart size={24} />
          </motion.div>

          <motion.div
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            className={styles.cart}
            style={{ pointerEvents: cartOpen ? "auto" : "none" }}
          >
            <header className={styles.cartHeader}>
              <h5 className={styles.cartHeading}>Your cart</h5>
              <div className={styles.cartCloseBtn}>
                <IoCloseOutline
                  size={24}
                  onClick={() => {
                    setCartOpen(false);
                  }}
                />
              </div>
            </header>
            {cartsData.totalPrice === 0 && (
              <div className={styles.cartEmptyContainer}>
                <h5 className={styles.cartEmptyHeading}>Nothing here!</h5>
                <p className={styles.cartEmptyText}>
                  Browse around my shop to add fitness programs or nutrition
                  plans
                </p>
              </div>
            )}
            {cartsData.totalPrice !== 0 && (
              <div className={styles.cartContainer}>
                {cartsData.carts.map((cart) => (
                  <Cart
                    key={cart.id}
                    id={cart.id}
                    title={cart.title}
                    img={cart.img}
                    price={cart.price}
                    onRemove={async() => {
                      const token = localStorage.getItem('token')!
                       await removeItemsFromCart(token, cart.id)
                       dispatch(removeItem(cart.id))
                    }}
                  />
                ))}
              </div>
            )}
            {cartsData.totalPrice !== 0 && (
              <div className={styles.cartCheckout}>
                <div className={styles.cartSub}>
                  <h5 className={styles.cartLabel}>Subtitle</h5>
                  <p className={styles.cartTotal}>
                    $ {cartsData.totalPrice} USD
                  </p>
                </div>
                <Button>Checkout</Button>
              </div>
            )}
          </motion.div>
         

          <span className={styles.navCartAmount }>{cartsData.totalAmount}</span>    
        </motion.div>

      </nav>
    </header>
  );
};

export default Navigation;
