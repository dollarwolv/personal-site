import { ProjectItem } from "../types";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

function Project({ project }: { project: ProjectItem }) {
  return (
    <div className="mb-24">
      <div className="mx-auto max-w-160">
        <div className="flex flex-col">
          <span className="text-stone-700">{project.time}</span>
          <span className="text-2xl text-stone-500">
            {project.title}.{" "}
            <span className="text-black">{project.description}</span>
          </span>
        </div>
        {project.columns.map((col, index) => {
          if (col.title === "Outcomes") {
            const outcomes = col;
            return (
              <div className="mt-4 flex w-full flex-col pb-3" key={index}>
                <div className="flex w-full flex-row gap-2 text-base">
                  <div className="w-30 text-stone-500">{col.title}</div>
                  <ul className="ml-4 w-full list-disc">
                    {outcomes.items?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          } else if (col.title === "Link") {
            return (
              <div
                className="mt-4 flex w-full flex-col border-b border-b-stone-400 pb-3"
                key={index}
              >
                <div className="flex w-full flex-row gap-2 text-base">
                  <div className="w-30 text-stone-500">{col.title}</div>
                  <div className="w-full">
                    <a
                      href={col.text}
                      className="flex w-fit gap-1 text-stone-500 transition-colors duration-300 hover:text-stone-400"
                    >
                      {col.text}
                      <ExternalLink size={"16"} color="gray" />
                    </a>
                  </div>
                </div>
              </div>
            );
          }
          return (
            <div
              className="mt-4 flex w-full flex-col border-b border-b-stone-400 pb-3"
              key={index}
            >
              <div className="flex w-full flex-row gap-2 text-base">
                <div className="w-30 text-stone-500">{col.title}</div>
                <div className="w-full">{col.text}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col">
        <Image
          src="/img/zhonglensdemo.jpg"
          alt="schwanz"
          width={2000}
          height={2000}
        />
        <div className="flex flex-row">
          <Image
            src="/img/xiaowanzi.jpg"
            alt="xiao wanzi"
            width={640}
            height={640}
          />
          <Image
            src="/img/website.jpg"
            alt="website"
            width={640}
            height={640}
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
