import React from 'react'
import { Button, Input } from '../../components/ui'
import { Link } from 'react-router-dom';


function LoginPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div
            className='flex items-center justify-center text-black w-full'
        >
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        TownsSquare
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {/* {error && <p className="text-red-600 mt-8 text-center">{error}</p>} */}

                <form onSubmit={(e) => { console.log("Form submit triggered"); handleSubmit(e); }}>
                    <div className='space-y-5'>
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            required
                        />
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            required
                        />
                        <Button
                            type="submit"
                            className="w-full"
                        >Sign in</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage