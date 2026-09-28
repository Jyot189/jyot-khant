"use client";

import React from "react";
import { ArrowUp, Mail, Phone, Heart } from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#06080e] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-sm shadow-md shadow-cyan-500/20">
              JK
            </div>
            <div>
              <span className="font-bold text-white text-base tracking-tight block">
                {personal.name}
              </span>
              <span className="text-xs text-slate-400">
                Mobile App Developer (Flutter &amp; Android)
              </span>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={personal.socials.email}
                aria-label="Email"
                className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={personal.socials.phone}
                aria-label="Phone"
                className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-white/5 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-cyan-400 transition-colors"
              title="Back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Jyot Khant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
