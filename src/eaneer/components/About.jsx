import React from 'react';
import { motion } from 'framer-motion';
import { useMotionPrefs } from './animations';

const About = () => {
  const values = [
    {
      title: "Pushing boundaries",
      subtitle: "with latest technology"
    },
    {
      title: "Environmental",
      subtitle: "responsibility in all projects"
    },
    {
      title: "Delivering superior",
      subtitle: "quality solutions"
    },
    {
      title: "Transparent and",
      subtitle: "honest business practices"
    }
  ];

  const { fadeInUp, staggerContainer } = useMotionPrefs();

  return (
    <section
      className="min-h-screen text-white p-8 md:p-16"
      id="about"
      style={{ backgroundColor: '#1A3D3D' }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className=""
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12"
            variants={fadeInUp(0.1)}
          >
            <span
              style={{
                background: 'linear-gradient(90deg, #FFFFFF 0%, #B0E0E0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              About Eaneer
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl leading-relaxed opacity-90 mb-16"
            variants={fadeInUp(0.15)}
          >
            Founded by a team of passionate electrical engineers, Eaneer has grown from a small startup to a leading 
            provider of innovative engineering solutions. Our commitment to sustainability and cutting-edge technology 
            drives everything we do.
          </motion.p>

          <motion.div
            className="mb-12"
            variants={fadeInUp(0.2)}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg md:text-xl italic leading-relaxed opacity-90 max-w-3xl">
              To revolutionize the electrical engineering industry through innovative, sustainable solutions that power a 
              better tomorrow.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp(0.25)}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300"
                  variants={fadeInUp(0.3 + index * 0.05)}
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="text-white font-semibold mb-2 text-lg">{value.title}</h4>
                  <p className="text-teal-200 text-sm">{value.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
