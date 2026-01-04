import React, { useEffect, useMemo, useState } from 'react'
import './AdminPanel.css'

type NewsEventType = 'news' | 'event'

interface NewsEventItem {
  id: number
  type: NewsEventType
  category: string
  title: string
  image: string
  link: string
}

const emptyDraft: Omit<NewsEventItem, 'id'> = {
  type: 'news',
  category: '',
  title: '',
  image: '',
  link: '',
}

const AdminPanel: React.FC = () => {
  const [items, setItems] = useState<NewsEventItem[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [draft, setDraft] = useState(emptyDraft)

  const selected = useMemo(() => items.find((x) => x.id === selectedId) ?? null, [items, selectedId])

  async function load() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/newsEvents')
      if (!res.ok) throw new Error(`Failed to load: ${res.status}`)
      const data = (await res.json()) as NewsEventItem[]
      setItems(Array.isArray(data) ? data : [])
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  function onSelect(item: NewsEventItem) {
    setSelectedId(item.id)
    const { id: _id, ...rest } = item
    setDraft(rest)
  }

  function clearForm() {
    setSelectedId(null)
    setDraft(emptyDraft)
  }

  async function createItem() {
    setError(null)
    try {
      const res = await fetch('/api/newsEvents', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(draft),
      })
      if (!res.ok) throw new Error(`Create failed: ${res.status}`)
      clearForm()
      await load()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Create failed')
    }
  }

  async function updateItem() {
    if (selectedId == null) return
    setError(null)
    try {
      const res = await fetch(`/api/newsEvents/${selectedId}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ id: selectedId, ...draft }),
      })
      if (!res.ok) throw new Error(`Update failed: ${res.status}`)
      await load()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Update failed')
    }
  }

  async function deleteItem(id: number) {
    setError(null)
    try {
      const res = await fetch(`/api/newsEvents/${id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error(`Delete failed: ${res.status}`)
      if (selectedId === id) clearForm()
      await load()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Delete failed')
    }
  }

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <p>Manage items in json-server collection: <strong>newsEvents</strong></p>

      <div className="admin-grid">
        <section className="admin-list">
          <div className="admin-list-header">
            <h2>Items</h2>
            <button onClick={load} disabled={loading}>Reload</button>
          </div>

          {error && <div className="admin-error">{error}</div>}
          {loading && <div className="admin-muted">Loading...</div>}

          <ul>
            {items.map((item) => (
              <li key={item.id} className={item.id === selectedId ? 'active' : ''}>
                <button className="row" onClick={() => onSelect(item)}>
                  <span className="pill">{item.type}</span>
                  <span className="title">{item.title}</span>
                </button>
                <button className="danger" onClick={() => deleteItem(item.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </section>

        <section className="admin-form">
          <div className="admin-form-header">
            <h2>{selected ? `Edit #${selected.id}` : 'Create new'}</h2>
            <button onClick={clearForm}>Clear</button>
          </div>

          <label>
            Type
            <select value={draft.type} onChange={(e) => setDraft((d) => ({ ...d, type: e.target.value as NewsEventType }))}>
              <option value="news">news</option>
              <option value="event">event</option>
            </select>
          </label>

          <label>
            Category
            <input value={draft.category} onChange={(e) => setDraft((d) => ({ ...d, category: e.target.value }))} />
          </label>

          <label>
            Title
            <input value={draft.title} onChange={(e) => setDraft((d) => ({ ...d, title: e.target.value }))} />
          </label>

          <label>
            Image URL
            <input value={draft.image} onChange={(e) => setDraft((d) => ({ ...d, image: e.target.value }))} />
          </label>

          <label>
            Link URL
            <input value={draft.link} onChange={(e) => setDraft((d) => ({ ...d, link: e.target.value }))} />
          </label>

          <div className="admin-actions">
            {selected ? (
              <button onClick={updateItem} disabled={!draft.title || !draft.link}>Save</button>
            ) : (
              <button onClick={createItem} disabled={!draft.title || !draft.link}>Add</button>
            )}
          </div>

          <p className="admin-muted">
            Run <code>npm run api</code> to start json-server. This page uses <code>/api/newsEvents</code>.
          </p>
        </section>
      </div>
    </div>
  )
}

export default AdminPanel
