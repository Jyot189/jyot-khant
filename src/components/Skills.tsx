"use client";

import React, { useState } from "react";
import { Cpu, Check, Layers, Code, Database, Wrench } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...skillCategories.map((c) => c.title)];

  const categoryIcons: Record<string, React.ReactNode> = {
    "Frontend Engineering": <Layers className="w-5 h-5 text-cyan-400" />,
    "Backend & Systems": <Code className="w-5 h-5 text-indigo-400" />,
    "Databases & Cloud": <Database className="w-5 h-5 text-sky-400" />,
    "Tools & Methodologies": <Wrench className="w-5 h-5 text-emerald-400" />,
  };

  const filteredCategories =
    activeCategory === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.title === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Skills &amp; Technologies
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            A comprehensive overview of languages, frameworks, databases, and engineering tools I leverage daily.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="p-7 rounded-2xl glass-card border border-white/10 relative overflow-hidden group hover:border-cyan-500/30 transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  {categoryIcons[category.title] || <Cpu className="w-5 h-5 text-cyan-400" />}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                  <span className="text-xs text-slate-400">
                    {category.skills.length} core competencies
                  </span>
                </div>
              </div>

              {/* Skills Badges with proficiency pill */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#131b2e]/70 border border-white/5 hover:border-cyan-400/40 hover:bg-[#18233c] transition-all group/item"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover/item:scale-125 transition-transform" />
                    <span className="text-sm font-semibold text-slate-200 group-hover/item:text-white">
                      {skill.name}
                    </span>
                    <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/5 text-cyan-300/80">
                      {skill.level}
                    </span>
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
