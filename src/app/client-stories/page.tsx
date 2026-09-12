import Hero from '@/components/Hero';
import StoryPreview from '@/components/StoryPreview';
import FinalCTA from '@/components/FinalCTA';

const stories = [
  { number: '01', area: 'BANDRA WEST', category: 'KITCHEN + STORAGE', quote: 'Was the larger island actually worth losing cabinet space?', },
  { number: '02', area: 'DADAR EAST', category: 'LAYOUT', quote: 'Is the open plan actually making life easier — or just looking better on paper?', },
  { number: '03', area: 'COLABA', category: 'MATERIALS', quote: 'Which finish actually holds up to use — and which one only looks premium at the start?', },
  { number: '04', area: 'ANDHERI', category: 'COMMERCIAL', quote: 'How do you make a space feel generous without wasting valuable square footage?', },
];

export default function ClientStoriesPage() {
  return (
    <main>
      <Hero
        eyebrow="TAAS® • STORIES"
        title={'QUESTIONS\nPEOPLE\nBROUGHT\nTO TAAS.'}
        subtitle="The real-value work is not inspiration. It is clarity before the expensive decision becomes permanent."
        primaryLabel="BOOK A DESIGN HOUR ↗"
        primaryHref="/book"
        secondaryLabel="SEE THE PROCESS →"
        secondaryHref="/process"
      />

      <StoryPreview stories={stories} />
      <FinalCTA title={'STILL\nTHINKING\nABOUT IT?'} line="Maybe that is your answer." href="/book" />
    </main>
  );
}
