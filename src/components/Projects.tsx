"use client";

import React from "react";
import { FolderGit2, ExternalLink, Sparkles, CheckCircle2, Smartphone, ShieldCheck, Heart } from "lucide-react";
import { portfolioData, Project } from "@/data/portfolioData";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/60">
      {/* Background glow */}
      <div className="absolute left-1/3 top-1/2 w-[500px] h-[300px] glow-gradient-1 pointer-events-none rounded-full blur-3xl opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Featured Mobile Apps</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Production &amp; Flagship Projects
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            High-impact mobile applications deployed on Google Play Store &amp; Apple App Store, and accessibility-first inclusive software.
          </p>
        </div>

        {/* 2 Flagship Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project: Project) => (
            <div
              key={project.id}
              className="p-7 sm:p-8 rounded-3xl glass-card glass-card-hover border border-cyan-500/30 flex flex-col justify-between group shadow-xl shadow-cyan-500/5 relative overflow-hidden"
            >
              {/* Top ambient highlight glow */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

              <div>
                {/* Header: Category + Featured & Stats Pill */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    {project.category}
                  </span>

                  <div className="flex items-center gap-2">
                    {project.stats && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                        {project.stats}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-cyan-300/90 font-medium mt-1 mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Key Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer: Tech tags + Links */}
              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-mono px-2.5 py-1 rounded-lg border ${
                        tag.includes("Deployed") || tag.includes("Shorebird")
                          ? "bg-cyan-500/20 text-cyan-200 border-cyan-500/40 font-semibold"
                          : "bg-white/5 text-slate-300 border-white/5"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons (Zero Github Links) */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>Visit PackTamam Official Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/30">
                      <Heart className="w-3.5 h-3.5 text-rose-400" />
                      <span>Inclusive Accessibility Engineering</span>
                    </div>
                  )}

                  <span className="text-xs text-slate-400 font-mono">
                    Flutter • Dart
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
