"use client";

import React, { useEffect, useState } from "react";
import { ExperienceCard } from "./ExperienceCard";
import styles from "./styles/Experience.module.scss";

interface ExperienceData {
  _id: string;
  post: string;
  company: string;
  duration: string;
  roleHistory: string;
  companyUrl: string;
}

const Experience = () => {
  const [experienceList, setExperienceList] = useState<ExperienceData[]>([]);

  useEffect(() => {
    const fetchExperience = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      try {
        const res = await fetch(`${baseUrl}/experience`);
        const data = await res.json();
        setExperienceList(data);
      } catch (error) {
        console.error("Failed to fetch experience data:", error);
      }
    };
    fetchExperience();
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1>Experience</h1>
      <div className={styles.cardWrapper}>
        {experienceList.map((exp) => (
          <ExperienceCard key={exp._id} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience; 