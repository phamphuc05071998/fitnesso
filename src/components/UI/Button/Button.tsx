import React from 'react'
import styles from "./Button.module.scss"
import {Link} from "react-router-dom"
interface props {
    children: string,
    href?: any
}
const Button:React.FC<props> = ({children, href}) => {
  return (
    <a className={styles.button} href='#'>{children}</a>    
  )
}

export default Button