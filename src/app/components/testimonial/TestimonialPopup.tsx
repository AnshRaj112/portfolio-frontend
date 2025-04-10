"use client";

import React from "react";
import styles from "./styles/TestimonialPopup.module.scss";

type Props = {
  isOpen: boolean;
  message: string;
  name: string;
  position: string;
  onClose: () => void;
};

const TestimonialPopup = ({
  isOpen,
  message,
  name,
  position,
  onClose,
}: Props) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button onClick={onClose} className={styles.close}>
          ✖
        </button>
        <p>{message}</p>
        <div className={styles.footer}>
          <h4>{name}</h4>
          <p>{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPopup;
