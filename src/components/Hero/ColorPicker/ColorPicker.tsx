import React from "react";
import styles from "./ColorPicker.module.css";

const gradients = [
  { name: "Default", colors: ["#f3ec78", "#af4261"] },
  { name: "Mint Green to Blue", colors: ["#1fdb70", "#48d3e8"] },
  { name: "Purple to Pink", colors: ["#d34edd", "#f29bff"] },
  { name: "Grey to White", colors: ["#a1a4a8", "#ffffff"] },
];

const ColorPicker: React.FC<{
  show: boolean;
  onClose: () => void;
  onSelect: (colors: string[]) => void;
}> = ({ show, onClose, onSelect }) => {
  if (!show) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h3>Select a Color Gradient</h3>
        <div className={styles.gradientOptions}>
          {gradients.map((gradient, index) => (
            <div
              key={index}
              className={styles.gradientOption}
              onClick={() => onSelect(gradient.colors)}
              style={{
                background: `linear-gradient(45deg, ${gradient.colors[0]}, ${gradient.colors[1]})`,
              }}
            >
              {gradient.name}
            </div>
          ))}
        </div>
        <button onClick={onClose} className={styles.closeButton}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ColorPicker;
