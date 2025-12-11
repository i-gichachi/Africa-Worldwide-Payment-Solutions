import React from 'react'

const Section = ({ children, className = '', background = 'white' }) => {
    const backgrounds = {
        white: 'bg-white',
        gray: 'bg-gray-50',
        navy: 'bg-navy text-white'
    }

    return (
        <section className={`py-20 md:py-32 ${backgrounds[background]} ${className}`}>
            <div className="container">
                {children}
            </div>
        </section>
    )
}

export default Section
