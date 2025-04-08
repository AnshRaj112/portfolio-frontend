"use client";

import React from "react";
import styles from "./styles/CertificateCard.module.scss";

type Props = {
  image: string;
  courseName: string;
  provider: string;
  credentialLink: string;
};

const CertificateCard = ({
  image,
  courseName,
  provider,
  credentialLink,
}: Props) => {
  const handleButtonClick = () => {
    window.open(credentialLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={courseName} className={styles.image} />
      <div className={styles.content}>
        <h3>{courseName}</h3>
        <p>
          Provided by <span>{provider}</span>
        </p>
        <button onClick={handleButtonClick} className={styles.button}>
          View Credentials
        </button>
      </div>
    </div>
  );
};

export default CertificateCard;
