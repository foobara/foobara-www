export const SITE_URL = 'https://foobara.org'

export interface SitemapPage {
  loc: string
  changefreq: string
  priority: string
  lastmod?: string
  // Set to false to list a page in the sitemap without pre-rendering it
  prerender?: boolean
}

export const STATIC_PAGES: SitemapPage[] = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
  // /docs fetches its content from docs.foobara.org at runtime so there's nothing useful to pre-render
  { loc: '/docs', changefreq: 'weekly', priority: '0.5', prerender: false },
  { loc: '/blog', changefreq: 'monthly', priority: '0.9' },
  { loc: '/videos', changefreq: 'monthly', priority: '0.9' },
  { loc: '/help-foobara', changefreq: 'monthly', priority: '0.7' },
  { loc: '/contact', changefreq: 'yearly', priority: '0.6' },
]

export function getDynamicPages(): SitemapPage[] {
  return []
}

export function getSitemapPages(): SitemapPage[] {
  return [...STATIC_PAGES, ...getDynamicPages()]
}

export function getRoutePaths(): string[] {
  return getSitemapPages()
    .filter((page) => page.prerender !== false)
    .map((page) => page.loc)
}
