import React from 'react';
import { motion } from "framer-motion";
import { 
  CodeIcon, 
  ServerIcon, 
  PaletteIcon 
} from "lucide-react";

export default function About() {
  const skills = [
    { 
      icon: CodeIcon, 
      title: "Frontend Development", 
      description: "Creating responsive and interactive web applications" 
    },
    { 
      icon: ServerIcon, 
      title: "Backend Solutions", 
      description: "Designing scalable server-side architectures" 
    },
    { 
      icon: PaletteIcon, 
      title: "UI/UX Design", 
      description: "Crafting intuitive and beautiful user experiences" 
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 px-6 bg-gray-50 text-gray-900 text-center"
    >
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-12"
      >
        About Me
      </motion.h2>

      <p className="text-lg mt-4 max-w-2xl mx-auto mb-16 text-gray-600">
        Passionate Full Stack Developer specializing in modern web applications. 
        Expertise in React, Framer Motion, and innovative technologies.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => {
          const SkillIcon = skill.icon;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.3,
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <SkillIcon className="w-16 h-16 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}