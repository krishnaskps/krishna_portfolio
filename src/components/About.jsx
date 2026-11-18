import React from 'react';
import {
  Award,
  GraduationCap,
  Languages,
  CheckCircle,
  Briefcase,
  ShieldCheck,
  Cpu,
  Server,
  Building,
  HeartPulse,
  Landmark,
  BookOpen
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, stats, domains, education, certifications, languages } = portfolioData;

  const domainIcons = {
    Landmark: Landmark,
    Activity: HeartPulse,
    Building2: Building,
    GraduationCap: BookOpen
  };
  /***/
  return (
    <section id="about" className="py-20 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering High-Reliability Enterprise Solutions
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Bridging technical precision, clean architecture, and modern micro-frontend principles to solve complex distributed computing challenges.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all hover:-translate-y-1 shadow-lg shadow-black/20"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-semibold text-white">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Two-Column Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Narrative & Engineering Approach */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                <Cpu className="w-6 h-6 text-cyan-400" />
                <span>Professional Profile & Background</span>
              </h3>
              <p className="text-slate-300 leading-relaxed">
                I am a results-driven Senior Software Engineer with over <span className="text-cyan-300 font-semibold">9+ years of hands-on experience</span> in designing, developing, and deploying mission-critical enterprise applications. My core expertise centers on <strong className="text-white">.NET Core (6 through 10)</strong>, <strong className="text-white">C# 12</strong>, <strong className="text-white">Angular (16-19)</strong>, and <strong className="text-white">SQL Server</strong>.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Throughout my career spanning organizations such as <span className="text-white font-medium">Mphasis Limited</span>, <span className="text-white font-medium">Qualifacts</span>, <span className="text-white font-medium">Cyspan</span>, and <span className="text-white font-medium">NIC (National Informatics Centre)</span>, I have delivered solutions across complex domains including Banking & Wealth Advisory, Healthcare, Public Sector Administration, and Educational tabulations.
              </p>
            </div>

            {/* Architecture & Approach Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/60 border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
              <h4 className="text-lg font-bold text-white flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <span>My Approach to Scalable Systems</span>
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {personal.approach}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Micro-Frontends (Single-SPA & NgRx)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Fault-Tolerant Polly Circuit Breakers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Automated Testing (X-Unit, TDD, BDD)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>CI/CD Automation (GitHub & Bamboo)</span>
                </div>
              </div>
            </div>

            {/* Domain Expertise Cards */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Enterprise Domain Experience</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {domains.map((dom, idx) => {
                  const IconComp = domainIcons[dom.icon] || Building;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="p-2 rounded-lg bg-cyan-950/60 text-cyan-400 border border-cyan-800/30">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <h5 className="text-sm font-semibold text-white">{dom.name}</h5>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{dom.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Education, Certifications & Credentials */}
          <div className="lg:col-span-5 space-y-6">

            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white">Education</h4>
              </div>

              {education.map((edu, idx) => (
                <div key={idx} className="space-y-2 border-l-2 border-cyan-500/40 pl-4 ml-1">
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/30">
                    {edu.period}
                  </span>
                  <h5 className="text-base font-bold text-white pt-1">{edu.degree}</h5>
                  <p className="text-sm text-slate-300 font-medium">{edu.institution}</p>
                  <div className="inline-block px-2.5 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold">
                    Score: {edu.score}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications Card */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white">Certifications & Licenses</h4>
              </div>

              {certifications.map((cert, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">{cert.title}</span>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">Verified</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {cert.skills.map((s, i) => (
                      <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-700/60">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Languages Card */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20">
                  <Languages className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white">Languages</h4>
              </div>

              <div className="space-y-3">
                {languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <span className="text-sm font-semibold text-white">{lang.name}</span>
                    <span className="text-xs font-mono text-slate-400">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

