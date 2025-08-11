import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useMotionPrefs } from './animations';
import { FaLocationDot, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa6';

const Contact = () => {
  const { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } = useMotionPrefs();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    description: ''
  });
  const [flashKey, setFlashKey] = useState(0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <FaLocationDot className="text-white" />,
      title: 'Address',
      details: ['321, Technopark, Casablanca,', 'Morocco']
    },
    {
      icon: <FaPhone className="text-white" />,
      title: 'Phone',
      details: ['+212 770-181715']
    },
    {
      icon: <FaEnvelope className="text-white" />,
      title: 'Email',
      details: ['contact@eaneer.com']
    },
    {
      icon: <FaClock className="text-white" />,
      title: 'Business Hours',
      details: ['Monday-Friday', '9:00 AM - 6:00 PM']
    }
  ];

  return (
    <section className="py-20 px-6" id="contact" style={{ backgroundColor: '#1A3D3D' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              background: 'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, #B0E0E0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
            variants={fadeInUp(0.1)}
          >
            Contact Us
          </motion.h2>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            style={{
              background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, #B0E0E0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
            variants={fadeInUp(0.15)}
          >
            Ready to start your next electrical engineering project?
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            variants={staggerContainer(0.08, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 p-2"
                variants={fadeInLeft(0.05 + index * 0.05)}
              >
                <div
                  className="relative h-14 w-14 rounded-2xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #254148 0%, #4A9B8E 100%)'
                  }}
                >
                  {/* subtle inner highlight to match design */}
                  <span
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    style={{ background: 'radial-gradient(closest-side, rgba(255,255,255,0.16), transparent 70%)' }}
                  />
                  <span className="text-3xl text-white">{info.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {info.title}
                  </h3>
                  {info.details.map((detail, detailIndex) => (
                    <p 
                      key={detailIndex} 
                      className="text-teal-200/90 text-sm"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10"
            variants={fadeInRight(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  variants={fadeInUp(0.1)}
                >
                  <label className="block font-medium mb-2 text-white">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=""
                    className="w-full px-4 py-3 rounded-lg text-white placeholder-teal-200/60 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-400/60 transition-colors border"
                    style={{
                      backgroundColor: 'rgba(26, 61, 61, 0.5)',
                      border: '1px solid rgba(77, 155, 142, 0.2)'
                    }}
                    required
                  />
                </motion.div>

                <motion.div
                  variants={fadeInUp(0.15)}
                >
                  <label className="block font-medium mb-2 text-white">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=""
                    className="w-full px-4 py-3 rounded-lg text-white placeholder-teal-200/60 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-400/60 transition-colors border"
                    style={{
                      backgroundColor: 'rgba(26, 61, 61, 0.5)',
                      border: '1px solid rgba(77, 155, 142, 0.2)'
                    }}
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                variants={fadeInUp(0.2)}
              >
                <label className="block font-medium mb-2 text-white">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full px-4 py-3 rounded-lg text-white placeholder-teal-200/60 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-400/60 transition-colors border"
                  style={{
                    backgroundColor: 'rgba(26, 61, 61, 0.5)',
                    border: '1px solid rgba(77, 155, 142, 0.2)'
                  }}
                />
              </motion.div>

              <motion.div
                variants={fadeInUp(0.25)}
              >
                <label className="block font-medium mb-2 text-white">
                  Service Interest
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg text-white placeholder-teal-200/60 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-400/60 transition-colors border"
                  style={{
                    backgroundColor: 'rgba(26, 61, 61, 0.5)',
                    border: '1px solid rgba(77, 155, 142, 0.2)'
                  }}
                >
                  <option value="">Select a service</option>
                  <option value="power-systems">Power Systems Design</option>
                  <option value="renewable-energy">Renewable Energy Solutions</option>
                  <option value="industrial-automation">Industrial Automation</option>
                  <option value="smart-grid">Smart Grid Technology</option>
                  <option value="energy-audits">Energy Audits & Consulting</option>
                  <option value="maintenance">Maintenance & Support</option>
                </select>
              </motion.div>

              <motion.div
                variants={fadeInUp(0.3)}
              >
                <label className="block font-medium mb-2 text-white">
                  Project Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg text-white placeholder-teal-200/60 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-400/60 transition-colors resize-none border"
                  style={{
                    backgroundColor: 'rgba(26, 61, 61, 0.5)',
                    border: '1px solid rgba(77, 155, 142, 0.2)'
                  }}
                  placeholder="Tell us about your project..."
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="relative overflow-hidden w-full text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-md shadow-teal-900/20 border border-teal-600/30"
                style={{
                  background: 'linear-gradient(135deg, #254148 0%, #4A9B8E 100%)'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                variants={fadeInUp(0.35)}
                onClick={() => setFlashKey((k) => k + 1)}
              >
                {/* Shine flash overlay */}
                <motion.div
                  key={flashKey}
                  initial={{ x: '-150%', opacity: 0 }}
                  animate={{ x: '150%', opacity: [0, 0.8, 0] }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm"
                />
                <span className="relative z-10">Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
