"use client";
import { useState } from "react";
import styles from "./styles/ProjectCard.module.scss";
import { ProjectModal } from "./ProjectModal";
import Image from "next/image";

interface Props {
  project: {
    _id: string;
    name: string;
    thumbnail: string;
    description: string;
    techStack: string[];
    images: string[];
    siteUrl: string;
  };
}

export const ProjectCard: React.FC<Props> = ({ project }) => {
  const { _id, name, thumbnail, siteUrl } = project;
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <Image
          src={thumbnail}
          alt={name}
          width={300}
          height={200}
          className={styles.image}
        />
        <h3>{name}</h3>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => setShowModal(true)}>Know More</button>
        <a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.visitButton}
        >
          <button>Visit Company</button>
        </a>
      </div>

      {showModal && (
        <ProjectModal id={_id} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};
