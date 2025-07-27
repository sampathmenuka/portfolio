import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TechStack: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const technologies = [
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-blue-600', level: 90 },
    { name: 'TypeScript', icon: '📘', color: 'from-blue-600 to-blue-800', level: 85 },
    { name: 'Java', icon: '☕', color: 'from-orange-400 to-red-600', level: 95 },
    { name: 'Python', icon: '🐍', color: 'from-green-400 to-blue-500', level: 88 },
    { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-700', level: 80 },
    { name: 'SQL', icon: '🗄️', color: 'from-purple-400 to-purple-600', level: 85 },
    { name: 'Git', icon: '🔀', color: 'from-orange-500 to-red-500', level: 90 },
    { name: 'Docker', icon: '🐳', color: 'from-blue-400 to-blue-600', level: 75 },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">
                  {tech.name}
                </h3>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${tech.color}`}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${tech.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {tech.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;