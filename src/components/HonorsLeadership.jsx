import React from 'react';
import { 
  Trophy, 
  Award, 
  Users, 
  CheckCircle2, 
  Globe, 
  Calendar, 
  Star,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function HonorsLeadership({ darkMode }) {
  const { honorsAndAwards } = portfolioData;

  return (
    <section 
      id="leadership" 
      className={`py-16 md:py-24 transition-colors ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <Trophy size={13} />
            Distinctions & Impact
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Honours, Awards & Leadership
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Demonstrated international leadership, campus student governance, and competitive athletic teamwork.
          </p>
        </div>

        {/* Featured Global Highlight Card: Aspire Leaders Program */}
        <div className="mb-10">
          <div className={`relative rounded-3xl p-6 sm:p-8 md:p-10 border overflow-hidden transition-all duration-300 shadow-xl ${
            darkMode
              ? 'bg-gradient-to-r from-indigo-950/60 via-slate-900 to-slate-900 border-indigo-500/40 shadow-indigo-950/30'
              : 'bg-gradient-to-r from-indigo-50/90 via-white to-cyan-50/40 border-indigo-200 shadow-lg'
          }`}>
            {/* Ambient Background Badge */}
            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-48 h-48 bg-gradient-to-br from-indigo-500/10 to-cyan-500/20 rounded-full blur-2xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  <Star size={13} className="fill-cyan-300" />
                  <span>Flagship Global Leadership Selection</span>
                </div>

                <h3 className={`text-2xl sm:text-3xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {honorsAndAwards[0].title}
                </h3>

                <div className="text-sm font-semibold text-cyan-400">
                  {honorsAndAwards[0].organization}
                </div>

                <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  {honorsAndAwards[0].description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {honorsAndAwards[0].achievements.map((ach, aIdx) => (
                    <div 
                      key={aIdx} 
                      className={`p-3 rounded-xl border flex items-start gap-2.5 text-xs ${
                        darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                      }`}
                    >
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[2px] mb-4 shadow-lg">
                  <div className={`w-full h-full rounded-[14px] flex items-center justify-center font-bold text-2xl ${
                    darkMode ? 'bg-slate-950 text-white' : 'bg-white text-indigo-600'
                  }`}>
                    2026
                  </div>
                </div>
                <div className="font-bold text-base text-slate-100 dark:text-white">Cohort Member</div>
                <div className="text-xs text-slate-400 mt-1 max-w-[200px]">
                  Global Peer Collaboration & Leadership Pedagogy
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Leadership & Athletic Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {honorsAndAwards.slice(1).map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full border bg-slate-800 border-slate-700 text-slate-300">
                  {item.type}
                </span>
                <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
                  <Calendar size={12} />
                  {item.year}
                </span>
              </div>

              <h4 className={`text-base sm:text-lg font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                {item.title}
              </h4>

              <div className="text-xs font-semibold text-indigo-400 mb-3">
                {item.organization}
              </div>

              <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {item.description}
              </p>

              <div className="pt-3 border-t border-slate-800/60 dark:border-slate-800 space-y-2">
                {item.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-400">
                    <span className="text-cyan-400 mt-0.5">•</span>
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
