import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MainLayout from './components/layout/MainLayout'
import { checkAuthStatus } from './store/authSlice';

//Pages
import Home from './pages/Home'
import Feedback from './pages/Feedback'
import Volunteer from './pages/Volunteer'
import Events from './pages/Events'
import NotFoundPage from './pages/NotFoundPage'
import AddEventPage from './pages/AddEventPage';
import LoginPage from './features/auth/LoginPage';
import SignupPage from './features/auth/SignupPage';

// Routes
import ProtectedRoute from "./routes/ProtectedRoute";
import { useSelector } from "react-redux";
import { isAdmin } from "./utils/roles";




function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  // From Redux
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const userData = useSelector(state => state.auth.userData);

  const { loading } = useSelector((state) => state.auth);

  if (loading) {
    return <div>Loading...</div>; // or a spinner
  }

  return (
    <div className='bg-black text-white h-screen'>
      <Routes>
        {/* Standalone auth routes (not inside MainLayout) */}

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />


        {/* All routes wrapped inside MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="volunteer" element={<Volunteer />} />
                  <Route
          path="/admin/add-event"
          element={
            <ProtectedRoute
              isAllowed={isAuthenticated && isAdmin(userData)}
              element={<AddEventPage />}
            />
          }
        />
          <Route path="*" element={<NotFoundPage />} /> {/* optional */}
        </Route>
      </Routes>
    </div>
  )
}

export default App
