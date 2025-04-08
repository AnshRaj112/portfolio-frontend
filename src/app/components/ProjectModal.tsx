"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles/ProjectModal.module.scss";
import Image from "next/image";

type Props = {
  id: string;
  onClose: () => void;
};

interface ProjectData {
  name: string;
  images: string[];
  description: string;
  techStack: string[];
  siteUrl: string;
}

export const ProjectModal = ({ id, onClose }: Props) => {
  const [project, setProject] = useState<ProjectData | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const fetchProject = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/projects/${id}`
      );
      const data = await res.json();
      setProject(data);
    };
    fetchProject();
  }, [id]);

  // Auto-change images every 3 seconds
  useEffect(() => {
    if (!project?.images?.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [project]);

  if (!project) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.close}>
          {" "}
          ✖{" "}
        </button>
        <div className={styles.carousel}>
          <Image
            src={project.images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            width={400}
            height={250}
            className={styles.carouselImage}
          />
        </div>
        <h2>{project.name}</h2>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.techStack}>
          {project.techStack.map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </div>
        <br></br>
        <a href={project.siteUrl} target="_blank" rel="noopener noreferrer">
          <button className={styles.visitBtn}>Visit Site</button>
        </a>
      </div>
    </div>
  );
};
