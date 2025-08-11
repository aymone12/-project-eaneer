import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Particles from './Particles';

const Hero = () => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-slate-900 via-teal-800 to-slate-900 pt-32 pb-20 px-6 relative overflow-hidden min-h-screen flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* OGL Particles background layer */}
      <Particles
        className="opacity-60"
        particleCount={180}
        particleSpread={10}
        speed={0.09}
        particleColors={["#FFFFFF", "#B0E0E0", "#4A9B8E"]}
        moveParticlesOnHover={false}
        alphaParticles={true}
        particleBaseSize={120}
        sizeRandomness={1}
        cameraDistance={22}
        disableRotation={false}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center md:text-left max-w-4xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Electrical Innovation for<br/>
            a <span 
              style={{
                background: 'linear-gradient(90deg, #254148 0%, #4A9B8E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Cleaner Future
            </span>
          </motion.h1>
          
          <motion.h2
            className="text-2xl md:text-3xl text-teal-300 mb-8 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Next Generation Engineering Solutions
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Home to passionate electrical engineers, innovative thinkers, sustainability advocates, and dedicated professionals shaping a greener and more sustainable future through cutting-edge electrical engineering solutions.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <HeroButtons />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Extracted subcomponent to keep hooks usage clean
function HeroButtons() {
  const [shinePrimary, setShinePrimary] = useState(0);
  const [shineSecondary, setShineSecondary] = useState(0);

  return (
    <>
      <motion.button
        className="relative overflow-hidden text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #2D5F5F 0%, #4A9B8E 100%)',
          width: '156px',
          height: '52.67px'
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        onClick={() => setShinePrimary((k) => k + 1)}
      >
        {/* Shine overlay */}
        <motion.div
          key={shinePrimary}
          initial={{ x: '-150%', opacity: 0 }}
          animate={{ x: '150%', opacity: [0, 0.8, 0] }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm"
        />
        <span className="relative z-10">Get Started</span>
      </motion.button>

      <motion.button
        className="relative overflow-hidden text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center border-2 border-white/80 hover:bg-white/10"
        style={{
          width: '156px',
          height: '52.67px'
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        onClick={() => setShineSecondary((k) => k + 1)}
      >
        {/* Shine overlay */}
        <motion.div
          key={shineSecondary}
          initial={{ x: '-150%', opacity: 0 }}
          animate={{ x: '150%', opacity: [0, 0.8, 0] }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm"
        />
        <span className="relative z-10">Learn More</span>
      </motion.button>
    </>
  );
}

export default Hero;
