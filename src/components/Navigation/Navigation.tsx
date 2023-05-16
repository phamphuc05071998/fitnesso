import React, {useState} from 'react'
import styles from "./Navigation.module.scss"
import logo from "./../../assets/icon/Black-logo.svg"
import {IoIosCart} from 'react-icons/io'

const Navigation:React.FC = () => {
    const [navOpen , setNavOpen] = useState(false)
    const openNavbarHandler = () => {
        setNavOpen((prev) => !prev)
    }
    const openerClasses = `${styles.navOpener} ${navOpen ? styles.clicked : ''}`
    const openClasses = `${styles.navOpen} ${navOpen ? styles.clicked : ''}`
    const navListStyles = `${styles.navList} ${navOpen ? styles.openNav : ''} `
  return (

    <header className={styles.header}>
        <nav className={styles.nav}>
            <img src={logo} alt="logo" className={styles.navLogo} />
            <ul className={navListStyles}>
                <li className={styles.navItem}> <a  className={styles.navLink} href='/about'>About</a></li>
                <li className={styles.navItem}><a  className={styles.navLink} href='/free'>Free Workout</a></li>
                <li className={styles.navItem}><a className={styles.navLink}  href='/shop'>Shop</a></li>
                <li className={styles.navItem}><a className={`${styles.navLink} ${styles.navBtn}` }  href='/book'>Book A Call</a></li>

            </ul>
                <div className={openerClasses} onClick={openNavbarHandler}><span className={openClasses}>&nbsp;</span> </div>
                <div className={styles.navCart}>
                <IoIosCart size={24} />
                </div>
        </nav>
    </header>
  )
}

export default Navigation