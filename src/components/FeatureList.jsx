import React from "react";
import { motion } from "motion/react";

const FeatureList = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const features = ["fast", "declarative", "powerful", "fun"];
  return (
    <motion.ul variants={container} initial="hidden" animate="visible">
      {features.map((feature) => (
        <motion.li key={feature} variants={item}>
          {feature}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default FeatureList;
