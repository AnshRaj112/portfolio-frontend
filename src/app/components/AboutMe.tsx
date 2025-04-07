"use client";

import React, { useState } from "react";
import styles from "./styles/AboutMe.module.scss";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaMedium } from "react-icons/fa6";

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
          <h2>About <span className={styles.name}>Me</span></h2>

          <div className={hasAnimated ? styles.fadeIn : ""}>
            <h3>Who I Am</h3>
            <p>
              I&apos;m <span className={styles.name}>Ansh Raj</span> — a curious
              mind and full-stack web developer who believes that every line of
              code is a step toward mastery.
            </p>
            <p className={styles.funFact}>
              ☕ Fun fact: I’m a total coffee addict — espresso is basically my
              coding fuel.
            </p>
          </div>

          <div className={hasAnimated ? styles.fadeIn : ""}>
            <h3>What Drives Me</h3>
            <p>
              Fueled by a relentless drive to learn, I’m constantly exploring
              new technologies, refining my craft, and embracing the evolving
              rhythm of the digital world. Whether I’m building responsive
              interfaces or architecting scalable systems, I aim to create
              solutions that not only work — but feel right.
            </p>
            <p>
              For me, development is more than deployment; it’s a journey of
              discovery, iteration, and meaningful creation. Every challenge is
              a chance to grow. Every idea, an opportunity to innovate.
            </p>
          </div>

          <div
            className={`${styles.connectBox} ${
              hasAnimated ? styles.fadeIn : ""
            }`}
          >
            <h3>Let’s <span className={styles.name}>Connect</span></h3>
            <div className={styles.iconGrid}>
              <a
                href="https://github.com/anshraj112"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconCard}
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ansh-raj112/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconCard}
              >
                <FaLinkedinIn />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://x.com/AnshRaj112"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconCard}
              >
                <FaXTwitter />
                <span>X</span>
              </a>
              <a
                href="https://x.com/AnshRaj_112"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconCard}
              >
                <FaXTwitter />
                <span>X</span>
              </a>
              <a
                href="https://medium.com/@anshraj112"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconCard}
              >
                <FaMedium />
                <span>Medium</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
