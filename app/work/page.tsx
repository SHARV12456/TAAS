import Link from "next/link";

const PROJECTS = [
  {
    id:       "01",
    type:     "RENTAL",
    location: "ANDHERI",
    line:     "Fixed what stopped tenants from signing. No gut renovation.",
    img:      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id:       "02",
    type:     "HOME",
    location: "VERSOVA",
    line:     "Cohesive direction. No walls torn down. Budget respected.",
    img:      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id:       "03",
    type:     "CAFÉ",
    location: "MUMBAI",
    line:     "Better flow, tighter seating density, stronger vibe.",
    img:      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1400",
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-paper text-ink pt-14">

      {/* Header */}
      <div className="px-6 md:px-12 pt-16 pb-12 border-b border-ink/12 max-w-[1600px] mx-auto">
        <p className="micro text-ink/30 mb-6">SELECTED WORK</p>
        <h1 className="font-sans font-bold text-mega leading-[0.82] tracking-[-0.04em] uppercase">
          <span className="block">3</span>
          <span className="block text-ink/12 [-webkit-text-stroke:1.5px_#0D0D0D]">PROJECTS.</span>
        </h1>
      </div>

      {/* Projects */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col gap-24 md:gap-40">
        {PROJECTS.map((p, i) => (
          <article key={p.id} className="grid md:grid-cols-12 gap-8 md:gap-12 border-t border-ink/12 pt-10">

            {/* Meta */}
            <div className="md:col-span-3 flex flex-col gap-3">
              <span className="font-sans font-bold text-[8rem] leading-none tracking-[-0.06em] text-ink/5 select-none block">
                {p.id}
              </span>
              <span className="micro text-lime">{p.type}</span>
              <span className="micro text-ink/30">{p.location}</span>
              <p className="font-sans text-sm text-ink/50 mt-3 max-w-[18ch] leading-snug">{p.line}</p>
            </div>

            {/* Image */}
            <div className={`md:col-span-9 overflow-hidden bg-ink/5 ${i % 2 !== 0 ? "md:order-first" : ""}`}>
              <img
                src={p.img}
                alt={`${p.type} — ${p.location}`}
                className="w-full aspect-[16/9] object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-[1.02]"
              />
            </div>

          </article>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="bg-ink text-paper py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <div>
            <p className="micro text-paper/30 mb-5">READY TO START?</p>
            <h2 className="font-sans font-bold text-huge leading-[0.85] tracking-[-0.035em] uppercase">
              YOUR SPACE.<br/>
              <span className="text-lime">NEXT.</span>
            </h2>
          </div>
          <Link href="/book" className="btn-primary btn-lime text-[0.65rem] py-4 px-10 self-start md:self-auto">
            BOOK TAAS ↗
          </Link>
        </div>
      </div>

    </div>
  );
}
