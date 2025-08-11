import React from 'react';
import { motion } from 'framer-motion';
import { useMotionPrefs } from './animations';

const Statistics = () => {
  const { fadeInUp, staggerContainer } = useMotionPrefs();
  const stats = [
    { number: '25', label: 'Projects Completed' },
    { number: '25', label: 'Happy Clients' },
    { number: '33', label: 'Expert Engineers' },
    { number: '36', label: 'Success Rate' }
  ];

  return (
    <section className="py-16 px-6" style={{ backgroundColor: '#17373F' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={staggerContainer(0.08, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-sm rounded-lg p-8 text-center hover:opacity-80 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #254148 45%, #4A9B8E 100%)',
                border: '1px solid rgba(77, 155, 142, 0.4)'
              }}
              variants={fadeInUp(0.1 + index * 0.05)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4 }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ color: '#4D9B8E' }}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="text-teal-200 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
