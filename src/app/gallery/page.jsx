import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { GalleryGrid } from '@/components/GalleryGrid';
import { CtaBand } from '@/components/CtaBand';
import { galleryImages } from '@/data/siteData';

export const metadata = { title: 'Gallery' };

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="bg-ridge-mist text-ridge-navy">
        <PageHero
          eyebrow="Moments from the trails"
          title="Mountain frames from real journeys"
          description="A visual look at the ridges, valleys, campsites and landscapes that shape every expedition."
          backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1800&q=80"
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]}
        />
        <section className="px-4 pb-10 sm:pb-20 pt-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading centered eyebrow="Our experiences" title="The kind of scenery that stays with you" />
            <div className="mt-12">
              <GalleryGrid images={galleryImages} />
            </div>
          </div>
        </section>
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
