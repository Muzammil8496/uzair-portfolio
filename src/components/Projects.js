import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: 'MyCrmSim',
      link: 'https://mycrmsim.com/',
      description: 'A simple yet powerful CRM solution to manage customers, track leads, and grow your business efficiently.',
      category: 'Web Development',
      image: 'crmsim.png'
    },
    {
      title: 'Sendify',
      link: 'https://portal.sendifyapp.com/',
      description: 'Sustainable e-commerce platform for eco-friendly products. Includes product filtering, cart system, and eco-impact calculator.',
      category: 'E-Commerce',
      image: 'sendify_logo.png',
      imagebackground: 'bg-blue-500'
    },
    {
      title: 'GlamBar Beauty Lounge',
      link: 'https://glambarbeautylounge.com',
      description: 'Creative portfolio website with smooth animations and modern design. Fully responsive and optimized for performance.',
      category: 'Design',
      image: 'glambar.jpeg'
    },
    {
      title: 'Perth Cheap Taxi',
      link: 'https://your-taxi-link.com',
      description: 'Creative portfolio website with smooth animations and modern design. Fully responsive and optimized for performance.',
      category: 'Design',
      image: 'Taxi.png',
    },
    {
      title: 'Nutrafi Kitchen',
      link: 'https://nutrafikitchen.com',
      description: 'Creative portfolio website with smooth animations and modern design. Fully responsive and optimized for performance.',
      category: 'Design',
      image: 'nutrafi.jpeg'
    },
    {
      title: 'SerenaBeds',
      link: 'https://serenabeds.com/',
      description: 'Creative portfolio website with smooth animations and modern design. Fully responsive and optimized for performance.',
      category: 'Design',
      image: 'serena.jpeg'
    },
    {
      title: 'SerenaBeds',
      link: 'https://serenabeds.com/',
      description: 'Creative portfolio website with smooth animations and modern design. Fully responsive and optimized for performance.',
      category: 'Design',
      image: 'serena.jpeg'
    },
  ];

  // Decide which projects to display
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-pink-500 text-lg mb-2">My Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.a
              key={project.title + index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-pink-500/20 opacity-0 hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-pink-500 transition">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                <span className="inline-block px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">
                  {project.category}
                </span>
              </div>

            </motion.a>
          ))}
        </div>

        {/* Only show button if there are more than 6 projects */}
        {projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-block px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all"
            >
              {showAll ? 'Show Less' : 'View All Projects'}
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Projects;