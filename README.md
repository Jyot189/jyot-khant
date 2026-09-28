# Jyot Khant - Personal Portfolio & Engineering Showcase 🚀

A modern, responsive, and high-performance personal portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

Live Website: [jyot-khant.vercel.app](https://jyot-khant.vercel.app)

---

## 🌟 Highlights & Features

- **⚡ Blazing Fast Architecture**: Next.js App Router with Static Site Generation (SSG) for instant page loads.
- **🎨 Modern Dark Tech Aesthetic**: Dark theme with ambient neon glows, glassmorphism cards, and interactive hover feedback.
- **📂 Filterable Project Showcase**: Categorized portfolio displaying full-stack apps, frontend designs, microservices, and AI utilities with GitHub source and live demo links.
- **📄 Instant Resume Download**: Built-in resume viewer and one-click PDF download button directly linked to `public/jyot_khant_resume.pdf`.
- **🛠️ Detailed Skills & Tech Stack**: Categorized overview of frontend, backend, database, and dev tools with proficiency indicators.
- **💼 Interactive Work Timeline**: Highlights experience in freelance software engineering, open-source development, and computer science education.
- **📬 Contact & Social Channels**: Interactive contact form with copy-to-clipboard email shortcut and direct GitHub/LinkedIn profiles.
- **📱 Fully Responsive**: Tailored for mobile, tablet, laptop, and ultra-wide displays.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 & Glassmorphism
- **Icons**: Lucide Icons & Custom SVGs
- **Deployment**: Vercel

---

## 📂 Project Structure

```text
jyot-khant/
├── public/                     # Static assets & Resume PDF
│   └── jyot_khant_resume.pdf   # Direct resume download target
├── src/
│   ├── app/
│   │   ├── globals.css         # Custom animations & theme styles
│   │   ├── layout.tsx          # Root layout and SEO metadata
│   │   └── page.tsx            # Main portfolio page entry
│   ├── components/
│   │   ├── Navbar.tsx          # Top navigation with resume download CTA
│   │   ├── Hero.tsx            # Hero introduction & terminal preview
│   │   ├── About.tsx           # Bio, highlights, and services
│   │   ├── Skills.tsx          # Categorized tech skills filter
│   │   ├── Experience.tsx      # Timeline of career & milestones
│   │   ├── Projects.tsx        # Project showcase with category filters
│   │   ├── ResumeSection.tsx   # Resume summary & PDF download card
│   │   ├── Contact.tsx         # Interactive contact form & socials
│   │   ├── Footer.tsx          # Footer with back-to-top button
│   │   └── Icons.tsx           # Clean brand SVG icons
│   └── data/
│       └── portfolioData.ts    # Centralized data model (easy to edit!)
├── package.json
└── README.md
```

---

## 🚀 Getting Started Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Jyot189/jyot-khant.git
   cd jyot-khant
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local dev server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📄 Customizing Your Information

All your personal details, skills, experiences, and projects are centralized in one easy-to-edit file:
👉 **`src/data/portfolioData.ts`**

To update your resume:
👉 Replace `public/jyot_khant_resume.pdf` with your updated resume file.

---

## 🌐 Deploy to Vercel

### Option 1: Automatic via GitHub (Recommended)
1. Push code to your GitHub repo (`main` branch).
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"Add New Project"** and select `jyot-khant`.
4. Click **Deploy**. Vercel will automatically build and publish your site with automatic preview links on every future commit!

### Option 2: Deploy via Vercel CLI
```bash
npx vercel
```
