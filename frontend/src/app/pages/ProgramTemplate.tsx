import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Clock, Users, Award, Calendar } from 'lucide-react';
import { Button } from '../components/Button';
import { Card, CardContent, CardHeader } from '../components/Card';
import { Chip } from '../components/Chip';
import { TrialModal } from '../components/TrialModal';

interface ProgramData {
  title: string;
  ageRange: string;
  tagline: string;
  description: string;
  image: string;
  whatYouLearn: string[];
  benefits: Array<{ icon: React.ElementType; title: string; description: string }>;
  whoItsFor: string[];
  schedule: Array<{ day: string; time: string }>;
  pricing: { monthly: string; sixMonth: string; yearly: string };
}

export function ProgramTemplate({ data }: { data: ProgramData }) {
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/10 via-background to-background -z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <Chip variant="primary">{data.ageRange}</Chip>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  {data.title}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {data.tagline}
                </p>
                <p className="text-lg text-muted-foreground">
                  {data.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => setTrialModalOpen(true)}>
                  Book a Free Trial
                </Button>
                <Button size="lg" variant="outline" onClick={() => window.location.href = '/schedule'}>
                  View Schedule
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-[400px] lg:h-[600px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What You'll Learn</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive curriculum designed for {data.ageRange.toLowerCase()} students
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.whatYouLearn.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-muted/30"
            >
              <CheckCircle className="w-5 h-5 text-[var(--accent-primary)] flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-muted/30 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Program Benefits</h2>
            <p className="text-lg text-muted-foreground">
              Beyond technique – holistic development for every student
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-[var(--accent-primary)]" />
                    </div>
                    <h3 className="font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Who Is This Program For?</h2>
          <p className="text-lg text-muted-foreground">
            Perfect for students looking to achieve their goals
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {data.whoItsFor.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Chip variant="primary" size="md">{item}</Chip>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Schedule & Pricing */}
      <section className="bg-muted/30 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Schedule */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-6 h-6 text-[var(--accent-primary)]" />
                    <h3 className="text-2xl font-bold">Class Schedule</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">Regular class times for this program</p>
                  <div className="space-y-3">
                    {data.schedule.map((slot, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                        <span className="font-medium">{slot.day}</span>
                        <span className="text-muted-foreground">{slot.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button variant="outline" className="w-full" onClick={() => window.location.href = '/schedule'}>
                      View Full Schedule
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-6 h-6 text-[var(--accent-primary)]" />
                    <h3 className="text-2xl font-bold">Membership Options</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">Flexible pricing to fit your needs</p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                      <div>
                        <p className="font-medium">Monthly</p>
                        <p className="text-sm text-muted-foreground">No commitment</p>
                      </div>
                      <span className="text-2xl font-bold">{data.pricing.monthly}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-xl bg-[var(--accent-primary)]/10 border-2 border-[var(--accent-primary)]">
                      <div>
                        <p className="font-medium">6 Months</p>
                        <p className="text-sm text-[var(--accent-primary)]">Most Popular</p>
                      </div>
                      <span className="text-2xl font-bold">{data.pricing.sixMonth}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                      <div>
                        <p className="font-medium">Yearly</p>
                        <p className="text-sm text-muted-foreground">Best value</p>
                      </div>
                      <span className="text-2xl font-bold">{data.pricing.yearly}</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button variant="outline" className="w-full" onClick={() => window.location.href = '/pricing'}>
                      View All Pricing
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground">
            Book your free trial class today and experience the difference
          </p>
          <Button size="lg" onClick={() => setTrialModalOpen(true)}>
            Book Your Free Trial
          </Button>
        </motion.div>
      </section>

      <TrialModal open={trialModalOpen} onOpenChange={setTrialModalOpen} />
    </div>
  );
}
