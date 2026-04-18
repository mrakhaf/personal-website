"use client";

import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 0 15px rgba(99, 102, 241, 0.3)",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle animated gradient background */}
      <div className="gradient-bg"></div>
      
      <motion.main 
        className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name */}
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent leading-tight"
          variants={itemVariants}
        >
          Muhammad Rakha Firdaus
        </motion.h1>

        {/* Role */}
        <motion.h2 
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Software Engineer
        </motion.h2>

        {/* Tagline */}
        <motion.p 
          className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 lg:mb-12 max-w-2xl mx-auto leading-relaxed bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Specializing in fintech and insurance systems, particularly decision platforms, with experience building scalable backend services, designing reliable APIs, and developing high-performance systems for complex business logic.
        </motion.p>

        {/* Personal touch */}
        <motion.p 
          className="text-xs sm:text-sm mb-4 sm:mb-6 md:mb-8 lg:mb-12 italic bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold"
          variants={itemVariants}
        >
          Also a DJ in my free time, with a passion for disco and house music.
        </motion.p>

        {/* Tech Stack Badges */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8 lg:mb-12"
          variants={itemVariants}
        >
          {["Go", "Kafka", "PostgreSQL", "Docker", "Node.js", "Python"].map((tech, index) => (
            <span
              key={tech}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-800 text-gray-300 rounded-full text-xs sm:text-sm border border-gray-700 hover:border-gray-600 transition-colors"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com/mrakhaf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
            variants={buttonVariants}
            whileHover="hover"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            GitHub
          </motion.a>
          
          <motion.a
            href="https://linkedin.com/in/mrakhaf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gray-800 text-gray-200 font-medium rounded-full border border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
            variants={buttonVariants}
            whileHover="hover"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn
          </motion.a>
        </motion.div>
      </motion.main>
    </div>
  );
}