import React from 'react';
import styles from "./Projects.module.css"; 

const projects = [
  {
    id: 1,
    title: "Online Blood Donation",
    description: "A user-friendly platform for ordering and delivering chocolates online. Customers can browse a variety of chocolates, place orders, and track deliveries seamlessly. Sweet, fast, and convenient! 🍫",
    image: "../assest/chocolate.png"
  },
  {
    id: 2,
    title: "Online Food Platform",
    description: "A platform that connects blood donors with recipients in need. Users can register, search for donors, and request blood donations easily. Secure, efficient, and user-friendly. 🚑❤️",
    image: "../assest/blooddonation.png"
  }
];

export const Projects = () => {
  return (
    <section className={styles.container} id="project">
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.content}>
        {projects.map((project) => (
          <div key={project.id} className={styles.aboutItem}>
            <img src={project.image} alt={project.title} className={styles.img} />
            <div className={styles.aboutItems}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
