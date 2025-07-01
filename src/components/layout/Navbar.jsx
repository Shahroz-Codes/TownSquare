import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import authService from '../../appwrite/authService'; // or wherever your authService is
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui'
import { isAdmin } from "../../utils/roles";

function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, userData } = useSelector((state) => state.auth);
    const handleLogout = async () => {
        await authService.logout();       // end session in Appwrite
        dispatch(logout());               // update Redux
        navigate('/');                    // redirect to homepage
    };


    return (
        <div>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex flex-wrap justify-between items-center">
                    <Link to="/" className="text-white text-lg font-bold">TownSquare</Link>
                    {isAuthenticated ? <div className="space-x-4 flex flex-wrap justify-between items-center">
                        <Link to="/volunteer" className="text-gray-300 hover:text-white">Volunteer</Link>
                        <Link to="/events" className="text-gray-300 hover:text-white">Events</Link>
                        <Link to="/feedback" className="text-gray-300 hover:text-white">Feedback</Link>
                        {userData && isAdmin(userData) && (
                            <Link to="/admin/add-event">Add Event</Link>
                        )}
                        <Button
                            onClick={handleLogout}
                            className="text-red-400 hover:text-red-600"
                            children='Logout'
                        />
                    </div> : <div className="space-x-4">
                        <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
                        <Link to="/signup" className="text-gray-300 hover:text-white">SignUp</Link>
                    </div>}

                </div>
            </nav>
        </div>
    )
}

export default Navbar