export type ProjectColumn =
  | { title: "Outcomes"; items: string[] }
  | { title: "Link"; text: string }
  | { title: "Geo"; text: string }
  | { title: "Status"; text: string }
  | { title: "Languages"; text: string }
  | { title: "Frameworks"; text: string };

export type ProjectImg = {
  url: string;
  alt: string;
  layout?: "full" | "half";
};

export type ProjectItem = {
  time: string;
  title: string;
  description: string;
  columns: ProjectColumn[];
  images: ProjectImg[];
};
