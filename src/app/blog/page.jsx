import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { BlogCard } from '@/components/BlogCard';
import { CtaBand } from '@/components/CtaBand';
import { blogPosts } from '@/data/siteData';

export const metadata = { title: 'Blog' };

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="bg-ridge-mist text-ridge-navy">
        <PageHero
          eyebrow="Insights"
          title="Travel stories, trail advice and route inspiration"
          description="A practical mix of trek preparation guidance, destination notes and mountain-first planning insights."
          backgroundImage="https://images.unsplash.com/photo-1458668383970-8ddd3927deed?auto=format&fit=crop&w=1800&q=80"
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
        />
        <section className="px-4 pb-10 sm:pb-20 pt-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading centered eyebrow="Blog" title="Read what helps you travel better in the mountains" />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => <BlogCard key={post.slug} post={post} />)}
            </div>
          </div>
        </section>
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
