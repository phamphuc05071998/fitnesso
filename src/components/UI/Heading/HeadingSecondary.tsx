import React from 'react'
import styles from './HeadingSecondary.module.scss'
interface props {
    children : string,
    primaryColor?: boolean,
    center?: boolean,
    maxWidth?:string
}   
const HeadingSecondary:React.FC<props> = ({children, primaryColor, center, maxWidth}) => {
    const headingClass = `${styles.headingSecondary} ${primaryColor? styles.primaryColor: ''} ${center? styles.center: ''}`
   
  return (
    <h2 className={headingClass} style={{maxWidth: maxWidth}} >
        {children}
    </h2>
  )
}

export default HeadingSecondary