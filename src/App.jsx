import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'

//Pages
import Home from './pages/Home'
import Feedback from './pages/Feedback'
import Volunteer from './pages/Volunteer'
import Events from './pages/Events'
import NotFoundPage from './pages/NotFoundPage'



function App() {
  
  return (
    <div className='bg-black text-white h-screen'>
    <Routes>
      {/* All routes wrapped inside MainLayout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="events" element={<Events />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="volunteer" element={<Volunteer />} />
        <Route path="*" element={<NotFoundPage />} /> {/* optional */}
      </Route>
    </Routes>
    </div>
  )
}

export default App
