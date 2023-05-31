import React from 'react'
import styles from "./Wrapper.module.scss"
interface props {
    children : React.ReactNode
}
const Wrapper:React.FC<props> = ({children}) => {
  return (
    <div className={styles.wrapper}>{children}</div>
  )
}

export default Wrapper