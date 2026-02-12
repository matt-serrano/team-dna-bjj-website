import React from 'react';
import { motion } from 'motion/react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { Card } from '../components/Card';
import * as Accordion from '@radix-ui/react-accordion';

const faqCategories = [
  {
    category: 'Getting Started',
    questions: [
      {
        question: 'Do I need experience to join?',
        answer: 'Absolutely not! Most of our students start with zero experience. Our beginner-friendly programs are specifically designed to teach you everything from the ground up. Our instructors are skilled at working with complete beginners and will ensure you feel comfortable every step of the way.',
      },
      {
        question: 'What should I wear to my first class?',
        answer: 'For your first class, wear comfortable athletic clothing like a t-shirt and shorts or sweatpants. Avoid clothing with zippers or metal parts. Train barefoot (no shoes on the mat). Once you decide to continue, we\'ll help you get your gi (traditional uniform).',
      },
      {
        question: 'How do I book a free trial?',
        answer: 'You can book your free trial through our website by clicking the "Book a Free Trial" button, calling us at (905) 555-0123, or stopping by the gym during open hours. We\'ll schedule you for a class that matches your age and experience level.',
      },
      {
        question: 'What age groups do you teach?',
        answer: 'We offer programs for everyone! Kids can start as young as 5 years old. We have separate programs for ages 5-8, 8-13, teens 14+, adults, and a dedicated women\'s program. Each program is tailored to the specific age group\'s needs and abilities.',
      },
    ],
  },
  {
    category: 'Training & Classes',
    questions: [
      {
        question: 'How often should I train?',
        answer: 'We recommend training 2-3 times per week for beginners. This gives you enough practice to progress while allowing adequate recovery time. As you advance, you can increase frequency based on your goals. All memberships include unlimited classes, so you can train as often as you\'d like.',
      },
      {
        question: 'What is a typical class like?',
        answer: 'Classes typically start with a warm-up, followed by technique instruction where we break down and practice specific moves. Then we do positional sparring (situational practice), and the class often ends with live rolling (sparring). Beginners focus more on technique and gradually incorporate more sparring as they progress.',
      },
      {
        question: 'Is BJJ safe?',
        answer: 'BJJ is one of the safest martial arts when practiced correctly. We emphasize controlled technique, proper safety protocols, and respectful training. Injuries are rare, and our experienced instructors closely supervise all classes to ensure everyone trains safely.',
      },
      {
        question: 'Can I train if I\'m not in shape?',
        answer: 'Yes! BJJ is an excellent way to get in shape. Our classes accommodate all fitness levels, and you\'ll improve your conditioning naturally as you train. You can work at your own pace, and our instructors will help you scale techniques to match your current fitness level.',
      },
    ],
  },
  {
    category: 'Membership & Pricing',
    questions: [
      {
        question: 'What membership options do you offer?',
        answer: 'We offer flexible monthly memberships, 6-month commitments (our most popular option), and yearly memberships for the best value. We have Basic, Premium, and Elite tiers with different benefits. All memberships include unlimited classes. Visit our Pricing page for detailed information.',
      },
      {
        question: 'Can I pause or cancel my membership?',
        answer: 'Yes, we understand life happens. Monthly memberships can be cancelled with 30 days notice. Longer commitments can be paused for medical reasons, relocation, or other special circumstances. Contact us to discuss your specific situation.',
      },
      {
        question: 'Do you offer family discounts?',
        answer: 'Yes! We offer family discounts when multiple family members train. Contact us for specific pricing based on your family\'s needs.',
      },
      {
        question: 'What\'s included in my membership?',
        answer: 'All memberships include unlimited access to classes for your program, open mat sessions, and community events. Premium and Elite memberships include additional benefits like private lesson credits, competition training, and more. Check our Pricing page for full details.',
      },
    ],
  },
  {
    category: 'Programs & Progression',
    questions: [
      {
        question: 'How long does it take to get a black belt?',
        answer: 'The journey to black belt typically takes 10-15 years with consistent training. However, BJJ is about the journey, not just the destination. You\'ll see progress and results from day one. Most students earn their blue belt (first promotion) within 1-2 years of regular training.',
      },
      {
        question: 'Can I compete in tournaments?',
        answer: 'Absolutely! Competition is optional but encouraged for those interested. We offer specific competition training and will help prepare you for tournaments. We regularly attend local, regional, and international competitions as a team.',
      },
      {
        question: 'What\'s the difference between gi and no-gi?',
        answer: 'Gi (traditional uniform) training involves gripping the jacket and pants as part of techniques. No-gi training is done in athletic wear (rash guard and shorts) without grips on clothing. Both styles are valuable and complement each other. Our adult program covers both.',
      },
      {
        question: 'Do you offer private lessons?',
        answer: 'Yes! Private lessons are available for students who want more personalized instruction. Premium and Elite memberships include monthly private lesson credits. Additional private sessions can be purchased separately.',
      },
    ],
  },
  {
    category: 'Facilities & Equipment',
    questions: [
      {
        question: 'What equipment do I need?',
        answer: 'To start, you just need athletic clothing. As you continue, you\'ll need a gi (traditional uniform), which we can help you purchase. Other optional equipment includes rash guards for no-gi training, mouthguard, and a water bottle. We have everything else you need at the gym.',
      },
      {
        question: 'Do you have changing rooms and showers?',
        answer: 'Yes, we have full locker rooms with showers and changing areas for both men and women. We also provide a comfortable waiting area for parents.',
      },
      {
        question: 'Is there parking available?',
        answer: 'Yes, we have ample free parking available for all students and visitors right at our facility.',
      },
      {
        question: 'Can parents watch kids\' classes?',
        answer: 'Absolutely! We have a designated viewing area where parents can watch their children\'s classes. We encourage parents to observe, especially during the first few classes.',
      },
    ],
  },
];

export function FAQ() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--accent-primary)]/10 via-background to-background py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] mb-4">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm font-medium">FAQ</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Everything you need to know about training at Team DNA BJJ
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[var(--accent-primary)] text-white flex items-center justify-center text-sm font-bold">
                  {categoryIndex + 1}
                </div>
                {category.category}
              </h2>

              <Accordion.Root type="single" collapsible className="space-y-4">
                {category.questions.map((faq, i) => (
                  <Accordion.Item key={i} value={`${categoryIndex}-${i}`}>
                    <Card>
                      <Accordion.Trigger className="flex w-full items-center justify-between p-6 text-left font-semibold hover:no-underline group">
                        <span className="pr-4">{faq.question}</span>
                        <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180 text-[var(--accent-primary)]" />
                      </Accordion.Trigger>
                      <Accordion.Content className="px-6 pb-6 text-muted-foreground">
                        {faq.answer}
                      </Accordion.Content>
                    </Card>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground">
              We're here to help! Contact us directly or book a free trial to experience it yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '#trial-modal'}
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white font-medium shadow-lg transition-all"
              >
                Book a Free Trial
              </button>
              <button
                onClick={() => window.location.href = '/contact'}
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white font-medium transition-all"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
