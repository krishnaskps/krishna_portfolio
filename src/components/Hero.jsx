import React from 'react';
import { 
  FileDown, 
  ArrowRight, 
  Github, 
  Globe, 
  Mail, 
  MapPin, 
  Briefcase, 
  CheckCircle2, 
  Code2, 
  Layers, 
  Cloud 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import profilePhoto from '../assets/images/krishna_photo.jpg';

export default function Hero() {
  const { personal } = portfolioData;

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const topOffset = 80;
      const elPos = el.getBoundingClientRect().top;
      const offsetPos = elPos + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPos, behavior: 'smooth' });
    }
  };

  const coreBadges = [
    ".NET Core 8/9/10",
    "Angular 18/19",
    "C# 12",
    "Microservices",
    "AWS Cloud",
    "SQL Server",
    "Single-SPA (MFE)",
    "Polly Resilience"
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Decorative Background Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions, Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>Available for Senior Engineering Opportunities</span>
            </div>

            {/* Name & Designation Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Hi, I'm <span className="text-gradient">{personal.name}</span>
              </h1>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <span className="text-xl sm:text-2xl font-semibold text-slate-200">
                  {personal.designation}
                </span>
                <span className="hidden sm:inline-block text-slate-500">•</span>
                <span className="text-base sm:text-lg font-mono text-cyan-400 font-medium bg-cyan-950/40 px-2.5 py-0.5 rounded-md border border-cyan-800/40">
                  {personal.experienceYears} Years Exp
                </span>
              </div>
            </div>

            {/* Headline / Summary */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personal.headline}. Building enterprise-grade, high-concurrency systems across Banking, Healthcare, Education, and Government domains.
            </p>

            {/* Core Tech Stack Badges */}
            <div className="pt-2">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                Core Engineering Stack:
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {coreBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900/80 text-slate-200 border border-slate-700/60 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => scrollToSection('#experience')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={personal.resumeUrl}
                download="Krishna_KP_Resume.docx"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 shadow-md hover:-translate-y-0.5 transition-all"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Location & Social Links Bar */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-sm text-slate-400">
              <div className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{personal.location}</span>
              </div>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub</span>
              </a>
              <a
                href={personal.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Portfolio Site</span>
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="hidden sm:inline">{personal.email}</span>
                <span className="sm:hidden">Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Professional Photograph & Floating Highlights */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-72 sm:w-80 md:w-96 aspect-square">
              
              {/* Ambient Glow Circles behind photo */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-violet-500/20 filter blur-xl -z-10 animate-pulse" />
              
              {/* Photo Frame Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-slate-700/80 bg-slate-900 shadow-2xl shadow-cyan-950/50 group">
                <img
                  src={profilePhoto || personal.photoUrl || '/krishna_photo.jpg'}
                  alt={personal.name}
                  className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[1.01] transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  onError={(e) => {
                    if (e.target.src !== window.location.origin + '/krishna_photo.jpg') {
                      e.target.src = '/krishna_photo.jpg';
                    }
                  }}
                />
                
                {/* Subtle vignette overlay on bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white tracking-wide">{personal.name}</p>
                      <p className="text-[11px] font-mono text-cyan-400">Senior Software Engineer</p>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Banking & Financial */}
              <div className="hidden sm:flex absolute -top-4 -left-6 items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-xl backdrop-blur-md">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-400">Domain Focus</p>
                  <p className="text-xs font-semibold text-slate-100">Banking & Wealth Advisory</p>
                </div>
              </div>

              {/* Floating Badge 2: Experience */}
              <div className="hidden sm:flex absolute -bottom-4 -right-4 items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-xl backdrop-blur-md">
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-400">Experience</p>
                  <p className="text-xs font-semibold text-slate-100">9+ Years Enterprise</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

