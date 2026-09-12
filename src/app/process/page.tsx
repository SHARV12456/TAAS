'use client';

import Process from '@/components/Process';

const steps = [
	{
		number: '01',
		title: 'BRING THE QUESTION',
		description: 'Tell us what you are actually trying to decide before the design becomes expensive.',
	},
	{
		number: '02',
		title: 'TALK TO A DESIGNER',
		description: 'We focus on the real issue: layout, flow, material trade-offs, sizing, and decision quality.',
	},
	{
		number: '03',
		title: 'LEAVE WITH CLARITY',
		description: 'You leave with a clearer path, a sharper point of view, and less second-guessing.',
	},
];

export default function ProcessPage() {
	return (
		<main>
			<section className="page-section">
				<div className="container">
					<div className="page-header narrow">
						<span className="eyebrow">PROCESS</span>
						<h2>FROM QUESTION TO DECISION.</h2>
						<p className="page-sub">
							TAAS is a decision support conversation, not another design project, not another moodboard, and not more noise.
						</p>
					</div>
				</div>
			</section>

			<Process steps={steps} />
		</main>
	);
}
