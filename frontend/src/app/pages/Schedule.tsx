import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, Users, Calendar } from 'lucide-react';
import { Button } from '../components/Button';
import { Card, CardContent, CardHeader } from '../components/Card';
import { Chip } from '../components/Chip';
import { TrialModal } from '../components/TrialModal';
import * as Tabs from '@radix-ui/react-tabs';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const SCHEDULE_DATA = {
  Monday: [
    { time: '4:30 PM - 5:15 PM', program: 'Kids (5-8)', level: 'All Levels', instructor: 'Coach Maria' },
    { time: '5:30 PM - 6:30 PM', program: 'Kids (8-13)', level: 'All Levels', instructor: 'Coach James' },
    { time: '6:30 PM - 8:00 PM', program: 'Adult & Teen', level: 'All Levels', instructor: 'Coach Carlos' },
  ],
  Tuesday: [
    { time: '6:00 PM - 7:00 PM', program: 'Women\'s Program', level: 'All Levels', instructor: 'Coach Maria' },
    { time: '7:00 PM - 8:30 PM', program: 'Adult & Teen', level: 'Advanced', instructor: 'Coach Carlos' },
  ],
  Wednesday: [
    { time: '4:30 PM - 5:15 PM', program: 'Kids (5-8)', level: 'All Levels', instructor: 'Coach Maria' },
    { time: '5:30 PM - 6:30 PM', program: 'Kids (8-13)', level: 'All Levels', instructor: 'Coach James' },
    { time: '6:30 PM - 8:00 PM', program: 'Adult & Teen', level: 'Fundamentals', instructor: 'Coach James' },
  ],
  Thursday: [
    { time: '6:00 PM - 7:00 PM', program: 'Women\'s Program', level: 'All Levels', instructor: 'Coach Maria' },
    { time: '7:00 PM - 8:30 PM', program: 'Adult & Teen', level: 'All Levels', instructor: 'Coach Carlos' },
  ],
  Friday: [
    { time: '5:30 PM - 6:30 PM', program: 'Kids (8-13)', level: 'All Levels', instructor: 'Coach James' },
    { time: '6:30 PM - 8:00 PM', program: 'Adult & Teen', level: 'Open Mat', instructor: 'All Coaches' },
  ],
  Saturday: [
    { time: '9:00 AM - 10:00 AM', program: 'Women\'s Program', level: 'All Levels', instructor: 'Coach Maria' },
    { time: '10:00 AM - 10:45 AM', program: 'Kids (5-8)', level: 'All Levels', instructor: 'Coach Maria' },
    { time: '11:00 AM - 12:00 PM', program: 'Kids (8-13)', level: 'All Levels', instructor: 'Coach James' },
    { time: '12:00 PM - 1:30 PM', program: 'Adult & Teen', level: 'All Levels', instructor: 'Coach Carlos' },
  ],
  Sunday: [
    { time: '10:00 AM - 11:30 AM', program: 'Adult & Teen', level: 'Open Mat', instructor: 'All Coaches' },
  ],
};

export function Schedule() {
  const [activeDay, setActiveDay] = useState('Monday');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  const filters = ['Kids', 'Adult', 'Women\'s'];

  const filteredClasses = SCHEDULE_DATA[activeDay as keyof typeof SCHEDULE_DATA].filter(cls => {
    if (!activeFilter) return true;
    return cls.program.toLowerCase().includes(activeFilter.toLowerCase());
  });

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
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">Class Schedule</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Find Your Perfect Class Time
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Multiple classes throughout the week to fit your schedule
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          <Chip
            variant="outline"
            active={!activeFilter}
            onClick={() => setActiveFilter(null)}
            className="cursor-pointer"
          >
            All Classes
          </Chip>
          {filters.map((filter) => (
            <Chip
              key={filter}
              variant="outline"
              active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className="cursor-pointer"
            >
              {filter}
            </Chip>
          ))}
        </div>
      </section>

      {/* Schedule */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Tabs.Root value={activeDay} onValueChange={setActiveDay}>
          {/* Day Tabs */}
          <Tabs.List className="flex gap-2 overflow-x-auto pb-4 mb-8 border-b border-border">
            {DAYS.map((day) => (
              <Tabs.Trigger
                key={day}
                value={day}
                className="px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap data-[state=active]:bg-[var(--accent-primary)] data-[state=active]:text-white hover:bg-accent"
              >
                {day}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {/* Day Content */}
          {DAYS.map((day) => (
            <Tabs.Content key={day} value={day}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {filteredClasses.length > 0 ? (
                  filteredClasses.map((cls, i) => (
                    <Card key={i} hover>
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                          <div className="flex-1 space-y-3">
                            <div className="flex items-start gap-3">
                              <Clock className="w-5 h-5 text-[var(--accent-primary)] mt-1 flex-shrink-0" />
                              <div>
                                <h3 className="text-lg font-bold">{cls.program}</h3>
                                <p className="text-muted-foreground">{cls.time}</p>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <Chip variant="primary" size="sm">{cls.level}</Chip>
                              <Chip variant="default" size="sm">
                                <Users className="w-3 h-3" />
                                {cls.instructor}
                              </Chip>
                            </div>
                          </div>
                          <Button onClick={() => setTrialModalOpen(true)}>
                            Book Trial
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card>
                    <CardContent className="p-12 text-center text-muted-foreground">
                      No classes match your filter for {day}
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </section>

      {/* CTA */}
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
              Can't Find a Time That Works?
            </h2>
            <p className="text-lg text-muted-foreground">
              Contact us to discuss flexible scheduling options or private training
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => setTrialModalOpen(true)}>
                Book a Free Trial
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = '/contact'}>
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
