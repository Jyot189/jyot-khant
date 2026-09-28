"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FileText, Download, ExternalLink, GraduationCap, Briefcase, Award, Eye, Phone, Mail, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function ResumeSection() {
  const { personal, experiences, education } = portfolioData;
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute right-1/4 bottom-10 w-[500px] h-[300px] glow-gradient-2 pointer-events-none rounded-full blur-3xl opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Official Resume</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Curriculum Vitae &amp; Credentials
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Download the official copy of my resume or inspect my career trajectory and verified credentials.
          </p>
        </div>

        {/* Resume Preview & Download Card Container */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl glass-card border border-white/10 p-6 sm:p-10 shadow-2xl">
            {/* Visual Resume Document Thumbnail */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div
                onClick={() => setShowPreviewModal(true)}
                className="relative group cursor-pointer w-full max-w-sm rounded-2xl overflow-hidden border-2 border-white/10 hover:border-cyan-400/50 shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative aspect-[1/1.414] w-full bg-white">
                  <Image
                    src={personal.resumePreviewImg}
                    alt="Jyot Khant Resume Document Preview"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-2 transition-opacity duration-300">
                    <span className="p-3 rounded-full bg-cyan-500 text-white shadow-lg">
                      <Eye className="w-6 h-6" />
                    </span>
                    <span className="text-white text-xs font-semibold tracking-wide">
                      Click to Enlarge
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-xs text-slate-400 mt-3 text-center">
                Interactive Resume Preview • PDF Version Available
              </span>
            </div>

            {/* Resume Summary & Actions */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
              {/* Header inside card */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {personal.name}
                  </h3>
                  <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                    {personal.role}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    ESparkBiz Technologies • A. D. Patel Institute of Technology
                  </p>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={personal.resumeUrl}
                    download="Jyot_Khant_Resume.pdf"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </a>

                  <a
                    href={personal.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    <span>Open PDF</span>
                    <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                  </a>
                </div>
              </div>

              {/* Verified Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Current Employment */}
                <div className="p-4 rounded-xl bg-slate-900/70 border border-white/5">
                  <div className="flex items-center gap-2 text-cyan-400 mb-1.5">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Work Experience
                    </span>
                  </div>
                  <p className="text-sm font-bold text-white">
                    ESparkBiz Technologies
                  </p>
                  <p className="text-xs text-cyan-400">
                    Mobile App Developer (Flutter &amp; Kotlin)
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1 font-mono">
                    Jan 2024 – Present
                  </p>
                </div>

                {/* Academic Degree */}
                <div className="p-4 rounded-xl bg-slate-900/70 border border-white/5">
                  <div className="flex items-center gap-2 text-indigo-400 mb-1.5">
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Education
                    </span>
                  </div>
                  <p className="text-sm font-bold text-white">
                    B.E. in Information Technology
                  </p>
                  <p className="text-xs text-slate-300">
                    A. D. Patel Institute of Tech
                  </p>
                  <p className="text-[11px] text-emerald-400 font-mono mt-1 font-semibold">
                    CGPA: 8.48 / 10 (2020 – 2024)
                  </p>
                </div>
              </div>

              {/* Direct verified contact details */}
              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 flex flex-wrap items-center justify-between gap-3 text-xs">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>{personal.email}</span>
                </a>
                <a
                  href={`tel:${personal.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>{personal.phone}</span>
                </a>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{personal.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Lightbox for Full-Size Resume Image Preview */}
      {showPreviewModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setShowPreviewModal(false)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-2 border-b border-slate-200">
              <span className="text-xs font-bold text-slate-800">
                Jyot Khant — Resume Preview
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personal.resumeUrl}
                  download="Jyot_Khant_Resume.pdf"
                  className="px-3 py-1 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download PDF
                </a>
                <button
                  onClick={() => setShowPreviewModal(false)}
                  className="text-slate-500 hover:text-slate-800 text-sm font-bold px-2 py-1"
                >
                  ✕ Close
                </button>
              </div>
            </div>
            <div className="relative aspect-[1/1.414] w-full overflow-y-auto max-h-[80vh]">
              <Image
                src={personal.resumePreviewImg}
                alt="Jyot Khant Full Resume Preview"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
