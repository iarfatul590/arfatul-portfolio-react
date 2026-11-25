import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Globe2, 
  Languages, 
  Award, 
  Calendar, 
  Sparkles, 
  Briefcase,
  CheckCircle,
  BookOpen
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AboutEducation({ darkMode }) {
  const { about, education, skills, personal } = portfolioData;

  return (
    <section 
      id="about" 
      className={`py-16 md:py-24 border-t transition-colors ${
        darkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-slate-100/60 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
            <Sparkles size={13} />
            Background & Profile
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            About Me & Educational Foundation
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Bridging operational discipline, financial acumen, and rigorous academic exploration.
          </p>
        </div>

        {/* About Me Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Bio Card */}
          <div className={`lg:col-span-7 rounded-2xl p-6 sm:p-8 border transition-all ${
            darkMode ? 'bg-slate-900/80 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-800 shadow-sm'
          }`}>
            <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-cyan-400">
              <span>Analytical Mindset, Cross-Border Experience</span>
            </h3>
            
            <p className="text-sm sm:text-base leading-relaxed mb-4">
              {about.summary}
            </p>
            <p className="text-sm sm:text-base leading-relaxed mb-6 text-slate-400 dark:text-slate-300">
              {about.extendedBio}
            </p>

            {/* Geographical Context Bar */}
            <div className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs ${
              darkMode ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="font-semibold text-slate-300 dark:text-slate-200">Current Work Location</div>
                  <div className="text-slate-400">{personal.currentLocation}</div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-slate-800 dark:bg-slate-800" />
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Globe2 size={16} />
                </div>
                <div>
                  <div className="font-semibold text-slate-300 dark:text-slate-200">Hometown & Origin</div>
                  <div className="text-slate-400">{personal.originLocation}</div>
                </div>
              </div>
            </div>

            {/* Strengths Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {about.keyStrengths.map((item, idx) => (
                <div 
                  key={idx}
                  className={`p-3.5 rounded-xl border ${
                    darkMode ? 'bg-slate-950/40 border-slate-800/80' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="font-semibold text-xs sm:text-sm text-cyan-400 mb-1 flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Multilingual Proficiency & Cross-Cultural Skills */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Language Box */}
            <div className={`rounded-2xl p-6 sm:p-7 border ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Languages size={18} />
                  </div>
                  <h3 className={`font-bold text-base ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Language Proficiencies
                  </h3>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400">
                  CEFR Aligned
                </span>
              </div>

              <p className={`text-xs mb-5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Demonstrated cross-cultural communication capability gained through international collegiate residency and multilingual enterprise teams.
              </p>

              <div className="space-y-3.5">
                {skills.languages.map((lang, idx) => (
                  <div 
                    key={idx}
                    className={`p-3 rounded-xl border flex items-center justify-between ${
                      darkMode ? 'bg-slate-950/50 border-slate-800/80' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center font-mono text-xs font-bold text-cyan-400">
                        {lang.code}
                      </span>
                      <div>
                        <div className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                          {lang.language}
                        </div>
                        <div className="text-xs text-slate-400">
                          {lang.proficiency}
                        </div>
                      </div>
                    </div>
                    <span className={`text-xs font-mono font-medium px-2 py-1 rounded border ${
                      lang.code === 'BN' 
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                        : lang.code === 'EN'
                        ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                        : lang.code === 'HI'
                        ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400'
                        : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                    }`}>
                      {lang.cefr}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick highlight box: Aspire Leaders & Global Vision */}
            <div className={`rounded-2xl p-6 border bg-gradient-to-br ${
              darkMode 
                ? 'from-indigo-950/40 via-slate-900 to-slate-900 border-indigo-500/30' 
                : 'from-indigo-50 via-white to-slate-50 border-indigo-200 shadow-sm'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                <Award size={18} className="text-cyan-400" />
                <h4 className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Management Science & Engineering Aspirations
                </h4>
              </div>
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Targeting advanced multidisciplinary applications connecting supply chain data engineering, quantitative financial modeling, and distributed ledger security.
              </p>
            </div>

          </div>

        </div>

        {/* Education Timeline Section */}
        <div id="education" className="pt-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md">
              <GraduationCap size={22} />
            </div>
            <div>
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Education Timeline
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Academic journey spanning Finance, Humanities, and Quantitative Analysis
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((item, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                  index === 0
                    ? darkMode
                      ? 'bg-gradient-to-b from-indigo-950/40 via-slate-900 to-slate-900 border-indigo-500/40 shadow-lg shadow-indigo-950/20'
                      : 'bg-white border-indigo-200 shadow-md ring-1 ring-indigo-500/10'
                    : darkMode
                    ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                    index === 0
                      ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400 font-semibold'
                      : 'bg-slate-800 border-slate-700 text-slate-400'
                  }`}>
                    {item.badge}
                  </span>
                  
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Calendar size={12} />
                    {item.period}
                  </span>
                </div>

                {/* Degree Title */}
                <h4 className={`text-base sm:text-lg font-bold mb-1.5 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {item.degree}
                </h4>

                {/* Institution & Location */}
                <div className="text-xs font-medium text-cyan-400 mb-2">
                  {item.institution}
                </div>
                <div className="text-[11px] text-slate-400 mb-4 flex items-center gap-1">
                  <MapPin size={11} />
                  {item.location}
                </div>

                {/* Grade Badge */}
                <div className={`inline-block text-xs font-mono font-bold px-3 py-1 rounded-lg mb-4 ${
                  darkMode 
                    ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30' 
                    : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                }`}>
                  {item.grade}
                </div>

                {/* Details list */}
                <ul className="space-y-2 text-xs text-slate-400 border-t border-slate-800/60 dark:border-slate-800 pt-3">
                  {item.details.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-1.5">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
