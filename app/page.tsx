import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-12 p-2">
      <div className="mx-auto flex w-fit max-w-160 flex-col items-start gap-4 text-2xl leading-snug">
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
        <h2 className="">
          Web developer and AI Master's student with a background in psychology.
          I’ve co-founded and worked in early-stage startups across growth,
          product, and engineering, shipping projects end to end.{" "}
          <span className="text-stone-500">
            Currently building web applications and working with businesses to
            create software that solves real problems.
          </span>
        </h2>
        <div className="flex flex-row gap-2 text-sm">
          <a href="https://www.linkedin.com/in/justindotzlaw/">
            <button className="cursor-pointer rounded-xl bg-stone-100 px-4 py-2 text-black transition-colors duration-300 hover:bg-black hover:text-white">
              LinkedIn
            </button>
          </a>

          <a href="mailto:justindotzlaw@gmail.com">
            <button className="cursor-pointer rounded-xl bg-stone-100 px-4 py-2 text-black transition-colors duration-300 hover:bg-black hover:text-white">
              Mail
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
