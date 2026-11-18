import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Building2, 
  Layers, 
  ExternalLink, 
  Github, 
  ChevronRight, 
  CheckCircle2, 
  FolderGit2,
  Code2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experiences, projects } = portfolioData;
  const [viewMode, setViewMode] = useState('both'); // 'both' | 'timeline' | 'projects'

  return (
    <section id="experience" className="py-20 relative bg-slate-950/80 border-t border-slate-900">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & Key Projects
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            A comprehensive look at over 9 years of professional software engineering across financial, healthcare, and governmental institutions.
          </p>

          {/* View Mode Toggle */}
          <div className="inline-flex items-center p-1.5 rounded-xl bg-slate-900 border border-slate-800 mt-8">
            <button
              onClick={() => setViewMode('both')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                viewMode === 'both'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Overview (Both)
            </button>
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                viewMode === 'timeline'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Work Timeline ({experiences.length})
            </button>
            <button
              onClick={() => setViewMode('projects')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                viewMode === 'projects'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Featured Projects ({projects.length})
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 1: VERTICAL EXPERIENCE TIMELINE */}
        {/* ========================================================================= */}
        {(viewMode === 'both' || viewMode === 'timeline') && (
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-10 pb-3 border-b border-slate-800">
              <div className="p-2 rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-800/40">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Employment Timeline</h3>
                <p className="text-xs text-slate-400 font-mono">Continuous progression from 2016 to Present</p>
              </div>
            </div>

            <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 md:ml-40 space-y-12">
              {experiences.map((exp, idx) => (
                <div key={exp.id} className="relative pl-6 sm:pl-8 group">
                  
                  {/* Timeline Node Dot */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/30" />

                  {/* Left Date Badge (desktop) */}
                  <div className="sm:absolute sm:-left-36 md:-left-44 top-0.5 mb-2 sm:mb-0">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 font-semibold shadow-xs">
                      {exp.period}
                    </span>
                  </div>

                  {/* Experience Card */}
                  <div className="rounded-2xl p-6 sm:p-7 bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all shadow-lg hover:shadow-cyan-950/20">
                    
                    {/* Header Details */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {exp.role}
                        </h4>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-cyan-400 font-medium mt-1">
                          <span className="text-slate-200 font-semibold">{exp.company}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-slate-400 text-xs">
                            <MapPin className="w-3.5 h-3.5 text-slate-500" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <div className="self-start sm:self-center">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-950 text-slate-300 border border-slate-700/60">
                          {exp.domain}
                        </span>
                      </div>
                    </div>

                    {/* Project Title / Summary */}
                    {exp.projectTitle && (
                      <div className="mb-4 inline-block px-3 py-1 rounded-lg bg-cyan-950/40 border border-cyan-800/30 text-xs font-mono text-cyan-300">
                        Project: {exp.projectTitle}
                      </div>
                    )}

                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {exp.summary}
                    </p>

                    {/* Key Responsibilities & Achievements */}
                    {exp.highlights && exp.highlights.length > 0 && (
                      <div className="space-y-2 mb-5">
                        <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                          Key Responsibilities & Achievements:
                        </p>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                          {exp.highlights.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="pt-3 border-t border-slate-800/80">
                      <p className="text-[11px] font-mono text-slate-400 mb-2">Technologies Used:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PART 2: FEATURED PROJECTS */}
        {/* ========================================================================= */}
        {(viewMode === 'both' || viewMode === 'projects') && (
          <div>
            <div className="flex items-center gap-3 mb-10 pb-3 border-b border-slate-800">
              <div className="p-2 rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-800/40">
                <FolderGit2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Featured Project Showcases</h3>
                <p className="text-xs text-slate-400 font-mono">Detailed technical implementations from my CV</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="rounded-2xl p-6 sm:p-8 bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/30 group flex flex-col justify-between"
                >
                  <div>
                    {/* Project Header */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="space-y-1">
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-800/40">
                          {proj.category}
                        </span>
                        <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors pt-1">
                          {proj.title}
                        </h4>
                      </div>
                      
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View on GitHub"
                        className="p-2 rounded-xl bg-slate-950 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>

                    {/* Metadata line */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono mb-4">
                      <span>{proj.company}</span>
                      <span>•</span>
                      <span>{proj.role}</span>
                      <span>•</span>
                      <span className="text-cyan-400">{proj.period}</span>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-5">
                      {proj.summary}
                    </p>

                    {/* Key Architecture Features */}
                    <div className="space-y-2 mb-6">
                      <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        Architectural Highlights:
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {proj.keyFeatures.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5"></span>
                            <span className="leading-relaxed">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Project Footer Tech Stack */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                    {proj.technologies.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

