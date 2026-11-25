import React, { useState } from 'react';
import { 
  ArrowRight, 
  Mail, 
  ExternalLink, 
  MapPin, 
  Sparkles, 
  Layers, 
  Cpu, 
  TrendingUp, 
  CheckCircle2, 
  Copy, 
  Check,
  ShieldCheck,
  Building2,
  Terminal
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ darkMode }) {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section 
      id="hero" 
      className={`relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden transition-colors ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Background ambient decorative glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-500/10 via-cyan-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-cyan-500/5 blur-3xl pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status / Location Badge */}
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
                darkMode 
                  ? 'bg-slate-900/90 border-slate-700 text-cyan-300' 
                  : 'bg-white border-slate-200 text-indigo-700 shadow-sm'
              }`}>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Active in ERP Operations & Research
              </span>

              <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${
                darkMode ? 'bg-slate-900/60 text-slate-400' : 'bg-slate-200/60 text-slate-600'
              }`}>
                <MapPin size={12} className="text-cyan-500" />
                Mawna, Gazipur • Chattogram
              </span>
            </div>

            {/* Name */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                <span className={darkMode ? 'text-white' : 'text-slate-950'}>
                  {personal.name}
                </span>
              </h1>
              
              {/* Dynamic Headline Roles */}
              <div className="mt-3 flex flex-wrap items-center gap-2 text-sm sm:text-base md:text-lg font-medium">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-400 font-semibold">
                  Assistant Officer (ERP)
                </span>
                <span className={darkMode ? 'text-slate-600' : 'text-slate-300'}>•</span>
                <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                  Business & Data Analyst
                </span>
                <span className={darkMode ? 'text-slate-600' : 'text-slate-300'}>•</span>
                <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                  Finance & FinTech Researcher
                </span>
              </div>
            </div>

            {/* Concise Bio */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {personal.shortBio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-lg shadow-indigo-600/25 hover:shadow-cyan-500/35 transition-all duration-200 group"
              >
                <span>Explore Work & Research</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm border transition-all duration-200 ${
                  darkMode
                    ? 'border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white hover:border-slate-600'
                    : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-800 shadow-sm'
                }`}
              >
                <span>Contact Me</span>
              </a>

              <a
                href={personal.socialLinks.previousPortfolio}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-4 py-3 rounded-xl font-medium text-sm border transition-all duration-200 ${
                  darkMode
                    ? 'border-cyan-500/30 bg-cyan-950/20 text-cyan-300 hover:bg-cyan-900/40'
                    : 'border-indigo-200 bg-indigo-50/70 text-indigo-700 hover:bg-indigo-100'
                }`}
                title="View previous portfolio site"
              >
                <span>Previous Portfolio</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className={`p-2.5 rounded-xl border transition-all ${
                  darkMode
                    ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50'
                    : 'border-slate-200 bg-white text-slate-600 hover:text-indigo-600 hover:border-indigo-300 shadow-sm'
                }`}
              >
                <LinkedInIcon size={18} />
              </a>

              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className={`p-2.5 rounded-xl border transition-all ${
                  darkMode
                    ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50'
                    : 'border-slate-200 bg-white text-slate-600 hover:text-indigo-600 hover:border-indigo-300 shadow-sm'
                }`}
              >
                <GitHubIcon size={18} />
              </a>

              <a
                href={personal.socialLinks.email}
                aria-label="Send Email"
                className={`p-2.5 rounded-xl border transition-all ${
                  darkMode
                    ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50'
                    : 'border-slate-200 bg-white text-slate-600 hover:text-indigo-600 hover:border-indigo-300 shadow-sm'
                }`}
              >
                <Mail size={18} />
              </a>

              {/* Quick Copy Email pill */}
              <button
                onClick={handleCopyEmail}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono border transition-all ${
                  darkMode
                    ? 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900 shadow-sm'
                }`}
              >
                <span>{personal.email}</span>
                {copiedEmail ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
              </button>
            </div>

          </div>

          {/* Right Column: Professional Analyst & ERP Architecture Visual Card */}
          <div className="lg:col-span-5">
            <div className={`relative rounded-2xl p-6 sm:p-7 border backdrop-blur-xl transition-all shadow-xl ${
              darkMode
                ? 'bg-gradient-to-b from-slate-900/90 to-slate-950/90 border-slate-800/90 shadow-cyan-950/20'
                : 'bg-white/95 border-slate-200/90 shadow-slate-200/80'
            }`}>
              
              {/* Header of widget */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/60 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">profile.overview.tsx</span>
                </div>
                <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Verified Dossier
                </span>
              </div>

              {/* Identity snapshot */}
              <div className="pt-5 space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[2px] shadow-md">
                    <div className={`w-full h-full rounded-[14px] flex items-center justify-center font-bold text-xl ${
                      darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
                    }`}>
                      AI
                    </div>
                  </div>
                  <div>
                    <h3 className={`font-bold text-base ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {personal.name}
                    </h3>
                    <p className={`text-xs ${darkMode ? 'text-cyan-400' : 'text-indigo-600'} font-medium`}>
                      Zaber & Zubair Accessories Ltd.
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Alliance with Noman Group
                    </p>
                  </div>
                </div>

                {/* Core Competencies badges */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Layers size={13} className="text-cyan-400" />
                    <span>Specialization Matrix</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className={`p-2.5 rounded-xl border ${
                      darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'
                    }`}>
                      <div className="font-semibold text-cyan-400">ERP Auditing</div>
                      <div className="text-[11px] text-slate-400">Transactions & Gap Analysis</div>
                    </div>
                    <div className={`p-2.5 rounded-xl border ${
                      darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'
                    }`}>
                      <div className="font-semibold text-indigo-400">Financial ML</div>
                      <div className="text-[11px] text-slate-400">Loan Approval & Default Risk</div>
                    </div>
                    <div className={`p-2.5 rounded-xl border ${
                      darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'
                    }`}>
                      <div className="font-semibold text-teal-400">Blockchain</div>
                      <div className="text-[11px] text-slate-400">E-Commerce Security & Ledgers</div>
                    </div>
                    <div className={`p-2.5 rounded-xl border ${
                      darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'
                    }`}>
                      <div className="font-semibold text-purple-400">FinTech MFS</div>
                      <div className="text-[11px] text-slate-400">Mobile Money & Financial Inclusion</div>
                    </div>
                  </div>
                </div>

                {/* Academic & Global Credentials summary */}
                <div className={`p-3 rounded-xl border text-xs space-y-1.5 ${
                  darkMode ? 'bg-slate-950/60 border-slate-800/80 text-slate-300' : 'bg-slate-100/60 border-slate-200 text-slate-700'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Academic Degree:</span>
                    <span className="font-medium">BBA (Finance) • Chandigarh Univ.</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Global Program:</span>
                    <span className="font-medium text-cyan-400">Aspire Leaders 2026</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Future Horizon:</span>
                    <span className="font-medium text-indigo-400">Management Science & Eng.</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/50 dark:border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {personal.highlights.map((item, index) => (
              <div 
                key={index}
                className={`p-4 rounded-xl border text-center transition-transform hover:-translate-y-1 ${
                  darkMode 
                    ? 'bg-slate-900/40 border-slate-800/70 hover:border-slate-700' 
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                  {item.value}
                </div>
                <div className={`text-xs mt-1 font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
