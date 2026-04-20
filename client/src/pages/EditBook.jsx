 import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getBookById, updateBook } from '../services/api'
 
function EditBook() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState(null)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)
 
  useEffect(() => {
    getBookById(id).then(data => setForm(data))
  }, [id])
 
  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
 
  const handleSubmit = async e => {
    e.preventDefault()
    setSaving(true); setError(null)
    try {
      await updateBook(id, { ...form, year: Number(form.year) })
      navigate(`/books/${id}`)
    } catch (err) { setError(err.message) }
    finally { setSaving(false) }
  }
 
  if (!form) return <p>Loading...</p>
 
  return (
    <div className="edit-book">
      <h1>Edit Book</h1>
      {error && <p style={{color:'red'}}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input name="title" value={form.title}
          onChange={handleChange} required />
        <button type="submit" disabled={saving}>
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  )
}
export default EditBook