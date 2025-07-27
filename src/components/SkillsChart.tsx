import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';
import { Bar, Radar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const SkillsChart: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const programmingSkills = {
    labels: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++', 'SQL'],
    datasets: [
      {
        label: 'Proficiency Level',
        data: [95, 88, 90, 85, 75, 85],
        backgroundColor: [
          'rgba(244, 67, 54, 0.8)',
          'rgba(76, 175, 80, 0.8)',
          'rgba(255, 193, 7, 0.8)',
          'rgba(33, 150, 243, 0.8)',
          'rgba(156, 39, 176, 0.8)',
          'rgba(255, 87, 34, 0.8)',
        ],
        borderColor: [
          'rgba(244, 67, 54, 1)',
          'rgba(76, 175, 80, 1)',
          'rgba(255, 193, 7, 1)',
          'rgba(33, 150, 243, 1)',
          'rgba(156, 39, 176, 1)',
          'rgba(255, 87, 34, 1)',
        ],
        borderWidth: 2,
        borderRadius: 8,
      },
    ],
  };

  const technicalSkills = {
    labels: [
      'Frontend Development',
      'Backend Development',
      'Database Design',
      'System Architecture',
      'DevOps & CI/CD',
      'Mobile Development',
    ],
    datasets: [
      {
        label: 'Technical Skills',
        data: [90, 85, 88, 80, 75, 70],
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(59, 130, 246, 1)',
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Programming Languages',
        color: '#374151',
        font: {
          size: 18,
          weight: 'bold',
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: '#6B7280',
        },
        grid: {
          color: 'rgba(156, 163, 175, 0.2)',
        },
      },
      x: {
        ticks: {
          color: '#6B7280',
        },
        grid: {
          color: 'rgba(156, 163, 175, 0.2)',
        },
      },
    },
  };

  const radarOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Technical Expertise',
        color: '#374151',
        font: {
          size: 18,
          weight: 'bold',
        },
      },
    },
    scales: {
      r: {
        angleLines: {
          color: 'rgba(156, 163, 175, 0.3)',
        },
        grid: {
          color: 'rgba(156, 163, 175, 0.3)',
        },
        pointLabels: {
          color: '#6B7280',
          font: {
            size: 12,
          },
        },
        ticks: {
          color: '#6B7280',
          backdropColor: 'transparent',
        },
        beginAtZero: true,
        max: 100,
      },
    },
  };

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
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical proficiencies and areas of expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg"
          >
            <Bar data={programmingSkills} options={barOptions} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg"
          >
            <Radar data={technicalSkills} options={radarOptions} />
          </motion.div>
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Additional Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { skill: 'Agile/Scrum', level: 85 },
              { skill: 'Git/GitHub', level: 90 },
              { skill: 'Testing', level: 80 },
              { skill: 'Documentation', level: 88 },
            ].map((item, index) => (
              <div key={item.skill} className="text-center">
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    {item.skill}
                  </h4>
                  <div className="relative w-20 h-20 mx-auto">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-gray-200 dark:text-gray-600"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <motion.path
                        className="text-blue-600 dark:text-blue-400"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                        strokeDasharray={`${item.level}, 100`}
                        initial={{ strokeDasharray: '0, 100' }}
                        animate={inView ? { strokeDasharray: `${item.level}, 100` } : {}}
                        transition={{ duration: 1, delay: index * 0.1 + 0.8 }}
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        {item.level}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsChart;