"use client";

import Image from "next/image";
import useMousePosition from "../utils/useMousePosition";
import { motion } from "motion/react";
import { useState, Dispatch, SetStateAction } from "react";
import MailButton from "./MailButton";

function HeroMask({
  mailButtonHovered,
  setMailButtonHovered,
  mailButtonCopied,
  setMailButtonCopied,
}: {
  mailButtonHovered: boolean;
  setMailButtonHovered: Dispatch<SetStateAction<boolean>>;
  mailButtonCopied: boolean;
  setMailButtonCopied: Dispatch<SetStateAction<boolean>>;
}) {
  const { x: mouseX, y: mouseY } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 620 : 8;

  return (
    <motion.div
      className="mask pointer-events-none absolute inset-0 z-10 flex h-full flex-col p-2 px-8 max-md:invisible md:px-16"
      animate={{
        maskPosition: `${mouseX - size / 2}px ${mouseY - size / 2}px`,
        maskSize: `${size}px`,
      }}
      transition={{ type: "tween", ease: "backOut" }}
    >
      <section className="mx-auto flex w-fit max-w-160 flex-col items-start gap-4 py-16 text-3xl leading-tight">
        <div className="flex flex-row items-end gap-2">
          <p className="text-white">Justin</p>
          <Image
            src={"/img/waving-sitting-4by5.png"}
            width={120}
            height={150}
            alt="Justin Dotzlaw"
            className="rounded-xl"
          />
          <p className="text-white">Dotzlaw</p>
        </div>
        <h2
          className="pointer-events-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="text-white">
            I&apos;m curious by nature and enjoy learning across different
            areas, especially where psychology and technology overlap. Outside
            of work, I like learning languages, traveling, hiking, and exploring
            new cultures.{" "}
            <span className="text-black">
              If you&apos;d like to collaborate (or even be friends!), feel free
              to connect! I&apos;m always happy to meet new people.
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
    </motion.div>
  );
}

export default HeroMask;
