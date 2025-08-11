import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Sun, Plus, Grid3X3, Play, MapPin } from 'lucide-react';
import { useMotionPrefs } from './animations';
import SpotlightCard from './SpotlightCard';

export default function Services() {
  const { fadeInUp, staggerContainer } = useMotionPrefs();
  const services = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Power Systems Design",
      description: "Comprehensive electrical power systems design and analysis for industrial, commercial, and residential applications with cutting-edge technology."
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: "Renewable Energy Solutions",
      description: "Sustainable energy solutions including solar, wind, and battery storage systems for a greener future and reduced environmental impact."
    },
    {
      icon: <Plus className="w-6 h-6" />,
      title: "Industrial Automation",
      description: "Advanced automation systems and control solutions to optimize industrial processes and efficiency with state-of-the-art technology."
    },
    {
      icon: <Grid3X3 className="w-6 h-6" />,
      title: "Smart Grid Technology",
      description: "Modern smart grid solutions for efficient energy distribution and management with real-time monitoring and optimization capabilities."
    },
    {
      icon: <Play className="w-6 h-6 rotate-90" />,
      title: "Energy Audits & Consulting",
      description: "Comprehensive energy efficiency assessments and optimization recommendations to reduce costs and improve sustainability performance."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Maintenance & Support",
      description: "Reliable maintenance services and technical support to ensure optimal performance of electrical systems with 24/7 emergency response."
    }
  ];

  return (
    <div 
      id="services"
      className="min-h-screen py-16 px-4 relative overflow-hidden"
      style={{
        backgroundColor: '#1A3D3D'
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        {/* Actual header content */}
        <div className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-4" variants={fadeInUp(0.1)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <span
              style={{
                background: 'linear-gradient(90deg, #FFFFFF 0%, #B0E0E0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Our Services
            </span>
          </motion.h2>
          <motion.p className="text-teal-100 text-lg md:text-xl max-w-2xl mx-auto" variants={fadeInUp(0.2)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            Comprehensive electrical engineering solutions for every need
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          style={{ gridAutoRows: '1fr' }}
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp(0.15 + index * 0.05)} className="h-full">
              <SpotlightCard
                className="h-full rounded-lg p-6 hover:transform transition-all flex flex-col"
                style={{
                  background: 'rgba(8, 21, 29, 0.1)',
                  border: '1px solid rgba(8, 21, 29, 0.2)'
                }}
                spotlightColor="rgba(176, 224, 224, 0.25)"
              >
                {/* Icon */}
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-teal-200"
                  style={{ background: 'linear-gradient(135deg, #254148 0%, #4A9B8E 100%)' }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-teal-100 text-sm leading-relaxed mt-auto">
                  {service.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}