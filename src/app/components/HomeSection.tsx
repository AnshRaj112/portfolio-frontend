"use client";

import styles from "./styles/HomeSection.module.scss";
import Image from "next/image";

const Home = () => {
  return (
    <section className={styles.home} id="home">
      <div className={styles.content}>
        <div className={styles.text}>
          <h1 className={styles.introLine}>
            Hi, I am <br/> <span className={styles.highlight}>Ansh Raj</span> and I am a <br/>
            <span className={`${styles.highlight} ${styles.typewriter}`}>Developer</span>
          </h1>

          <p className={styles.fadeIn}>
            I build web applications, Android apps, and Windows software.
            <br /><br />
            I enjoy learning new things and creating useful tools that work well. I believe in building step by step and always improving with practice.
          </p>

          <a
            href="https://drive.google.com/file/d/1CwN0HhSgOOzBOL3bU25C3H2cwi23E5W3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeButton}
          >
            Download Resume
          </a>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1743957786/1743948444183_zgvph5.png"
            alt="Ansh Raj - Hero Image"
            fill
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
