import React, { useState } from 'react';
import { 
  Server, 
  Layout, 
  Cloud, 
  Database, 
  Cpu, 
  Bot, 
  Sparkles, 
  Check, 
  Filter 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const categoryIcons = {
    backend: Server,
    frontend: Layout,
    'cloud-devops': Cloud,
    database: Database,
    'architecture-testing': Cpu,
    'ai-tooling': Bot,
  };

  const tabs = [
    { id: 'all', label: 'All Technologies' },
    ...skillCategories.map(cat => ({ id: cat.id, label: cat.title }))
  ];

  const displayedCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 relative bg-slate-900/30 border-t border-slate-900">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Enterprise Technologies
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Directly derived from over 9 years of real-world delivery across high-throughput enterprise systems.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25 scale-[1.02]'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Server;
            return (
              <div
                key={cat.id}
                className="rounded-2xl p-6 bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/30 group flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-950 text-cyan-400 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          skill.highlight
                            ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/40 font-semibold shadow-xs'
                            : 'bg-slate-950/80 text-slate-300 border border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        )}
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Count Badge */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>{cat.skills.length} Capabilities</span>
                  <span className="text-cyan-400/80">Verified on CV</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

