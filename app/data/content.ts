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
];
