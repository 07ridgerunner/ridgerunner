export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/_next', '/private'],
    },
    sitemap: 'https://www.ridgerunneradventures.com/sitemap.xml',
  };
}
