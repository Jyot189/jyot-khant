"use client";

import React from "react";
import { FileText, Download, ExternalLink, CheckCircle, GraduationCap, Briefcase, Award } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function ResumeSection() {
  const { personal, experiences } = portfolioData;

  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute right-1/4 bottom-10 w-[500px] h-[300px] glow-gradient-2 pointer-events-none rounded-full blur-3xl opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Resume &amp; Credentials
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Download an official copy of my resume or inspect key qualifications, education, and career milestones.
          </p>
        </div>

        {/* Resume Preview & Download Card Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl glass-card border border-white/10 p-8 sm:p-12 overflow-hidden shadow-2xl">
            {/* Top banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/10">
                  <FileText className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {personal.name} — Resume
                  </h3>
                  <p className="text-sm text-slate-400">
                    PDF Document • Updated 2025/2026
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={personal.resumeUrl}
                  download="Jyot_Khant_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>

                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  <span>Open in Browser</span>
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                </a>
              </div>
            </div>

            {/* Quick summary cards inside resume box */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Education */}
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/5">
                <div className="flex items-center gap-2.5 text-cyan-400 mb-3">
                  <GraduationCap className="w-5 h-5" />
                  <h4 className="font-bold text-white text-base">Education</h4>
                </div>
                <p className="text-sm font-semibold text-slate-200">
                  Bachelor of Technology
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Computer Science &amp; Engineering
                </p>
                <p className="text-xs text-cyan-400/90 mt-2 font-mono">
                  2021 – 2025
                </p>
              </div>

              {/* Card 2: Focus Areas */}
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/5">
                <div className="flex items-center gap-2.5 text-sky-400 mb-3">
                  <Award className="w-5 h-5" />
                  <h4 className="font-bold text-white text-base">Core Strengths</h4>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Full-Stack App Architecture</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>API Design &amp; Integration</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Performance Optimization</span>
                  </li>
                </ul>
              </div>

              {/* Card 3: Experience Snapshot */}
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/5">
                <div className="flex items-center gap-2.5 text-indigo-400 mb-3">
                  <Briefcase className="w-5 h-5" />
                  <h4 className="font-bold text-white text-base">Experience</h4>
                </div>
                <p className="text-sm font-semibold text-slate-200">
                  Software Engineering
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Freelance &amp; Open Source
                </p>
                <p className="text-xs text-slate-400 mt-2">
                  15+ deployed web applications &amp; systems
                </p>
              </div>
            </div>

            {/* Note about updating resume */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-400 gap-2">
              <p>
                Looking for a tailored copy or references? Reach out via{" "}
                <a
                  href={`mailto:${personal.email}`}
                  className="text-cyan-400 hover:underline"
                >
                  {personal.email}
                </a>
              </p>
              <span className="font-mono text-slate-500">
                PDF Ready • Fast Download
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
