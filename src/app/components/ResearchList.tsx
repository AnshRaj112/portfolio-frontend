"use client";
import { useEffect, useState } from "react";
import styles from "./styles/Research.module.scss";
import ResearchItem from "./ResearchItem";

interface Research {
  title: string;
  coverImage: string;
  paperLink: string;
}

const ResearchList = () => {
  const [papers, setPapers] = useState<Research[]>([]);

  useEffect(() => {
    const fetchResearch = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      try {
        const res = await fetch(`${baseUrl}/research`);
        const data = await res.json();
        setPapers(data);
      } catch (error) {
        console.error("Failed to fetch research papers", error);
      }
    };

    fetchResearch();
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1>Research Papers</h1>
      <div className={styles.researchGrid}>
        {papers.map((paper, i) => (
          <ResearchItem
            key={i}
            title={paper.title}
            coverImage={paper.coverImage}
            paperLink={paper.paperLink}
          />
        ))}
      </div>
    </div>
  );
};

export default ResearchList;
