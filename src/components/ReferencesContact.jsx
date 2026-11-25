import React, { useState } from 'react';
import { 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  ExternalLink, 
  Eye, 
  EyeOff, 
  Copy, 
  Check, 
  CheckCircle2, 
  MessageSquare, 
  Building2, 
  GraduationCap 
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function ReferencesContact({ darkMode }) {
  const { references, personal } = portfolioData;

  const [showRefContact, setShowRefContact] = useState(true);
  const [copiedItem, setCopiedItem] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' });

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(key);
    setTimeout(() => setCopiedItem(''), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ state: 'error', message: 'Please complete all required fields.' });
      return;
    }

    setFormStatus({ state: 'sending', message: 'Sending message...' });

    // Simulate sending / preparing mailto fallback
    setTimeout(() => {
      setFormStatus({
        state: 'success',
        message: 'Thank you! Your message inquiry has been recorded. You can also reach out directly via iarfatul590@gmail.com.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section 
      id="references" 
      className={`py-16 md:py-24 transition-colors ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <Users size={13} />
            Endorsements & Contact
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            References & Direct Contact
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Verified academic & industry supervisors, followed by direct channels to start a conversation.
          </p>
        </div>

        {/* References Subsection */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 gap-3">
            <div>
              <h3 className={`text-xl font-bold flex items-center gap-2 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                <span>Academic & Professional References</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Supervisors from Chandigarh University and Zaber & Zubair Accessories Ltd.
              </p>
            </div>

            {/* Privacy toggle */}
            <button
              onClick={() => setShowRefContact(!showRefContact)}
              className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-xl border transition-all ${
                darkMode 
                  ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-white' 
                  : 'border-slate-200 bg-white text-slate-700 hover:text-slate-900 shadow-sm'
              }`}
            >
              {showRefContact ? <EyeOff size={14} /> : <Eye size={14} />}
              <span>{showRefContact ? 'Mask Direct Contacts' : 'Reveal Direct Contacts'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {references.map((ref, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 sm:p-7 border transition-all duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? 'bg-slate-900/70 border-slate-800 shadow-lg'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center font-bold text-base text-cyan-400">
                      {idx === 0 ? <GraduationCap size={22} /> : <Building2 size={22} />}
                    </div>
                    <div>
                      <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {ref.name}
                      </h4>
                      <div className="text-xs font-semibold text-cyan-400">
                        {ref.role}
                      </div>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    {idx === 0 ? 'Academic' : 'Corporate'}
                  </span>
                </div>

                <div className="space-y-1 text-xs mb-4">
                  <div className={`font-medium ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    {ref.institution}
                  </div>
                  {ref.department && (
                    <div className="text-slate-400">{ref.department}</div>
                  )}
                  {ref.alliance && (
                    <div className="text-slate-400">{ref.alliance}</div>
                  )}
                  <div className="text-slate-500 flex items-center gap-1 pt-1">
                    <MapPin size={11} />
                    <span>{ref.location}</span>
                  </div>
                </div>

                {/* Relationship Note */}
                <div className={`p-3 rounded-xl border text-xs mb-4 ${
                  darkMode ? 'bg-slate-950/60 border-slate-800/80 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  <span className="font-semibold text-cyan-400">Association: </span>
                  {ref.relationship}
                </div>

                {/* Contact info with masking */}
                <div className="space-y-2 pt-2 border-t border-slate-800/60 dark:border-slate-800 text-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Mail size={13} className="text-cyan-400" />
                      <span>Email:</span>
                    </div>
                    {showRefContact ? (
                      <button
                        onClick={() => handleCopy(ref.email, `ref-email-${idx}`)}
                        className={`font-mono text-xs flex items-center gap-1.5 transition-colors ${
                          darkMode ? 'text-slate-200 hover:text-cyan-400' : 'text-slate-800 hover:text-indigo-600'
                        }`}
                        title="Click to copy email"
                      >
                        <span>{ref.email}</span>
                        {copiedItem === `ref-email-${idx}` ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                      </button>
                    ) : (
                      <span className="font-mono text-slate-500">••••••••••@•••••</span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Phone size={13} className="text-indigo-400" />
                      <span>Phone:</span>
                    </div>
                    {showRefContact ? (
                      <span className="font-mono text-slate-300 dark:text-slate-200">
                        {ref.phone}
                      </span>
                    ) : (
                      <span className="font-mono text-slate-500">+•• ••••• •••••</span>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Contact Subsection */}
        <div id="contact" className="pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Direct Contact Cards */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Let's Connect
                </h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Whether you are discussing ERP optimization, collaborative research in FinTech & Machine Learning, or career opportunities, feel free to reach out directly.
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-3">
                {/* Email card */}
                <div className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${
                  darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Direct Email</div>
                      <a 
                        href={`mailto:${personal.email}`}
                        className={`text-sm font-semibold transition-colors ${
                          darkMode ? 'text-white hover:text-cyan-400' : 'text-slate-900 hover:text-indigo-600'
                        }`}
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personal.email, 'email')}
                    className={`p-2 rounded-lg border transition-colors ${
                      darkMode ? 'border-slate-800 text-slate-400 hover:text-white' : 'border-slate-200 text-slate-500 hover:text-slate-900'
                    }`}
                    title="Copy Email"
                  >
                    {copiedItem === 'email' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Phone card */}
                <div className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${
                  darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Phone & WhatsApp</div>
                      <div className={`text-xs sm:text-sm font-mono font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {personal.phones[0]} / {personal.phones[1]}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personal.phones[0], 'phone')}
                    className={`p-2 rounded-lg border transition-colors ${
                      darkMode ? 'border-slate-800 text-slate-400 hover:text-white' : 'border-slate-200 text-slate-500 hover:text-slate-900'
                    }`}
                    title="Copy Primary Phone"
                  >
                    {copiedItem === 'phone' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Profiles & Links */}
                <div className={`p-4 rounded-xl border space-y-3 ${
                  darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Online Presence & Archives
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={personal.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2.5 rounded-lg border text-xs font-medium flex items-center justify-between transition-colors ${
                        darkMode ? 'border-slate-800 bg-slate-950 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400' : 'border-slate-200 bg-slate-50 hover:border-indigo-300 text-slate-700 hover:text-indigo-600'
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <LinkedInIcon size={14} />
                        LinkedIn
                      </span>
                      <ExternalLink size={12} />
                    </a>

                    <a
                      href={personal.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2.5 rounded-lg border text-xs font-medium flex items-center justify-between transition-colors ${
                        darkMode ? 'border-slate-800 bg-slate-950 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400' : 'border-slate-200 bg-slate-50 hover:border-indigo-300 text-slate-700 hover:text-indigo-600'
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <GitHubIcon size={14} />
                        GitHub
                      </span>
                      <ExternalLink size={12} />
                    </a>
                  </div>

                  <a
                    href={personal.socialLinks.previousPortfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full p-2.5 rounded-lg border text-xs font-medium flex items-center justify-between transition-colors ${
                      darkMode ? 'border-cyan-500/30 bg-cyan-950/20 text-cyan-300 hover:bg-cyan-900/40' : 'border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <ExternalLink size={14} />
                      Previous Portfolio (iarfatul590.github.io)
                    </span>
                    <span className="text-[10px] font-mono">Archived</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Contact Message Form */}
            <div className="lg:col-span-7">
              <div className={`rounded-2xl p-6 sm:p-8 border ${
                darkMode ? 'bg-slate-900/90 border-slate-800 shadow-xl' : 'bg-white border-slate-200 shadow-lg'
              }`}>
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-white">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      Send a Message
                    </h4>
                    <p className="text-xs text-slate-400">
                      Inquiries, research collaborations, or advisory requests
                    </p>
                  </div>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                          darkMode
                            ? 'bg-slate-950/80 border-slate-800 text-white placeholder-slate-500'
                            : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 shadow-sm'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@organization.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                          darkMode
                            ? 'bg-slate-950/80 border-slate-800 text-white placeholder-slate-500'
                            : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 shadow-sm'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. ERP Auditing Consultation / Research Inquiry"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                        darkMode
                          ? 'bg-slate-950/80 border-slate-800 text-white placeholder-slate-500'
                          : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 shadow-sm'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      Message Content *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your note or project specifications here..."
                      className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50 resize-y ${
                        darkMode
                          ? 'bg-slate-950/80 border-slate-800 text-white placeholder-slate-500'
                          : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 shadow-sm'
                      }`}
                    />
                  </div>

                  {formStatus.message && (
                    <div className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                      formStatus.state === 'success'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                        : formStatus.state === 'error'
                        ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                        : 'bg-cyan-500/10 text-cyan-400'
                    }`}>
                      {formStatus.state === 'success' && <CheckCircle2 size={16} />}
                      <span>{formStatus.message}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="submit"
                      disabled={formStatus.state === 'sending'}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-md shadow-indigo-600/25 transition-all duration-200 disabled:opacity-50"
                    >
                      <span>{formStatus.state === 'sending' ? 'Sending...' : 'Send Inquiry'}</span>
                      <Send size={14} />
                    </button>

                    <a
                      href={`mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formData.message || '')}`}
                      className="text-xs text-cyan-400 hover:underline"
                    >
                      Open in Email Client
                    </a>
                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
