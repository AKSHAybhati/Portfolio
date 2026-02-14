import React, {useRef} from "react";
import LandingPage from "./miniComponents/LandingPage";
import AboutMe from "./miniComponents/AboutMe";
import WorkSections from "./miniComponents/WorkSections";
import LetsWork from "./miniComponents/LetsWork";
import { motion } from "motion/react";

const Content = ({scrollTo,refs}) => {
  const fadeup = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="text-black flex-1 min-h-screen lg:w-3/4 mx-auto flex flex-col gap-12 sm:gap-32 py-6 sm:py-16 px-6">
      <motion.div ref={refs.home}>
        <LandingPage scrollTo={scrollTo} refs={refs}/>
      </motion.div> 

      <motion.div
      ref={refs.about}
        variants={fadeup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <AboutMe />
      </motion.div>

      <motion.div
      ref={refs.projects}
        variants={fadeup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}>
        <WorkSections />
      </motion.div>

      <motion.div
      ref={refs.contact}
        variants={fadeup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}>
        <LetsWork />
      </motion.div>
    </div>
  );
};

export default Content;
