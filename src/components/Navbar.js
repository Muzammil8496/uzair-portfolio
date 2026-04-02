import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Left Side */}
          <motion.a
            href="#home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold text-gray-800"
          >
            EMMY<span className="text-pink-500">®</span>
          </motion.a>

          {/* Navigation Links - Center/Right Side */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-pink-500 transition-colors">Home</a>
            <a href="#about" className="text-gray-600 hover:text-pink-500 transition-colors">About</a>
            <a href="#projects" className="text-gray-600 hover:text-pink-500 transition-colors">Portfolio</a>
            <a href="#blog" className="text-gray-600 hover:text-pink-500 transition-colors">Blog</a>
            <a href="#contact" className="text-gray-600 hover:text-pink-500 transition-colors">Contact</a>
            <a href="#contact" className="px-6 py-2 border-2 border-pink-500 text-pink-500 rounded-full hover:bg-pink-500 hover:text-white transition-all">
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-600 hover:text-pink-500 py-2" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#about" className="text-gray-600 hover:text-pink-500 py-2" onClick={() => setIsOpen(false)}>About</a>
              <a href="#projects" className="text-gray-600 hover:text-pink-500 py-2" onClick={() => setIsOpen(false)}>Portfolio</a>
              <a href="#blog" className="text-gray-600 hover:text-pink-500 py-2" onClick={() => setIsOpen(false)}>Blog</a>
              <a href="#contact" className="text-gray-600 hover:text-pink-500 py-2" onClick={() => setIsOpen(false)}>Contact</a>
              <a href="#contact" className="px-6 py-2 border-2 border-pink-500 text-pink-500 rounded-full inline-block text-center" onClick={() => setIsOpen(false)}>Let's Talk</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;