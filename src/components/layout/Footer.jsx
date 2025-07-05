import React from 'react'
import logo from "../../assets/logo.png"

function Footer() {
  return (

    <footer className="text-center py-6 text-gray-200 bg-gray-900 text-sm flex justify-center items-center gap-3 sticky bottom-0 z-50">
      &copy; {new Date().getFullYear()}
      <img src={logo} alt="Logo" className='h-5 w-5' />
      TownSquare. All rights reserved.
    </footer>

  )
}

export default Footer