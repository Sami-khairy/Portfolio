import React from 'react';
import { motion } from "framer-motion";
import { 
  GithubIcon, 
  LinkedinIcon, 
  TwitterIcon 
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { 
      icon: GithubIcon, 
      href: "https://github.com/yourusername",
      color: "hover:text-gray-800"
    },
    { 
      icon: LinkedinIcon, 
      href: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-600"
    },
    { 
      icon: TwitterIcon, 
      href: "https://twitter.com/yourusername",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <footer className="py-12 bg-gray-900 text-white text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <p className="mb-6 text-lg">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
        
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link, index) => {
            const SocialIcon = link.icon;
            return (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`
                  text-white/70 transition-colors duration-300
                  ${link.color}
                `}
              >
                <SocialIcon className="w-8 h-8" />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </footer>
  );
}