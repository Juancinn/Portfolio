import React, { useState } from "react";
import styles from "./AboutMe.module.css";

const AboutMe: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.aboutMeSection}>
      <h2 className={styles.title}>More About Me</h2>
      <div className={styles.tabs}>
        <div
          className={`${styles.tab} ${
            activeTab === "Music" ? styles.active : ""
          }`}
          onClick={() => handleTabClick("Music")}
        >
          Music
        </div>
        <div
          className={`${styles.tab} ${
            activeTab === "ContentCreation" ? styles.active : ""
          }`}
          onClick={() => handleTabClick("ContentCreation")}
        >
          Content Creation
        </div>
        <div
          className={`${styles.tab} ${
            activeTab === "Volunteering" ? styles.active : ""
          }`}
          onClick={() => handleTabClick("Volunteering")}
        >
          Volunteering
        </div>
      </div>
      <div
        className={`${styles.tabContent} ${
          activeTab === "Music" ? styles.active : ""
        }`}
      >
        <h3>Music</h3>
        <p>Content about music...</p>
      </div>
      <div
        className={`${styles.tabContent} ${
          activeTab === "ContentCreation" ? styles.active : ""
        }`}
      >
        <h3>Content Creation</h3>
        <p>Content about content creation...</p>
      </div>
      <div
        className={`${styles.tabContent} ${
          activeTab === "Volunteering" ? styles.active : ""
        }`}
      >
        <h3>Volunteering</h3>
        <p>Content about volunteering...</p>
      </div>
    </div>
  );
};

export default AboutMe;
