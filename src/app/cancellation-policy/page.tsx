export const metadata = { title: 'Cancellation Policy | TAAS' };

const policies = [
	{
		title: 'Cancellation',
		items: [
			{
				heading: 'Cancellation by Client (24+ hours notice)',
				body: 'Cancellations made more than 24 hours before the scheduled consultation are eligible for a full refund or free rescheduling.',
			},
			{
				heading: 'Cancellation by Client (less than 24 hours)',
				body: 'Cancellations made within 24 hours of the appointment may be subject to a cancellation fee or credit, depending on the case.',
			},
			{
				heading: 'Cancellation by TAAS',
				body: 'If TAAS must cancel the session, you receive a full refund or the option to reschedule at no additional cost.',
			},
		],
	},
	{
		title: 'Rescheduling',
		items: [
			{
				heading: 'Free Rescheduling Window',
				body: 'You may reschedule once at no charge if you notify us at least 24 hours in advance.',
			},
			{
				heading: 'Late Rescheduling',
				body: 'Requests made within 24 hours may be subject to an administrative fee.',
			},
		],
	},
	{
		title: 'Refunds',
		items: [
			{
				heading: 'Refund Timeline',
				body: 'Approved refunds are processed within 5–7 business days to the original payment method.',
			},
			{
				heading: 'Non-Refundable Situations',
				body: 'The consultation fee is non-refundable if the session has already commenced or if the client does not attend without prior notice.',
			},
		],
	},
];

export default function CancellationPage() {
	return (
		<main>
			<section className="page-section">
				<div className="legal-shell">
					<div className="legal-intro">
						<div className="legal-kicker">TAAS / policy</div>
						<h1 className="legal-title">PLANS CHANGE. THE PROCESS SHOULD STAY CLEAR.</h1>
						<p className="legal-meta">Last updated: September 2026</p>
					</div>

					<div className="legal-article">
						{policies.map((section) => (
							<section key={section.title} className="legal-section">
								<h2>{section.title}</h2>
								<ul>
									{section.items.map((item) => (
										<li key={item.heading}>
											<strong>{item.heading}:</strong> {item.body}
										</li>
									))}
								</ul>
							</section>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
