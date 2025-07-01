import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Input } from '../../components/ui'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authService from '../../appwrite/authService';
import { login } from '../../store/authSlice'



function SignupPage() {
  // State to manage form inputs and error messages
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const user = await authService.createAccount({ email, password, name });

      if (user) {
        dispatch(login(user));
        navigate('/');
      }
    } catch (err) {
      setError(err.message || 'Something went wrong');
    }
  };


  return (
    <div className="flex items-center justify-center text-black">
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            TownsSquare
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>

        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={(e) => { console.log("Form submit triggered"); handleSubmit(e); }}>
          <div className='space-y-5'>
            <Input
              label="Full Name: "
              placeholder="Enter your full name"
              type="text"
              onChange={(e) => setName(e.target.value)}

              required
            />
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button 
            type="submit" 
            className="w-full"
            >
              Create Account
            </Button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default SignupPage