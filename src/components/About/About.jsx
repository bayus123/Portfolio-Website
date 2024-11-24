import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/datasci.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Scientist</h3>
              <p>
              As a Data Scientist, I specialize in applying machine learning and artificial intelligence to solve complex business problems. 
              My expertise includes building predictive models, conducting deep data analysis, and delivering actionable insights that 
              drive strategic decisions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Analyst</h3>
              <p>
              As a Data Analyst, I focus on transforming complex data sets into clear, actionable insights. I utilize statistical analysis, 
              data visualization tools, and SQL to extract key trends and patterns that help businesses make informed decisions. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Architect</h3>
              <p>
              As a Data Architect, I design and build robust data systems that streamline data flow and integration across platforms. 
              My role involves architecting scalable, high-performance data solutions that ensure data is stored, processed, and accessed 
              efficiently. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
