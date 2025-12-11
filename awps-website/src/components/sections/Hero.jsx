import React from 'react'
import Button from '../ui/Button'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
    return (
        <div className="bg-gradient-to-br from-navy to-navy/90 text-white py-20 md:py-32">
            <div className="container">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Transforming Payments. <span className="text-orange">Elevating Performance.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8">
                        Africa's premier payment consulting solutions provider, empowering businesses across the continent.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button variant="primary" className="flex items-center justify-center gap-2">
                            Get Started <ArrowRight className="w-5 h-5" />
                        </Button>
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
