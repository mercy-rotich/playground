'use client'

import { FEATURES } from '@/lib/constants'

const colorClasses = {
  purple: 'bg-purple-500/15 text-purple-400',
  green: 'bg-green-500/15 text-green-400',
  pink: 'bg-pink-500/15 text-pink-400',
  blue: 'bg-blue-500/15 text-blue-400',
  orange: 'bg-orange-500/15 text-orange-400',
  cyan: 'bg-cyan-500/15 text-cyan-400',
}

export default function FeaturesSection() {
  return (
    <section id="features" className="section-padding bg-dark">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to Excel
          </h2>
          <p className="text-xl text-text-gray">
            Comprehensive tools designed to help you succeed in your academic journey
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className="card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-3xl md:text-4xl mb-6 transition-transform group-hover:scale-110 ${
                  colorClasses[feature.color as keyof typeof colorClasses]
                }`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-text-gray leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}