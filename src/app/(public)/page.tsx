import Navigation from '@/shared/components/layout/Navigation/Navigation'
import Footer from '@/shared/components/layout/Footer/Footer'
import Hero from '@/features/home/components/Hero/Hero'
import FeaturesSection from '@/features/home/components/Features/FeaturesSection'
import SchoolsSection from '@/features/home/components/Schools/SchoolsSection'
import PricingSection from '@/features/home/components/Pricing/PricingSection'
import TestimonialsSection from '@/features/home/components/Testimonials/TestimonialsSection'
import FAQSection from '@/features/home/components/FAQ/FAQSection'
import BenefitsSection from '@/features/home/components/Benefits/Benefitssection'
import Link from 'next/link'
import { ROUTES } from '@/shared/constants'
import { Bot, Download, ShieldCheck, Check } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
      <Hero />

      <FeaturesSection />

      <SchoolsSection />

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

      <BenefitsSection />

      <PricingSection />

      <TestimonialsSection />

      <FAQSection />

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
    <Footer />
    </>
  )
}