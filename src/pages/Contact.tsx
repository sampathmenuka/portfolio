import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Calendar } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@sabrase.dev',
      href: 'mailto:hello@sabrase.dev',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 77 123 4567',
      href: 'tel:+94771234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ratnapura, Sri Lanka',
      href: 'https://maps.google.com',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-blue-600',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com',
      color: 'hover:text-blue-400',
    },
  ];

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
            Let's Connect
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on innovative projects, 
            or simply chat about technology and software engineering.
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Whether you're looking for a collaboration partner, have a project in mind, 
                or just want to connect with a fellow developer, I'd love to hear from you. 
                Let's build something amazing together!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'Location' ? '_blank' : undefined}
                  rel={item.label === 'Location' ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {item.label}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Follow Me Online
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-400 ${social.color} transition-colors duration-300`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Schedule Meeting */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="w-6 h-6" />
                <h3 className="text-xl font-bold">Schedule a Meeting</h3>
              </div>
              <p className="mb-4 text-blue-100">
                Prefer to chat face-to-face? Schedule a virtual meeting to discuss your project or just have a coffee chat!
              </p>
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                Book a Call
              </button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="mt-20 py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start a Project?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              I'm currently available for freelance work and exciting collaborations. 
              Let's discuss how we can bring your ideas to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Start a Project</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                View My Work
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;