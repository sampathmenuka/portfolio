import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Award, BookOpen, Code, Users } from 'lucide-react';
import SkillsChart from '../components/SkillsChart';
import Timeline from '../components/Timeline';

const About: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '25+' },
    { icon: BookOpen, label: 'Courses Finished', value: '15+' },
    { icon: Award, label: 'Certifications', value: '8' },
    { icon: Users, label: 'Team Projects', value: '12' },
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Passionate about creating innovative solutions and pushing the boundaries of technology
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <stat.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bio Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Profile"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              My Journey in Software Engineering
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a dedicated software engineering student at Sabaragamuwa University, passionate about 
              building scalable solutions and exploring the intersection of technology and innovation. 
              My journey began with curiosity about how software shapes our world, and it has evolved 
              into a deep commitment to creating meaningful applications.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              With expertise in Java, Python, React, and modern development practices, I focus on 
              full-stack development, AI integration, and system design. I believe in writing clean, 
              maintainable code and following best practices in software architecture.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source projects, learning 
              new technologies, or collaborating with fellow developers on innovative solutions. 
              I'm always excited to take on new challenges and push the boundaries of what's possible.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Skills Visualization */}
      <SkillsChart />

      {/* Timeline */}
      <Timeline />

      {/* Philosophy Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Software Engineering?
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              "Technology is not just about code—it's about solving real-world problems and making 
              a positive impact. Every line of code I write is driven by the desire to create 
              something meaningful, whether it's optimizing a business process, enhancing user 
              experience, or building the foundation for future innovations."
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;