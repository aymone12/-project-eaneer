import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoEaneer from '../assets/logo-eaneer.png';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideTimer, setHideTimer] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up or at top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
        
        // Clear existing timer
        if (hideTimer) {
          clearTimeout(hideTimer);
        }
        
        // Set new timer to hide after 4 seconds of no scrolling
        const newTimer = setTimeout(() => {
          if (window.scrollY > 50) {
            setIsVisible(false);
          }
        }, 4000);
        
        setHideTimer(newTimer);
      } else {
        // Hide immediately when scrolling down
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideTimer) {
        clearTimeout(hideTimer);
      }
    };
  }, [lastScrollY, hideTimer]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav 
          className="py-4 px-6 flex justify-between items-center fixed w-full top-0 z-50"
          style={{ 
            backgroundColor: '#0F0F23',
            boxShadow: '0 4px 6px -1px #000000, 0 2px 4px -1px #000000'
          }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
        >
      <motion.div 
        className="flex items-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <img 
          src={logoEaneer} 
          alt="Eaneer Logo" 
          className="h-8 w-auto mr-3"
        />
        <span 
          className="font-bold text-2xl tracking-wide"
          style={{
            background: 'linear-gradient(0deg, #2D5F5F 0%, #2D5F5F 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Eaneer
        </span>
      </motion.div>
      
      <div className="hidden md:flex space-x-8">
        {['Home', 'Services', 'About', 'Projects', 'Contact'].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:opacity-80 transition-all duration-300 font-medium"
            style={{ color: '#B0E0E0' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
          </motion.a>
        ))}
      </div>
      
      <motion.button
        className="text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, #2D5F5F 0%, #4A9B8E 100%)'
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </motion.button>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
