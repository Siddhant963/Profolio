import React from "react";
import styles from "./Skills.module.css";

const skillsData = [
  { name: "HTML", img: "https://profolio-git-main-siddhant-dubeys-projects-a7386c4f.vercel.app/Public/html.png" },
  { name: "CSS", img: "https://profolio-git-main-siddhant-dubeys-projects-a7386c4f.vercel.app/Public/css.png" },
  { name: "JavaScript", img: "https://profolio-git-main-siddhant-dubeys-projects-a7386c4f.vercel.app/Public/js.png" },
  { name: "SQL", img: "https://profolio-git-main-siddhant-dubeys-projects-a7386c4f.vercel.app/Public/sql.png" },
  { name: "PHP", img: "https://profolio-git-main-siddhant-dubeys-projects-a7386c4f.vercel.app/Public/php.png" },
  { name: "Java", img: "https://profolio-git-main-siddhant-dubeys-projects-a7386c4f.vercel.app/Public/java.png" },
  { name: "React", img: "https://profolio-git-main-siddhant-dubeys-projects-a7386c4f.vercel.app/Public/react.png" },
  { name: "MongoDB", img: "https://profolio-git-main-siddhant-dubeys-projects-a7386c4f.vercel.app/Public/mongo.png" },
  { name: "Express.js", img: "https://profolio-git-main-siddhant-dubeys-projects-a7386c4f.vercel.app/Public/express.png" },
  { name: "Node.js", img: "https://profolio-git-main-siddhant-dubeys-projects-a7386c4f.vercel.app/Public/image.png" }
];

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>My Skills</h2>
      <div className={styles.skillsGrid}>
        {skillsData.map((skill, index) => (
          <div className={styles.skillCard} key={index}>
            <img src={`${skill.img}`} alt={skill.name} className={styles.skillImg} />
            <p className={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
