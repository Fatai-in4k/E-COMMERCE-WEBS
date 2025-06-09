import React from 'react';
import { Monitor, Smartphone, Palette, Code, Zap, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Monitor className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.',
      features: ['React & TypeScript', 'Responsive Design', 'Performance Optimization', 'SEO Ready']
    },
    {
      icon: <Palette className="w-12 h-12 text-purple-600 dark:text-purple-400" />,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create meaningful and delightful experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: <Smartphone className="w-12 h-12 text-green-600 dark:text-green-400" />,
      title: 'Mobile-First Design',
      description: 'Responsive designs that work perfectly across all devices and screen sizes.',
      features: ['Mobile Optimization', 'Cross-Browser Testing', 'Touch Interactions', 'Progressive Web Apps']
    },
    {
      icon: <Code className="w-12 h-12 text-orange-600 dark:text-orange-400" />,
      title: 'Frontend Development',
      description: 'Modern frontend solutions using the latest frameworks and development practices.',
      features: ['React Ecosystem', 'State Management', 'API Integration', 'Testing & QA']
    },
    {
      icon: <Zap className="w-12 h-12 text-red-600 dark:text-red-400" />,
      title: 'Performance Optimization',
      description: 'Speed up your website with advanced optimization techniques and best practices.',
      features: ['Core Web Vitals', 'Bundle Optimization', 'Image Optimization', 'Caching Strategies']
    },
    {
      icon: <Users className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />,
      title: 'Consultation',
      description: 'Strategic guidance on technology choices, architecture, and project planning.',
      features: ['Technical Audits', 'Code Reviews', 'Architecture Planning', 'Team Training']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-200">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss your needs and create something amazing together. 
            I'm here to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Free Consultation
            </a>
            <a 
              href="#projects"
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transform hover:scale-105 transition-all duration-200"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;