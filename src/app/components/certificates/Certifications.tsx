"use client"

import React, { useEffect, useState } from "react";
import CertificateCard from "./CertificateCard";
import styles from "./styles/Certifications.module.scss";

type Certification = {
  _id: string;
  image: string;
  courseName: string;
  provider: string;
  credentialLink: string;
};

const Certifications = () => {
  const [certs, setCerts] = useState<Certification[]>([]);

  useEffect(() => {
    const fetchCertification = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      try {
        const res = await fetch(`${baseUrl}/certification`);
        const data = await res.json();
        setCerts(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchCertification();
  }, []);


  return (
    <section className={styles.certifications}>
      <h2>Certifications</h2>
      <div className={styles.grid}>
        {certs.map((cert) => (
          <CertificateCard
            key={cert._id}
            image={cert.image}
            courseName={cert.courseName}
            provider={cert.provider}
            credentialLink={cert.credentialLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
