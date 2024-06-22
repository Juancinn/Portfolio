import React from "react";
import styles from "./Arrow.module.css";

const Arrow: React.FC = () => {
  return (
    <div className={styles.arrow}>
      <svg
        className={styles.arrowIcon}
        viewBox="0 0 448 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "var(--gradient-start)", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "var(--gradient-end)", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
          fill="url(#gradient1)"
        ></path>
      </svg>
    </div>
  );
};

export default Arrow;
