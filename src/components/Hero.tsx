"use client";

import React from "react";
import { Download, ArrowRight, Mail, Sparkles, Terminal, Code2, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const { personal, metrics } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] glow-gradient-1 pointer-events-none rounded-full blur-3xl opacity-70 -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] glow-gradient-2 pointer-events-none rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Introductions & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 text-xs font-semibold mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{personal.status}</span>
            </div>

            {/* Main Greeting and Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>

            <h2 className="mt-3 text-xl sm:text-2xl font-semibold text-slate-300 flex items-center gap-2">
              <Code2 className="w-6 h-6 text-cyan-400 inline-block" />
              {personal.role}
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              {personal.tagline}
            </p>

            {/* CTAs: Projects, Resume, Contact */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.resumeUrl}
                download="Jyot_Khant_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 transition-all hover:text-white"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Social Channels Strip */}
            <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-4 w-full">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={personal.socials.email}
                  className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal Card Preview */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gradient border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 opacity-30 blur-lg" />

              <div className="relative rounded-2xl glass-card border border-white/10 overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400">jyot-developer-profile.ts</span>
                  </div>
                  <Terminal className="w-4 h-4 text-slate-400" />
                </div>

                {/* Terminal Code Body */}
                <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed text-slate-300 bg-[#0b0e17]/95">
                  <p>
                    <span className="text-pink-400">const</span>{" "}
                    <span className="text-cyan-300">developer</span> = &#123;
                  </p>
                  <div className="pl-4 space-y-1 my-1">
                    <p>
                      <span className="text-slate-400">name:</span>{" "}
                      <span className="text-emerald-300">&quot;Jyot Khant&quot;</span>,
                    </p>
                    <p>
                      <span className="text-slate-400">role:</span>{" "}
                      <span className="text-emerald-300">&quot;Mobile App Developer&quot;</span>,
                    </p>
                    <p>
                      <span className="text-slate-400">company:</span>{" "}
                      <span className="text-cyan-300">&quot;ESparkBiz Technologies&quot;</span>,
                    </p>
                    <p>
                      <span className="text-slate-400">languages:</span> [
                      <span className="text-amber-300">&quot;Dart&quot;</span>,{" "}
                      <span className="text-amber-300">&quot;Kotlin&quot;</span>,{" "}
                      <span className="text-amber-300">&quot;Java&quot;</span>],
                    </p>
                    <p>
                      <span className="text-slate-400">frameworks:</span> [
                      <span className="text-cyan-300">&quot;Flutter&quot;</span>,{" "}
                      <span className="text-cyan-300">&quot;Android SDK&quot;</span>,{" "}
                      <span className="text-cyan-300">&quot;Shorebird&quot;</span>],
                    </p>
                    <p>
                      <span className="text-slate-400">stateArchitecture:</span> [
                      <span className="text-purple-300">&quot;BLoC&quot;</span>,{" "}
                      <span className="text-purple-300">&quot;GetX&quot;</span>,{" "}
                      <span className="text-purple-300">&quot;MVVM&quot;</span>],
                    </p>
                    <p>
                      <span className="text-slate-400">education:</span>{" "}
                      <span className="text-sky-300">&quot;B.E. IT (8.48 CGPA)&quot;</span>,
                    </p>
                    <p>
                      <span className="text-slate-400">openForOpportunities:</span>{" "}
                      <span className="text-emerald-400 font-semibold">true</span>,
                    </p>
                  </div>
                  <p>&#125;;</p>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-1.5 text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Ready for production</span>
                    </div>
                    <span className="text-slate-500 font-mono">v1.0.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass-card border border-white/5 hover:border-cyan-500/30 transition-all text-center group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:scale-105 transition-transform">
                {item.value}
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-200">
                {item.label}
              </div>
              <div className="mt-1 text-xs text-slate-400">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
