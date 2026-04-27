import Image from "next/image";
import { ProjectItem } from "./types";
import Project from "./components/Project";
import HeroMask from "./components/HeroMask";

const projects: ProjectItem[] = [
  {
    time: "Spring 2026",
    title: "ZhongLens",
    description: `Learning Chinese is hard. ZhongLens is a Chrome Extension that lets you look up words directly 
    from images using OCR, turning anything on your screen into interactive, readable text so you can learn
    new words instantly without typing or switching tabs.`,
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
          "Led UX strategy and product design for a 0→1 mobile app",
          "Designed MBTI-inspired profiling system: 16 investor archetypes (ancient gods) mapped to pre-built crypto portfolios with risk profiling disguised as a pop-culture quiz",
          "Produced AI illustrations for each archetype character",
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
        alt: "Another example of using ZhongLens on a YouTube video to look up subtitles instantly.",
        layout: "half",
      },
      {
        url: "https://geopgwvgdkgn4bjx.public.blob.vercel-storage.com/zhonglens/website.jpeg",
        alt: "Using ZhongLens on a YouTube video to look up subtitles instantly.",
        layout: "half",
      },
    ],
  },
  {
    time: "January 2026",
    title: "De Nieuwe Mensa - Website",
    description: `Designed and developed a website for De Nieuwe Mensa, an F&B startup I co-founded. 
    The site represents the project to key stakeholders, as well as new students, with a focus on modern design 
    and subtle animations to give the project a polished and professional presence.
    `,
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
          "Led UX strategy and product design for a 0→1 mobile app",
          "Designed MBTI-inspired profiling system: 16 investor archetypes (ancient gods) mapped to pre-built crypto portfolios with risk profiling disguised as a pop-culture quiz",
          "Produced AI illustrations for each archetype character",
        ],
      },
    ],
    images: [
      {
        url: "https://geopgwvgdkgn4bjx.public.blob.vercel-storage.com/de-nieuwe-mensa/hero.jpg",
        alt: "Using ZhongLens on a YouTube video to look up subtitles instantly.",
        layout: "full",
      },
      {
        url: "https://geopgwvgdkgn4bjx.public.blob.vercel-storage.com/de-nieuwe-mensa/cards_large.jpeg",
        alt: "Another example of using ZhongLens on a YouTube video to look up subtitles instantly.",
        layout: "half",
      },
      {
        url: "https://geopgwvgdkgn4bjx.public.blob.vercel-storage.com/de-nieuwe-mensa/values_large.jpeg",
        alt: "Using ZhongLens on a YouTube video to look up subtitles instantly.",
        layout: "half",
      },
      {
        url: "https://geopgwvgdkgn4bjx.public.blob.vercel-storage.com/de-nieuwe-mensa/about.jpg",
        alt: "Using ZhongLens on a YouTube video to look up subtitles instantly.",
        layout: "full",
      },
      {
        url: "https://geopgwvgdkgn4bjx.public.blob.vercel-storage.com/de-nieuwe-mensa/feedback_large.jpeg",
        alt: "Using ZhongLens on a YouTube video to look up subtitles instantly.",
        layout: "half",
      },
      {
        url: "https://geopgwvgdkgn4bjx.public.blob.vercel-storage.com/de-nieuwe-mensa/rating_large.jpeg",
        alt: "Using ZhongLens on a YouTube video to look up subtitles instantly.",
        layout: "half",
      },
    ],
  },
];

export default async function Home() {
  async function fetchProjects() {
    const res = await fetch(
      "https://api.jsonbin.io/v3/b/69efc64936566621a8fb048d",
      {
        headers: {
          "X-Access-Key":
            "$2a$10$EC9834fZ3hem9r2rQJM4HuP.41A19Zf71/rtJ0FwC9YTyF26Pewm.",
        },
      },
    );
    const json = await res.json();
    const projects = json.record;
    console.log(projects);
    return projects;
  }

  const projects = await fetchProjects();

  return (
    <div className="relative px-16">
      <HeroMask />
      <div className="flex flex-col p-2">
        <section className="mx-auto flex w-fit max-w-160 flex-col items-start gap-4 py-16 text-3xl leading-tight">
          <div className="flex flex-row items-end gap-2">
            <p className="">Justin</p>
            <Image
              src={"/img/avatar-4by5.png"}
              width={120}
              height={150}
              alt="Justin Dotzlaw"
              className="rounded-xl"
            />
            <p className="">Dotzlaw</p>
          </div>
          <h2 className="relative">
            <span className="relative">
              Web developer and AI Master&apos;s student with a background in
              psychology. I’ve co-founded and worked in early-stage startups
              across growth, product, and engineering, shipping projects end to
              end.{" "}
              <span className="text-stone-500">
                Currently building web applications and working with businesses
                to create software that solves real problems.
              </span>
            </span>
          </h2>
          <div className="flex flex-row gap-2 text-sm">
            <a
              href="https://www.linkedin.com/in/justindotzlaw/"
              className="text-black"
            >
              <button className="cursor-pointer rounded-xl bg-stone-100 px-4 py-2 text-black transition-colors duration-300 hover:bg-black hover:text-white">
                LinkedIn
              </button>
            </a>
            <a href="https://github.com/dollarwolv" className="text-black">
              <button className="cursor-pointer rounded-xl bg-stone-100 px-4 py-2 text-black transition-colors duration-300 hover:bg-black hover:text-white">
                GitHub
              </button>
            </a>
            <a href="mailto:justindotzlaw@gmail.com">
              <button className="cursor-pointer rounded-xl bg-stone-100 px-4 py-2 text-black transition-colors duration-300 hover:bg-black hover:text-white">
                Mail
              </button>
            </a>
          </div>
        </section>
        <section className="mx-auto flex w-full flex-col items-start">
          <h2 className="mx-auto mb-8 w-full max-w-160 text-2xl text-stone-500">
            Recent Projects
          </h2>
          {projects.map((item, itemIndex) => (
            <Project project={item} key={itemIndex} />
          ))}
        </section>
      </div>
    </div>
  );
}
