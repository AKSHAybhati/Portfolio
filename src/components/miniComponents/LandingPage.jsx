import React from "react";
import { motion } from "motion/react";

const LandingPage = ({ scrollTo, refs }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };
  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="text-black flex flex-col lg:flex-row items-center gap-8"
    >
      <div className="flex-1">
      <motion.div variants={item} className="hello text-gray-500 text-xl">
        Hello, I'm
      </motion.div>
      <motion.div
        variants={item}
        className="developer w-64 font-serif font-bold text-5xl md:text-7xl lg:text-9xl "
      >
        Creative Developer
      </motion.div>
      <motion.div
        variants={item}
        className="para xl:w-3/4 md:text-xl lg:text-2xl text-gray-600 mt-5"
      >
        I enjoy building scalable web applications and bringing ideas to life
        through clean, efficient code. On the frontend, I focus on creating
        visually appealing and responsive websites using Tailwind CSS and custom
        CSS styling.
      </motion.div>
      <motion.div
        variants={item}
        className="buttons flex gap-6 mt-5 items-center"
      >
        <motion.div
          whileTap={{ scale: 0.92, y: 2 }}
          transition={{ type: "spring", stiffness: 150, damping: 8 }}
          onClick={()=> scrollTo(refs.projects)}
          className="work px-6 py-3 border-2 rounded-full text-white bg-black cursor-pointer hover:bg-slate-800"
        >
          View Work
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.92, y: 2 }}
          transition={{ type: "spring", stiffness: 150, damping: 8 }}
          onClick={() => scrollTo(refs.contact)}
          className="contact hover:bg-slate-100 px-6 cursor-pointer py-3 border-2 rounded-full"
        >
          Contact
        </motion.div>
      </motion.div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
