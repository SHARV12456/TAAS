import Link from "next/link";
import { WORK_PROJECTS_AVAILABLE } from "@/lib/work";

export default function WorkPage() {
  const projects = WORK_PROJECTS_AVAILABLE;

  return (
    <div className="min-h-screen bg-paper text-ink pt-14">
      <div className="px-4 pt-14 pb-10 border-b border-ink/12 max-w-[1600px] mx-auto sm:px-6 md:px-12 md:pt-16 md:pb-12">
        <p className="micro text-ink/30 mb-6">SELECTED WORK</p>
        <h1 className="font-sans font-bold text-mega leading-[0.82] tracking-[-0.04em] uppercase text-center md:text-left">
          <span className="block">{projects.length}</span>
          <span className="block text-ink/12 [-webkit-text-stroke:1.5px_#0D0D0D]">PROJECTS.</span>
        </h1>
      </div>

      {projects.length > 0 ? (
        <div className="max-w-[1600px] mx-auto px-4 py-12 flex flex-col gap-16 sm:px-6 md:px-12 md:py-16 md:gap-24">
          {projects.map((project, index) => (
            <article key={project.slug} className="grid gap-8 border-t border-ink/12 pt-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-3 flex flex-col gap-3 text-center md:text-left">
                <span className="font-sans font-bold text-[4rem] leading-none tracking-[-0.06em] text-ink/5 select-none block md:text-[8rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="micro text-lime">{project.type}</span>
                <span className="micro text-ink/30">{project.area}</span>
                <p className="font-sans text-sm text-ink/50 mt-3 max-w-[18ch] leading-snug mx-auto md:mx-0">{project.oneLiner}</p>
              </div>

              <div className={`md:col-span-9 overflow-hidden bg-ink/5 ${index % 2 !== 0 ? "md:order-first" : ""}`}>
                {project.afterImg ? (
                  <div className="grid gap-4 md:grid-cols-2">
                    {project.beforeImg && (
                      <img
                        src={project.beforeImg}
                        alt={`${project.title} before`}
                        className="w-full aspect-[16/9] object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-[1.02]"
                      />
                    )}
                    {project.afterImg && (
                      <img
                        src={project.afterImg}
                        alt={`${project.title} after`}
                        className="w-full aspect-[16/9] object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-[1.02]"
                      />
                    )}
                  </div>
                ) : (
                  project.beforeImg && (
                    <img
                      src={project.beforeImg}
                      alt={`${project.title}`}
                      className="w-full aspect-[16/9] object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-[1.02]"
                    />
                  )
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mx-auto max-w-[1600px] px-4 py-20 sm:px-6 md:px-12">
          <p className="micro text-ink/40">No available work yet.</p>
        </div>
      )}

      <div className="bg-ink text-paper py-20 px-4 sm:px-6 md:px-12 md:py-40">
        <div className="max-w-[1600px] mx-auto flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="text-center md:text-left">
            <p className="micro text-paper/30 mb-5">READY TO START?</p>
            <h2 className="font-sans font-bold text-huge leading-[0.85] tracking-[-0.035em] uppercase">
              YOUR SPACE.<br/>
              <span className="text-lime">NEXT.</span>
            </h2>
          </div>
          <Link href="/book" className="btn-primary btn-lime text-[0.65rem] py-4 px-10 self-center md:self-auto">
            BOOK TAAS ↗
          </Link>
        </div>
      </div>
    </div>
  );
}
