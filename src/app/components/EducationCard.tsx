import React from "react";
import styles from "./styles/EducationCard.module.scss";
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";

interface EducationCardProps {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  subjects: string[];
}

const EducationCard: React.FC<EducationCardProps> = ({
  institution,
  degree,
  duration,
  location,
  subjects,
}) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.institution}>{institution}</h2>
      <p className={styles.degree}>{degree}</p>
      <div className={styles.meta}>
        <span><SlCalender /> {duration}</span>
        <span><CiLocationOn /> {location}</span>
      </div>
      <div className={styles.subjects}>
        {subjects.map((subject, index) => (
          <span key={index} className={styles.subject}>• {subject}</span>
        ))}
      </div>
    </div>
  );
};

export default EducationCard;
