import React, { useState } from 'react';
import { 
  Briefcase, 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  Layers, 
  TrendingUp, 
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience({ darkMode }) {
  const { experience } = portfolioData;
  const [selectedExp, setSelectedExp] = useState(0);

  return (
    <section 
      id="experience" 
      className={`py-16 md:py-24 transition-colors ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <Briefcase size={13} />
            Career & Operations
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Work Experience
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Real-world enterprise ERP deployments, financial data modeling, and commercial banking operations.
          </p>
        </div>

        {/* Experience Layout: Dual Mode (Interactive Left Selector + Detailed Right Card & Timeline) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Company Selector Tab List */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 px-1 mb-2">
              Select Position ({experience.length})
            </div>
            {experience.map((item, index) => {
              const isSelected = selectedExp === index;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedExp(index)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-start justify-between gap-3 ${
                    isSelected
                      ? darkMode
                        ? 'bg-gradient-to-r from-slate-900 to-slate-800/90 border-cyan-500/60 shadow-lg shadow-cyan-950/20 ring-1 ring-cyan-500/30'
                        : 'bg-white border-indigo-400 shadow-md ring-1 ring-indigo-500/20'
                      : darkMode
                      ? 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700 text-slate-300'
                      : 'bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                        isSelected 
                          ? 'bg-cyan-500/20 text-cyan-400 font-semibold' 
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {item.type}
                      </span>
                      {index === 0 && (
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Current Role" />
                      )}
                    </div>
                    
                    <h3 className={`font-bold text-sm sm:text-base leading-snug ${
                      isSelected
                        ? darkMode ? 'text-white' : 'text-slate-900'
                        : darkMode ? 'text-slate-200' : 'text-slate-800'
                    }`}>
                      {item.role}
                    </h3>
                    
                    <div className="text-xs text-slate-400 truncate max-w-[240px]">
                      {item.company}
                    </div>

                    <div className="text-[11px] font-mono text-slate-400 pt-1 flex items-center gap-1">
                      <Calendar size={11} />
                      {item.period}
                    </div>
                  </div>

                  <ChevronRight 
                    size={18} 
                    className={`mt-1 shrink-0 transition-transform ${
                      isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'
                    }`} 
                  />
                </button>
              );
            })}
          </div>

          {/* Selected Experience Detail Card */}
          <div className="lg:col-span-8">
            {experience[selectedExp] && (
              <div className={`rounded-2xl p-6 sm:p-8 border transition-all ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-800 shadow-xl'
                  : 'bg-white border-slate-200 shadow-lg'
              }`}>
                
                {/* Header of Detail Card */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800/60 dark:border-slate-800 gap-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-2">
                      <Building2 size={12} />
                      {experience[selectedExp].type}
                    </span>
                    <h3 className={`text-xl sm:text-2xl font-bold ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {experience[selectedExp].role}
                    </h3>
                    <div className="text-sm font-semibold text-cyan-400 mt-1">
                      {experience[selectedExp].company}
                    </div>
                  </div>

                  <div className="space-y-1 sm:text-right text-xs text-slate-400 font-mono">
                    <div className="flex sm:justify-end items-center gap-1.5">
                      <Calendar size={13} className="text-cyan-400" />
                      <span>{experience[selectedExp].period}</span>
                    </div>
                    <div className="flex sm:justify-end items-center gap-1.5">
                      <MapPin size={13} className="text-indigo-400" />
                      <span>{experience[selectedExp].location}</span>
                    </div>
                  </div>
                </div>

                {/* Role Synopsis */}
                <div className="py-5">
                  <p className={`text-sm sm:text-base leading-relaxed ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    {experience[selectedExp].description}
                  </p>
                </div>

                {/* Key Responsibilities */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-cyan-400" />
                    <span>Operational Scope & Deliverables</span>
                  </div>

                  <div className="space-y-2.5">
                    {experience[selectedExp].responsibilities.map((resp, rIdx) => (
                      <div 
                        key={rIdx}
                        className={`p-3.5 rounded-xl border flex items-start gap-3 ${
                          darkMode ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                        <p className={`text-xs sm:text-sm leading-relaxed ${
                          darkMode ? 'text-slate-300' : 'text-slate-700'
                        }`}>
                          {resp}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Competencies / Technologies used */}
                <div className="mt-6 pt-5 border-t border-slate-800/60 dark:border-slate-800">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                    Applied Tools & Methodologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {experience[selectedExp].technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-xs font-mono px-3 py-1 rounded-lg border ${
                          darkMode
                            ? 'bg-slate-950 border-slate-800 text-cyan-300'
                            : 'bg-indigo-50 border-indigo-200 text-indigo-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
