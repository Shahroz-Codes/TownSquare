import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <main>
        <Navbar />
        <div className='flex-1 bg-gray-900 text-white'> <Outlet /></div>
       
        <Footer />
    </main>
  )
}

export default MainLayout