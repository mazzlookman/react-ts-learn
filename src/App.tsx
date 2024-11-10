import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import MessagePage from './pages/MessagePage'
import React from 'react'

const App: React.FC  = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/message' element={<MessagePage />} />
      </Routes>
    </Router>
  );
}

export default App
