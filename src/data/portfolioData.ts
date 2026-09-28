export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "Full Stack" | "Frontend" | "Backend / API" | "AI & Tools";
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
  stats?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: "Full-Time" | "Internship" | "Freelance" | "Open Source";
  description: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: string;
    icon?: string;
  }[];
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    tagline: string;
    about: string[];
    location: string;
    email: string;
    phone?: string;
    status: string;
    avatarUrl?: string;
    resumeUrl: string;
    socials: {
      github: string;
      linkedin: string;
      twitter?: string;
      email: string;
    };
  };
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  skillCategories: SkillCategory[];
  experiences: Experience[];
  projects: Project[];
  services: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Jyot Khant",
    role: "Full-Stack Software Developer",
    tagline:
      "Crafting high-performance, user-centric web applications and scalable digital solutions with modern technologies.",
    about: [
      "Hello! I am Jyot Khant, a passionate Software Engineer and Full-Stack Developer dedicated to building performant, accessible, and elegant software systems.",
      "I specialize in modern JavaScript/TypeScript ecosystems including React, Next.js, Node.js, and modern CSS frameworks like Tailwind CSS. My focus is on turning complex architectural challenges into clean, intuitive, and delightful digital experiences.",
      "When I am not coding, I actively explore new open-source technologies, optimize system architectures, and continuously expand my skill set in cloud deployments and cutting-edge software paradigms.",
    ],
    location: "Gujarat, India (Open to Remote Worldwide)",
    email: "jyotkhant@gmail.com",
    phone: "+91 98765 43210",
    status: "Available for Hire & Collaborative Projects",
    resumeUrl: "/jyot_khant_resume.pdf",
    socials: {
      github: "https://github.com/Jyot189",
      linkedin: "https://www.linkedin.com/in/jyot-khant",
      twitter: "https://x.com/jyot_khant",
      email: "mailto:jyotkhant@gmail.com",
    },
  },
  metrics: [
    {
      value: "15+",
      label: "Projects Completed",
      description: "From concept to full deployment",
    },
    {
      value: "99.9%",
      label: "Code Reliability",
      description: "Clean architecture & robust tests",
    },
    {
      value: "10+",
      label: "Core Technologies",
      description: "Modern web, cloud & API stacks",
    },
    {
      value: "100%",
      label: "Commitment",
      description: "Dedicated to top-tier delivery",
    },
  ],
  skillCategories: [
    {
      title: "Frontend Engineering",
      skills: [
        { name: "React.js", level: "Advanced" },
        { name: "Next.js (App Router)", level: "Advanced" },
        { name: "TypeScript", level: "Proficient" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "HTML5 / Semantic CSS", level: "Expert" },
        { name: "Redux / Zustand", level: "Proficient" },
      ],
    },
    {
      title: "Backend & Systems",
      skills: [
        { name: "Node.js", level: "Proficient" },
        { name: "Express.js", level: "Proficient" },
        { name: "RESTful APIs", level: "Advanced" },
        { name: "GraphQL", level: "Intermediate" },
        { name: "Authentication (JWT, OAuth)", level: "Proficient" },
        { name: "Python / Scripting", level: "Intermediate" },
      ],
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "PostgreSQL", level: "Proficient" },
        { name: "MongoDB", level: "Proficient" },
        { name: "Prisma ORM", level: "Proficient" },
        { name: "Vercel / Netlify", level: "Advanced" },
        { name: "Supabase / Firebase", level: "Proficient" },
        { name: "AWS (S3, Lambda Basics)", level: "Intermediate" },
      ],
    },
    {
      title: "Tools & Methodologies",
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "CI / CD Pipelines", level: "Proficient" },
        { name: "Docker Basics", level: "Intermediate" },
        { name: "Postman / API Testing", level: "Advanced" },
        { name: "Responsive UI/UX Design", level: "Expert" },
        { name: "Performance Optimization", level: "Advanced" },
      ],
    },
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Full-Stack Developer",
      company: "Independent / Freelance Engineering",
      period: "2024 - Present",
      location: "Remote",
      type: "Freelance",
      description: [
        "Architecting and shipping responsive, high-performance web applications using Next.js, React, and Node.js.",
        "Developing robust REST APIs, securing authentication flows, and integrating cloud database solutions.",
        "Collaborating with clients to translate business requirements into seamless, modern user interfaces with 99+ Google Lighthouse scores.",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Vercel"],
    },
    {
      id: "exp-2",
      role: "Frontend Developer & Open Source Contributor",
      company: "Tech Projects & Community",
      period: "2023 - 2024",
      location: "India",
      type: "Open Source",
      description: [
        "Engineered multiple dynamic client-side applications with complex state management and responsive styling.",
        "Implemented clean component libraries, automated deployment workflows on Vercel, and optimized page load times by 40%.",
        "Participated in code reviews, bug fixes, and continuous feature integration.",
      ],
      technologies: ["React", "JavaScript", "HTML/CSS", "Git", "GitHub Actions"],
    },
    {
      id: "exp-3",
      role: "Computer Science & Engineering",
      company: "Higher Education / University",
      period: "2021 - 2025",
      location: "India",
      type: "Full-Time",
      description: [
        "Completed rigorous coursework in Data Structures, Algorithms, Database Management Systems, Computer Networks, and Software Engineering.",
        "Led multiple capstone academic projects focusing on modern web development, API design, and distributed systems.",
      ],
      technologies: ["Data Structures", "Algorithms", "DBMS", "OOP", "Web Technologies"],
    },
  ],
  projects: [
    {
      id: "proj-1",
      title: "NextGen SaaS Dashboard",
      subtitle: "Enterprise Analytics & Team Management Platform",
      description:
        "A full-featured SaaS web platform featuring real-time data charts, role-based authorization, team collaboration, and responsive dark/light themes.",
      category: "Full Stack",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      githubUrl: "https://github.com/Jyot189",
      liveUrl: "https://jyot-khant.vercel.app",
      featured: true,
      highlights: [
        "Real-time interactive analytics visualization",
        "Secure JWT authentication with role-based access",
        "Sub-second page transitions powered by Next.js Server Components",
      ],
      stats: "99+ Lighthouse Score",
    },
    {
      id: "proj-2",
      title: "E-Commerce CommerceHub",
      subtitle: "High-Performance Modern Online Storefront",
      description:
        "An optimized e-commerce web application featuring intuitive product browsing, dynamic filtering, persistent shopping cart, and Stripe checkout simulation.",
      category: "Full Stack",
      tags: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      githubUrl: "https://github.com/Jyot189",
      liveUrl: "https://jyot-khant.vercel.app",
      featured: true,
      highlights: [
        "Instant search & multi-attribute filter system",
        "Optimistic UI updates for cart and checkout",
        "Complete REST API with order management backend",
      ],
      stats: "Over 50+ Products Tested",
    },
    {
      id: "proj-3",
      title: "DevPulse - Developer Social Network",
      subtitle: "Community Platform for Tech Enthusiasts",
      description:
        "A developer platform to share code snippets, write tech blogs, discuss engineering problems, and follow peers.",
      category: "Full Stack",
      tags: ["Next.js", "Tailwind CSS", "Supabase", "Markdown Editor"],
      githubUrl: "https://github.com/Jyot189",
      featured: true,
      highlights: [
        "Markdown-enabled rich post creation with syntax highlighting",
        "Real-time comments, bookmarks, and upvote system",
        "Clean responsive UI with mobile-first layout",
      ],
      stats: "Full Real-time Sync",
    },
    {
      id: "proj-4",
      title: "TaskFlow Pro - Productivity Board",
      subtitle: "Kanban Project & Sprint Management Tool",
      description:
        "A smooth drag-and-drop Kanban productivity suite designed for agile development teams and solo creators.",
      category: "Frontend",
      tags: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
      githubUrl: "https://github.com/Jyot189",
      featured: false,
      highlights: [
        "Smooth drag-and-drop task workflow",
        "Offline local storage persistence",
        "Custom tag labels, priority filters, and deadlines",
      ],
      stats: "Zero External Dependencies",
    },
    {
      id: "proj-5",
      title: "CloudVault - Secure File Storage API",
      subtitle: "Microservice for Encrypted File Management",
      description:
        "A resilient REST microservice supporting chunked file uploads, AES-256 encryption at rest, and pre-signed URL generation.",
      category: "Backend / API",
      tags: ["Node.js", "Express", "AWS S3", "Docker", "Jest"],
      githubUrl: "https://github.com/Jyot189",
      featured: false,
      highlights: [
        "Chunked multipart upload for large files",
        "Automated unit & integration test coverage",
        "Rate-limiting and token verification middleware",
      ],
      stats: "100% Test Coverage",
    },
    {
      id: "proj-6",
      title: "AI Prompt Studio & Generator",
      subtitle: "Interactive LLM Prompt Optimization Workspace",
      description:
        "An AI-powered developer tool that tests, refines, and formats generative prompts for OpenAI & Gemini models.",
      category: "AI & Tools",
      tags: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
      githubUrl: "https://github.com/Jyot189",
      featured: false,
      highlights: [
        "Prompt variation comparison and token counter",
        "One-click export to code templates (Python/JS)",
        "History and preset bookmarking",
      ],
      stats: "Powered by Modern LLMs",
    },
  ],
  services: [
    {
      title: "Full-Stack Web Development",
      description:
        "End-to-end modern web applications built with Next.js, React, Node.js, and clean database integrations.",
      icon: "Code2",
    },
    {
      title: "Modern UI/UX Engineering",
      description:
        "Pixel-perfect, accessible, and hyper-responsive interfaces crafted with Tailwind CSS and sleek animations.",
      icon: "Layout",
    },
    {
      title: "API Design & Cloud Architecture",
      description:
        "Robust REST & GraphQL APIs, secure authentication, database schemas, and seamless Vercel/cloud deployments.",
      icon: "Server",
    },
    {
      title: "Performance & SEO Optimization",
      description:
        "Speeding up web apps, improving Core Web Vitals, and implementing search engine optimization best practices.",
      icon: "Zap",
    },
  ],
};
