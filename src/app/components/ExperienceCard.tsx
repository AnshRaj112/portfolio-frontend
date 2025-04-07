"use client";

import React, { useState } from "react";
import styles from "./styles/ExperienceCard.module.scss";
import { ExperiencePopup } from "./ExperiencePopup";

interface ExperienceProps {
  _id: string;
  post: string;
  company: string;
  duration: string;
  roleHistory: string;
  companyUrl: string;
}

export const ExperienceCard: React.FC<ExperienceProps> = ({
  _id,
  post,
  company,
  duration,
  roleHistory,
  companyUrl,
}) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className={styles.card}>
      <h2>{post}</h2>
      <p>{company}</p>
      <span>{duration}</span> <br/>
      <small>{roleHistory}</small>

      <div className={styles.buttons}>
        <button onClick={() => setShowPopup(true)}>View Details</button>
        <a href={companyUrl} target="_blank" rel="noopener noreferrer">
          <button>Visit Company</button>
        </a>
      </div>

      {showPopup && (
        <ExperiencePopup id={_id} onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
};
