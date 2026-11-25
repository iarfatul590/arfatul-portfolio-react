import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutEducation from './components/AboutEducation';
import Experience from './components/Experience';
import ProjectsResearch from './components/ProjectsResearch';
import HonorsLeadership from './components/HonorsLeadership';
import SkillsCertifications from './components/SkillsCertifications';
import ReferencesContact from './components/ReferencesContact';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Dark-first analyst & developer theme
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('arfatul_portfolio_theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    return true; // Default to sleek dark-first
  });

  useEffect(() => {
    localStorage.setItem('arfatul_portfolio_theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Sticky Glassmorphism Navbar with Dark/Light Toggle */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero darkMode={darkMode} />

        {/* 2. About Me & Education */}
        <AboutEducation darkMode={darkMode} />

        {/* 3. Work Experience */}
        <Experience darkMode={darkMode} />

        {/* 4. Research, Publications & Projects (with Category Filter) */}
        <ProjectsResearch darkMode={darkMode} />

        {/* 5. Honours, Awards & Leadership */}
        <HonorsLeadership darkMode={darkMode} />

        {/* 6. Skills & Certifications */}
        <SkillsCertifications darkMode={darkMode} />

        {/* 7. References & Direct Contact */}
        <ReferencesContact darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
