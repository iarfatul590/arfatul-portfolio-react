import React, { useState, useMemo } from 'react';
import { 
  FileText, 
  ExternalLink, 
  Tag, 
  Search, 
  BookOpen, 
  Sparkles, 
  Filter, 
  X,
  Layers,
  ArrowUpRight,
  Cpu,
  ShieldCheck,
  Check
} from 'lucide-react';
import { GitHubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function ProjectsResearch({ darkMode }) {
  const { projectsAndResearch } = portfolioData;

  const categories = [
    'All',
    'Research & Publications',
    'AI, ML & Blockchain',
    'FinTech & Analytics'
  ];

  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalItem, setActiveModalItem] = useState(null);

  // Filter items based on activeCategory and searchQuery
  const filteredItems = useMemo(() => {
    return projectsAndResearch.filter((item) => {
      const matchesCategory = 
        activeCategory === 'All' || 
        item.category === activeCategory ||
        (activeCategory === 'Research & Publications' && (item.type.includes('Publication') || item.type.includes('Research') || item.type.includes('Book Chapter')));

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch = 
        item.title.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.tags.some(tag => tag.toLowerCase().includes(query)) ||
        item.type.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [projectsAndResearch, activeCategory, searchQuery]);

  return (
    <section 
      id="projects" 
      className={`py-16 md:py-24 border-t transition-colors ${
        darkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-slate-100/60 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
            <BookOpen size={13} />
            Scholarly & Empirical Works
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Research, Publications & Projects
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Investigating predictive AI, distributed blockchain infrastructure, and digital financial ecosystems.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className={`flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl border ${
            darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold shadow-md shadow-indigo-500/20'
                      : darkMode
                      ? 'text-slate-400 hover:text-white hover:bg-slate-900'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by keyword or tag..."
              className={`w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm border transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                darkMode
                  ? 'bg-slate-950/80 border-slate-800 text-white placeholder-slate-500'
                  : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 shadow-sm'
              }`}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X size={14} />
              </button>
            )}
          </div>

        </div>

        {/* Projects / Research Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className={`p-12 text-center rounded-2xl border ${
            darkMode ? 'bg-slate-900/50 border-slate-800 text-slate-400' : 'bg-white border-slate-200 text-slate-600'
          }`}>
            <p className="text-sm font-medium">No papers or projects match your selected filter criteria.</p>
            <button
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="mt-3 text-xs text-cyan-400 underline underline-offset-4"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`flex flex-col justify-between rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1.5 ${
                  darkMode
                    ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700 shadow-md hover:shadow-cyan-950/20'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Meta info */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full border bg-indigo-500/10 border-indigo-500/30 text-indigo-400 font-semibold">
                      {item.type}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {item.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-lg font-bold leading-snug mb-3 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </h3>

                  {/* Category Indicator */}
                  <div className="text-xs font-semibold text-cyan-400 mb-2.5 flex items-center gap-1.5">
                    <Tag size={12} />
                    <span>{item.category}</span>
                  </div>

                  {/* Summary */}
                  <p className={`text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4 ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {item.summary}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-slate-800/60 dark:border-slate-800">
                    {item.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          darkMode
                            ? 'bg-slate-950 border-slate-800 text-slate-300'
                            : 'bg-slate-100 border-slate-200 text-slate-700'
                        }`}
                      >
                        #{tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="text-[10px] font-mono text-slate-500 py-0.5">
                        +{item.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveModalItem(item)}
                      className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-all ${
                        darkMode
                          ? 'border-slate-800 bg-slate-950 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:text-indigo-600 hover:border-indigo-300'
                      }`}
                    >
                      Read Abstract & Methodology
                    </button>

                    <div className="flex items-center gap-1">
                      <a
                        href={item.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-lg border transition-colors ${
                          darkMode
                            ? 'border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                            : 'border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                        title="GitHub / Repository"
                      >
                        <GitHubIcon size={14} />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* In-depth Modal for Abstract & Findings */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
            <div 
              className={`relative w-full max-w-2xl rounded-2xl border p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl transition-all ${
                darkMode ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-800'
              }`}
            >
              <button
                onClick={() => setActiveModalItem(null)}
                className={`absolute top-5 right-5 p-2 rounded-xl border transition-colors ${
                  darkMode ? 'border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800' : 'border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                }`}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-semibold">
                  {activeModalItem.type}
                </span>
                <span className="text-xs font-mono text-cyan-400">
                  {activeModalItem.category}
                </span>
              </div>

              <h3 className={`text-xl sm:text-2xl font-bold mb-4 pr-8 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {activeModalItem.title}
              </h3>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Executive Abstract & Overview
                </h4>
                <p className="text-sm leading-relaxed text-slate-300 dark:text-slate-300">
                  {activeModalItem.summary}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                  Core Methodological Findings & Insights
                </h4>
                <div className="space-y-2">
                  {activeModalItem.highlights.map((hl, hIdx) => (
                    <div 
                      key={hIdx}
                      className={`p-3 rounded-xl border flex items-start gap-2.5 text-xs sm:text-sm ${
                        darkMode ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Keywords & Domains
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalItem.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className={`text-xs font-mono px-2.5 py-1 rounded-lg border ${
                        darkMode ? 'bg-slate-950 border-slate-800 text-cyan-300' : 'bg-slate-100 border-slate-200 text-indigo-700'
                      }`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <a
                  href={activeModalItem.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md hover:opacity-90 transition-opacity"
                >
                  <span>Explore Repository / Code</span>
                  <ExternalLink size={13} />
                </a>

                <button
                  onClick={() => setActiveModalItem(null)}
                  className={`text-xs px-4 py-2 rounded-xl border ${
                    darkMode ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
