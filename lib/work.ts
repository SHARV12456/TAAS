export type WorkProject = {
  slug: string;
  title: string;
  type: "Rental" | "Home" | "Café";
  area: string;
  beforeImg: string | null;
  afterImg: string | null;
  oneLiner: string;
};

export const WORK_PROJECTS: WorkProject[] = [
  {
    slug: "bedroom-refresh",
    title: "Bedroom Refresh",
    type: "Rental",
    area: "1BHK · Mumbai",
    beforeImg: "/images/before_room.jpg",
    afterImg: "/images/after_room.jpg",
    oneLiner: "Minor changes. Bigger impact. Warm lighting, softer textiles, and smarter styling gave the room a premium, lived-in feel.",
  },
  {
    slug: "project-02",
    title: "Project 02",
    type: "Home",
    area: "Mumbai",
    beforeImg: "/images/b87d8ad5-289d-451d-a5e0-4f4a514b7cde.png",
    afterImg: null,
    oneLiner: "A quick styling refresh that elevates the feel of the space with warmth, balance and thoughtful layering.",
  },
  {
    slug: "project-03",
    title: "Project 03",
    type: "Café",
    area: "Mumbai",
    beforeImg: "/images/transform1.png",
    afterImg: null,
    oneLiner: "A warm, welcoming café refresh created through lighting, texture and a more cohesive guest experience.",
  },
];

export const WORK_PROJECTS_AVAILABLE = WORK_PROJECTS.filter(
  (project) => !!project.beforeImg,
);
