"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles/ExperiencePopup.module.scss";
import { FaCircle } from "react-icons/fa6";

interface ExperienceDetailProps {
  id: string;
  onClose: () => void;
}

interface ExperienceData {
  logoUrl: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  overview: string;
  achievements: string[];
  companyUrl: string;
}

export const ExperiencePopup: React.FC<ExperienceDetailProps> = ({
  id,
  onClose,
}) => {
  const [data, setData] = useState<ExperienceData | null>(null);

  useEffect(() => {
    // Prevent background scroll
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/experience/${id}`
      );
      const result = await res.json();
      setData(result);
    };
    fetchDetails();
  }, [id]);

  if (!data) return null;

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <button onClick={onClose} className={styles.closeBtn}>
          ✖
        </button>
        <img src={data.logoUrl} alt="Company Logo" className={styles.logo} />
        <h2>{data.role}</h2>
        <h3>{data.company}</h3>
        <p>
          <strong>Location:</strong> {data.location}
        </p>
        <p>
          <strong>Duration:</strong> {data.duration}
        </p>
        <p>
          <strong>Overview:</strong> {data.overview}
        </p>
        <p>
          <strong>Achievements:</strong>
        </p>
        <ul>
          {data.achievements.map((ach, i) => (
            <li key={i}>
              <FaCircle className={styles.bulletIcon} />
              <span>{ach}</span>
            </li>
          ))}
        </ul>
        <a href={data.companyUrl} target="_blank" rel="noopener noreferrer">
          <button className={styles.visitBtn}>Visit Company</button>
        </a>
      </div>
    </div>
  );
};
