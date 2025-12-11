import React from 'react'

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = 'px-6 py-3 rounded-lg font-semibold btn-hover-lift'

    const variants = {
        primary: 'bg-orange text-white hover:bg-orange/90',
        secondary: 'bg-navy text-white hover:bg-navy/90',
        outline: 'border-2 border-orange text-orange hover:bg-orange hover:text-white'
    }

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
