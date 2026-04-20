import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createBook } from '../services/api'

function AddBook() {
  const navigate = useNavigate()
  const [form, setForm]     = useState({
    title: '', author: '', genre: '', year: '', description: ''
  })
  const [error, setError]   = useState(null)
  const [saving, setSaving] = useState(false)

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setSaving(true)
    setError(null)
    try {
      await createBook({ ...form, year: Number(form.year) })
      navigate('/books')
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="add-book">
      <h1>Add a New Book</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Title
          <input name="title"  value={form.title}  onChange={handleChange} required />
        </label>
        <label>Author
          <input name="author" value={form.author} onChange={handleChange} required />
        </label>
        <label>Genre
          <input name="genre"  value={form.genre}  onChange={handleChange} required />
        </label>
        <label>Year
          <input name="year"   value={form.year}   onChange={handleChange} type="number" required />
        </label>
        <label>Description
          <textarea name="description" value={form.description} onChange={handleChange} rows={3} />
        </label>
        <button type="submit" disabled={saving}>
          {saving ? 'Saving...' : 'Add Book'}
        </button>
      </form>
    </div>
  )
}

export default AddBook
