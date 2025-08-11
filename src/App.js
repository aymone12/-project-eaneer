import React from 'react';
import './App.css';
import Navbar from './eaneer/components/Navbar.jsx';
import Hero from './eaneer/components/Hero.jsx';
import Statistics from './eaneer/components/Statistics.jsx';
import Services from './eaneer/components/Services.jsx';
import About from './eaneer/components/About.jsx';
import Projects from './eaneer/components/Projects.jsx';
import Contact from './eaneer/components/Contact.jsx';
import Footer from './eaneer/components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Statistics />
      <Services />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
