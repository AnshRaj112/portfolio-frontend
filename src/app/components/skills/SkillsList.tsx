"use client";
import { useEffect, useState } from "react";
import SkillItem from "./SkillItem";
import styles from "./styles/Skills.module.scss";

interface Skill {
  name: string;
  image: string;
}

const SkillsList = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      try {
        const res = await fetch(`${baseUrl}/skills`);
        const data = await res.json();
        setSkills(data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1>Skills</h1>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <SkillItem key={index} name={skill.name} image={skill.image} />
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
