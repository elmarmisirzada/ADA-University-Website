import * as fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { load } from 'cheerio'

const SOURCE_URL = 'https://www.ada.edu.az/en/news-and-events'

function absoluteUrl(href) {
  if (!href) return ''
  if (href.startsWith('http://') || href.startsWith('https://')) return href
  return new URL(href, SOURCE_URL).toString()
}

function extractIdFromUrl(url) {
  const match = url.match(/\/(news|events)\/(\d+)-/)
  if (!match) return null
  return Number(match[2])
}

async function fetchText(url) {
  const res = await fetch(url, {
    headers: {
      'user-agent': 'Mozilla/5.0 (compatible; ADA-scraper/1.0)'
    }
  })
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`)
  return await res.text()
}

function normalizeWhitespace(s) {
  return s.replace(/\s+/g, ' ').trim()
}

function pickCategoryAndTitle(rawText) {
  const text = normalizeWhitespace(rawText)
  if (!text) return { category: 'General', title: '' }

  const words0 = text.split(' ')
  if (words0.length >= 4 && words0[1] === '&') {
    return {
      category: words0.slice(0, 3).join(' '),
      title: words0.slice(3).join(' '),
    }
  }

  const words = text.split(' ')
  for (let n = 1; n <= 3; n++) {
    const candidateCategory = words.slice(0, n).join(' ')
    const candidateTitle = words.slice(n).join(' ')
    if (candidateTitle.length >= 15 && candidateCategory.length <= 25) {
      return { category: candidateCategory, title: candidateTitle }
    }
  }

  return { category: 'General', title: text }
}

async function extractOgImage(url) {
  try {
    const html = await fetchText(url)
    const $ = load(html)
    const ogImage = $('meta[property="og:image"]').attr('content') || $('meta[name="twitter:image"]').attr('content')
    return ogImage ? absoluteUrl(ogImage) : ''
  } catch {
    return ''
  }
}

function dedupeById(items) {
  const map = new Map()
  for (const item of items) {
    if (item.id == null) continue
    if (!map.has(item.id)) map.set(item.id, item)
  }
  return Array.from(map.values())
}

async function scrape() {
  const html = await fetchText(SOURCE_URL)
  const $ = load(html)

  const newsLinks = []
  const eventLinks = []

  const cardImageFromAnchor = (el) => {
    const isMedia = (src) => typeof src === 'string' && src.includes('/media/')

    const directImg = $(el).find('img').toArray().map((img) => $(img).attr('src')).find(isMedia)
    if (directImg) return absoluteUrl(directImg)

    const closest = $(el).closest('article, .item, .card, .newsItem, .eventItem, li, div')
    const nearbyImg = closest.find('img').toArray().map((img) => $(img).attr('src')).find(isMedia)
    if (nearbyImg) return absoluteUrl(nearbyImg)

    const ancestors = $(el).parents().toArray().slice(0, 6)
    for (const node of ancestors) {
      const imgSrc = $(node).find('img').toArray().map((img) => $(img).attr('src')).find(isMedia)
      if (imgSrc) return absoluteUrl(imgSrc)
    }

    return ''
  }

  $('a[href*="/en/news/"]').each((_, el) => {
    const href = $(el).attr('href')
    const url = absoluteUrl(href)
    if (!url.includes('/en/news/')) return
    if (!url.match(/\/en\/news\/\d+-/)) return
    newsLinks.push({
      url,
      text: $(el).text(),
      image: cardImageFromAnchor(el),
    })
  })

  $('a[href*="/en/events/"]').each((_, el) => {
    const href = $(el).attr('href')
    const url = absoluteUrl(href)
    if (!url.includes('/en/events/')) return
    if (!url.match(/\/en\/events\/\d+-/)) return
    eventLinks.push({
      url,
      text: $(el).text(),
      image: cardImageFromAnchor(el),
    })
  })

  const rawNews = dedupeById(
    newsLinks
      .map((l) => {
        const id = extractIdFromUrl(l.url)
        const { category, title } = pickCategoryAndTitle(l.text)
        return {
          id,
          type: 'news',
          category,
          title,
          image: l.image || '',
          link: l.url
        }
      })
      .filter((x) => x.id != null && x.title)
  )

  const rawEvents = dedupeById(
    eventLinks
      .map((l) => {
        const id = extractIdFromUrl(l.url)
        const { category, title } = pickCategoryAndTitle(l.text)
        return {
          id,
          type: 'event',
          category,
          title,
          image: l.image || '',
          link: l.url
        }
      })
      .filter((x) => x.id != null && x.title)
  )

  const news = rawNews.slice(0, 12)
  const events = rawEvents.slice(0, 12)

  for (const item of [...news, ...events]) {
    if (!item.image) item.image = await extractOgImage(item.link)
  }

  const combined = [...news.slice(0, 6), ...events.slice(0, 6)]

  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const projectRoot = path.resolve(__dirname, '..')
  const outPath = path.join(projectRoot, 'public', 'assets', 'news-events.json')
  const dbPath = path.join(projectRoot, 'db.json')

  await fs.mkdir(path.dirname(outPath), { recursive: true })
  await fs.writeFile(outPath, JSON.stringify(combined, null, 2) + '\n', 'utf8')

  const db = { newsEvents: combined }
  await fs.writeFile(dbPath, JSON.stringify(db, null, 2) + '\n', 'utf8')

  console.log(`Wrote ${combined.length} items to ${outPath}`)
  console.log(`Wrote ${combined.length} items to ${dbPath}`)
}

await scrape()
