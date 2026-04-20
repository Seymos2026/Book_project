import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import BookList from './pages/BookList'
import BookDetail from './pages/BookDetail'
import NotFound from './pages/NotFound'
import './App.css'
import AddBook from './pages/AddBook'
import EditBook from './pages/EditBook'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/edit/:id" element={<EditBook />} />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/books/add" element={<AddBook />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
