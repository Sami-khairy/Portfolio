import React from 'react';
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="h-screen flex flex-col items-center justify-center text-center 
        bg-gradient-to-r from-blue-500 to-purple-600 text-white 
        relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-20"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 40, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
      </motion.div>

      <div className="relative z-10 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-6xl font-extrabold tracking-wide mb-6"
        >
          Welcome to My Portfolio
        </motion.h1>

        <TypeAnimation
          sequence={[
            'Full Stack Developer',
            2000,
            'React Enthusiast',
            2000,
            'Creative Coder',
            2000,
          ]}
          wrapper="p"
          speed={50}
          repeat={Infinity}
          className="text-xl md:text-2xl mb-8 font-medium"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a 
            href="#projects"
            className="px-6 py-3 bg-white text-blue-600 
            rounded-full font-semibold 
            hover:bg-blue-50 transition duration-300 
            inline-block shadow-lg hover:shadow-xl"
          >
            View My Work
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}