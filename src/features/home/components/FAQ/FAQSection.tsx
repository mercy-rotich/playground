'use client'

import { useState, useEffect } from 'react'

const faqs = [
  {
    question: 'How do I make payments?',
    answer: 'Payments are made through <strong>M-Pesa STK Push</strong>. Simply select your preferred plan (Daily at KSh 10 or Monthly at KSh 100), enter your M-Pesa phone number, and you\'ll receive a prompt on your phone to complete the payment. The process is instant and secure!',
  },
  {
    question: 'How many past papers are available?',
    answer: 'We have over <strong>24,000+ past papers</strong> from 8 different schools covering 50+ departments. Papers are organized by year, semester, and course code, making it easy to find exactly what you need for your exam preparation.',
  },
  {
    question: 'What can the AI Study Bot do?',
    answer: 'Our AI Study Bot provides <strong>instant answers</strong> to your academic questions, helps explain complex concepts, generates practice questions from your notes, and offers personalized study guidance. It\'s like having a personal tutor available 24/7!',
  },
  {
    question: 'Can I download papers for offline use?',
    answer: 'Yes! With a <strong>premium subscription</strong>, you can download unlimited PDFs and access them offline anytime. This is perfect for studying when you don\'t have internet access or want to save on data.',
  },
  {
    question: 'Which schools and departments are covered?',
    answer: 'We cover <strong>8 major schools</strong> including: School of Computing and Informatics (SCI), School of Business and Economics (SBE), School of Engineering and Architecture (SEA), School of Pure and Applied Sciences (SPAS), School of Health Sciences (SHS), School of Nursing (SON), School of Education (SED), and School of Agriculture and Food Sciences (SAFS).',
  },
  {
    question: 'How does the Notes to Questions feature work?',
    answer: 'Simply <strong>upload an image</strong> of your handwritten or typed study notes, and our AI will automatically generate relevant practice questions to test your understanding of the material. It\'s a great way to turn passive reading into active learning!',
  },
  {
    question: 'Can I study with friends?',
    answer: 'Absolutely! You can <strong>create or join study groups</strong>, share questions and resources with your peers, and collaborate on exam preparation. Studying together makes learning more effective and enjoyable!',
  },
  {
    question: 'What happens when my subscription expires?',
    answer: 'When your subscription expires, you\'ll lose access to premium features like downloading papers, AI chat, and study groups. However, you can <strong>renew anytime</strong> and your account data will be preserved. We\'ll also send you a reminder before expiration!',
  },
  {
    question: 'Is Okoa Sem mobile-friendly?',
    answer: 'Yes! Okoa Sem is <strong>fully responsive</strong> and works perfectly on smartphones, tablets, and computers. You can access all features on any device with an internet connection. Study anywhere, anytime!',
  },
  {
    question: 'Is my personal information secure?',
    answer: 'Your security is our priority. We use <strong>Google authentication</strong> for secure sign-in and encrypted M-Pesa payments. We never store your payment information and comply with all data protection regulations.',
  },
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    const checkTheme = () => {
      setIsLight(document.body.classList.contains('light-theme'))
    }
    
    checkTheme()
    
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkTheme()
        }
      })
    })
    
    observer.observe(document.body, { attributes: true })
    
    return () => observer.disconnect()
  }, [])

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  // Theme-aware styles
  const getSectionStyle = (): React.CSSProperties => ({
    background: isLight ? '#81C784' : '#0F0F0F',
  })

  return (
    <section 
      id="faq" 
      className="section-padding"
      style={getSectionStyle()}
    >
      <div className="container-custom max-w-[1000px]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-text-gray">
            Everything you need to know about Okoa Sem
          </p>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-dark-card rounded-2xl overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'border-2 border-primary' : 'border-2 border-[#2A2A2A]'
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-6 py-5 flex justify-between items-center gap-4 text-left transition-all ${
                  activeIndex === index ? 'bg-[rgba(196,248,42,0.08)]' : 'hover:bg-[rgba(196,248,42,0.05)]'
                }`}
              >
                <span className="text-base font-semibold text-white">
                  {faq.question}
                </span>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xl flex-shrink-0 transition-all ${
                    activeIndex === index
                      ? 'bg-primary text-dark rotate-45'
                      : 'bg-[rgba(196,248,42,0.15)] text-primary'
                  }`}
                >
                  +
                </div>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-400 overflow-hidden ${
                  activeIndex === index ? 'max-h-[500px]' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <div
                    className="text-text-gray text-[0.95rem] leading-[1.7]"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div
          className="mt-12 text-center p-8 rounded-2xl border-2"
          style={{
            background: 'linear-gradient(135deg, rgba(196, 248, 42, 0.1), rgba(180, 167, 255, 0.1))',
            borderColor: 'rgba(196, 248, 42, 0.2)',
          }}
        >
          <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
          <p className="text-text-gray mb-6">
            Our support team is here to help you succeed
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-dark px-8 py-4 rounded-[10px] font-semibold transition-all hover:bg-primary-dark hover:-translate-y-0.5"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  )
}