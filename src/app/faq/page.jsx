import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CtaBand } from '@/components/CtaBand';
import { faqs } from '@/data/siteData';

export const metadata = { title: 'FAQ' };

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="bg-ridge-mist text-ridge-navy">
        <PageHero
          eyebrow="FAQ"
          title="Helpful answers before you set out"
          description="A clear overview of common questions about trekking styles, safety, itineraries and custom planning."
          backgroundImage="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1800&q=80"
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}
        />
        <section className="px-4 pb-10 sm:pb-20 pt-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={faqs} />
          </div>
        </section>
        <CtaBand title="Still have questions?" text="Message us — we’re happy to help you plan the perfect trek." />
      </main>
      <Footer />
    </>
  );
}
