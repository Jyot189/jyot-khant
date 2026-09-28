import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jyot Khant | Software Engineer & Developer Portfolio",
  description:
    "Explore the portfolio, projects, resume, and experience of Jyot Khant. Open for software engineering and development opportunities.",
  keywords: [
    "Jyot Khant",
    "Portfolio",
    "Software Engineer",
    "Full Stack Developer",
    "Web Development",
    "Projects",
  ],
  authors: [{ name: "Jyot Khant" }],
  openGraph: {
    title: "Jyot Khant | Portfolio",
    description:
      "Explore the projects, resume, and experience of Jyot Khant.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="min-h-screen bg-[#07090e] text-slate-100 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
