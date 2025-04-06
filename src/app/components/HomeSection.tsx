"use client";

import styles from "./styles/HomeSection.module.scss";
import Image from "next/image";

const Home = () => {
  return (
    <section className={styles.home} id="home">
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>
            Welcome to <br></br> <span className={styles.highlight}>My Codeverse</span>
          </h1>
          <p>
            A sculptor of structure and a strategist of scalable systems, I transform ideas into functional realities. Whether crafting fluid UI/UX interfaces or engineering efficient backend logic, I build seamless, responsive ecosystems that resonate with users.
            <br /><br />
            I don&apos;t just develop applications. I create digital realms where imagination meets intention, and innovation finds form. Driven by purpose and guided by curiosity, I push boundaries with every project I undertake.
          </p>
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
