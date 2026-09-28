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
  // Drop real files into /public/work/<slug>/ and update the paths here.
  // Projects with missing images are hidden automatically.
];

export const WORK_PROJECTS_AVAILABLE = WORK_PROJECTS.filter(
  (project) => !!project.beforeImg && !!project.afterImg,
);
