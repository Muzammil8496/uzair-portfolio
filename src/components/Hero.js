import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-pink-500 text-lg mb-2">Hi, I'm Uzair Saeed!</p>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-4">
              Quality
              <br />
              <span className="text-pink-500">Assurance</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
             Uzair is a dedicated and detail-oriented QA professional, known for ensuring software and digital products meet the highest quality standards. With a sharp eye for detecting issues and a deep understanding of testing processes, he ensures that every product is reliable, efficient, and delivers a seamless user experience.
            </p>
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all shadow-md"
              >
                PROJECTS
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-pink-500 text-pink-500 rounded-full hover:bg-pink-500 hover:text-white transition-all"
              >
                HIRE ME
              </a>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              {/* Image Container - You can replace this image later */}
              <div className="w-full h-auto bg-gradient-to-br from-pink-200 to-pink-100 rounded-2xl p-8">
                <img 
                  src="uzair bhii.jpeg" 
                  alt="little boss"
                  className="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            {/* Decorative Circle */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-300 rounded-full opacity-50 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-pink-400 rounded-full opacity-50 blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;