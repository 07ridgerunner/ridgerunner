import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { BlogCard } from '@/components/BlogCard';
import { CtaBand } from '@/components/CtaBand';
import { blogPosts } from '@/data/siteData';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return { title: 'Article not found' };
  return { title: post.title, description: post.excerpt };
}

export default function BlogDetailPage({ params }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Header />
      <main className="bg-ridge-mist text-ridge-navy">
        <PageHero
          eyebrow={post.category}
          title={post.title}
          description={`By ${post.author}`}
          backgroundImage={post.image}
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: post.category }]}
        />

        <section className="px-4 pb-16 pt-4 sm:px-6 lg:px-8">
          <article className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-100 sm:p-10">
            <p className="border-l-4 border-ridge-yellow pl-5 font-display text-2xl font-semibold leading-snug">{post.excerpt}</p>
            <div className="mt-8 space-y-5 text-[17px] leading-8 text-slate-700">
              <p>Mountain travel starts with preparation. The right pace, weather awareness and gear selection can turn a demanding route into a memorable experience instead of an exhausting one.</p>
              <p>For first-time Himalayan trekkers, a smart approach is to focus on steady cardiovascular training, strength work for legs and core, and practical acclimatization habits. Even moderate elevation gains become far more manageable when your body is already accustomed to long, steady effort.</p>
              <p>Layering matters as much as raw warmth. A lightweight base layer, insulating mid-layer, windproof shell and comfortable hiking footwear give you flexibility across changing conditions. A well-packed daypack, hydration bottle, and weather-ready accessories make a measurable difference when the day starts cold and ends warm.</p>
              <p>Above all, trust the guidance of your lead team. From pacing and route decisions to hydration and acclimatization, local knowledge is often the difference between a smooth adventure and an avoidable setback.</p>
            </div>
            <Link href="/blog" className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-ridge-navy hover:text-ridge-yellow-dark">
              <i className="fa-solid fa-arrow-left" aria-hidden="true" /> Back to all articles
            </Link>
          </article>
        </section>

        {more.length ? (
          <section className="px-4 pb-10 sm:pb-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <h2 className="font-display text-3xl font-bold">More to read</h2>
              <span className="mt-3 block h-1 w-16 rounded-full bg-ridge-yellow" />
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {more.map((p) => <BlogCard key={p.slug} post={p} />)}
              </div>
            </div>
          </section>
        ) : null}
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
