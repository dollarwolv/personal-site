import type { ProjectItem } from "../types";

export const projects: ProjectItem[] = [
  {
    time: "Spring 2026",
    title: "ZhongLens",
    description:
      "Learning Chinese is hard. ZhongLens is a Chrome Extension that lets you look up words directly from images using OCR, turning anything on your screen into interactive, readable text so you can learn new words instantly without typing or switching tabs.",
    columns: [
      {
        title: "Link",
        text: "https://zhonglens.dev",
      },
      {
        title: "Geo",
        text: "Hong Kong",
      },
      {
        title: "Status",
        text: "Beta Testing",
      },
      {
        title: "Languages",
        text: "JavaScript, Python",
      },
      {
        title: "Frameworks",
        text: "React, WXT (extension), Next.js (website), Supabase (auth), Stripe (billing), FastAPI (OCR backend)",
      },
      {
        title: "Outcomes",
        items: [
          "Built a Chrome extension that turns image-based Chinese text into selectable, readable text",
          "Integrated OCR with a FastAPI backend for screenshot-based lookup",
          "Designed the product flow for fast Chinese learning without typing or switching tabs",
        ],
      },
    ],
    images: [
      {
        url: "https://geopgwvgdkgn4bjx.public.blob.vercel-storage.com/zhonglens/xiaowanzi.jpg",
        alt: "Using ZhongLens on a YouTube video to look up subtitles instantly.",
        layout: "full",
      },
      {
        url: "https://geopgwvgdkgn4bjx.public.blob.vercel-storage.com/zhonglens/overlay.jpeg",
        alt: "ZhongLens overlay showing image-based Chinese text recognition.",
        layout: "half",
      },
      {
        url: "https://geopgwvgdkgn4bjx.public.blob.vercel-storage.com/zhonglens/website.jpeg",
        alt: "ZhongLens website preview.",
        layout: "half",
      },
    ],
  },
  {
    time: "January 2026",
    title: "De Nieuwe Mensa - Website",
    description:
      "Designed and developed a website for De Nieuwe Mensa, an F&B startup I co-founded. The site represents the project to key stakeholders, as well as new students, with a focus on modern design and subtle animations to give the project a polished and professional presence.",
    columns: [
      {
        title: "Link",
        text: "https://denieuwemensa.nl/",
      },
      {
        title: "Geo",
        text: "Hong Kong",
      },
      {
        title: "Status",
        text: "Live - X Monthly Visitors",
      },
      {
        title: "Languages",
        text: "JavaScript JSX",
      },
      {
        title: "Frameworks",
        text: "Next.js, Payload CMS, Framer Motion",
      },
      {
        title: "Outcomes",
        items: [
          "Designed and developed the full public-facing website",
          "Implemented a food rating system to enable students to participate in the decision-making about the food we sell",
          "Used Payload CMS to make content easier to manage",
          "Added subtle motion and polished visual design to improve credibility with stakeholders",
        ],
      },
    ],
    images: [
      {
        url: "https://geopgwvgdkgn4bjx.public.blob.vercel-storage.com/de-nieuwe-mensa/hero.jpg",
        alt: "De Nieuwe Mensa website hero section.",
        layout: "full",
      },
      {
        url: "https://geopgwvgdkgn4bjx.public.blob.vercel-storage.com/de-nieuwe-mensa/cards_large.jpeg",
        alt: "De Nieuwe Mensa website card section.",
        layout: "half",
      },
      {
        url: "https://geopgwvgdkgn4bjx.public.blob.vercel-storage.com/de-nieuwe-mensa/values_large.jpeg",
        alt: "De Nieuwe Mensa website values section.",
        layout: "half",
      },
      {
        url: "https://geopgwvgdkgn4bjx.public.blob.vercel-storage.com/de-nieuwe-mensa/about.jpg",
        alt: "De Nieuwe Mensa website about section.",
        layout: "full",
      },
      {
        url: "https://geopgwvgdkgn4bjx.public.blob.vercel-storage.com/de-nieuwe-mensa/feedback_large.jpeg",
        alt: "De Nieuwe Mensa website feedback section.",
        layout: "half",
      },
      {
        url: "https://geopgwvgdkgn4bjx.public.blob.vercel-storage.com/de-nieuwe-mensa/rating_large.jpeg",
        alt: "De Nieuwe Mensa website rating section.",
        layout: "half",
      },
    ],
  },
  {
    time: "December 2025",
    title: "Justin's Blog",
    description: `Developed a personal blog platform with a full CRUD system for 
    managing articles, along with user authentication and a comment system to enable interaction. 
    Focused on clean design and smooth animations using Framer Motion to create a polished reading experience.`,
    columns: [
      {
        title: "Link",
        text: "https://blog.justindotzlaw.com/",
      },
      {
        title: "Geo",
        text: "Hong Kong",
      },
      {
        title: "Status",
        text: "Live",
      },
      {
        title: "Languages",
        text: "JavaScript JSX, SQL",
      },
      {
        title: "Frameworks",
        text: "Vite + React Router, PostgreSQL, Prisma ORM, Framer Motion",
      },
      {
        title: "Outcomes",
        items: [
          "Built a full-stack blog platform with article CRUD, user authentication, and a comment system",
          "Designed and implemented a structured content system for creating, editing, and managing posts directly on the site",
          "Created an interactive user experience with signup and commenting to move beyond a static blog",
          "Focused on visual polish and micro-interactions using Framer Motion to improve perceived quality and usability",
        ],
      },
    ],
    images: [
      {
        url: "https://geopgwvgdkgn4bjx.public.blob.vercel-storage.com/blog/blog-landing.jpg",
        alt: "The design of my personal blog page.",
        layout: "full",
      },
      {
        url: "https://geopgwvgdkgn4bjx.public.blob.vercel-storage.com/blog/blog-article-large.jpeg",
        alt: "An article on my personal blog page.",
        layout: "half",
      },
      {
        url: "https://geopgwvgdkgn4bjx.public.blob.vercel-storage.com/blog/blog-comments-large.jpeg",
        alt: "The comments section on a blog article on my page.",
        layout: "half",
      },
    ],
  },
  {
    time: "April - December 2025",
    title: "Growth @ Notigo.ai",
    description: `Notigo is a real-time AI meeting assistant focused on simplicity and user control. 
    My role focused on growth, positioning, product communication, and UI/UX design. 
    I led the shift from a business-oriented tool to a student-focused product by identifying the core user 
    segment, running user interviews, and translating those insights into changes across marketing, positioning, and the product itself.`,
    columns: [
      {
        title: "Link",
        text: "https://notigo.ai/",
      },
      {
        title: "Geo",
        text: "Amsterdam → Hong Kong (Remote)",
      },
      {
        title: "Status",
        text: "Completed",
      },
      {
        title: "Focus",
        text: "Growth, Product Marketing, SEO, Lifecycle Email, User Research",
      },
      {
        title: "Tools",
        text: "Google Ads, Meta Ads, PostHog, Figma ",
      },
      {
        title: "Outcomes",
        items: [
          "Rewrote and redesigned the landing page to improve clarity and conversion, increasing signup CTR from ~40% to ~60% (paid traffic).",
          "Led paid acquisition (Google Ads, Meta) and SEO, cutting cost per signup by ~2.5x and growing organic traffic from 0 to a compounding source of ~10 weekly signups",
          "Set up product analytics (PostHog), turning a previously untracked product into a measurable system. This enabled the team to identify drop-offs, evaluate experiments, and prioritize growth efforts based on real usage data.",
          "Identified students as the primary user segment and repositioned Notigo from a business-focused tool to a student-oriented product, aligning messaging, and acquisition & pricing strategy to increase conversion.",
        ],
      },
    ],
    images: [
      {
        url: "https://geopgwvgdkgn4bjx.public.blob.vercel-storage.com/notigo/notigo-landing-students.jpg",
        alt: "Notigo landing page showcasing product positioning.",
        layout: "full",
      },
      {
        url: "https://geopgwvgdkgn4bjx.public.blob.vercel-storage.com/notigo/notigo-seo-large.jpeg",
        alt: "Examples of high-conversion SEO articles that I wrote for Notigo.",
        layout: "half",
      },
      {
        url: "https://geopgwvgdkgn4bjx.public.blob.vercel-storage.com/notigo/notigo-in-product-screenshot-large.jpeg",
        alt: "Example of structured notes that were generated during a meeting.",
        layout: "half",
      },
    ],
  },
];
