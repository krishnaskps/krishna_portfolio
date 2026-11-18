import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Globe, 
  Send, 
  CheckCircle, 
  Copy, 
  ExternalLink,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Per instruction: Do not pretend the form sends messages via a fake backend.
    // Instead, package the data into a mailto link and prompt the user cleanly.
    setSubmittedData({ ...formData });
    setModalOpen(true);

    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-900/40 border-t border-slate-900">
      
      {/* Decorative Lights */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Discuss New Opportunities
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Whether you have an upcoming senior software engineering role, enterprise architecture engagement, or technical consultation, I'd love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white">Direct Channels</h3>
              
              {/* Email item */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono text-slate-400">Email Address</p>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors truncate block"
                  >
                    {personal.email}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  title="Copy Email"
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 border border-slate-800 transition-colors shrink-0"
                >
                  {copiedEmail ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone item */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono text-slate-400">Phone & WhatsApp</p>
                  <a
                    href={`tel:${personal.phone}`}
                    className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors truncate block"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>

              {/* Location item */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono text-slate-400">Location & Mobility</p>
                  <p className="text-sm font-semibold text-white">
                    {personal.location}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Open to Bengaluru, Hybrid & Remote roles
                  </p>
                </div>
              </div>

              {/* Social / Portfolios */}
              <div className="pt-2 border-t border-slate-800 space-y-3">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Professional Profiles:
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950/50 border border-slate-800 hover:border-cyan-500/40 text-slate-200 hover:text-cyan-300 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Github className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-mono">github.com/Krishna1-karthik</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>

                  <a
                    href={personal.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950/50 border border-slate-800 hover:border-cyan-500/40 text-slate-200 hover:text-cyan-300 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Globe className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-mono">krishna1-karthik.github.io</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl relative">
              <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below. This will prepare your message directly for Krishna's inbox.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white placeholder-slate-600 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white placeholder-slate-600 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Senior .NET / Angular Role at [Company]"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white placeholder-slate-600 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share role requirements, project details, or interview availability..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white placeholder-slate-600 outline-none transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                  <p className="text-[11px] text-center text-slate-500 mt-2 font-mono">
                    Direct communication dispatch to krishna048713@gmail.com
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>

      {/* Confirmation Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
          <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl relative">
            <div className="w-12 h-12 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6" />
            </div>
            
            <h4 className="text-lg font-bold text-white mb-2">Message Prepared!</h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Your message has been formatted and opened in your email client to send to <strong className="text-cyan-400">{personal.email}</strong>.
            </p>

            <div className="p-3 rounded-lg bg-slate-950 text-xs font-mono text-slate-400 border border-slate-800 mb-5 space-y-1">
              <div><strong>Recipient:</strong> {personal.email}</div>
              <div><strong>Subject:</strong> {submittedData?.subject || 'Software Engineering Inquiry'}</div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setModalOpen(false)}
                className="flex-1 py-2 rounded-xl text-xs font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
              >
                Close & Return
              </button>
              <button
                onClick={handleCopyEmail}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-white hover:bg-slate-700 transition-colors flex items-center gap-1.5"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

