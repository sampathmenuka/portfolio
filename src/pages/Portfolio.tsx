import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Search, Filter } from 'lucide-react';
import ProjectModal from '../components/ProjectModal';

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filters = ['All', 'Web Development', 'AI/ML', 'Mobile', 'Desktop', 'Database'];

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Resume Improver',
      description: 'Intelligent resume optimization using NLP and machine learning algorithms to enhance job application success rates with real-time feedback and suggestions.',
      longDescription: 'A comprehensive AI-powered platform that analyzes resumes using natural language processing and machine learning algorithms. The system provides detailed feedback on content optimization, keyword matching, and formatting suggestions to improve job application success rates.',
      image: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL', 'Docker'],
      category: 'AI/ML',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      features: [
        'Real-time resume analysis and scoring',
        'AI-powered content suggestions',
        'Industry-specific keyword optimization',
        'ATS compatibility checker',
        'Multiple export formats'
      ],
      challenges: 'Implementing accurate NLP models for resume parsing and creating meaningful feedback algorithms.',
      outcome: 'Improved job application success rate by 40% for beta users.',
    },
    {
      id: 2,
      title: 'Customer Management System',
      description: 'Enterprise-grade CRM with real-time data processing, advanced analytics dashboard, and automated reporting capabilities.',
      longDescription: 'A full-featured customer relationship management system built with Java Spring Boot and React. Features include customer data management, sales tracking, automated reporting, and real-time analytics dashboard.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'Redis', 'Docker'],
      category: 'Web Development',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      features: [
        'Customer data management',
        'Sales pipeline tracking',
        'Automated report generation',
        'Real-time analytics dashboard',
        'Email integration'
      ],
      challenges: 'Optimizing database queries for large datasets and implementing real-time updates.',
      outcome: 'Reduced customer data processing time by 60% and improved sales team productivity.',
    },
    {
      id: 3,
      title: 'AgroTech Farm Database',
      description: 'Comprehensive agricultural database system with IoT integration, predictive analytics, and automated monitoring.',
      longDescription: 'An advanced database system designed for modern agricultural operations. Integrates IoT sensors for real-time monitoring, predictive analytics for crop management, and automated reporting for farm optimization.',
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['PostgreSQL', 'Node.js', 'IoT', 'Python', 'Chart.js', 'AWS'],
      category: 'Database',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      features: [
        'IoT sensor data collection',
        'Predictive crop analytics',
        'Weather integration',
        'Automated irrigation control',
        'Farm performance reports'
      ],
      challenges: 'Handling large volumes of IoT data and implementing reliable predictive models.',
      outcome: 'Increased crop yield by 25% and reduced water usage by 30%.',
    },
    {
      id: 4,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      longDescription: 'A complete e-commerce platform built with modern web technologies. Features include product catalog, shopping cart, payment processing, order management, and comprehensive admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Docker'],
      category: 'Web Development',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      features: [
        'Product catalog management',
        'Shopping cart and checkout',
        'Payment processing',
        'Order tracking',
        'Admin dashboard'
      ],
      challenges: 'Implementing secure payment processing and optimizing for high traffic.',
      outcome: 'Successfully processed over 1000 transactions in the first month.',
    },
    {
      id: 5,
      title: 'Task Management Mobile App',
      description: 'Cross-platform mobile application for task management with real-time sync and collaboration features.',
      longDescription: 'A feature-rich task management mobile application built with React Native. Includes real-time synchronization, team collaboration, progress tracking, and offline capabilities.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Redux', 'AsyncStorage'],
      category: 'Mobile',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      features: [
        'Real-time task synchronization',
        'Team collaboration',
        'Progress tracking',
        'Offline mode',
        'Push notifications'
      ],
      challenges: 'Implementing offline functionality and real-time synchronization.',
      outcome: 'Downloaded by 5000+ users with 4.8-star rating.',
    },
    {
      id: 6,
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for business intelligence with real-time data visualization and reporting.',
      longDescription: 'A comprehensive business intelligence dashboard that transforms raw data into actionable insights. Features interactive charts, real-time updates, and customizable reporting capabilities.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      category: 'Web Development',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      features: [
        'Interactive data visualization',
        'Real-time updates',
        'Custom report generation',
        'Data export capabilities',
        'User role management'
      ],
      challenges: 'Optimizing performance for large datasets and creating intuitive visualizations.',
      outcome: 'Reduced report generation time from hours to minutes.',
    },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = selectedFilter === 'All' || project.category === selectedFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Portfolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in software development, 
            system design, and innovative problem-solving
          </p>
        </motion.div>
      </section>

      {/* Filters and Search */}
      <section className="container mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedFilter === filter
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                      <span className="text-white font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <div className="flex space-x-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-sm font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No projects found matching your criteria.
            </p>
          </div>
        )}
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Portfolio;