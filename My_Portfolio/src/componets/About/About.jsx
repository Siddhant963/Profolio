import React from 'react'
import styles from "./About.module.css";
export const About = () => {
  return (
<section className={styles.container} id="About">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img className={styles.img} src="../assest/7.44.36_86dfdb89.jpg" alt="" />
     <ul className={styles.aboutItems}>
       <li className={styles.aboutItem}>
        <div className={styles.aboutItemText}>
            <h3>Full Stack Developer</h3>
            <p>Full Stack Developer specializing in PHP & SQL for backend and HTML, CSS, JavaScript for frontend. Passionate about building scalable, dynamic, and user-friendly web applications.</p>
        </div>
        </li> 
        <li className={styles.aboutItem}>
             <div className={styles.aboutItemText}>
            <h3>MERN Stack Developer</h3>
            <p>Full Stack MERN Developer | Expertise in MongoDB, Express.js, React, and Node.js | Passionate about building dynamic, scalable, and high-performance web applications.</p>
            </div>
            </li> 
            <li className={styles.aboutItem}>
                 <div  className={styles.aboutItemText}>
                <h3>Java</h3>
                <p>Java Programmer | Focused on coding challenges & problem-solving | Passionate about writing clean and efficient code.</p>
            </div>
            </li> 
            </ul>   
    </div>
    
    </section>
  )
}
