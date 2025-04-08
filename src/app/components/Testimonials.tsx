"use client";

import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import TestimonialPopup from "./TestimonialPopup";
import styles from "./styles/Testimonial.module.scss";

type Testimonial = {
  _id: string;
  message: string;
  name: string;
  position: string;
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [selected, setSelected] = useState<Testimonial | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      try {
        const res = await fetch(`${baseUrl}/testimonials`);
        const data = await res.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  const loopTestimonials = [...testimonials, ...testimonials];

  return (
    <section className={styles.testimonialSection}>
      <h2>Testimonial</h2>
      <div
        className={`${styles.testimonialContainer} ${
          selected || isHovered ? styles.paused : ""
        }`}
      >
        <div className={styles.testimonialTrack}>
          {loopTestimonials.map((t, index) => (
            <div
              key={`${t._id}-${index}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <TestimonialCard
                message={t.message}
                name={t.name}
                position={t.position}
                onReadMore={() => setSelected(t)}
              />
            </div>
          ))}
        </div>
      </div>
      <TestimonialPopup
        isOpen={!!selected}
        message={selected?.message || ""}
        name={selected?.name || ""}
        position={selected?.position || ""}
        onClose={() => setSelected(null)}
      />
    </section>
  );
};

export default Testimonials;
