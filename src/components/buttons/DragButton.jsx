import React from "react";
import { motion } from "motion/react";

const DragButton = () => {
  return (
    <div>
      <motion.div className="card cursor-grab px-5 py-2 bg-pink-400 border-e-white rounded-2xl" 
      drag
      dragConstraints={{left:-50, right:50, top:-50, bottom:50}}
      dragElastic={0.2  }
      >
        Drag Me!!
      </motion.div>
    </div>
  );
};

export default DragButton;
