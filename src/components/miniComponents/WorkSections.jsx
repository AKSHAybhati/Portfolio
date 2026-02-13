import React from 'react'
import {motion} from "motion/react"

const WorkSections = () => {
    const handleClick = ()=>{
        window.open("https://studysync-ten-gilt.vercel.app/")
    }
    const handleResume = ()=>{
        window.open("https://resume-builder-ai30.vercel.app/")
    }
  return (
    <div className='flex flex-col gap-8'>
        <div className="heading text-2xl sm:text-4xl md:text-5xl font-serif font-bold">Selected Work</div>
        <motion.div 
        whileHover={{scale:0.98, y:1}}
        className="website bg-white p-8 rounded-xl flex flex-col gap-5">
            <div className="websiteHeading flex justify-between">
                <div className="heading text-xl sm:text-2xl font-serif">Ai ResumeBuilder</div>
                <motion.div 
                whileHover={{scale:1.5, y:5}}
                className="icon" onClick={handleResume}><i class="bi bi-arrow-up-right cursor-pointer"></i></motion.div>
            </div>
            <div className="para text-gray-500 sm:text-xl">An AI-powered resume editor with Multiple pre-designed templates users can select and personalize</div>
            <div className="techCards grid grid-cols-2 sm:grid-cols-4 lg:w-2/3 gap-4 text-base md:text-xl text-center">
                <div className="react px-3 py-1 bg-slate-200 rounded-full">React</div>
                <div className="react px-3 py-1 bg-slate-200 rounded-full">Node</div>
                <div className="react px-3 py-1 bg-slate-200 rounded-full">Express</div>
                <div className="react px-3 py-1 bg-slate-200 rounded-full">MongoDB</div>
            </div>
        </motion.div>
        <motion.div 
        whileHover={{scale:0.98, y:1}}
        className="website bg-white p-8 rounded-xl flex flex-col gap-5">
            <div className="websiteHeading flex justify-between">
                <div className="heading text-xl sm:text-2xl font-serif">StudySync</div>
                <motion.div 
                whileHover={{scale:1.5, y:5}}
                className="icon" onClick={handleClick}><i class="bi bi-arrow-up-right cursor-pointer"></i></motion.div>
            </div>
            <div className="para text-gray-500 sm:text-xl">A full-featured note management platform with User authentication (JWT), file uploads (Multer), likes, comments, and download
support</div>
            <div className="techCards grid grid-cols-2 sm:grid-cols-4 gap-4 lg:w-2/3 items-center text-base md:text-xl text-center">
                <div className="react px-3 py-1 bg-slate-200 rounded-full">React</div>
                <div className="react px-3 py-1 bg-slate-200 rounded-full">Multer</div>
                <div className="react px-3 py-1 bg-slate-200 rounded-full">Express</div>
                <div className="react px-3 py-1 bg-slate-200 rounded-full">Tailwind CSS</div>
            </div>
        </motion.div>
    </div>
  )
}

export default WorkSections;
