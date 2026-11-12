import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { CtaBand } from '@/components/CtaBand';

export function PolicyPage({ eyebrow, title, description, paragraphs }) {
  return (
    <>
      <Header />
      <main className="bg-ridge-mist text-ridge-navy">
        <PageHero
          eyebrow={eyebrow}
          title={title}
          description={description}
          backgroundImage="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1600&q=80"
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: title }]}
        />
        <section className="px-4 pb-10 sm:pb-20 pt-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-5 rounded-3xl bg-white p-6 text-[16px] leading-8 text-slate-600 shadow-lg ring-1 ring-slate-100 sm:p-10">
            {paragraphs.map((p, i) => (
              <div key={i} className="flex gap-4">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ridge-yellow text-xs font-bold text-ridge-navy">{i + 1}</span>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </section>
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}

export default PolicyPage;
