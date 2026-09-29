import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-void pt-24 px-4 pb-20 text-pearl sm:px-6 md:px-6 md:pt-32 md:pb-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 md:mb-24 text-center md:text-left">
          <p className="micro text-pearl/40 mb-6">About TAAS</p>
          <h1 className="font-sans font-black uppercase leading-[0.8] tracking-[-0.05em] text-pearl text-[clamp(2.5rem,11vw,8rem)]">
            Before you<br />
            spend,<br />
            <span className="text-lime">ask TAAS.</span>
          </h1>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <p className="font-sans text-lg leading-tight text-pearl/80 max-w-4xl text-center md:text-left md:text-4xl">
            Most agencies push a full demo and rebuild. That makes sense for a forever home — not for a rental, a café, or a space with a real budget.
          </p>

          <div className="rounded-none border border-pearl/[0.1] bg-pearl/[0.02] p-5 text-center md:p-8 md:text-left">
            <p className="micro text-lime mb-4">Our approach</p>
            <p className="font-sans text-sm leading-relaxed text-pearl/70 md:text-base md:text-lg">
              TAAS helps you decide what to keep, change, invest in, and skip — before you spend a rupee on the wrong thing.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-pearl/[0.08] pt-10 text-center md:mt-20 md:grid-cols-3 md:text-left">
          <div>
            <p className="micro text-pearl/40 mb-3">Location</p>
            <p className="font-sans text-xl tracking-[-0.02em] uppercase md:text-2xl">Mumbai</p>
          </div>
          <div>
            <p className="micro text-pearl/40 mb-3">Focus</p>
            <p className="font-sans text-xl tracking-[-0.02em] uppercase md:text-2xl">Spaces with a budget</p>
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
