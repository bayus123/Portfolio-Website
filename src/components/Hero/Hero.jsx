import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Samuel</h1>
        <p className={styles.description}>
        I’m a Data Scientist with 3+ years in Machine Learning, AI, and Data Analytics,
        specializing in data-driven solutions and cloud cost optimization. Reach out if you'd like to learn more!
        </p>
        <a href="samitse19@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Data.png")}
        alt="All about data"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
