import React from 'react';
import { Code, Palette, Smartphone, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Development', level: 95, color: 'bg-blue-500' },
    { name: 'UI/UX Design', level: 92, color: 'bg-purple-500' },
    { name: 'React & TypeScript', level: 90, color: 'bg-green-500' },
    { name: 'Responsive Design', level: 88, color: 'bg-orange-500' },
  ];

  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that follows best practices'
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
      title: 'Design Thinking',
      description: 'User-centered approach to creating intuitive experiences'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-green-600 dark:text-green-400" />,
      title: 'Mobile First',
      description: 'Responsive designs that work perfectly on all devices'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-600 dark:text-orange-400" />,
      title: 'Performance',
      description: 'Optimized applications with lightning-fast load times'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              Crafting Digital Excellence
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              With over 3 years of experience in frontend development and UI/UX design, 
              I specialize in creating beautiful, functional web applications that users love. 
              My approach combines technical expertise with creative problem-solving to deliver 
              solutions that exceed expectations.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I work with modern technologies like React, TypeScript, and cutting-edge design tools 
              to bring your ideas to life. Whether you need a complete website redesign, 
              a new web application, or consultation on user experience, I'm here to help.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">
              Skills & Expertise
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Ready to collaborate?</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Let's discuss how I can help bring your project to life.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                Start a Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;