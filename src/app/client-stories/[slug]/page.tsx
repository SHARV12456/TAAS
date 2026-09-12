import Link from 'next/link';
import { CLIENT_STORIES } from '../data';

export default async function StoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = CLIENT_STORIES.find((item) => item.slug === slug);

  if (!story) {
    return (
      <main className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">STORY NOT FOUND</span>
            <h2>THIS STORY ISN’T AVAILABLE.</h2>
            <p className="page-sub">Try exploring the full archive.</p>
            <div style={{ marginTop: '24px' }}>
              <Link href="/client-stories" className="btn-primary">BACK TO STORIES ↗</Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="page-section">
      <div className="container">
        <div className="page-header narrow">
          <span className="eyebrow">{story.location}</span>
          <h2>{story.indexHeadline}</h2>
          <p className="page-sub">{story.topics.join(' · ')}</p>
        </div>

        <div className="story-item" style={{ borderTop: '1px solid var(--divider)', paddingTop: '24px' }}>
          <div className="story-image" style={{ background: story.heroImage?.src ? `url(${story.heroImage.src}) center/cover no-repeat` : 'linear-gradient(135deg, #d8d2c5, #f5efe7)' }} />
          <div>
            <div className="story-meta">{story.location}</div>
            <div className="story-category">{story.propertyType}</div>
            <p className="story-quote">“{story.clientPerspective ?? story.indexHeadline}”</p>
            <div style={{ marginTop: '18px' }}>
              <Link href="/book" className="btn-primary">BOOK A DESIGN HOUR ↗</Link>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '820px', marginTop: '48px' }}>
          <p className="page-sub">{story.situation}</p>
          <p className="page-sub" style={{ marginTop: '18px' }}>{story.recommendation}</p>
        </div>
      </div>
    </main>
  );
}
