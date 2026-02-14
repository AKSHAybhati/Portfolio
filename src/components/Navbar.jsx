import { motion } from "motion/react";
import { useState } from "react";

const Navbar = ({ scrollTo, refs }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick=()=>{
    setMenuOpen(!menuOpen)
  }

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
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
      className="text-black sticky top-0 border-b py-2 border-gray-200 bg-slate-50 z-50"
    >
      <motion.div
        variants={item}
        className="lg:w-3/4 mx-auto h-12 flex items-center justify-between px-6 "
      >
        <motion.div className="left flex gap-5 text-lg">
          <motion.div
            onClick={() => scrollTo(refs.home)}
            className="portfolio font-mono text-xl font-bold cursor-pointer"
          >
            Portfolio
          </motion.div>
        </motion.div>

        <i onClick={handleClick} className="bi bi-list text-2xl sm:hidden cursor-pointer"></i>

        <motion.div className="right hidden sm:flex gap-5 text-gray-600 font-mono text-base items-center">
          <motion.div
            onClick={() => scrollTo(refs.about)}
            className="about cursor-pointer"
          >
            About
          </motion.div>
          <motion.div
            onClick={() => scrollTo(refs.projects)}
            className="about cursor-pointer"
          >
            Projects
          </motion.div>
          <motion.div
            onClick={() => scrollTo(refs.contact)}
            className="about cursor-pointer"
          >
            Contact
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.92, y: 2 }}
            transition={{ type: "spring", stiffness: 150, damping: 8 }}
            onClick={() => scrollTo(refs.contact)}
            className="about px-3 py-2 bg-black rounded-full text-white cursor-pointer"
          >
            Let's Talk
          </motion.div>
        </motion.div>
      </motion.div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="lg:w-3/4 mx-auto px-6 flex flex-col gap-4 sm:hidden py-4 text-gray-700 font-mono"
        >
          <div onClick={() => scrollTo(refs.about)}>About</div>
          <div onClick={() => scrollTo(refs.projects)}>Projects</div>
          <div onClick={() => scrollTo(refs.contact)}>Contact</div>
          <div
            onClick={() => scrollTo(refs.contact)}
            className="px-3 py-2 bg-black text-white rounded-full w-fit"
          >
            Let's Talk
          </div>
        </motion.div>
      )}

    </motion.div>
  );
};

export default Navbar;
