import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Download, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import TechStack from '../components/TechStack';
import FeaturedProjects from '../components/FeaturedProjects';
import ParticleBackground from '../components/ParticleBackground';

const Home: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              
               <img
                  src="/pictures/1.png"
                  alt="Sampath Menuka Chandimal"
                  className="w-56 h-56 rounded-full mx-auto mb-6 shadow-lg border-4 border-white dark:border-gray-800 object-cover"
                /> 


                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
          Hello, I'm
          <br />
          <span className="text-7xl md:text-8xl font-extrabold drop-shadow-lg tracking-wide bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            SAMPATH
          </span>
        </span>
            </motion.h1>
            
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-16">
              <Typewriter
                options={{
                  strings: [
                    'Building Scalable Solutions',
                    'Creating Innovative Applications',
                    'Exploring AI & Machine Learning',
                    'Designing User Experiences',
                    'Solving Complex Problems'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </div>

            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Passionate computer science student at Sabaragamuwa University, specializing in full-stack development, 
              AI integration, and system design. Always eager to learn and tackle new challenges.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link 
  to="/portfolio"
  className="group bg-gradient-to-r from-indigo-600 via-purple-700 to-blue-700 hover:from-indigo-700 hover:via-purple-800 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl focus:ring-2 focus:ring-purple-400"
>
  <span>Explore My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <button className="group bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-600 hover:from-blue-800 hover:via-purple-800 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl border-0 focus:ring-2 focus:ring-blue-400">
    <Download className="w-5 h-5" />
    <span>Download Resume</span>
  </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              I'm always excited to collaborate on innovative projects and explore new technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                Get In Touch
              </Link>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Github className="w-5 h-5" />
                <span>View GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;