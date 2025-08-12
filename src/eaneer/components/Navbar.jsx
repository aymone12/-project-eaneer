import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoEaneer from '../assets/logo-eaneer.png';
import { useBreakpoint } from '../hooks/useBreakpoint';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideTimer, setHideTimer] = useState(null);
  const { isMd } = useBreakpoint();
  const [mobileOpen, setMobileOpen] = useState(false);

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
    <>
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
      
      {/* Desktop links */}
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
      
      {/* Actions */}
      <div className="flex items-center gap-3">
        {/* CTA on md+ */}
        <motion.a
          href="#contact"
          className="hidden md:inline-block text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #2D5F5F 0%, #4A9B8E 100%)'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.a>

        {/* Mobile menu button on < md */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{ color: '#B0E0E0', backgroundColor: 'rgba(8, 21, 29, 0.2)', border: '1px solid rgba(8, 21, 29, 0.3)' }}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="sr-only">Open main menu</span>
          {/* Simple hamburger */}
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5" style={{ backgroundColor: '#B0E0E0' }} />
            <span className="block w-6 h-0.5" style={{ backgroundColor: '#B0E0E0' }} />
            <span className="block w-6 h-0.5" style={{ backgroundColor: '#B0E0E0' }} />
          </div>
        </button>
      </div>
        </motion.nav>
      )}
    </AnimatePresence>
    {/* Mobile menu dropdown */}
    {(!isMd) && (
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden px-4"
          >
            <div
              className="rounded-lg shadow-lg divide-y"
              style={{ backgroundColor: '#0F0F23', border: '1px solid rgba(8, 21, 29, 0.3)' }}
            >
              {['Home', 'Services', 'About', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="block px-6 py-4"
                  style={{ color: '#B0E0E0' }}
                >
                  {item}
                </a>
              ))}
              <div className="px-6 py-4">
                <a
                  href="#contact"
                  className="w-full inline-flex justify-center text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #2D5F5F 0%, #4A9B8E 100%)' }}
                  onClick={() => setMobileOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    )}
    </>
  );
};

export default Navbar;
