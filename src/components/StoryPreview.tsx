import Link from 'next/link';

export type Story = {
  number: string;
  area: string;
  category: string;
  quote: string;
  image?: string;
};

export default function StoryPreview({ stories }: { stories: Story[] }) {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-header narrow">
          <span className="eyebrow">STORIES</span>
          <h2>QUESTIONS PEOPLE BROUGHT TO TAAS.</h2>
        </div>

        <div className="stories">
          {stories.map((story) => (
            <article key={story.number} className="story-item">
              <div className="story-image" aria-label={story.area} style={{ background: story.image ?? 'linear-gradient(135deg, #d8d2c5, #f2efe7)' }} />
              <div>
                <div className="story-meta">{story.number} · {story.area}</div>
                <div className="story-category">{story.category}</div>
                <p className="story-quote">“{story.quote}”</p>
                <Link href="/client-stories" className="story-link">READ STORY ↗</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
