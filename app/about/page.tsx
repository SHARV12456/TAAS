import Link from "next/link";

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-void px-4 pb-20 pt-24 text-pearl sm:px-6 md:px-12 md:pb-32 md:pt-32">
			<div className="mx-auto max-w-[1100px]">
				<div className="mb-10 md:mb-14">
					<p className="micro mb-4 text-pearl/40">ABOUT TAAS</p>
					<h1 className="font-sans text-[clamp(2.5rem,8vw,6rem)] font-black uppercase leading-[0.9] tracking-[-0.05em] text-pearl">
						Design decisions,
						<span className="block text-lime">made clearer.</span>
					</h1>
				</div>

				<div className="grid gap-6 border-t border-pearl/[0.08] pt-7 md:grid-cols-[1.12fr_0.88fr] md:gap-10 md:pt-8">
					<p className="max-w-[44rem] font-sans text-lg leading-relaxed text-pearl/80 md:text-2xl md:leading-[1.4]">
						TAAS is a design decision-support studio founded by{" "}
						<span className="text-pearl">Sharvayu Sawant</span>, helping
						homeowners, renters and businesses make better interior decisions
						before they spend.
					</p>

					<div className="border border-pearl/[0.08] bg-pearl/[0.02] p-5 md:p-6">
						<p className="font-sans text-sm leading-relaxed text-pearl/70 md:text-base">
							From homes and rental spaces to cafés and commercial spaces, TAAS
							focuses on what to change, where to spend, and what to avoid—without
							making the process complicated.
						</p>
					</div>
				</div>

				<div className="mt-12 md:mt-16 border-t border-pearl/[0.08] pt-8">
					<p className="micro mb-5 text-pearl/40">THE PERSON BEHIND TAAS</p>

					<div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:gap-10">
						<div className="border border-pearl/[0.08] bg-pearl/[0.02] p-5 md:p-6">
							<p className="font-sans text-xl font-black uppercase tracking-[-0.04em] text-pearl md:text-2xl">
								SHARVAYU SAWANT
							</p>
							<p className="mt-2 font-sans text-sm uppercase tracking-[0.18em] text-pearl/45 md:text-xs">
								Founder & Interior Designer
							</p>
						</div>

						<div className="space-y-5">
							<p className="font-sans text-lg leading-relaxed text-pearl/80 md:text-xl md:leading-[1.5]">
								Sharvayu approaches interiors with a simple belief:{" "}
								<span className="text-pearl">
									good design isn't about doing more. It's about making the right
									changes.
								</span>
							</p>

							<p className="font-sans text-base leading-relaxed text-pearl/75 md:text-lg">
								TAAS brings that approach into a simpler process—clear ideas,
								practical direction and decisions that work for the space and the
								budget.
							</p>
						</div>
					</div>
				</div>

				<div className="mt-12 border border-pearl/[0.08] bg-pearl/[0.02] p-6 md:p-8">
					<p className="font-sans text-2xl font-black uppercase tracking-[-0.04em] text-pearl md:text-4xl">
						Less guesswork.
						<span className="block text-lime">Better decisions.</span>
						<span className="block">Better spaces.</span>
					</p>
				</div>

				<div className="mt-10 flex justify-end">
					<Link
						href="/book"
						className="btn-primary inline-flex text-[0.65rem] py-4 px-7"
					>
						BOOK TAAS ↗
					</Link>
				</div>
			</div>
		</div>
	);
}
