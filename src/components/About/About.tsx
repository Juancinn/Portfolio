import React from "react";
import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <div className={styles.aboutSection}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.name}>Juan Moncayo</div>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img
            src="src/assets/About-1.jpg"
            alt="Your Name"
            className={styles.profileImage}
          />
          <img
            src="src/assets/About-2.jpg"
            alt="Your Name Hover"
            className={`${styles.profileImage} ${styles.hoverImage}`}
          />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.description}>
            I'm a software developer from Ecuador based in Toronto. I'm
            currently a university student and have taken courses in
            object-oriented programming with C and C++, web development with a
            focus on React, as well as data structures and algorithms, database
            management, system design, and testing.
          </p>
          <a
            href="src/assets/Juan Moncayo.pdf"
            className={styles.resumeButton}
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
