import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center flex flex-wrap justify-between items-center">
        <p className="text-sm">© 2023 TownSquare. All rights reserved.</p>
        <p className="text-sm">Follow us on social media!</p>
        <div className="flex flex-wrap justify-between items-center space-x-4 mt-2">
          <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
          <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
          <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer