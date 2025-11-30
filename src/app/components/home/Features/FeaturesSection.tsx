'use client'

import { FEATURES } from '@/lib/constants'

const colorClasses = {
  purple: 'bg-purple-500/15 border-purple-500/30',
  green: 'bg-green-500/15 border-green-500/30',
  pink: 'bg-pink-500/15 border-pink-500/30',
  blue: 'bg-blue-500/15 border-blue-500/30',
  orange: 'bg-orange-500/15 border-orange-500/30',
  cyan: 'bg-cyan-500/15 border-cyan-500/30',
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
              {/* Color indicator */}
              <div
                className={`w-full h-1 rounded-full mb-6 ${
                  colorClasses[feature.color as keyof typeof colorClasses]
                }`}
              />

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