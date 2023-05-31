import React from 'react'
import styles from "./NormalButton.module.scss"

interface props {
    children: string,
    disable?: boolean,
    white?: boolean,
    type?: "submit" | "button"
}
const NormalButton:React.FC<props> = ({children , white, type, disable }) => {
  const buttonClasses = `${styles.button} ${white ? styles.whiteBtn : "" }`
  
  return (
    <button type={type} disabled={disable} className={buttonClasses} >{children}</button>    
  )
}

export default NormalButton