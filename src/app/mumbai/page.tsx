'use client';

import Link from 'next/link';
import Hero from '@/components/Hero';

const serviceAreas = [
	'Andheri',
	'Powai',
	'Bandra',
	'Lower Parel',
	'Worli',
	'Chembur',
	'Navi Mumbai',
	'Khar',
	'Juhu',
];

export default function MumbaiPage() {
	return (
		<main>
			<Hero
				eyebrow="TAAS® • MUMBAI"
				title={'INTERIOR DESIGN\nTHAT FEELS\nCURATED FOR\nTHE CITY.'}
				subtitle="From compact apartments to full-family homes and boutique commercial spaces, TAAS helps clients across Mumbai make clear, beautiful, and functional design decisions without overwhelm."
				primaryLabel="BOOK A CONSULTATION ↗"
				primaryHref="/book"
				secondaryLabel="VIEW SERVICES →"
				secondaryHref="/services"
			/>

			<section className="page-section">
				<div className="container">
					<div className="page-header narrow">
						<span className="eyebrow">WORKING ACROSS MUMBAI</span>
						<h2>DESIGN SUPPORT FOR NEIGHBOURHOODS, APARTMENTS, AND HOME PROJECTS.</h2>
					</div>
				</div>
			</section>

			<section className="page-section">
				<div className="container">
					<div className="grid grid-3 service-grid">
						{serviceAreas.map((area) => (
							<div key={area} className="info-panel compact">
								<span className="eyebrow">AREA</span>
								<h3>{area}</h3>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="page-section muted">
				<div className="container">
					<div className="split-panel">
						<div>
							<span className="eyebrow">WHY TAAS</span>
							<h2>Clear planning in a city where space is premium.</h2>
						</div>
						<div>
							<p>
								Mumbai homes often require a careful balance between storage, light, flow, and aesthetic calm. We bring structure to the conversation so each decision supports how you really live.
							</p>
							<div style={{ marginTop: '24px' }}>
								<Link href="/book" className="btn-primary">START YOUR PROJECT ↗</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
