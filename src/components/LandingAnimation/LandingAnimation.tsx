import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./LandingAnimation.module.css";

const quoteText =
  "The computer was born to solve problems that did not exist before.";
const quoteAuthor = "- Bill Gates";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
  exit: { opacity: 0 },
};

const child = {
  hidden: { opacity: 0, x: -20, y: 10 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const LandingAnimation: React.FC = () => {
  const [showQuote, setShowQuote] = useState(true);
  const [showAuthor, setShowAuthor] = useState(false);

  useEffect(() => {
    const authorTimer = setTimeout(() => {
      setShowAuthor(true);
    }, 4000);

    const quoteTimer = setTimeout(() => {
      setShowQuote(false);
    }, 5000);

    return () => {
      clearTimeout(authorTimer);
      clearTimeout(quoteTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {showQuote && (
        <motion.div
          className={styles.hero}
          variants={container}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
        >
          <motion.div className={styles.quoteContainer}>
            {quoteText.split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={child}
                className={styles.heroText}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.div>
          {showAuthor && (
            <motion.div variants={child} className={styles.author}>
              {quoteAuthor}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LandingAnimation;
