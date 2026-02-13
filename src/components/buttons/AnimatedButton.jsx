import React from "react";
import { motion } from "motion/react";

const AnimatedButton = ({ children }) => {
  return (
    <motion.button
      animate={{
        scale: 1.2,
        transition: { duration: 2 },
      }}
      whileTap={{ scale: 0.9, y: 1 }}
      transition={{ type: "spring", damping: 5, stiffness: 300 }}
      className="px-5 py-2 bg-blue-500 rounded-2xl"
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
