"use client";

import React from "react";
import { User, Code2, Layout, Server, Zap, CheckCircle, GraduationCap, MapPin, Globe } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
  const { personal, services } = portfolioData;

  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-6 h-6 text-cyan-400" />,
    Layout: <Layout className="w-6 h-6 text-sky-400" />,
    Server: <Server className="w-6 h-6 text-indigo-400" />,
    Zap: <Zap className="w-6 h-6 text-amber-400" />,
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 glow-gradient-3 pointer-events-none rounded-full blur-3xl opacity-40 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Passionate About Code, Driven by Impact
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Get to know my engineering background, core philosophies, and what I bring to the table.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Bio Story */}
          <div className="lg:col-span-6 flex flex-col gap-5 text-slate-300 leading-relaxed text-base">
            {personal.about.map((paragraph, idx) => (
              <p key={idx} className="text-slate-300">
                {paragraph}
              </p>
            ))}

            {/* Quick highlights checklist */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Modern Clean Code Standards</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Responsive &amp; Mobile-First Design</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Rapid Prototyping &amp; Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Continuous Learning Mindset</span>
              </div>
            </div>

            {/* Location & Academic badge */}
            <div className="mt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                <span>B.Tech in Computer Science</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>English &amp; Gujarati / Hindi</span>
              </div>
            </div>
          </div>

          {/* Core Areas / Services Offered Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-card glass-card-hover border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    {iconMap[service.icon] || <Code2 className="w-6 h-6 text-cyan-400" />}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {service.description}
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
