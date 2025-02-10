import React from 'react'
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi ,I'm Annpurna</h1>
        <p className={styles.description}>I'm a full Stack Developer using SQL & PHP and a MERN Stack developer.Reach out if you'd like to learn more!</p>
   <a href="mailto:annpurnasha474@gmail.com"  className={styles.contectbtn}>Contact me</a>
   </div>
   <img src="../Public/19.37.25_e3b50aa8.jpg" alt="my image "  className={styles.img}/>
   <div className={styles.topBlur} />
   <div className={styles.bottomBlur} />
   
   
    </section>
    
  )
}
