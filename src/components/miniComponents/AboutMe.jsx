import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div className="leftSide md:w-1/2 flex flex-col gap-6 text-xl">
        <div className="leftHeading text-3xl md:text-5xl font-serif font-bold">
          About Me
        </div>
        <div className="para text-gray-600 text-lg sm:text-xl">
          I'm a developer and designer who believes in the power of simplicity.
          With a focus on creating clean, functional, and beautiful digital
          products, I bring ideas to life through code.
        </div>
        <div className="para text-gray-600 text-lg sm:text-xl">
          My approach is rooted in minimalism — stripping away the unnecessary
          to reveal what truly matters. Every pixel, every line of code serves a
          purpose.
        </div>
      </div>
      <div className="rightSide flex flex-col gap-6 text-xl">
        <div className="rightHeading text-2xl md:text-3xl font-serif font-thin">
          Technologies
        </div>
        <div className="types grid grid-cols-2 md:grid-cols-3 gap-4 text-base sm:text-lg">
          <div className="react bg-slate-200 rounded-full text-center py-2">React</div>
          <div className="react bg-slate-200 rounded-full text-center px-1 py-2">Node.js</div>
          <div className="react bg-slate-200 rounded-full text-center px-1 py-2">Tailwind CSS</div>
          <div className="react bg-slate-200 rounded-full text-center px-1 py-2">Express.js</div>
          <div className="react bg-slate-200 rounded-full text-center px-1 py-2">MongoDB</div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
