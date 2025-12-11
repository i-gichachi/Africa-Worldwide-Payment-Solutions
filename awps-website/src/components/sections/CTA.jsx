import React from 'react'
import Button from '../ui/Button'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
    return (
        <div className="bg-gradient-to-r from-orange to-orange/80 text-white py-16">
            <div className="container text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Transform Your Payment Systems?
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Join hundreds of businesses across Africa that trust AWPS for their payment solutions.
                </p>
                <Button variant="secondary" className="flex items-center justify-center gap-2 mx-auto">
                    Get Started Today <ArrowRight className="w-5 h-5" />
                </Button>
            </div>
        </div>
    )
}

export default CTA
