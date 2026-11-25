import React, { useState, useMemo } from 'react';
import { 
  CheckCircle, 
  Award, 
  Code2, 
  Cpu, 
  Database, 
  FileSpreadsheet, 
  Search, 
  Layers, 
  BookOpen, 
  Globe2, 
  Sparkles,
  ExternalLink,
  Tag
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SkillsCertifications({ darkMode }) {
  const { skills, certifications } = portfolioData;

  const [certFilter, setCertFilter] = useState('All');
  const [certSearch, setCertSearch] = useState('');

  const certCategories = [
    'All',
    'Financial Markets',
    'Data Analytics',
    'AI & FinTech',
    'Emerging Tech'
  ];

  const filteredCertifications = useMemo(() => {
    return certifications.filter((cert) => {
      const matchesCategory =
        certFilter === 'All' ||
        cert.category.toLowerCase().includes(certFilter.toLowerCase()) ||
        (certFilter === 'Financial Markets' && (cert.category.includes('Financial') || cert.category.includes('Banking')));

      const query = certSearch.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesQuery =
        cert.name.toLowerCase().includes(query) ||
        cert.issuer.toLowerCase().includes(query) ||
        cert.category.toLowerCase().includes(query) ||
        cert.skillsGained.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [certifications, certFilter, certSearch]);

  return (
    <section 
      id="skills" 
      className={`py-16 md:py-24 border-t transition-colors ${
        darkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-slate-100/60 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
            <Layers size={13} />
            Capabilities & Accreditations
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Skills & Global Certifications
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Comprehensive synthesis of core enterprise operations, computational tools, and verified academic courses.
          </p>
        </div>

        {/* Skills Two-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Core Domain & Operations */}
          <div className={`rounded-2xl p-6 sm:p-8 border ${
            darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Layers size={20} />
              </div>
              <div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Core Domain & Operations
                </h3>
                <p className="text-xs text-slate-400">
                  Enterprise workflows, financial auditing & operational leadership
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {skills.coreDomain.map((skill, sIdx) => (
                <div 
                  key={sIdx}
                  className={`p-3.5 rounded-xl border flex items-center justify-between transition-colors ${
                    darkMode ? 'bg-slate-950/50 border-slate-800/80 hover:border-slate-700' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-cyan-400 shrink-0" />
                    <span className={`text-sm font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      {skill.name}
                    </span>
                  </div>
                  <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${
                    skill.level === 'Advanced'
                      ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400 font-semibold'
                      : 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400'
                  }`}>
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical & Analytical Tools */}
          <div className={`rounded-2xl p-6 sm:p-8 border ${
            darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Code2 size={20} />
              </div>
              <div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Technical & Analytical Stack
                </h3>
                <p className="text-xs text-slate-400">
                  Data analysis, machine learning pipelines & enterprise software
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.technicalTools.map((tool, tIdx) => (
                <div 
                  key={tIdx}
                  className={`p-3.5 rounded-xl border flex flex-col justify-between gap-2 transition-colors ${
                    darkMode ? 'bg-slate-950/50 border-slate-800/80 hover:border-slate-700' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                      {tool.category}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>
                  <div className={`text-sm font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    {tool.name}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Language Summary Pill Box */}
            <div className={`mt-5 p-4 rounded-xl border ${
              darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-indigo-50/50 border-indigo-100'
            }`}>
              <div className="flex items-center justify-between text-xs font-semibold mb-2 text-slate-400">
                <span>Multilingual Working Capacity</span>
                <span className="font-mono text-cyan-400">4 Languages</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {skills.languages.map((l, idx) => (
                  <span 
                    key={idx}
                    className={`px-2.5 py-1 rounded-lg border font-mono ${
                      darkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-800'
                    }`}
                  >
                    <span className="font-bold text-cyan-400">{l.language}</span>: {l.cefr}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Certifications Section with Filter & Search */}
        <div className="pt-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md">
                <Award size={22} />
              </div>
              <div>
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Professional Certifications & Courses
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Accredited by Rice University, Yale, NISM India, and specialized programs
                </p>
              </div>
            </div>

            {/* Search Input for Certifications */}
            <div className="relative w-full md:w-64">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={certSearch}
                onChange={(e) => setCertSearch(e.target.value)}
                placeholder="Search certifications..."
                className={`w-full pl-9 pr-3 py-1.5 rounded-xl text-xs border transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                  darkMode
                    ? 'bg-slate-950/80 border-slate-800 text-white placeholder-slate-500'
                    : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 shadow-sm'
                }`}
              />
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCertifications.map((cert, cIdx) => (
              <div
                key={cIdx}
                className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                  darkMode
                    ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-semibold">
                      {cert.category}
                    </span>
                    <span className="text-[11px] font-mono text-cyan-400">
                      {cert.year}
                    </span>
                  </div>

                  <h4 className={`text-base font-bold leading-snug mb-1.5 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {cert.name}
                  </h4>

                  <div className="text-xs font-semibold text-cyan-400 mb-3">
                    {cert.issuer}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/60 dark:border-slate-800">
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                    Key Competencies Acquired:
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cert.skillsGained}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
