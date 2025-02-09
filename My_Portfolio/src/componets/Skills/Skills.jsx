import React from "react";
import styles from "./Skills.module.css";

const skillsData = [
  { name: "HTML", img: "../assest/html.png" },
  { name: "CSS", img: "../assest/css.png" },
  { name: "JavaScript", img: "../assest/js.png" },
  { name: "SQL", img: "../assest/sql.png" },
  { name: "PHP", img: "../assest/php.png" },
  { name: "Java", img: "../assest/java.png" },
  { name: "React", img: "../assest/react.png" },
  { name: "MongoDB", img: "../assest/mongo.png" },
  { name: "Express.js", img: "../assest/express.png" },
  { name: "Node.js", img: "../assest/image.png" }
];

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>My Skills</h2>
      <div className={styles.skillsGrid}>
        {skillsData.map((skill, index) => (
          <div className={styles.skillCard} key={index}>
            <img src={`/images/${skill.img}`} alt={skill.name} className={styles.skillImg} />
            <p className={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
