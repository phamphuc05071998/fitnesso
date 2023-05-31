import React from 'react'
import styles from "./Button.module.scss"
import {Link} from "react-router-dom"
interface props {
    children: string,
    href?: any,
    white?: boolean
}
const Button:React.FC<props> = ({children, href , white}) => {
  const buttonClasses = `${styles.button} ${white ? styles.whiteBtn : "" }`
  return (
    <Link className={buttonClasses} to={`/${href}`}>{children}</Link>    
  )
}

export default Button