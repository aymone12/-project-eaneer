import React from 'react';
import { motion } from 'framer-motion';
import { useMotionPrefs } from './animations';
import Pic1 from '../assets/pic-1.png';
import Pic2 from '../assets/pic-2.png';
import Pic3 from '../assets/pic-3.png';
import Pic4 from '../assets/pic-4.png';
import Pic5 from '../assets/pic-5.png';
import Pic6 from '../assets/pic-6.png';

const Projects = () => {
  const { fadeInUp, staggerContainer } = useMotionPrefs();
  const projects = [
    {
      title: 'Solar Farm Installation',
      description: '500kW solar farm with advanced monitoring systems and grid integration for sustainable energy generation.',
      tags: ['Solar Panels', 'Inverters', 'Monitoring'],
      image: Pic1
    },
    {
      title: 'Industrial Automation System',
      description: 'Complete automation solution for manufacturing plant with advanced control systems and efficiency optimization.',
      tags: ['PLCs', 'SCADA', 'Sensors'],
      image: Pic2
    },
    {
      title: 'Smart Building Integration',
      description: 'IoT-enabled building management system with energy optimization and intelligent control features.',
      tags: ['IoT Sensors', 'Smart Controls', 'Energy Management'],
      image: Pic3
    },
    {
      title: 'Power Grid Modernization',
      description: 'Upgrading legacy power infrastructure with smart grid technology and fault detection systems.',
      tags: ['Smart Meters', 'Grid Automation', 'Fault Detection'],
      image: Pic4
    },
    {
      title: 'Renewable Energy Storage',
      description: 'Large-scale battery storage system for renewable energy with advanced power electronics and grid stabilization.',
      tags: ['Lithium-Ion Batteries', 'Power Electronics', 'Grid Integration'],
      image: Pic5
    },
    {
      title: 'EV Charging Network',
      description: 'City-wide electric vehicle charging infrastructure with fast charging capabilities and mobile app integration.',
      tags: ['Fast Chargers', 'Payment Systems', 'Mobile App'],
      image: Pic6
    }
  ];

  return (
    <section className="py-20 px-6" id="projects" style={{ backgroundColor: '#1A3D3D' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-4" variants={fadeInUp(0.1)}>
            <span
              style={{
                background: 'linear-gradient(90deg, #FFFFFF 0%, #B0E0E0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Our Projects
            </span>
          </motion.h2>
          <motion.p className="text-xl text-teal-200 max-w-3xl mx-auto" variants={fadeInUp(0.15)}>
            Showcasing our expertise through successful implementations
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden transition-all duration-300 group cursor-pointer"
              style={{
                background: 'rgba(8, 21, 29, 0.02)',
                border: '1px solid rgba(8, 21, 29, 0.2)',
                boxShadow: '0 6px 18px rgba(8, 21, 29, 0.2)'
              }}
              variants={fadeInUp(0.1 + index * 0.05)}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Project Image/Icon */}
              <div className="h-56 md:h-64 bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center overflow-hidden">
                {typeof project.image === 'string' && (project.image.startsWith('http') || project.image.endsWith('.png') || project.image.endsWith('.jpg') || project.image.endsWith('.jpeg') || project.image.startsWith('/')) ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                ) : (
                  <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-teal-100 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-white px-3 py-1 rounded-full text-sm font-medium"
                      style={{ 
                        backgroundColor: 'rgba(8, 21, 29, 0.14)',
                        boxShadow: '0 4px 12px rgba(8, 21, 29, 0.27)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
