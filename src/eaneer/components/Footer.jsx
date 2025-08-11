import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo-eaneer.png';

const columns = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '#' },
      { label: 'Services', href: '#services' },
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' }
    ]
  },
  {
    title: 'Services',
    links: [
      { label: 'Power Systems Design', href: '#services' },
      { label: 'Renewable Energy', href: '#services' },
      { label: 'Industrial Automation', href: '#services' },
      { label: 'Smart Grid Technology', href: '#services' },
      { label: 'Energy Audits', href: '#services' },
      { label: 'Maintenance & Support', href: '#services' }
    ]
  },
  {
    title: 'Contact Info',
    custom: true
  }
];

const Footer = () => {
  return (
    <footer
      className="pt-14 md:pt-16"
      style={{
        background: '#0F0F23',
        borderTop: '1px solid rgba(77, 155, 142, 0.18)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand + Blurb */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Eaneer" className="h-6 w-auto opacity-90 select-none" />
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
            </div>
            <p className="text-sm leading-6 text-teal-200/80">
              Leading electrical engineering solutions for a sustainable future.
              Innovation, excellence, and environmental responsibility drive
              everything we do.
            </p>
          </motion.div>

          {/* Dynamic Columns */}
          {columns.map((col, idx) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 * (idx + 1) }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">{col.title}</h4>
              {col.custom ? (
                <div className="text-teal-200/80 space-y-2 text-sm">
                  <p>321, Technopark, Casablanca,<br />Morocco</p>
                  <p>Phone: +212 770-181715</p>
                  <p>Email: contact@eaneer.com</p>
                  <div className="flex gap-3 pt-2">
                    {['LinkedIn', 'Instagram', 'Facebook'].map((s) => (
                      <a
                        key={s}
                        href="#"
                        className="text-xs text-teal-100/90 border border-teal-700/40 rounded-md px-3 py-1.5 hover:border-teal-400/50 hover:bg-teal-900/10 transition-colors"
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-teal-200/80 hover:text-teal-200 transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-8 border-t" style={{ borderColor: 'rgba(77, 155, 142, 0.18)' }} />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8">
          <p className="text-xs text-teal-200/70">© 2024 Eaneer. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-teal-200/80 hover:text-teal-200 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-teal-200/80 hover:text-teal-200 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
