import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { Download, ArrowRight, Code, Mouse } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [magneticElements, setMagneticElements] = useState([]);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({ x, y });

      // Create magnetic pulse effect
      const newElement = {
        x,
        y,
        id: Date.now(),
        size: Math.random() * 30 + 10
      };
      setMagneticElements(prev => [...prev, newElement]);

      // Remove old elements
      setTimeout(() => {
        setMagneticElements(prev => prev.filter(el => el.id !== newElement.id));
      }, 1000);
    };

    const heroElement = heroRef.current;
    heroElement.addEventListener('mousemove', handleMouseMove);

    return () => {
      heroElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.section
      ref={heroRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="h-screen flex items-center justify-center 
        bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 
        relative overflow-hidden text-white cursor-none"
    >
      {/* Tech-Inspired Cursor Effect */}
      {magneticElements.map((element) => (
        <motion.div
          key={element.id}
          initial={{ 
            opacity: 0.7, 
            scale: 1,
            backgroundColor: 'rgba(255,255,255,0.2)'
          }}
          animate={{ 
            opacity: 0,
            scale: 5,
            backgroundColor: 'rgba(255,255,255,0)',
            transition: { duration: 1, ease: "easeOut" }
          }}
          style={{
            position: 'absolute',
            left: element.x,
            top: element.y,
            width: element.size,
            height: element.size,
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 40,
            mixBlendMode: 'screen'
          }}
        />
      ))}

      {/* Floating Geometric Shapes */}
      <motion.div 
        className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-2xl"
        initial={{ rotate: 0, scale: 0.8 }}
        animate={{ 
          rotate: 360,
          scale: [0.8, 1.1, 0.9, 1],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-2xl"
        initial={{ rotate: 0 }}
        animate={{ 
          rotate: -360,
          scale: [0.9, 1.2, 0.8, 1],
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
        {/* Left Side - Content */}
        <div className="md:w-2/3 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm <span className="text-white/90">John Doe</span>
            </h1>

            <div className="text-2xl md:text-3xl mb-6 h-16">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'React Enthusiast',
                  2000,
                  'Creative Coder',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-medium text-white/80"
              />
            </div>

            <p className="text-lg md:text-xl mb-8 text-white/70 max-w-xl">
              Crafting innovative digital experiences with cutting-edge web technologies. 
              Transforming ideas into elegant, functional solutions.
            </p>

            <div className="flex space-x-4 justify-center md:justify-start">
              <motion.a
                href="#"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-6 py-3 bg-white text-purple-600 
                  rounded-full font-semibold hover:bg-white/90 
                  transition duration-300 shadow-lg"
              >
                <Download className="mr-2 w-5 h-5" />
                Download CV
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-6 py-3 border-2 border-white/50 
                  text-white rounded-full font-semibold 
                  hover:bg-white/10 transition duration-300"
              >
                View Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="hidden md:block md:w-1/3 ml-12 group"
        >
          <div 
            className="w-72 h-72 bg-white/20 rounded-full 
            flex items-center justify-center overflow-hidden 
            border-4 border-white/30 shadow-2xl 
            relative group-hover:scale-105 transition duration-300"
          >
            <img 
              src="/api/placeholder/300/300" 
              alt="Profile" 
              className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-500/50 
              opacity-0 group-hover:opacity-100 transition duration-300 
              flex items-center justify-center">
              <Code className="w-16 h-16 text-white" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: [0, 1, 0],
          y: [20, 0, 20]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 
          flex flex-col items-center text-white/70"
      >
        <Mouse className="w-6 h-6 mb-2" />
        <span className="text-sm">Scroll Down</span>
      </motion.div>
    </motion.section>
  );
}