import Link from 'next/link';

export type PricingPlan = {
  duration: string;
  price: string;
  label: string;
  description: string;
  featured?: boolean;
};

export default function Pricing({ plans }: { plans: PricingPlan[] }) {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-header narrow">
          <span className="eyebrow">PRICING</span>
          <h2>HOW MUCH UNCERTAINTY DO YOU WANT TO REMOVE?</h2>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article key={plan.duration} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
              <div className="pricing-duration">{plan.duration}</div>
              <div className="pricing-price">{plan.price}</div>
              <div className="pricing-label">{plan.label}</div>
              <div className="pricing-desc">{plan.description}</div>
              <Link href="/book" className="btn-primary">BOOK NOW ↗</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
