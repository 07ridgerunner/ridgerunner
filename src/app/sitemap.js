import { blogPosts, destinations, treks } from '@/data/siteData';

export default function sitemap() {
  const baseUrl = 'https://www.ridgerunneradventures.com';

  const staticRoutes = [
    '',
    '/treks',
    '/destinations',
    '/about',
    '/gallery',
    '/blog',
    '/contact',
    '/faq',
    '/privacy-policy',
    '/terms-and-conditions',
    '/cancellation-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const trekRoutes = treks.map((trek) => ({
    url: `${baseUrl}/treks/${trek.slug}`,
    lastModified: new Date(),
  }));

  const destinationRoutes = destinations.map((destination) => ({
    url: `${baseUrl}/destinations/${destination.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...trekRoutes, ...destinationRoutes, ...blogRoutes];
}
