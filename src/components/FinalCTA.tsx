import Link from 'next/link';

export default function FinalCTA({
  title = 'STILL\nTHINKING\nABOUT IT?',
  line = "Maybe that's your answer.",
  href = '/book',
}: {
  title?: string;
  line?: string;
  href?: string;
}) {
  return (
    <section className="final-cta">
      <div className="container">
        <h2>{title}</h2>
        <p>{line}</p>
        <div style={{ marginTop: '24px' }}>
          <Link href={href} className="btn-primary">BOOK A DESIGN HOUR ↗</Link>
        </div>
        <div className="final-cta-meta">
          <span>30 MIN</span>
          <span>·</span>
          <span>60 MIN</span>
          <span>·</span>
          <span>90 MIN</span>
        </div>
      </div>
    </section>
  );
}
