import React from 'react'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import LoginPage from '../features/auth/LoginPage'
import SignupPage from '../features/auth/SignupPage'

function Home() {
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-gray-800 text-white space-y-2'>
      <h1 className='text-4xl'>Welcome to TownSquare</h1>
      <p className=' mt-3'>Your community hub for events, feedback, and volunteering.</p>
      <div className=''>
        <Button type='button' children='Get Started'></Button>
      </div>
    </div>
  )
}

export default Home