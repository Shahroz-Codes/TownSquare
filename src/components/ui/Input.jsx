import React, { useId } from 'react'

const Input = function Input({
  label,
  type = "text",
  className = "",
  placeholder = "",
  ...props

}, ref) {
  const id = useId()
  return (
    <div className="relative w-full">
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-3.5 z-10 origin-[0]
               -translate-y-4 scale-75 transform text-sm text-gray-500
               transition-all duration-300
               peer-placeholder-shown:translate-y-2.5
               peer-placeholder-shown:scale-100
               peer-focus:-translate-y-4
               peer-focus:scale-75
               peer-focus:text-purple-500"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        placeholder={label}
        className={`peer block w-full appearance-none rounded-xl border border-gray-300 
                bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-transparent 
                shadow-inner transition-all duration-300 
                focus:border-purple-500 focus:outline-none focus:ring-2 
                focus:ring-purple-400 focus:ring-offset-2 text-wrap ${className}`}
        {...props}
      />
    </div>
  )
}

export default Input