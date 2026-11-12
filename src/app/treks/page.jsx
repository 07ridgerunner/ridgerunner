import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { TrekCard } from '@/components/TrekCard';
import { CtaBand } from '@/components/CtaBand';
import { treks } from '@/data/siteData';

export const metadata = { title: 'Treks' };

export default function TreksPage() {
  return (
    <>
      <Header />
      <main className="bg-ridge-mist text-ridge-navy">
        <PageHero
          eyebrow="All experiences"
          title="Choose your Himalayan route"
          description="Explore curated treks across Uttarakhand, Himachal Pradesh and the Spiti region. Every route is built for a different pace, challenge and dream."
          backgroundImage="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1800&q=80"
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Treks' }]}
        />
        <section className="px-4 pb-10 sm:pb-20 pt-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              centered
              eyebrow="Routes"
              title={`${treks.length} signature treks for memorable journeys`}
              description="Each route offers different terrain, pacing and altitude. Pick the one that matches your next adventure."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {treks.map((trek) => (
                <TrekCard key={trek.slug} trek={trek} />
              ))}
            </div>
          </div>
        </section>
        <CtaBand title="Need a custom route?" text="Share your preferred dates, group size and route style — we’ll plan a private or small-group trek that fits you." />
      </main>
      <Footer />
    </>
  );
}
