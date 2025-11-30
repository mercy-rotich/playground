'use client'

const testimonials = [
  {
    name: 'James Mwangi',
    initials: 'JM',
    school: 'Computer Science, SCI',
    text: 'Okoa Sem literally saved my semester! I was struggling to find past papers for Data Structures, but with their smart search feature, I found exactly what I needed in seconds. The AI study bot helped me understand complex algorithms. Highly recommend!',
    date: '2 weeks ago',
  },
  {
    name: 'Sarah Akinyi',
    initials: 'SA',
    school: 'Business Admin, SBE',
    text: 'The monthly plan is worth every shilling! I\'ve accessed papers from 3 years back, and the notes-to-questions feature is a game changer. I upload my lecture notes and get instant practice questions. My grades have improved significantly!',
    date: '1 month ago',
  },
  {
    name: 'David Kamau',
    initials: 'DK',
    school: 'Civil Engineering, SEA',
    text: 'As an engineering student, finding relevant past papers was always a challenge. Okoa Sem organized everything by department and year. The study groups feature helped me connect with classmates, and we aced our thermodynamics exam together!',
    date: '3 weeks ago',
  },
  {
    name: 'Mary Wanjiru',
    initials: 'MW',
    school: 'Nursing, SON',
    text: 'The AI chatbot is incredible! I asked questions about pharmacology at 2 AM and got detailed explanations instantly. The offline download feature means I can study anywhere, even without internet. Best KSh 100 I\'ve ever spent!',
    date: '5 days ago',
  },
  {
    name: 'Brian Njuguna',
    initials: 'BN',
    school: 'Mathematics, SPAS',
    text: 'I love how comprehensive the database is! Found papers dating back 5 years for Calculus III. The topic search helped me practice specific problem types. Passed my exam with an A. Thank you Okoa Sem team!',
    date: '1 week ago',
  },
  {
    name: 'Grace Wambui',
    initials: 'GW',
    school: 'Education, SED',
    text: 'Simple, affordable, and effective! The M-Pesa payment is so convenient. I can access everything from my phone. The platform is user-friendly and has everything I need for exam prep. All my classmates are now using it!',
    date: '2 days ago',
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-dark">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Students Are Saying
          </h2>
          <p className="text-xl text-text-gray">
            Join thousands of students who have transformed their exam preparation
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative overflow-hidden rounded-[20px] p-10 transition-all duration-400 hover:-translate-y-2 hover:border-primary hover:shadow-[0_20px_40px_rgba(196,248,42,0.2)]"
              style={{
                background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.9), rgba(26, 26, 26, 0.7))',
                backdropFilter: 'blur(10px)',
                border: '2px solid #2A2A2A',
              }}
            >
              {/* Testimonial Header */}
              <div className="relative z-10 flex items-center gap-4 mb-6">
                <div 
                  className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                    color: 'var(--dark)',
                  }}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-0.5">{testimonial.name}</h4>
                  <span className="text-text-gray text-sm">{testimonial.school}</span>
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="relative z-10 mb-6">
                <p className="text-[#E5E5E5] text-[0.95rem] leading-[1.7]">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Footer */}
              <div className="relative z-10 pt-4 border-t border-[#2A2A2A] text-sm">
                <span className="text-text-gray">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}