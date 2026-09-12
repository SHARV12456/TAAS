'use client';

import Link from 'next/link';
import Hero from '@/components/Hero';

const commercialTypes = [
	{ label: 'OFFICES', description: 'Workspace planning, zoning, and productivity-focused layouts.' },
	{ label: 'CAFÉS', description: 'Seating, flow, ambience, and customer movement.' },
	{ label: 'RESTAURANTS', description: 'Dining zones, kitchen adjacency, and material choices.' },
	{ label: 'RETAIL', description: 'Customer flow, display, and brand-led spatial logic.' },
	{ label: 'STUDIOS', description: 'Creative workspaces that support team function and flexibility.' },
	{ label: 'CO-WORKING', description: 'Hot desks, meeting zones, and collaborative planning.' },
];

export default function CommercialPage() {
	return (
		<main>
			<Hero
				eyebrow="TAAS® • COMMERCIAL"
				title={'YOUR SPACE\nHAS TO WORK\nAS HARD AS\nYOUR BUSINESS.'}
				subtitle="Whether you are opening a café, rethinking an office, or refining a retail experience, TAAS helps you make the design decisions that improve function before the spend gets expensive."
				primaryLabel="START A COMMERCIAL CONVERSATION ↗"
				primaryHref="/book"
				secondaryLabel="SEE SERVICES →"
				secondaryHref="/services"
			/>

			<section className="page-section">
				<div className="container">
					<div className="page-header narrow">
						<span className="eyebrow">COMMERCIAL</span>
						<h2>FUNCTION. FLOW. BRAND. DECISION.</h2>
					</div>
				</div>
			</section>

			<section className="page-section">
				<div className="container">
					<div className="stories">
						{commercialTypes.map((type) => (
							<article key={type.label} className="story-item">
								<div className="story-image" style={{ background: 'linear-gradient(135deg, #d8d2c5, #f5efe7)' }} />
								<div>
									<div className="story-meta">{type.label}</div>
									<div className="story-category">COMMERCIAL DIRECTION</div>
									<p className="story-quote">{type.description}</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="page-section">
				<div className="container">
					<div className="page-header narrow">
						<span className="eyebrow">DECISION SUPPORT</span>
						<h2>BEFORE YOU SPEND ON THE WRONG LAYOUT.</h2>
						<div style={{ marginTop: '24px' }}>
							<Link href="/book" className="btn-primary">START A CONVERSATION ↗</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
