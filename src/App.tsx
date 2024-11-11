import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import MessagePage from './pages/MessagePage'
import React from 'react'
import { ProductPage } from './pages/ProductPage'
import { ProductDetailPage } from './pages/ProductDetailPage'

const App: React.FC  = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/message' element={<MessagePage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App
