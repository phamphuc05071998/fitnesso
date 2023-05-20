import React, { useState } from "react";
import styles from "./Navigation.module.scss";
import logo from "./../../assets/icon/Black-logo.svg";
import { IoIosCart } from "react-icons/io";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const openNavbarHandler = () => {
    setNavOpen((prev) => !prev);
  };
  const openerClasses = `${styles.navOpener} ${navOpen ? styles.clicked : ""}`;
  const openClasses = `${styles.navOpen} ${navOpen ? styles.clicked : ""}`;
  const navListStyles = `${styles.navList} ${navOpen ? styles.openNav : ""} `;
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles.navLogo} />
        </Link>
        <ul className={navListStyles}>
          <li className={styles.navItem}>
            {" "}
            <Link className={styles.navLink} to="/about">
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/free">
              Free Workout
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/shop">
              Shop
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={`${styles.navLink} ${styles.navBtn}`} to="/book">
              Book A Call
            </Link>
          </li>
        </ul>
        <div className={openerClasses} onClick={openNavbarHandler}>
          <span className={openClasses}>&nbsp;</span>{" "}
        </div>
        <div className={styles.navCart}>
          <IoIosCart size={24} />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
