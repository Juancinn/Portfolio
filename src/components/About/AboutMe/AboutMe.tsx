import { useState } from "react";
import TabContent from "./TabContent";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.aboutMeSection}>
      <h2 className={styles.title}>More About Me</h2>
      <p className={styles.introText}>
        I am more than my academics and there is a lot more to know about me. So
        here's some cool stuff.
      </p>
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
      <TabContent activeTab={activeTab} />
    </div>
  );
};

export default AboutMe;
