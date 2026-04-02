import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-pink-500 text-lg mb-2">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Creative Designer
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Emmy is a passionate and creative web designer known for crafting visually stunning and user-friendly websites. With a keen eye for design and a deep understanding of modern web development, she transforms ideas into beautifully functional digital experiences.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            With over 5 years of experience in the industry, Emmy has worked with clients from around the world, delivering exceptional results that exceed expectations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;