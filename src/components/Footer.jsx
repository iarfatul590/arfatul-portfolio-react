import { 
  ArrowUp, 
  Mail, 
  ExternalLink, 
  Heart,
  Code
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ darkMode }) {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className={`border-t transition-colors ${
        darkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-white border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60 dark:border-slate-800">
          
          {/* Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center font-bold text-xs text-white">
                AI
              </span>
              <span className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {personal.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-md">
              Assistant Officer of ERP • Business & Data Analyst • Finance & FinTech Researcher
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personal.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`p-2.5 rounded-xl border transition-colors ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 hover:text-cyan-400 hover:border-cyan-500/50'
                  : 'border-slate-200 bg-slate-50 hover:text-indigo-600 hover:border-indigo-300'
              }`}
            >
              <LinkedInIcon size={16} />
            </a>

            <a
              href={personal.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={`p-2.5 rounded-xl border transition-colors ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 hover:text-cyan-400 hover:border-cyan-500/50'
                  : 'border-slate-200 bg-slate-50 hover:text-indigo-600 hover:border-indigo-300'
              }`}
            >
              <GitHubIcon size={16} />
            </a>

            <a
              href={personal.socialLinks.email}
              aria-label="Email"
              className={`p-2.5 rounded-xl border transition-colors ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 hover:text-cyan-400 hover:border-cyan-500/50'
                  : 'border-slate-200 bg-slate-50 hover:text-indigo-600 hover:border-indigo-300'
              }`}
            >
              <Mail size={16} />
            </a>

            <a
              href={personal.socialLinks.previousPortfolio}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Previous Portfolio"
              className={`p-2.5 rounded-xl border transition-colors ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 hover:text-cyan-400 hover:border-cyan-500/50'
                  : 'border-slate-200 bg-slate-50 hover:text-indigo-600 hover:border-indigo-300'
              }`}
              title="Previous Portfolio (iarfatul590.github.io)"
            >
              <ExternalLink size={16} />
            </a>

            <button
              onClick={scrollToTop}
              className={`p-2.5 rounded-xl border transition-all ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 hover:bg-slate-800 text-cyan-400'
                  : 'border-slate-200 bg-slate-100 hover:bg-slate-200 text-indigo-600'
              }`}
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Built with React, Vite, Tailwind CSS & Lucide</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
