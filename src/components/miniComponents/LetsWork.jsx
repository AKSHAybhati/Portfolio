import React, { useState } from "react";
import { motion } from "motion/react";
import GetInTouchCard from "./GetInTouchCard";

const LetsWork = () => {
  const [showCard, setShowCard] = useState(false);

  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/akshaybhati9/");
  };

  const handleGithub = () => {
    window.open("https://github.com/AKSHAybhati");
  };

  const handleMail = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=akshaybhati8290@gmail.com/",
    );
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="heading text-3xl sm:text-5xl font-serif font-bold text-center">
        Let's work together
      </div>

      <div className="para text-md sm:text-xl text-gray-600 sm:w-1/2 text-center">
        Have a project in mind? I'd love to hear about it.Drop me a line and
        let's create something amazing.
      </div>

      {/* BUTTON — hide when card open */}
      {!showCard && (
        <motion.div
          whileTap={{ scale: 0.92, y: 2 }}
          transition={{ type: "spring", stiffness: 150, damping: 8 }}
          onClick={() => setShowCard(true)}
          className="touch flex gap-4 px-8 py-4 bg-black text-white rounded-full items-center mt-8 cursor-pointer hover:bg-slate-900"
        >
          <div className="text sm:text-xl">Get in Touch</div>
          <div className="icon">
            <i className="bi bi-arrow-up-right"></i>
          </div>
        </motion.div>
      )}

      {/* CARD — show only when open */}
      {showCard && <GetInTouchCard close={() => setShowCard(false)} />}

        
      <div className="connect flex gap-8 text-2xl sm:text-3xl text-slate-500 mt-8">
        <div onClick={handleGithub}>
          <i className="bi bi-github cursor-pointer hover:text-black"></i>
        </div>
        <div onClick={handleLinkedin}>
          <i className="bi bi-linkedin cursor-pointer hover:text-blue-800"></i>
        </div>
        <div onClick={handleMail}>
          <i className="bi bi-envelope cursor-pointer hover:text-red-600"></i>
        </div>
      </div>
    </div>
  );
};

export default LetsWork;
