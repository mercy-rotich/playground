import Hero from '../app/home/components/Hero/Hero'
import FeaturesSection from '../app/home/components/Features/FeaturesSection'
import SchoolsSection from '../app/home/components/Schools/SchoolsSection'
import PricingSection from '../app/home/components/Pricing/PricingSection'
import TestimonialsSection from '../app/home/components/Testimonials/TestimonialsSection'
import FAQSection from '../app/home/components/FAQ/FAQSection'
import Link from 'next/link'
import { ROUTES } from '@/lib/constants'

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <FeaturesSection />

      {/* Schools Section */}
      <SchoolsSection />

      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding bg-dark">
        <div className="container-custom max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-text-gray">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                number: '1',
                title: 'Sign Up',
                description: 'Create your account using Google to access all features and personalized content',
              },
              {
                number: '2',
                title: 'Choose Your Plan',
                description: 'Select a subscription plan - Daily (KSh 10) or Monthly (KSh 100) via secure M-Pesa payment',
              },
              {
                number: '3',
                title: 'Study & Excel',
                description: 'Download papers, generate practice questions, chat with AI, and collaborate with peers',
              },
            ].map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 bg-primary text-dark rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-text-gray leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="section-padding bg-[#0F0F0F]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Premium Features & Benefits
            </h2>
            <p className="text-xl text-text-gray">
              Everything you get with a premium subscription
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🤖',
                title: 'Premium AI Chat',
                description: 'Unlock intelligent conversations with our AI study assistant',
                features: [
                  'AI-Powered Assistance - Get instant help with your academic questions',
                  'Unlimited Conversations - Chat without limits on any topic',
                  'Study Guidance - Personalized learning recommendations',
                ],
              },
              {
                icon: '📥',
                title: 'Offline Downloads',
                description: 'Access your study materials anytime, anywhere',
                features: [
                  'Download unlimited PDFs',
                  'Save images and notes',
                  'Track storage usage',
                  'Filter by file type',
                ],
              },
              {
                icon: '👤',
                title: 'Verified Account',
                description: 'Secure and personalized experience',
                features: [
                  'Verified account status',
                  'Email-based authentication',
                  'Track membership history',
                  'Monitor last activity',
                ],
              },
            ].map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-[#1A1A1A] rounded-3xl p-8 border-2 border-dark-lighter transition-all hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-primary/15"
              >
                <span className="text-5xl block mb-6 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                  {benefit.icon}
                </span>
                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-text-gray mb-6">{benefit.description}</p>
                <ul className="space-y-3 bg-black/40 p-6 rounded-xl border border-dark-lighter">
                  {benefit.features.map((feature) => (
                    <li key={feature} className="text-text-gray text-sm leading-relaxed border-b border-white/5 pb-3 last:border-0 last:pb-0 transition-all hover:text-primary hover:pl-2">
                      ✨ {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-dark">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Ace Your Exams?
          </h2>
          <p className="text-xl mb-8 opacity-80">
            Join thousands of students already using Okoa Sem to excel in their studies
          </p>
          <Link
            href={ROUTES.SIGNUP}
            className="inline-block px-8 py-4 bg-dark text-primary rounded-xl font-semibold text-lg transition-all hover:bg-dark/90 hover:-translate-y-1"
          >
            Get Started Free →
          </Link>
        </div>
      </section>
    </main>
  )
}