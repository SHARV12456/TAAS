import Link from "next/link";

export default function ChallengeSection() {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-12 bg-blush text-ink">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="flex-1">
          <p className="micro text-ink/60 mb-4">WHAT CAN</p>
          <h2 className="font-sans font-black text-[clamp(2.2rem,9vw,6.5rem)] leading-[0.9] uppercase">
            ₹1L
            <span className="block">CREATE?</span>
          </h2>
          <p className="mt-4 text-ink/70 max-w-xl">Small budgets, considered decisions — see realistic room makeovers that start at one lakh.</p>

          <div className="mt-6">
            <Link href="/challenge" className="inline-flex items-center gap-3 bg-ember text-void font-bold uppercase px-5 py-3 rounded-full">
              SEE THE CHALLENGE ↗
            </Link>
          </div>
        </div>

        <div className="w-full md:w-[48%]">
          <div className="relative overflow-hidden rounded-lg border-2 border-ink/6 bg-paper">
            <img src="/images/after_room.jpg" alt="Interior example" className="w-full h-56 sm:h-64 md:h-72 object-cover object-center img-card" />
            <div className="absolute top-4 left-4 bg-ink/80 text-paper px-2 py-1 text-[10px] uppercase tracking-[0.14em] rounded">LIGHTING</div>
            <div className="absolute bottom-4 right-4 bg-ember/90 text-void px-3 py-1 text-[12px] rounded">BEFORE → AFTER</div>
          </div>
        </div>
      </div>
    </section>
  );
}
