export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "Mobile (Flutter & iOS)" | "Cross-Platform" | "Accessibility & EdTech";
  tags: string[];
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
  type: "Full-Time" | "Internship" | "Contract";
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
      "Passionate cross-platform mobile application developer crafting high-performance, elegant iOS & Android applications using Flutter, Dart, Kotlin, In-App Purchases / Subscriptions, Shorebird Code Push, and modern state architectures.",
    about: [
      "I am a passionate Mobile Application Developer who loves writing expressive, elegant, and maintainable code. With hands-on industry experience at ESparkBiz Technologies, I specialize in building smooth, scalable, and cross-platform apps deployed to both iOS (App Store) and Android (Google Play Store).",
      "I have deep expertise in integrating In-App Purchases (IAP) and recurring subscription models (Apple StoreKit & Google Play Billing) with secure receipt verification, purchase restoration, and subscription lifecycle management.",
      "As an experienced Flutter developer, I am proficient in Dart with industry-proven state management solutions like GetX, BLoC, and Riverpod. I integrate cutting-edge tools like Shorebird for instant over-the-air (OTA) code updates, ensuring continuous zero-downtime hotfixes without waiting for app store review delays.",
      "In native Android development, I leverage Kotlin and the MVVM architecture to build scalable, responsive, and robust mobile systems. From commercial deployments like PackTamam (Android & iOS) to live accessibility EdTech platforms like the ASL Learning App, I deliver end-to-end mobile solutions from design to store launch.",
    ],
    location: "Valsad, Gujarat, India",
    email: "jyotkhant2002@gmail.com",
    phone: "(+91) 9725888368",
    status: "Mobile App Developer at ESparkBiz Technologies",
    resumeUrl: "/Jyot_Khant_Resume_Simple.pdf",
    resumePreviewImg: "/resume-preview-simple.png",
    socials: {
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
      value: "IAP",
      label: "In-App Subscriptions",
      description: "StoreKit & Play Billing live",
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
        { name: "iOS & App StoreKit", level: "Expert" },
        { name: "In-App Purchases (IAP)", level: "Expert" },
        { name: "Kotlin", level: "Advanced" },
        { name: "Android SDK", level: "Advanced" },
        { name: "Shorebird (Code Push)", level: "Advanced" },
      ],
    },
    {
      title: "Monetization & In-App Subscriptions",
      skills: [
        { name: "Apple StoreKit Integration", level: "Expert" },
        { name: "Google Play Billing", level: "Expert" },
        { name: "Subscription Lifecycle & Webhooks", level: "Advanced" },
        { name: "Receipt Verification & Security", level: "Advanced" },
        { name: "Paywall UI/UX Optimization", level: "Expert" },
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
      title: "Backend, Cloud & Tools",
      skills: [
        { name: "Firebase (Auth, Firestore, FCM)", level: "Advanced" },
        { name: "Shorebird (OTA Code Push)", level: "Expert" },
        { name: "CodeMagic CI/CD", level: "Advanced" },
        { name: "RESTful APIs Integration", level: "Expert" },
        { name: "Xcode & TestFlight", level: "Expert" },
        { name: "Android Studio", level: "Expert" },
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
        "Engineering In-App Purchases (IAP) and recurring subscription models for iOS and Android, handling receipt verification, purchase restoration, and entitlement checks.",
        "Integrating Shorebird Code Push to deliver instant over-the-air hotfixes and feature updates directly to users without app store delays.",
        "Architecting robust mobile applications using Dart with BLoC and GetX state management patterns.",
        "Integrating secure REST APIs, Firebase real-time database, cloud authentication, and push notifications.",
        "Configuring and managing automated mobile CI/CD build and release workflows using CodeMagic.",
        "Profiling app performance, minimizing memory leaks, and achieving silky smooth 60fps animations.",
      ],
      technologies: ["Flutter", "Dart", "In-App Purchases", "StoreKit", "Shorebird", "BLoC", "GetX", "Firebase", "CodeMagic", "REST APIs"],
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
      technologies: ["Kotlin", "Android SDK", "MVVM", "Flutter", "Dart", "Room DB"],
    },
  ],
  projects: [
    {
      id: "proj-packtamam",
      title: "PackTamam Mobile App (Android & iOS)",
      subtitle: "Commercial Packaging & Food Packaging Solutions Ecosystem",
      description:
        "Production cross-platform mobile application developed and deployed to both Google Play Store (Android) and Apple App Store (iOS) for PackTamam (packtamam.com). Enables businesses and customers to explore innovative packaging solutions, access real-time product catalogs, submit packaging inquiries, and track orders.",
      category: "Mobile (Flutter & iOS)",
      tags: ["Flutter", "Dart", "Android Deployed", "iOS Deployed", "Shorebird", "Firebase", "REST APIs"],
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
      id: "proj-asl",
      title: "American Sign Language (ASL) Learning App",
      subtitle: "Live Inclusive EdTech Mobile Application with In-App Subscriptions",
      description:
        "Live cross-platform mobile application deployed on iOS and Android designed to help users learn and practice American Sign Language through interactive lessons, HD video demonstrations, and quizzes. Features seamless In-App Purchases (IAP) & recurring subscriptions for premium lessons, personalized progress tracking, and inclusive accessibility.",
      category: "Accessibility & EdTech",
      tags: ["Flutter", "Dart", "iOS & Android Live", "In-App Purchases (IAP)", "StoreKit Subscriptions", "Firebase", "Accessibility"],
      liveUrl: "https://theaslshop.com/",
      featured: true,
      highlights: [
        "Live production mobile app with complete iOS and Android deployments",
        "Engineered In-App Purchases (IAP) and recurring subscription models (StoreKit & Play Billing) for premium tiered content",
        "Interactive gamified lessons with curated video sign demonstrations and gesture recognition aids",
        "Adaptive quiz engine with instant validation and cloud score synchronization powered by Firebase",
        "High-contrast accessible UI supporting both hearing and deaf learners with offline caching",
      ],
      stats: "Live on App Store & Play Store",
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
      title: "In-App Purchases & Subscriptions",
      description:
        "Complete Apple StoreKit & Google Play Billing integrations, subscription lifecycle handling, paywall UX, and secure receipt verification.",
      icon: "CreditCard",
    },
    {
      title: "Shorebird OTA Code Push",
      description:
        "Instant over-the-air Flutter updates and instant hotfixes with Shorebird, skipping prolonged app store review bottlenecks.",
      icon: "Zap",
    },
    {
      title: "Native Android & Clean Architecture",
      description:
        "Clean MVVM native Android architecture with Kotlin, Coroutines, Room local DB, and seamless RESTful API network integration.",
      icon: "Code2",
    },
  ],
};
