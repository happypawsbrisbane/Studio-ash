import type { MetadataRoute } from 'next'

function getBaseUrl(): string {
  // Use environment variable in production
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }
  // Use Vercel URL for preview deployments
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  // Fallback for local development
  return 'http://localhost:3000'
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl()

  // Static pages
  const staticPages = [
    '',
    '/work',
    '/services',
    '/studio',
    '/contact',
  ]

  // Project pages (in production, these would come from Sanity CMS)
  const projectSlugs = [
    'paws-and-peace',
    'seva-wellness',
    'stillwater-studio',
    'botanica-home',
    'coast-legal',
    'meridian-finance',
  ]

  const staticRoutes: MetadataRoute.Sitemap = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))

  const projectRoutes: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...projectRoutes]
}
