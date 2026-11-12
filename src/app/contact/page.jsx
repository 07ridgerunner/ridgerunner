import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { BookingForm } from '@/components/BookingForm';
import { siteSettings, treks } from '@/data/siteData';

export const metadata = { title: 'Contact Us' };

const cards = [
  { icon: 'fa-solid fa-phone', label: 'Call us', value: siteSettings.phone, href: `tel:${siteSettings.phone.replace(/\s+/g, '')}` },
  { icon: 'fa-solid fa-envelope', label: 'Email us', value: siteSettings.email, href: `mailto:${siteSettings.email}` },
  { icon: 'fa-solid fa-location-dot', label: 'Visit us', value: siteSettings.address },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-ridge-mist text-ridge-navy">
        <PageHero
          eyebrow="Get in touch"
          title="Let’s build your next Himalayan plan"
          description="Get route recommendations, departure timelines and group planning support from the Ridge Runner Adventures team."
          backgroundImage="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=80"
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        />
        <section className="px-4 pb-10 sm:pb-20 pt-6 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-5">
            <div className="space-y-4 lg:col-span-2">
              <SectionHeading eyebrow="Reach us" title="Contact Us" description="We usually respond on WhatsApp and email with route suggestions, departure dates and custom planning support." />
              <div className="space-y-3 pt-4">
                {cards.map((c) => {
                  const Tag = c.href ? 'a' : 'div';
                  return (
                    <Tag key={c.label} href={c.href} className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 transition hover:shadow-md">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ridge-yellow text-lg">
                        <i className={c.icon} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">{c.label}</span>
                        <span className="font-semibold">{c.value}</span>
                      </span>
                    </Tag>
                  );
                })}
                <a href={`https://wa.me/${siteSettings.whatsappNumber}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 rounded-full bg-emerald-600 py-4 text-sm font-bold uppercase tracking-wider text-white shadow transition hover:bg-emerald-700">
                  <i className="fa-brands fa-whatsapp text-xl" aria-hidden="true" /> Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="lg:col-span-3">
              <BookingForm treks={treks.map((t) => t.name)} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
