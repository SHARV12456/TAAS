// Server component — exports generateStaticParams (cannot be "use client")
import { CLIENT_STORIES } from '../data';
import ClientPage from './ClientPage';

export async function generateStaticParams() {
  return CLIENT_STORIES.map((story) => ({
    slug: story.slug,
  }));
}

export default function StoryPage({ params }: { params: { slug: string } }) {
  return <ClientPage slug={params.slug} />;
}
