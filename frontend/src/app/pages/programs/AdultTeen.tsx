import React from 'react';
import { ProgramTemplate } from '../ProgramTemplate';
import { Dumbbell, Brain, Trophy, Heart } from 'lucide-react';

export function AdultTeen() {
  const programData = {
    title: 'Adult & Teen Program',
    ageRange: 'Ages 14+',
    tagline: 'Transform Your Body, Mind, and Spirit',
    description: 'Our flagship program offers complete Brazilian Jiu-Jitsu training for teens and adults. Whether your goal is fitness, self-defense, competition, or personal growth, we provide the tools and community to help you succeed.',
    image: 'https://images.unsplash.com/photo-1542937307-973ad1f0b10f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBqaXUlMjBqaXRzdSUyMHRyYWluaW5nfGVufDF8fHx8MTc3MDgyMTkwMXww&ixlib=rb-4.1.0&q=80&w=1080',
    whatYouLearn: [
      'Complete BJJ fundamentals',
      'Advanced techniques and strategies',
      'Self-defense applications',
      'Competition training',
      'Gi and No-Gi techniques',
      'Takedowns and wrestling',
      'Guard work and passing',
      'Submissions and escapes',
      'Position control and transitions',
      'Live sparring (rolling)',
      'Competition preparation',
      'Mental game and strategy',
    ],
    benefits: [
      {
        icon: Dumbbell,
        title: 'Total Fitness',
        description: 'Full-body workout that builds strength, cardio, and flexibility',
      },
      {
        icon: Brain,
        title: 'Mental Clarity',
        description: 'Reduce stress and improve focus through physical challenge',
      },
      {
        icon: Trophy,
        title: 'Competition Path',
        description: 'Structured training for those pursuing tournament success',
      },
      {
        icon: Heart,
        title: 'Community',
        description: 'Join a supportive team that becomes like family',
      },
    ],
    whoItsFor: [
      'Complete beginners',
      'Experienced grapplers',
      'Fitness enthusiasts',
      'Self-defense seekers',
      'Competition athletes',
      'Stress relief',
      'Personal growth',
      'Making connections',
    ],
    schedule: [
      { day: 'Monday', time: '6:30 PM - 8:00 PM' },
      { day: 'Tuesday', time: '7:00 PM - 8:30 PM' },
      { day: 'Wednesday', time: '6:30 PM - 8:00 PM' },
      { day: 'Thursday', time: '7:00 PM - 8:30 PM' },
      { day: 'Friday', time: '6:30 PM - 8:00 PM' },
      { day: 'Saturday', time: '12:00 PM - 1:30 PM' },
    ],
    pricing: {
      monthly: '$149',
      sixMonth: '$139/mo',
      yearly: '$129/mo',
    },
  };

  return <ProgramTemplate data={programData} />;
}
