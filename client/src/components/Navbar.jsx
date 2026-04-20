import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <span className="nav-brand">📚 Book Library</span>
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/books/add">Add Book</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
