import React from 'react'
import styles from './CtaSection.module.scss'

const CtaSection = () => {
  return (
    <section className={styles.ctaSection }>
        <div className={styles.ctaContainer}>
            <h2 className={styles.ctaHeading}>Get our free meal plan</h2>
            <p className={styles.ctaText}>Signup to our newsletter to get a free 30 day meal plan. You will receive all guidance on what to eat, how to cook and how much to eat.</p>
            <form action="" className={styles.ctaForm}>
                <input type="text" className={styles.ctaInput} placeholder='Full Name' />
                <input type="email" className={styles.ctaInput} placeholder='Email' />
                <button type='submit' className={styles.ctaFormBtn}>Signup</button>
            </form>
        </div>
    </section>
  )
}

export default CtaSection