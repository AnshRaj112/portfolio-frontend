"use client";

import styles from "./styles/HomeSection.module.scss";
import Image from "next/image";

const Home = () => {
  return (
    <section className={styles.home} id="home">
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>
            Welcome to <br />
            <span className={`${styles.highlight} ${styles.typewriter}`}>My Codeverse</span>
          </h1>
          <p className={styles.fadeIn}>
            A sculptor of structure and a strategist of scalable systems, I transform ideas into functional realities. 
            <br /><br />
            I don&apos;t just develop applications. I create digital realms where imagination meets intention, and innovation finds form. Driven by purpose and guided by curiosity, I push boundaries with every project I undertake.
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
