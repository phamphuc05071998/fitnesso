import React from 'react'
import styles from './HeadingSecondary.module.scss'
interface props {
    children : string,
    primaryColor?: boolean,
    center?: boolean,
}   
const HeadingSecondary:React.FC<props> = ({children, primaryColor, center}) => {
    const headingClass = `${styles.headingSecondary} ${primaryColor? styles.primaryColor: ''} ${center? styles.center: ''}`
  return (
    <h2 className={headingClass}>
        {children}
    </h2>
  )
}

export default HeadingSecondary