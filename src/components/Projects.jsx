import React, { useState } from 'react';
import { motion } from "framer-motion";
import { 
  CodeIcon, 
  DatabaseIcon, 
  LayersIcon 
} from "lucide-react";

const projects = [   
  { 
    title: "E-commerce Platform", 
    description: "A fully functional e-commerce app with modern features.", 
    link: "#",
    icon: CodeIcon,
    technologies: ["React", "Node.js", "MongoDB"]
  },   
  { 
    title: "Interactive Portfolio", 
    description: "Showcasing creative designs with smooth animations.", 
    link: "#",
    icon: LayersIcon,
    technologies: ["Next.js", "Framer Motion", "Tailwind"]
  },   
  { 
    title: "Task Manager", 
    description: "A sleek tool for managing daily tasks with real-time updates.", 
    link: "#",
    icon: DatabaseIcon,
    technologies: ["React", "Firebase", "Redux"]
  } 
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="py-20 px-6 bg-white text-gray-900 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-12"
      >
        My Projects
      </motion.h2>
      
      <motion.div
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1, 
            transition: { 
              staggerChildren: 0.3,
              delayChildren: 0.2 
            } 
          }
        }}
      >
        {projects.map((project, index) => {
          const ProjectIcon = project.icon;
          
          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" } 
                }
              }}
              className="relative"
            >
              <motion.a
                href={project.link}
                className={`
                  block p-6 bg-white rounded-xl shadow-lg 
                  transform transition duration-500 
                  hover:scale-105 hover:shadow-2xl
                  border border-gray-100
                  relative overflow-hidden
                  ${hoveredProject === index ? 'scale-105 shadow-2xl' : ''}
                `}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Hover effect overlay */}
                {hoveredProject === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-90 z-0"
                  />
                )}
                
                <div className="relative z-10">
                  <div className="mb-4 flex justify-center">
                    <ProjectIcon 
                      className={`
                        w-16 h-16 
                        ${hoveredProject === index ? 'text-white' : 'text-blue-600'}
                        transition-colors duration-300
                      `}
                    />
                  </div>
                  
                  <h3 
                    className={`
                      text-2xl font-semibold mb-2
                      ${hoveredProject === index ? 'text-white' : 'text-gray-800'}
                    `}
                  >
                    {project.title}
                  </h3>
                  
                  <p 
                    className={`
                      text-sm mb-4
                      ${hoveredProject === index ? 'text-gray-100' : 'text-gray-600'}
                    `}
                  >
                    {project.description}
                  </p>
                  
                  <div className="flex justify-center space-x-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`
                          text-xs px-2 py-1 rounded-full
                          ${hoveredProject === index 
                            ? 'bg-white/20 text-white' 
                            : 'bg-gray-100 text-gray-700'}
                          transition-colors duration-300
                        `}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}