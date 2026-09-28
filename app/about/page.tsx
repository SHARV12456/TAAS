import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-void pt-32 px-6 pb-32 text-pearl">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 md:mb-24">
          <p className="micro text-pearl/40 mb-6">About TAAS</p>
          <h1 className="font-sans font-black uppercase leading-[0.8] tracking-[-0.05em] text-pearl text-[clamp(3rem,8vw,8rem)]">
            Before you<br />
            spend,<br />
            <span className="text-lime">ask TAAS.</span>
          </h1>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <p className="font-sans text-xl md:text-4xl leading-tight text-pearl/80 max-w-4xl">
            Most agencies push a full demo and rebuild. That makes sense for a forever home — not for a rental, a café, or a space with a real budget.
          </p>

          <div className="rounded-none border border-pearl/[0.1] bg-pearl/[0.02] p-6 md:p-8">
            <p className="micro text-lime mb-4">Our approach</p>
            <p className="font-sans text-base md:text-lg leading-relaxed text-pearl/70">
              TAAS helps you decide what to keep, change, invest in, and skip — before you spend a rupee on the wrong thing.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-8 border-t border-pearl/[0.08] pt-10 md:grid-cols-3">
          <div>
            <p className="micro text-pearl/40 mb-3">Location</p>
            <p className="font-sans text-2xl tracking-[-0.02em] uppercase">Mumbai</p>
          </div>
          <div>
            <p className="micro text-pearl/40 mb-3">Focus</p>
            <p className="font-sans text-2xl tracking-[-0.02em] uppercase">Spaces with a budget</p>
          </div>
          <div className="md:text-right">
            <Link href="/book" className="btn-primary inline-flex mt-2 md:mt-0">
              Book TAAS ↗
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
