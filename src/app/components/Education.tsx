"use client";

import React, { useEffect, useState } from "react";
import EducationCard from "./EducationCard";
import styles from "./styles/Education.module.scss";

interface EducationData {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  subjects: string[];
}

const Education = () => {
  const [educationList, setEducationList] = useState<EducationData[]>([]);

  useEffect(() => {
    const fetchEducation = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      try {
        const res = await fetch(`${baseUrl}/education`);
        const data = await res.json();
        setEducationList(data);
      } catch (error) {
        console.error("Failed to fetch education data:", error);
      }
    };
    fetchEducation();
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1>Education</h1>
      <div className={styles.cardWrapper}>
        {educationList.map((edu, index) => (
          <EducationCard key={index} {...edu} />
        ))}
      </div>
    </div>
  );
};

export default Education;
