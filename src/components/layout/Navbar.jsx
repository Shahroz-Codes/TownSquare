import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [isloggedin, setIsLoggedIn] = useState(true);

    return (
        <div>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex flex-wrap justify-between items-center">
                    <Link to="/" className="text-white text-lg font-bold">TownSquare</Link>
                    {isloggedin ? <div className="space-x-4 flex flex-wrap justify-between items-center">
                        <Link to="/volunteer" className="text-gray-300 hover:text-white">Volunteer</Link>
                        <Link to="/events" className="text-gray-300 hover:text-white">Events</Link>
                        <Link to="/feedback" className="text-gray-300 hover:text-white">Feedback</Link>
                    </div> : <div className="space-x-4">
                        <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
                    </div>}

                </div>
            </nav>
        </div>
    )
}

export default Navbar