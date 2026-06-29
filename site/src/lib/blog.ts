import fs from 'fs'
import path from 'path'

export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  keywords: string[]
  /** Contenuto HTML interno a <article>…</article>, pronto per dangerouslySetInnerHTML */
  contentHtml: string
}

const BLOG_DIR = path.join(process.cwd(), 'blog')

function parseFrontmatter(raw: string): { data: Record<string, unknown>; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!match) return { data: {}, body: raw }

  const [, frontmatter, body] = match
  const data: Record<string, unknown> = {}
  let currentKey: string | null = null

  for (const line of frontmatter.split('\n')) {
    const listItem = line.match(/^\s+-\s+(.*)$/)
    if (listItem && currentKey) {
      const arr = (data[currentKey] as string[]) ?? []
      arr.push(listItem[1].trim())
      data[currentKey] = arr
      continue
    }
    const kv = line.match(/^([A-Za-z_]+):\s*(.*)$/)
    if (kv) {
      const [, key, value] = kv
      currentKey = key
      if (value.trim() === '') {
        data[key] = []
      } else {
        data[key] = value.trim().replace(/^"(.*)"$/, '$1')
      }
    }
  }

  return { data, body }
}

function readArticleHtml(slug: string): string {
  const htmlPath = path.join(BLOG_DIR, `${slug}.html`)
  const raw = fs.readFileSync(htmlPath, 'utf-8')
  const match = raw.match(/<article>([\s\S]*?)<\/article>/)
  return match ? match[1].trim() : ''
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'))

  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, '')
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8')
    const { data } = parseFrontmatter(raw)

    return {
      slug,
      title: ((data.title as string) ?? slug).replace(/\s*\|\s*Studio Mantovan$/, ''),
      description: (data.description as string) ?? '',
      date: (data.date as string) ?? '',
      keywords: (data.keywords as string[]) ?? [],
      contentHtml: readArticleHtml(slug),
    }
  })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug)
}
