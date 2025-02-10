import React from "react";
import styles from "./Skills.module.css";

const skillsData = [
  { name: "HTML", img: "../Public/html.png" },
  { name: "CSS", img: "../Public/css.png" },
  { name: "JavaScript", img: "../Public/js.png" },
  { name: "SQL", img: "../Public/sql.png" },
  { name: "PHP", img: "../Public/php.png" },
  { name: "Java", img: "../Public/java.png" },
  { name: "React", img: "../Public/react.png" },
  { name: "MongoDB", img: "../Public/mongo.png" },
  { name: "Express.js", img: "../Public/express.png" },
  { name: "Node.js", img: "../Public/image.png" }
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
