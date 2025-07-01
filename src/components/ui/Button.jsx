import React from 'react'

function Button({
    type = 'button',
    onClick = () => { },
    className = '',
    children = 'Button',
}) {
    return (
        <button
            className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden text-white transition duration-300 ease-out bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-xl shadow-xl group hover:from-red-500 hover:to-purple-600 hover:shadow-2xl hover:scale-105"
            type={type}
            onClick={onClick}
        >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 to-red-500 opacity-0 transition duration-300 ease-out group-hover:opacity-10"></span>
            <span className="relative z-10 font-semibold tracking-wide">
                {children}
            </span>
        </button>
    )
}

export default Button