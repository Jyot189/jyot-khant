"use client";

import React from "react";
import { User, Smartphone, Code2, Layers, Cpu, CheckCircle, GraduationCap, MapPin, Globe, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
  const { personal, services, education } = portfolioData;

  const iconMap: Record<string, React.ReactNode> = {
    Smartphone: <Smartphone className="w-6 h-6 text-cyan-400" />,
    Code2: <Code2 className="w-6 h-6 text-sky-400" />,
    Layers: <Layers className="w-6 h-6 text-indigo-400" />,
    Cpu: <Cpu className="w-6 h-6 text-emerald-400" />,
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
            Engineering High-Performance Mobile Experiences
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Get to know my engineering background, mobile craftsmanship, and academic foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Bio Story & Education Details */}
          <div className="lg:col-span-6 flex flex-col gap-5 text-slate-300 leading-relaxed text-base">
            {personal.about.map((paragraph, idx) => (
              <p key={idx} className="text-slate-300">
                {paragraph}
              </p>
            ))}

            {/* Quick highlights checklist */}
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Flutter &amp; Dart Specialist</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Native Android (Kotlin &amp; MVVM)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>BLoC, GetX &amp; Riverpod State</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Automated CI/CD with CodeMagic</span>
              </div>
            </div>

            {/* Academic & Location Cards */}
            <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Education &amp; Background:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-cyan-400 font-semibold mb-1">
                        <span>{edu.period}</span>
                        <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 font-mono text-[10px]">
                          {edu.grade}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-white leading-tight">
                        {edu.degree}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-1">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Language pill */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-400 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>English, Hindi &amp; Gujarati</span>
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
                    {iconMap[service.icon] || <Smartphone className="w-6 h-6 text-cyan-400" />}
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
