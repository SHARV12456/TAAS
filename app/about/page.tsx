import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-32 px-6 pb-32">
      <div className="max-w-[1800px] mx-auto relative">
        <h1 className="font-display font-bold text-mega leading-[0.75] tracking-tighter uppercase mb-24 md:mb-48 md:-ml-8">
          BEFORE YOU<br/>
          <span className="text-transparent [-webkit-text-stroke:2px_#0A0A0A] hover:text-accent transition-colors">SPEND,</span><br/>
          <span className="transform md:translate-x-16 block">ASK TAAS.</span>
        </h1>
        
        <div className="max-w-4xl ml-auto border-l-4 border-accent pl-8 md:pl-16 mb-32 md:mr-16">
          <p className="font-serif italic text-4xl md:text-6xl leading-[1.1] mb-12">
            Most agencies want to demolish and rebuild everything. That makes sense for a forever home, but not for rentals or fast-moving businesses.
          </p>
          <p className="font-sans text-2xl md:text-4xl font-bold uppercase tracking-tighter text-foreground">
            TAAS® is a high-efficiency space decision tool. We tell you what to keep, change, invest in, and skip.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-16 gap-x-8 font-mono text-[10px] font-bold tracking-widest uppercase border-t-4 border-foreground pt-16">
          <div className="md:col-span-3">
            <p className="text-accent mb-4">LOCATION</p>
            <p className="text-xl">MUMBAI</p>
          </div>
          <div className="md:col-span-4">
            <p className="text-accent mb-4">FOCUS</p>
            <p className="text-xl">SPACES WITH A BUDGET</p>
          </div>
          <div className="col-span-2 md:col-span-5 flex md:justify-end">
            <Link href="/book" className="inline-block border-2 border-foreground bg-foreground text-background px-12 py-6 hover:bg-accent hover:border-accent transition-colors text-sm">
              SHOW US YOUR SPACE ↗
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
