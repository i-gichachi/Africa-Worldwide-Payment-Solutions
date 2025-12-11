import React from 'react'
import { Users, Building2, Globe2, TrendingUp } from 'lucide-react'

const Stats = () => {
    const stats = [
        { icon: Users, value: '500+', label: 'Clients Served' },
        { icon: Building2, value: '50+', label: 'Countries' },
        { icon: Globe2, value: '1M+', label: 'Transactions Processed' },
        { icon: TrendingUp, value: '99.9%', label: 'Uptime' }
    ]

    return (
        <div className="bg-gray-50 py-16">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <stat.icon className="w-12 h-12 text-orange mx-auto mb-4" />
                            <div className="text-3xl md:text-4xl font-bold text-navy mb-2">
                                {stat.value}
                            </div>
                            <div className="text-gray-600">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Stats
