import React from "react";
import styles from "./NavBubbles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const NavBubbles: React.FC<{
  show: boolean;
  setVisibleSection: (section: string) => void;
}> = ({ show, setVisibleSection }) => {
  if (!show) return null;

  return (
    <div className={styles.navBubbles}>
      <div
        className={styles.navBubble}
        onClick={() => setVisibleSection("Hero")}
      >
        <FontAwesomeIcon icon={faHome} className={styles.icon} />
      </div>
      <div
        className={styles.navBubble}
        onClick={() => setVisibleSection("AboutMe")}
      >
        <FontAwesomeIcon icon={faUser} className={styles.icon} />
      </div>
      <div
        className={styles.navBubble}
        onClick={() => setVisibleSection("AboutMe")}
      >
        <FontAwesomeIcon icon={faBriefcase} className={styles.icon} />
      </div>
      <div className={styles.navBubble}>
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
      </div>
    </div>
  );
};

export default NavBubbles;
