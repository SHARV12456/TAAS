import Pricing from '@/components/Pricing';

const plans = [
	{
		duration: '30 MIN',
		price: '₹1,999',
		label: 'QUICK CHECK',
		description: 'A focused answer for a single question, single decision, or fast directional clarity.',
	},
	{
		duration: '60 MIN',
		price: '₹3,999',
		label: 'DEEP DIVE',
		description: 'The right choice when the decision has real cost attached and you want stronger certainty.',
		featured: true,
	},
	{
		duration: '90 MIN',
		price: '₹5,999',
		label: 'FULL DECISION',
		description: 'For bigger questions, multiple trade-offs, or a decision that needs more than a quick answer.',
	},
];

export default function PricingPage() {
	return (
		<main>
			<section className="page-section">
				<div className="container">
					<div className="page-header narrow">
						<span className="eyebrow">PRICING</span>
						<h2>HOW MUCH UNCERTAINTY DO YOU WANT TO REMOVE?</h2>
						<p className="page-sub">
							Choose the session that matches the decision in front of you. The goal is clarity, not a subscription model.
						</p>
					</div>
				</div>
			</section>

			<Pricing plans={plans} />
		</main>
	);
}
