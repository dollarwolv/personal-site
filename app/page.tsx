"use client";

import Image from "next/image";
import Project from "./components/Project";
import HeroMask from "./components/HeroMask";
import { projects } from "./data/content";
import MailButton from "./components/MailButton";
import { useState } from "react";

export default function Home() {
  const [mailButtonHovered, setMailButtonHovered] = useState(false);
  const [mailButtonCopied, setMailButtonCopied] = useState(false);

  return (
    <div className="relative px-8 md:px-16">
      <HeroMask
        setMailButtonHovered={setMailButtonHovered}
        mailButtonHovered={mailButtonHovered}
        mailButtonCopied={mailButtonCopied}
        setMailButtonCopied={setMailButtonCopied}
      />
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
              <button className="cursor-pointer rounded-xl bg-stone-100 px-4 py-2 text-black transition-colors duration-300 hover:bg-[#ec4e39] hover:text-white">
                LinkedIn
              </button>
            </a>
            <a href="https://github.com/dollarwolv" className="text-black">
              <button className="cursor-pointer rounded-xl bg-stone-100 px-4 py-2 text-black transition-colors duration-300 hover:bg-[#ec4e39] hover:text-white">
                GitHub
              </button>
            </a>
            <MailButton
              mailButtonHovered={mailButtonHovered}
              setMailButtonHovered={setMailButtonHovered}
              mailButtonCopied={mailButtonCopied}
              setMailButtonCopied={setMailButtonCopied}
            />
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
