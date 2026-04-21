import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-12">
      <div className="flex flex-col items-start gap-4 mx-auto max-w-160 w-fit text-3xl">
        <div className="flex flex-row items-end gap-2 ">
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
        <p className="">
          Product + Brand Designer with 15+ years turning complex ideas into
          products people actually want to use. Across fintech, web3 and SaaS,
          he has built brands from scratch, shipped products at scale, and
          guided projects 0→1. Currently consulting at Republic and running
          Magic x Logic, his independent design practice.
        </p>
      </div>
    </div>
  );
}
