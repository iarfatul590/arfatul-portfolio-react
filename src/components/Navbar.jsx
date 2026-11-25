import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Terminal, 
  ExternalLink,
  ChevronRight,
  FileText
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ darkMode, setDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Research & Projects', href: '#projects' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Skills & Certs', href: '#skills' },
    { name: 'References', href: '#references' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current active section
      const sections = navLinks.map(l => l.href.substring(1));
      const scrollPosition = window.scrollY + 200;

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
            : 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-sm'
          : darkMode
          ? 'bg-slate-950/40 backdrop-blur-sm'
          : 'bg-white/40 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Brand */}
          <a 
            href="#hero" 
            className="flex items-center gap-2.5 group"
            aria-label="Arfatul Islam Homepage"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-cyan-500 to-teal-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-indigo-500/20">
              <div className={`w-full h-full rounded-[10px] flex items-center justify-center font-bold text-sm tracking-wider ${
                darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
              }`}>
                AI
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-semibold tracking-tight text-base sm:text-lg transition-colors ${
                darkMode ? 'text-white group-hover:text-cyan-400' : 'text-slate-900 group-hover:text-indigo-600'
              }`}>
                {portfolioData.personal.name}
              </span>
              <span className={`text-[11px] font-mono tracking-tight hidden sm:inline-block ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                ERP & Business Analyst
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? darkMode
                        ? 'text-cyan-400 bg-slate-800/80 shadow-inner'
                        : 'text-indigo-600 bg-indigo-50 font-semibold'
                      : darkMode
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark/Light Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`p-2 rounded-xl transition-all duration-200 border ${
                darkMode
                  ? 'bg-slate-900 border-slate-700 text-amber-300 hover:bg-slate-800 hover:border-slate-600'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200 hover:border-slate-300'
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Previous Portfolio Shortcut */}
            <a
              href={portfolioData.personal.socialLinks.previousPortfolio}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-xl border transition-all ${
                darkMode
                  ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:text-indigo-600 hover:border-indigo-300'
              }`}
              title="Visit Previous Portfolio Site"
            >
              <span>Prev Portfolio</span>
              <ExternalLink size={12} />
            </a>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium px-3.5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-200"
            >
              <span>Get in Touch</span>
              <ChevronRight size={14} />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl border transition-colors ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-white'
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-slate-900'
              }`}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-2 transition-all ${
            darkMode
              ? 'bg-slate-950 border-slate-800 text-white'
              : 'bg-white border-slate-200 text-slate-900 shadow-xl'
          }`}
        >
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? darkMode
                      ? 'bg-slate-800 text-cyan-400 font-semibold'
                      : 'bg-indigo-50 text-indigo-600 font-semibold'
                    : darkMode
                    ? 'text-slate-300 hover:bg-slate-900'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/60 dark:border-slate-800 flex flex-col gap-2">
            <a
              href={portfolioData.personal.socialLinks.previousPortfolio}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium border ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 text-slate-300'
                  : 'border-slate-200 bg-slate-50 text-slate-700'
              }`}
            >
              <span>Visit Previous Portfolio (iarfatul590.github.io)</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
