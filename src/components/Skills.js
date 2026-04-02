import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaNodeJs, FaPython, FaDatabase, 
  FaGitAlt, FaDocker, FaAws, FaHtml5, 
  FaCss3Alt, FaJs 
} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'React', icon: FaReact, color: 'text-blue-400' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'Python', icon: FaPython, color: 'text-blue-400' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'MongoDB', icon: FaDatabase, color: 'text-green-500' },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
    { name: 'Docker', icon: FaDocker, color: 'text-blue-400' },
    { name: 'AWS', icon: FaAws, color: 'text-yellow-500' },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-gray-800 rounded-xl p-6 text-center hover:shadow-xl transition-all cursor-pointer group"
            >
              <skill.icon className={`text-5xl mx-auto mb-3 ${skill.color} group-hover:scale-110 transition-transform`} />
              <p className="text-gray-300 font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;