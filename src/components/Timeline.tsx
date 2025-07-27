import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Award, Code, GraduationCap } from 'lucide-react';

const Timeline: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const timelineItems = [
    {
      year: '2024',
      title: 'Advanced Software Engineering',
      description: 'Deepened knowledge in system architecture, design patterns, and advanced algorithms. Completed major projects in AI and machine learning.',
      icon: Code,
      type: 'academic',
    },
    {
      year: '2023',
      title: 'Full-Stack Development Focus',
      description: 'Specialized in full-stack development with React, Node.js, and database systems. Built several production-ready applications.',
      icon: Code,
      type: 'project',
    },
    {
      year: '2023',
      title: 'Open Source Contributions',
      description: 'Started contributing to open-source projects and participating in coding competitions. Gained recognition in the developer community.',
      icon: Award,
      type: 'achievement',
    },
    {
      year: '2022',
      title: 'Software Engineering Program',
      description: 'Enrolled in Software Engineering at Sabaragamuwa University. Mastered fundamental programming concepts and data structures.',
      icon: GraduationCap,
      type: 'academic',
    },
    {
      year: '2022',
      title: 'First Major Project',
      description: 'Developed a customer management system using Java and MySQL. This project sparked my passion for database design and system architecture.',
      icon: Code,
      type: 'project',
    },
    {
      year: '2021',
      title: 'Programming Journey Begins',
      description: 'Started learning programming with Python and Java. Completed various online courses and built my first applications.',
      icon: Code,
      type: 'milestone',
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'academic':
        return 'from-blue-500 to-blue-600';
      case 'project':
        return 'from-green-500 to-green-600';
      case 'achievement':
        return 'from-purple-500 to-purple-600';
      case 'milestone':
        return 'from-orange-500 to-orange-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Key milestones and achievements in my software engineering journey
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline Point */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getTypeColor(item.type)} flex items-center justify-center shadow-lg`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center space-x-2 mb-3">
                      <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;