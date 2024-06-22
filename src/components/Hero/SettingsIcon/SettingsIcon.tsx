import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import styles from "./SettingsIcon.module.css";

const SettingsIcon: React.FC<{ show: boolean; onClick: () => void }> = ({
  show,
  onClick,
}) => {
  return (
    <div
      className={`${styles.settingsIcon} ${show ? styles.show : ""}`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faCog} />
    </div>
  );
};

export default SettingsIcon;
