'use client';

import Link from 'next/link';
import Hero from '@/components/Hero';
import FinalCTA from '@/components/FinalCTA';

export default function AboutPage() {
	return (
		<main>
			<Hero
				eyebrow="TAAS® • ABOUT"
				title={'THE PERSON\nBEHIND\nTAAS'}
				subtitle="TAAS exists for the moment before a design decision becomes an expensive one."
				primaryLabel="ABOUT TAAS →"
				primaryHref="/book"
				secondaryLabel="SEE SERVICES →"
				secondaryHref="/services"
			/>

			<section className="page-section">
				<div className="container">
					<div className="page-header narrow">
						<span className="eyebrow">THE PERSON BEHIND TAAS</span>
						<h2>SHARVAYU SAWANT</h2>
						<p className="page-sub">Principal designer</p>
					</div>

					<div style={{ maxWidth: '820px' }}>
						<p className="page-sub">
							TAAS exists because good design is not just about inspiration. It is about making better decisions before the wrong layout, poor material choice, or the wrong scale creates avoidable cost.
						</p>
						<p className="page-sub" style={{ marginTop: '18px' }}>
							The work is designed to be practical, direct, and useful: one focused design question, one clear conversation, and a better way forward.
						</p>
					</div>
				</div>
			</section>

			<section className="page-section">
				<div className="container">
					<div className="page-header narrow">
						<span className="eyebrow">WHY THIS EXISTS</span>
						<h2>CLARITY BEFORE COMMITMENT.</h2>
					</div>
					<div className="stories">
						<article className="story-item">
							<div className="story-image" style={{ background: 'linear-gradient(135deg, #d8d2c5, #f5efe7)' }} />
							<div>
								<div className="story-meta">01 · THE QUESTION</div>
								<div className="story-category">WHAT WAS UNCLEAR?</div>
								<p className="story-quote">“The issue was not aesthetics. It was whether the decisions being made would actually work in real life.”</p>
							</div>
						</article>
						<article className="story-item">
							<div className="story-image" style={{ background: 'linear-gradient(135deg, #c7d1c1, #f0efe8)' }} />
							<div>
								<div className="story-meta">02 · THE OUTCOME</div>
								<div className="story-category">WHAT CHANGED?</div>
								<p className="story-quote">“The client could move forward with a sharper point of view instead of second-guessing the decisions that mattered most.”</p>
							</div>
						</article>
					</div>
				</div>
			</section>

			<FinalCTA title={'STILL\nTHINKING\nABOUT IT?'} line="Maybe that is your answer." href="/book" />
		</main>
	);
}
