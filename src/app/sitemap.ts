import { MetadataRoute } from 'next';

const DOMAIN = 'https://portnext.com'; // Change this to your actual production domain

export default function sitemap(): MetadataRoute.Sitemap {
  // Add all static routes
  const routes = ['', '/about-us', '/contact-us', '/services', '/industries', '/blogs', '/careers'].map(
    (route) => ({
      url: `${DOMAIN}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    })
  );

  return [...routes];
}
