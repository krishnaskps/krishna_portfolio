import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track active section and scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);

      const sections = ['home', 'about', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-slate-100 flex flex-col relative selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Top Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 z-[60] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content: Single Page with exactly 5 Sections */}
      <main className="flex-grow">
        {/* Section 1: Home / Hero */}
        <Hero />

        {/* Section 2: About Me */}
        <About />

        {/* Section 3: Skills & Technologies */}
        <Skills />

        {/* Section 4: Experience & Projects */}
        <Experience />

        {/* Section 5: Contact Me */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

