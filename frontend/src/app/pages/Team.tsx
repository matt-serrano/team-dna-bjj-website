import React from 'react';
import { motion } from 'motion/react';
import { Users } from 'lucide-react';
import { Card, CardHeader } from '../components/Card';
import { CoachCard } from '../components/CoachCard';
import { coaches } from '../../data/coaches';

export function Team() {
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
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Our Coaching Team</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Meet Our Coaches
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Experienced instructors dedicated to your growth on and off the mats.
            </p>
          </motion.div>
        </div>
      </section>

      {/* All Coaches Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {coaches.map((coach, i) => (
            <CoachCard
              key={coach.name}
              {...coach}
              isHeadCoach={coach.role === "Head Coach"}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Coaching Philosophy
            </h2>
            <p className="text-lg text-muted-foreground">
              We believe in developing not just skilled martial artists, but confident, disciplined individuals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Student-Centered',
                description: 'Every student receives personalized attention and guidance tailored to their goals and learning style.',
              },
              {
                title: 'Technical Excellence',
                description: 'We maintain the highest standards of BJJ instruction with proven techniques and methodologies.',
              },
              {
                title: 'Supportive Community',
                description: 'Our coaches foster an environment where everyone feels welcomed, respected, and encouraged to grow.',
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
