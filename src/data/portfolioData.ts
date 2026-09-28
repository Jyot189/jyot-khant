export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "Mobile (Flutter)" | "Android (Kotlin)" | "Cross-Platform" | "Accessibility & AI";
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
  type: "Full-Time" | "Internship" | "Contract" | "Open Source";
  description: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
  details: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: string;
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
    phone: string;
    status: string;
    resumeUrl: string;
    resumePreviewImg: string;
    socials: {
      github: string;
      linkedin: string;
      email: string;
      phone: string;
    };
  };
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  education: Education[];
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
    role: "Mobile App Developer",
    tagline:
      "Passionate cross-platform mobile application developer crafting high-performance, elegant iOS & Android applications using Flutter, Dart, Kotlin, Shorebird Code Push, and modern state architectures.",
    about: [
      "I am a passionate Mobile Application Developer who loves writing expressive, elegant, and maintainable code. With hands-on industry experience at ESparkBiz Technologies, I specialize in building smooth, scalable, and cross-platform apps deployed to both iOS (App Store) and Android (Google Play Store).",
      "As an experienced Flutter developer, I am proficient in Dart with industry-proven state management solutions like GetX, BLoC, and Riverpod. I integrate cutting-edge tools like Shorebird for instant over-the-air (OTA) code updates, ensuring continuous zero-downtime hotfixes without waiting for app store review delays.",
      "In native Android development, I leverage Kotlin and the MVVM architecture to build scalable, responsive, and robust mobile systems. From commercial deployments like PackTamam (Android & iOS) to accessibility-driven AI projects, I take full ownership from initial concept to store launch.",
    ],
    location: "Valsad, Gujarat, India",
    email: "jyotkhant2002@gmail.com",
    phone: "(+91) 9725888368",
    status: "Mobile App Developer at ESparkBiz Technologies",
    resumeUrl: "/jyot_khant_resume.pdf",
    resumePreviewImg: "/resume-preview.png",
    socials: {
      github: "https://github.com/Jyot189",
      linkedin: "https://www.linkedin.com/in/jyot-khant",
      email: "mailto:jyotkhant2002@gmail.com",
      phone: "tel:+919725888368",
    },
  },
  metrics: [
    {
      value: "8.48",
      label: "B.E. IT CGPA",
      description: "A. D. Patel Institute of Tech",
    },
    {
      value: "60+ fps",
      label: "Smooth UI Performance",
      description: "Optimized render pipelines",
    },
    {
      value: "Both",
      label: "Android & iOS Deployed",
      description: "Play Store & App Store live",
    },
    {
      value: "OTA",
      label: "Shorebird Code Push",
      description: "Instant over-the-air updates",
    },
  ],
  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Engineering in Information Technology",
      institution: "A. D. Patel Institute of Technology (CVM University)",
      period: "2020 - 2024",
      grade: "CGPA: 8.48",
      details:
        "Specialized in Mobile Application Engineering, Data Structures, Algorithms, Object-Oriented Architecture, Database Management Systems, and Software Engineering.",
    },
  ],
  skillCategories: [
    {
      title: "Mobile Frameworks & Languages",
      skills: [
        { name: "Flutter", level: "Expert" },
        { name: "Dart", level: "Expert" },
        { name: "Shorebird (Code Push)", level: "Advanced" },
        { name: "Kotlin", level: "Advanced" },
        { name: "Android SDK", level: "Advanced" },
        { name: "iOS Deployment", level: "Expert" },
      ],
    },
    {
      title: "State Management & Architecture",
      skills: [
        { name: "BLoC Pattern", level: "Expert" },
        { name: "GetX", level: "Expert" },
        { name: "Riverpod", level: "Advanced" },
        { name: "MVVM Architecture", level: "Advanced" },
        { name: "Clean Architecture", level: "Proficient" },
      ],
    },
    {
      title: "Backend, Cloud & Databases",
      skills: [
        { name: "Firebase (Auth, Firestore, FCM)", level: "Advanced" },
        { name: "RESTful APIs Integration", level: "Expert" },
        { name: "SQLite / Room DB", level: "Advanced" },
        { name: "Hive Local Storage", level: "Advanced" },
        { name: "JSON Serialization", level: "Expert" },
      ],
    },
    {
      title: "DevOps, CI/CD & OTA Tools",
      skills: [
        { name: "Shorebird (OTA Code Push)", level: "Expert" },
        { name: "CodeMagic CI/CD", level: "Advanced" },
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Android Studio", level: "Expert" },
        { name: "Xcode & TestFlight", level: "Advanced" },
        { name: "Postman API Testing", level: "Advanced" },
      ],
    },
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Mobile App Developer",
      company: "ESparkBiz Technologies",
      period: "Sep 2024 - Present",
      location: "India",
      type: "Full-Time",
      description: [
        "Developing high-performance cross-platform mobile applications in Flutter deployed to both Android and iOS platforms.",
        "Integrating Shorebird Code Push to deliver instant over-the-air hotfixes and feature updates directly to users without app store delays.",
        "Architecting robust mobile applications using Dart with BLoC and GetX state management patterns.",
        "Integrating secure REST APIs, Firebase real-time database, cloud authentication, and push notifications.",
        "Configuring and managing automated mobile CI/CD build and release workflows using CodeMagic.",
        "Profiling app performance, minimizing memory leaks, and achieving silky smooth 60fps animations.",
      ],
      technologies: ["Flutter", "Dart", "Shorebird", "BLoC", "GetX", "Firebase", "CodeMagic", "REST APIs", "Git"],
    },
    {
      id: "exp-2",
      role: "Intern - Mobile App Developer",
      company: "ESparkBiz Technologies",
      period: "Jan 2024 - Aug 2024",
      location: "India",
      type: "Internship",
      description: [
        "Learned and engineered mobile applications from scratch for both Android and iOS operating systems.",
        "Built production native Android components in Kotlin using clean MVVM architecture for enhanced scalability.",
        "Implemented local database caching using Room and SQLite for offline accessibility.",
        "Collaborated with senior engineers on code reviews, bug fixes, and responsive UI optimization.",
      ],
      technologies: ["Kotlin", "Android SDK", "MVVM", "Flutter", "Dart", "Room DB", "Git"],
    },
  ],
  projects: [
    {
      id: "proj-packtamam",
      title: "PackTamam Mobile App (Android & iOS)",
      subtitle: "Commercial Packaging & Food Packaging Solutions Ecosystem",
      description:
        "Production cross-platform mobile application developed and deployed to both Google Play Store (Android) and Apple App Store (iOS) for PackTamam (packtamam.com). Enables businesses and customers to explore innovative packaging solutions, access real-time product catalogs, submit packaging inquiries, and track orders.",
      category: "Mobile (Flutter)",
      tags: ["Flutter", "Dart", "Android Deployed", "iOS Deployed", "Shorebird", "Firebase", "REST APIs"],
      githubUrl: "https://github.com/Jyot189",
      liveUrl: "https://www.packtamam.com/",
      featured: true,
      highlights: [
        "Architected, developed, and deployed to both Google Play Store (Android) and Apple App Store (iOS)",
        "Integrated Shorebird Code Push for instant over-the-air (OTA) updates and bug hotfixes without store approval delays",
        "Crafted a fluid, responsive 60fps catalog experience with advanced product filtering and image caching",
        "Seamless REST API and Firebase integration for real-time packaging inquiries and notifications",
      ],
      stats: "Live on Android & iOS",
    },
    {
      id: "proj-1",
      title: "American Sign Language (ASL) Learning App",
      subtitle: "Cross-Platform Inclusive EdTech Mobile Application",
      description:
        "A cross-platform mobile application designed to help users learn and practice American Sign Language through interactive lessons, HD video demonstrations, and quizzes. Engineered with accessibility-first UI and performance optimization to bridge communication gaps between hearing and deaf individuals.",
      category: "Accessibility & AI",
      tags: ["Flutter", "Dart", "Firebase", "BLoC / GetX", "Video Player", "Accessibility"],
      githubUrl: "https://github.com/Jyot189",
      featured: true,
      highlights: [
        "Interactive gamified lessons with curated video sign demonstrations",
        "Adaptive quiz engine with instant feedback and score tracking",
        "High-contrast accessible UI supporting both hearing and deaf learners",
        "Offline lesson caching for continuous learning anywhere",
      ],
      stats: "In Active Development",
    },
    {
      id: "proj-2",
      title: "PulseStore - E-Commerce Mobile App",
      subtitle: "High-Performance Cross-Platform Shopping App",
      description:
        "Modern mobile storefront built with Flutter featuring real-time product catalogs, instant category filtering, persistent shopping cart, and mock checkout workflows.",
      category: "Mobile (Flutter)",
      tags: ["Flutter", "Dart", "Firebase", "GetX", "REST APIs"],
      githubUrl: "https://github.com/Jyot189",
      featured: true,
      highlights: [
        "Instant search & multi-attribute filter with sub-100ms response",
        "Persistent cart and favorites with GetX reactive state",
        "Integrated Firebase Authentication with Google Sign-In",
      ],
      stats: "60 FPS Fluid Animations",
    },
    {
      id: "proj-3",
      title: "ConnectPulse - Realtime Messaging App",
      subtitle: "Cross-Platform Chat Application with Push Notifications",
      description:
        "Full-featured mobile chat client supporting real-time direct messaging, online presence indicators, media sharing, and push notifications via Firebase Cloud Messaging.",
      category: "Cross-Platform",
      tags: ["Flutter", "Dart", "Firebase Firestore", "Riverpod", "FCM"],
      githubUrl: "https://github.com/Jyot189",
      featured: true,
      highlights: [
        "Real-time message streaming powered by Firestore Listeners",
        "Unread message badges and instant FCM push notifications",
        "Lightweight media compression prior to cloud upload",
      ],
      stats: "Realtime Firebase Sync",
    },
    {
      id: "proj-4",
      title: "Native Android NewsFeed (Kotlin MVVM)",
      subtitle: "Clean Architecture News Reader Application",
      description:
        "Native Android app architected in Kotlin following MVVM and Clean Architecture standards, leveraging Retrofit for REST APIs and Room for offline database caching.",
      category: "Android (Kotlin)",
      tags: ["Kotlin", "Android SDK", "MVVM", "Retrofit", "Room DB", "Coroutines"],
      githubUrl: "https://github.com/Jyot189",
      featured: false,
      highlights: [
        "Clean MVVM separation of concerns with LiveData & Coroutines",
        "Offline-first architecture with automatic Room database caching",
        "Material You dynamic theming and edge-to-edge layout",
      ],
      stats: "100% Kotlin Native",
    },
    {
      id: "proj-5",
      title: "HabitForge - Daily Productivity & Habit Tracker",
      subtitle: "Offline-First Habit Tracking Mobile App",
      description:
        "Intuitive habit and daily goal tracker built with Flutter, featuring visual streak charts, local reminders, and zero cloud dependency for complete privacy.",
      category: "Mobile (Flutter)",
      tags: ["Flutter", "Dart", "BLoC", "Hive Storage", "Local Notifications"],
      githubUrl: "https://github.com/Jyot189",
      featured: false,
      highlights: [
        "Ultra-fast local storage using Hive NoSQL key-value store",
        "Visual streak calendars and completion percentage statistics",
        "Customizable scheduled local push alerts",
      ],
      stats: "Zero Cloud Latency",
    },
  ],
  services: [
    {
      title: "Cross-Platform App (Android & iOS)",
      description:
        "End-to-end mobile applications built with Flutter & Dart, deployed to Google Play Store & Apple App Store with native 60fps performance.",
      icon: "Smartphone",
    },
    {
      title: "Shorebird OTA Code Push",
      description:
        "Instant over-the-air Flutter updates and instant hotfixes with Shorebird, skipping prolonged app store review bottlenecks.",
      icon: "Zap",
    },
    {
      title: "State Management & Architecture",
      description:
        "Production-grade state solutions utilizing BLoC, GetX, and Riverpod to guarantee predictable, bug-free, and testable app logic.",
      icon: "Layers",
    },
    {
      title: "Native Android (Kotlin & MVVM)",
      description:
        "Clean MVVM native Android architecture with Kotlin, Coroutines, Room local DB, and seamless RESTful API network integration.",
      icon: "Code2",
    },
  ],
};
