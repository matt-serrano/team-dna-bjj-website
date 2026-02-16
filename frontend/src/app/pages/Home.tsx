import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Shield, Heart, Dumbbell, Users, Clock, Award,
  CheckCircle, TrendingUp, Target, ArrowRight,
  Star, Quote
} from 'lucide-react';
import { Button } from '../components/Button';
import { Card, CardContent, CardHeader } from '../components/Card';
import { Chip } from '../components/Chip';
import { TrialModal } from '../components/TrialModal';
import * as Accordion from '@radix-ui/react-accordion';
import { cn } from '../lib/utils';

export function Home() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  const programs = [
    {
      title: 'Kids (5-8 Years)',
      description: 'Foundation program focused on coordination, discipline, and fun.',
      benefits: ['Builds confidence', 'Improves coordination', 'Social skills development'],
      path: '/programs/kids-5-8',
      image: 'https://images.unsplash.com/photo-1769095207072-0c84d9b7b9ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGtpZHMlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NzA4NjQ4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Kids (8-13 Years)',
      description: 'Advanced techniques with emphasis on self-defense and competition skills.',
      benefits: ['Technical development', 'Self-defense ready', 'Competition training'],
      path: '/programs/kids-8-13',
      image: 'https://images.unsplash.com/photo-1769095207072-0c84d9b7b9ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGtpZHMlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NzA4NjQ4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Adult & Teen',
      description: 'Complete BJJ curriculum for fitness, self-defense, and competition.',
      benefits: ['Full-body workout', 'Real self-defense', 'Stress relief'],
      path: '/programs/adult-teen',
      image: 'https://images.unsplash.com/photo-1542937307-973ad1f0b10f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBqaXUlMjBqaXRzdSUyMHRyYWluaW5nfGVufDF8fHx8MTc3MDgyMTkwMXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: "Women's Program",
      description: 'Empowering women through BJJ in a supportive environment.',
      benefits: ['Female-focused training', 'Empowerment', 'Supportive community'],
      path: '/programs/womens',
      image: 'https://images.unsplash.com/photo-1703231528310-162c7ba654fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMG1hcnRpYWwlMjBhcnRzJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzcwODY0ODUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Discipline',
      description: 'Build mental toughness and self-control through structured training.',
    },
    {
      icon: Heart,
      title: 'Confidence',
      description: 'Develop unshakeable self-confidence on and off the mat.',
    },
    {
      icon: Dumbbell,
      title: 'Fitness',
      description: 'Get in the best shape of your life with functional martial arts training.',
    },
    {
      icon: Shield,
      title: 'Self-Defense',
      description: 'Learn practical, proven techniques for real-world situations.',
    },
    {
      icon: Users,
      title: 'Expert Coaches',
      description: 'Train with experienced black belts who care about your progress.',
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Multiple class times to fit your busy lifestyle.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      program: "Women's Program",
      text: "Team DNA BJJ has transformed my life. I've gained confidence, strength, and an amazing support system. The coaches are incredibly knowledgeable and supportive.",
      rating: 5,
    },
    {
      name: 'Mike Chen',
      program: 'Adult & Teen',
      text: 'Best decision I ever made. Not only am I in great shape, but I\'ve learned practical self-defense skills. The community here is like family.',
      rating: 5,
    },
    {
      name: 'Jennifer Rodriguez',
      program: 'Kids (8-13)',
      text: "My son has grown so much since starting. His focus has improved, he's more disciplined, and he absolutely loves coming to class.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: 'Do I need experience to start?',
      answer: 'Not at all! Most of our students start with zero experience. Our beginner-friendly programs are designed to teach you from the ground up.',
    },
    {
      question: 'What should I wear to my first class?',
      answer: 'For your first class, wear comfortable athletic clothing (t-shirt and shorts or sweatpants). Once you decide to continue, we can help you get your gi (uniform).',
    },
    {
      question: 'How often should I train?',
      answer: 'We recommend 2-3 times per week for beginners. As you progress, you can train as often as you like. Consistency is key!',
    },
    {
      question: 'Is BJJ safe for kids?',
      answer: 'Yes! BJJ is one of the safest martial arts. Our kids programs emphasize controlled technique, supervision, and safety at all times.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/10 via-background to-background -z-10" />
        
        <div className="container mx-auto px-6 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-5 sm:space-y-8"
            >
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
                  <span className="block">Build Confidence.</span>
                  <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-[var(--accent-primary)] via-cyan-400 to-[var(--accent-primary)] bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                    Train With Purpose.
                  </span>
                </h1>
                <p className="text-sm sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                  Discover Brazilian Jiu-Jitsu at Whitby's premier training facility. 
                  Build fitness, confidence, and self-defense skills in a welcoming community.
                </p>
              </div>

              <div className="flex flex-row gap-3 sm:gap-4">
                <Button 
                  size="md" 
                  onClick={() => setTrialModalOpen(true)}
                  className="group text-xs sm:text-base px-3 py-2 sm:px-6 sm:py-3"
                >
                  Book a Free Trial
                  <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="md" 
                  variant="outline"
                  onClick={() => window.location.href = '/schedule'}
                  className="text-xs sm:text-base px-3 py-2 sm:px-6 sm:py-3"
                >
                  View Schedule
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1542937307-973ad1f0b10f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBqaXUlMjBqaXRzdSUyMHRyYWluaW5nfGVufDF8fHx8MTc3MDgyMTkwMXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="BJJ Training"
                  className="w-full h-[280px] sm:h-[350px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="border-y border-border bg-muted/30">
        <div className="container mx-auto px-6 sm:px-6 lg:px-8 py-5 sm:py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { icon: Users, label: 'Beginner Friendly' },
              { icon: Users, label: 'Kids Programs' },
              { icon: Users, label: "Women's Classes" },
              { icon: Clock, label: 'Flexible Schedule' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 justify-center">
                <item.icon className="w-6 h-6 text-[var(--accent-primary)]" />
                <span className="font-medium text-sm sm:text-base">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="container mx-auto px-6 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Choose Your Program
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground">
            We offer specialized programs for every age and skill level
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {programs.map((program, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card hover className="h-full flex flex-col">
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{program.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {program.description}
                  </p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 flex-1">
                    {program.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-[var(--accent-primary)] flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={program.path}>
                    <Button variant="outline" className="w-full text-sm">
                      Explore Program
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why DNA BJJ */}
      <section className="bg-muted/30 py-12 sm:py-16 lg:py-32">
        <div className="container mx-auto px-6 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Why Train at Team DNA BJJ?
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground">
              More than just a gym – we're a community dedicated to your growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center mb-3 sm:mb-4">
                      <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--accent-primary)]" />
                    </div>
                    <h3 className="text-base sm:text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{benefit.description}</p>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Getting Started is Easy
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground">
            Three simple steps to begin your BJJ journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {[
            {
              number: '01',
              title: 'Choose Your Program',
              description: 'Select the program that fits your age and goals',
            },
            {
              number: '02',
              title: 'Book Your Free Trial',
              description: 'Experience a real class with no commitment',
            },
            {
              number: '03',
              title: 'Step on the Mat',
              description: 'Start training and see results from day one',
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-[var(--accent-primary)] text-white text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">{step.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{step.description}</p>
              </div>
              {i < 2 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -z-10" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button size="md" onClick={() => setTrialModalOpen(true)} className="text-xs sm:text-base px-3 py-2 sm:px-6 sm:py-3">
            Start Your Journey Today
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/30 py-12 sm:py-16 lg:py-32">
        <div className="container mx-auto px-6 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              What Our Students Say
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground">
              Real results from real students
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--accent-primary)]/20 mb-3 sm:mb-4" />
                    <div className="flex gap-1 mb-3 sm:mb-4">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[var(--accent-primary)] text-[var(--accent-primary)]" />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">"{testimonial.text}"</p>
                    <div>
                      <p className="text-sm sm:text-base font-semibold">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.program}</p>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="container mx-auto px-6 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <Accordion.Item key={i} value={`item-${i}`}>
                <Card>
                  <Accordion.Trigger className="flex w-full items-center justify-between p-4 sm:p-6 text-left text-sm sm:text-base font-semibold hover:no-underline group">
                    {faq.question}
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-data-[state=open]:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Accordion.Trigger>
                  <Accordion.Content className="px-4 pb-4 sm:px-6 sm:pb-6 text-sm sm:text-base text-muted-foreground">
                    {faq.answer}
                  </Accordion.Content>
                </Card>
              </Accordion.Item>
            ))}
          </Accordion.Root>

          <div className="text-center mt-6 sm:mt-8">
            <Link to="/faq">
              <Button variant="outline" className="text-xs sm:text-sm">View All FAQs</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-primary-hover)]" />
        <div className="relative container mx-auto px-6 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-32 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-5 sm:space-y-8"
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
              Ready to Start Your Journey?
            </h2>
            <p className="text-sm sm:text-xl text-white/90">
              Join the Team DNA BJJ family today and discover what you're truly capable of.
            </p>
            <div className="flex flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                size="md" 
                variant="secondary"
                onClick={() => setTrialModalOpen(true)}
                className="bg-white text-[var(--accent-primary)] hover:bg-white/90 text-xs sm:text-base px-3 py-2 sm:px-6 sm:py-3"
              >
                Book Your Free Trial
              </Button>
              <Button 
                size="md" 
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-xs sm:text-base px-3 py-2 sm:px-6 sm:py-3"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <TrialModal open={trialModalOpen} onOpenChange={setTrialModalOpen} />
    </div>
  );
}