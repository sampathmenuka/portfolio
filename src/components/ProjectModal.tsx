import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle, Target, Award } from 'lucide-react';

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-2xl">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Project Overview
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {project.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Target className="w-6 h-6 text-orange-500 mr-2" />
                  Challenges & Solutions
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.challenges}
                </p>
              </div>

              {/* Outcome */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Award className="w-6 h-6 text-purple-500 mr-2" />
                  Results & Impact
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.outcome}
                </p>
              </div>

              {/* Links */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;