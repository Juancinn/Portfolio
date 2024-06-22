import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const quoteText = "Hello, World!";

const Hero: React.FC = () => {
  return (
    <motion.div
      className={styles.hero}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.heroText}>
        {Array.from(quoteText).map((char, index) => (
          <motion.span
            key={index}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.1, ease: "easeOut" },
            }}
            initial={{ scale: 1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ display: "inline-block" }}
            className={styles.heroText}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default Hero;
