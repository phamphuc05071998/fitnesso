import React from "react";
import styles from "./Footer.module.scss";
import logo from "./../../assets/icon/_Black.svg";
import { Link } from "react-router-dom";
import { ReactComponent as PaypalLogo } from "./../../assets/icon/paypal.svg";
import { ReactComponent as StripeLogo } from "./../../assets/icon/paypal.svg";
import { ReactComponent as VisaLogo } from "./../../assets/icon/paypal.svg";
import { ReactComponent as MasterCardLogo } from "./../../assets/icon/mc_symbol.svg";
import { ReactComponent as AeLogo } from "./../../assets/icon/download.svg";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.footerContent}>
          <div className={styles.footerLabel}>Contact</div>
          <a
            className={styles.footerContactLink}
            href="mailto:contact@fitnesso.com"
          >
            contact@fitnesso.com
          </a>
          <div className={styles.footerLabel}>LiCENCING</div>
          <Link className={styles.footerLink} to="#">
            {" "}
            Copyright Flow Ninja
          </Link>
          <Link className={styles.footerLink} to="#">
            {" "}
            Powered By Webflow
          </Link>
          <Link className={styles.footerLink} to="#">
            {" "}
            Licencing
          </Link>
          <Link className={styles.footerLink} to="#">
            {" "}
            Support
          </Link>
        </div>
        <div className={styles.footerContent}>
          <div className={styles.footerLabel}>EXPLORE</div>
          <Link className={styles.footerLink} to="#">
            {" "}
            Premium Courses
          </Link>
          <Link className={styles.footerLink} to="#">
            {" "}
            Free Courses
          </Link>
          <Link className={styles.footerLink} to="#">
            Free Courses
          </Link>
          <Link className={styles.footerLink} to="#">
            {" "}
            About
          </Link>
          <Link className={styles.footerLink} to="#">
            About
          </Link>
          <Link className={styles.footerLink} to="#">
            {" "}
            Style Guide
          </Link>
        </div>
        <div className={styles.footerPayment}>
          <div className={styles.footerPaymentLogo}>
            <PaypalLogo className={styles.footerPaymentSvg} />
          </div>
          <div className={styles.footerPaymentLogo}>
            <StripeLogo className={styles.footerPaymentSvg} />
          </div>
          <div className={styles.footerPaymentLogo}>
            <VisaLogo className={styles.footerPaymentSvg} />
          </div>
          <div className={styles.footerPaymentLogo}>
            <MasterCardLogo className={styles.footerPaymentSvg} />
          </div>
          <div className={styles.footerPaymentLogo}>
            <AeLogo className={styles.footerPaymentSvg} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
