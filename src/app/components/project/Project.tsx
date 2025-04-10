"use client";

import React, { useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import styles from "./styles/Project.module.scss";

interface ProjectData {
  _id: string;
  name: string;
  thumbnail: string;
  description: string;
  techStack: string[];
  images: string[];
  siteUrl: string;
}

const Project = () => {
  const [projectList, setProjectList] = useState<ProjectData[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      try {
        const res = await fetch(`${baseUrl}/projects`);
        const data = await res.json();
        setProjectList(data);
      } catch (error) {
        console.error("Failed to fetch project data:", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1>Projects</h1>
      <div className={styles.cardWrapper}>
        {projectList.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
