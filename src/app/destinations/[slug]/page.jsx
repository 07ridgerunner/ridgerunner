import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { TrekCard } from '@/components/TrekCard';
import { CtaBand } from '@/components/CtaBand';
import { destinations, treks } from '@/data/siteData';

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }) {
  const destination = destinations.find((item) => item.slug === params.slug);
  if (!destination) return { title: 'Destination not found' };
  return { title: destination.name, description: destination.description };
}

export default function DestinationDetailPage({ params }) {
  const destination = destinations.find((item) => item.slug === params.slug);
  if (!destination) notFound();

  const regionTreks = treks.filter((trek) => trek.destinationId === destination.slug);

  return (
    <>
      <Header />
      <main className="bg-ridge-mist text-ridge-navy">
        <PageHero
          eyebrow="Destination"
          title={destination.name}
          description={destination.description}
          backgroundImage={destination.image}
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' }, { label: destination.name }]}
        />
        <section className="px-4 pb-10 sm:pb-20 pt-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading centered eyebrow="Featured routes" title={`Trekking experiences in ${destination.name}`} />
            {regionTreks.length ? (
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {regionTreks.map((trek) => <TrekCard key={trek.slug} trek={trek} />)}
              </div>
            ) : (
              <p className="mx-auto mt-10 max-w-md rounded-2xl bg-white p-8 text-center text-slate-600 shadow-sm ring-1 ring-slate-100">
                No treks are currently listed for this destination. Contact us for a custom plan.
              </p>
            )}
          </div>
        </section>
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
