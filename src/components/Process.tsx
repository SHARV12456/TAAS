import Link from 'next/link';

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export default function Process({ steps }: { steps: ProcessStep[] }) {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-header narrow">
          <span className="eyebrow">PROCESS</span>
          <h2>BRING THE QUESTION</h2>
        </div>

        <div className="process">
          {steps.map((step) => (
            <div key={step.number} className="process-step">
              <div className="process-number">{step.number}</div>
              <div>
                <div className="process-title">{step.title}</div>
                <div className="process-desc">{step.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/book" className="btn-primary">BOOK A DESIGN HOUR ↗</Link>
        </div>
      </div>
    </section>
  );
}
