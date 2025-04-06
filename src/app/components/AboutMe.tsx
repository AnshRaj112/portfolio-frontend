"use client"

import React, { useState } from "react";
import styles from "./styles/AboutMe.module.scss";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <section className={styles.about} id="about" ref={ref}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1742975199/1708155734063-Photoroom_ljgfi6.png"
            alt="Ansh Raj"
            width={300}
            height={300}
            className={styles.profileImage}
          />
        </div>
        <div className={styles.textContent}>
          <h2>About Me</h2>
          <p className={hasAnimated ? styles.fadeIn : ""}>
            I&apos;m <span className={styles.name}>Ansh Raj</span> — a curious
            mind and full-stack web developer who believes that every line of
            code is a step toward mastery.
          </p>
          <p className={hasAnimated ? styles.fadeIn : ""}>
            Fueled by a relentless drive to learn, I’m constantly exploring new
            technologies, refining my craft, and embracing the evolving rhythm
            of the digital world. Whether I’m building responsive interfaces or
            architecting scalable systems, I aim to create solutions that not
            only work — but feel right.
          </p>
          <p className={hasAnimated ? styles.fadeIn : ""}>
            For me, development is more than deployment; it’s a journey of
            discovery, iteration, and meaningful creation. Every challenge is a
            chance to grow. Every idea, an opportunity to innovate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
