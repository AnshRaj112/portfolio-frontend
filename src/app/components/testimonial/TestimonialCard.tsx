import React from "react";
import styles from "./styles/TestimonialCard.module.scss";

type Props = {
  message: string;
  name: string;
  position: string;
  onReadMore: () => void;
};

const TestimonialCard = ({ message, name, position, onReadMore }: Props) => {
  const isLong = message.length > 350;

  return (
    <div className={styles.card}>
      <p className={styles.message}>
        {isLong ? `${message.substring(0, 350)}...` : message}
        {isLong && <span className={styles.readMore} onClick={onReadMore}> Read more</span>}
      </p>
      <div className={styles.author}>
        <h4>{name}</h4>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
