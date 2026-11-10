import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { DestinationCard } from '@/components/DestinationCard';
import { CtaBand } from '@/components/CtaBand';
import { destinations } from '@/data/siteData';

export const metadata = { title: 'Destinations' };

export default function DestinationsPage() {
  return (
    <>
      <Header />
      <main className="bg-ridge-mist text-ridge-navy">
        <PageHero
          eyebrow="Explore the Himalayas"
          title="Destinations that define the Himalayan experience"
          description="From wide-open valleys to remote high passes, each region offers a distinct style of mountain travel and scenery."
          backgroundImage="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=1800&q=80"
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Destinations' }]}
        />
        <section className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading centered eyebrow="Explore" title="Choose the landscape that calls to you" />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {destinations.map((destination) => (
                <DestinationCard key={destination.slug} destination={destination} />
              ))}
            </div>
          </div>
        </section>
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
