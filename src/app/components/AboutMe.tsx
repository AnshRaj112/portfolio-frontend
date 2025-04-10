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
            fill
            className={styles.profileImage}
          />
        </div>
        <div className={styles.textContent}>
          <h2>
            About <span className={styles.name}>Me</span>
          </h2>

          <div className={hasAnimated ? styles.fadeIn : ""}>
            {/* <h3>Who I Am</h3> */}
            <p>
              I&apos;m <span className={styles.name}>Ansh Raj</span>, a builder
              at heart — I make things that live on the web, run on your phone,
              and click open on your desktop.
            </p>
            <p className={styles.funFact}>
              Fun fact: I run on coffee. Espresso doesn&apos;t just keep me awake —
              it codes with me.
            </p>

            <p>
              My work isn&apos;t boxed into one screen size or platform. I create{" "}
              <span className={styles.name}>web applications</span>, bring ideas
              to life as <span className={styles.name}>mobile apps</span>, and
              craft smooth, functional{" "}
              <span className={styles.name}>desktop software</span> — all with
              equal passion.
            </p>
            <p>
              I care about how things feel when someone uses them. Every project
              is a personal experiment, a version better than the last — not
              because it has to be, but because I want it to be.
            </p>
            <p>
              I don&apos;t chase trends. I follow curiosity. That&apos;s what keeps me
              moving.
            </p>
          </div>

          <div
            className={`${styles.connectBox} ${
              hasAnimated ? styles.fadeIn : ""
            }`}
          >
            <h3>
              Let&apos;s <span className={styles.name}>Connect</span>
            </h3>
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
