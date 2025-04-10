import React from "react";
import styles from "./education/styles/EducationCard.module.scss";
import skeletonStyles from "./styles/Skeleton.module.scss"; // create this file if needed

const SkeletonEducationCard = () => {
  return (
    <div className={`${styles.card} ${skeletonStyles.skeletonCard}`}>
      <div className={skeletonStyles.skeletonTitle} />
      <div className={skeletonStyles.skeletonText} />
      <div className={skeletonStyles.skeletonMeta} />
      <div className={skeletonStyles.skeletonSubjects}>
        <div className={skeletonStyles.skeletonSubject} />
        <div className={skeletonStyles.skeletonSubject} />
      </div>
    </div>
  );
};

export default SkeletonEducationCard;
