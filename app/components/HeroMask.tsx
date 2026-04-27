"use client";

import Image from "next/image";
import useMousePosition from "../utils/useMousePosition";
import { motion } from "motion/react";
import { useState } from "react";

function HeroMask() {
  const { x: mouseX, y: mouseY } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);

  const size = isHovered ? 620 : 20;

  return (
    <motion.div
      className="mask pointer-events-none absolute inset-0 z-10 flex h-full flex-col p-2"
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
            src={"/img/waving-4by5.png"}
            width={120}
            height={150}
            alt="Justin Dotzlaw"
            className="rounded-xl"
          />
          <p className="text-white">Dotzlaw</p>
        </div>
        <h2 className="pointer-events-auto">
          <span
            className="text-white"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
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
      </section>
    </motion.div>
  );
}

export default HeroMask;
