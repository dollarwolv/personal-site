import { ProjectItem } from "../types";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

function Project({ project }: { project: ProjectItem }) {
  return (
    <div className="mb-24 w-full">
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
      <div className="grid grid-cols-2">
        {project.images.map((image) => (
          <div
            key={image.url}
            className={image.layout === "full" ? "col-span-2" : "col-span-1"}
          >
            <Image
              src={image.url}
              alt={image.alt}
              width={1600}
              height={900}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
