import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'
import { patologie } from '@/lib/patologie'

const baseUrl = 'https://umbertomantovan.net'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/prenota`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/patologie`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/chi-sono`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/dove-trovarmi`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/fisioterapia-broni`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/fisioterapia-casteggio`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/fisioterapia-stradella`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/zone-servite`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/privacy`, changeFrequency: 'yearly', priority: 0.1 },
    { url: `${baseUrl}/cookie`, changeFrequency: 'yearly', priority: 0.1 },
  ]

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date || undefined,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const patologieRoutes: MetadataRoute.Sitemap = patologie.map((p) => ({
    url: `${baseUrl}/patologie/${p.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes, ...patologieRoutes]
}
