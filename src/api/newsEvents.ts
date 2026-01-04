export type NewsEventType = 'news' | 'event'

export interface NewsEventItem {
  id?: string | number
  type?: NewsEventType
  category: string
  title: string
  image: string
  link: string
}

function isNewsEventItem(value: unknown): value is NewsEventItem {
  if (!value || typeof value !== 'object') return false
  const v = value as Partial<NewsEventItem>
  return (
    typeof v.category === 'string' &&
    typeof v.title === 'string' &&
    typeof v.image === 'string' &&
    typeof v.link === 'string'
  )
}

function makeKey(item: NewsEventItem): string {
  const link = item.link?.trim()
  if (link) return `link:${link}`
  const type = item.type ?? ''
  const title = item.title?.trim() ?? ''
  const category = item.category?.trim() ?? ''
  return `fallback:${type}|${category}|${title}`
}

async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, init)
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status} ${res.statusText}`)
  }
  return (await res.json()) as T
}

export async function loadNewsEvents(): Promise<NewsEventItem[]> {
  // Always load the built-in static data so the page doesn't go empty
  // when the API is empty (or not running).
  let staticItems: NewsEventItem[] = []
  try {
    const url = `${import.meta.env.BASE_URL}assets/news-events.json`
    const data = await fetchJson<unknown>(url)
    staticItems = Array.isArray(data) ? data.filter(isNewsEventItem) : []
  } catch {
    staticItems = []
  }

  // Then try to load admin-managed items from json-server in dev via Vite proxy.
  let apiItems: NewsEventItem[] = []
  try {
    const data = await fetchJson<unknown>('/api/newsEvents')
    apiItems = Array.isArray(data) ? data.filter(isNewsEventItem) : []
  } catch {
    apiItems = []
  }

  const merged = new Map<string, NewsEventItem>()
  for (const item of staticItems) merged.set(makeKey(item), item)
  for (const item of apiItems) merged.set(makeKey(item), item)
  return Array.from(merged.values())
}
