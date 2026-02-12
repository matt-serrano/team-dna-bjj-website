import React from 'react';
import { ProgramTemplate } from '../ProgramTemplate';
import { Shield, Target, Trophy, Zap } from 'lucide-react';

export function Kids8to13() {
  const programData = {
    title: 'Kids Program (8-13 Years)',
    ageRange: 'Ages 8-13',
    tagline: 'Developing Skills, Character, and Champions',
    description: 'Our advanced kids program builds on fundamentals with more complex techniques, self-defense applications, and optional competition training. Perfect for developing well-rounded young martial artists.',
    image: 'https://images.unsplash.com/photo-1769095207072-0c84d9b7b9ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGtpZHMlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NzA4NjQ4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    whatYouLearn: [
      'Advanced BJJ techniques',
      'Self-defense applications',
      'Competition strategies',
      'Takedowns and throws',
      'Guard passes and submissions',
      'Escapes and defense',
      'Position control',
      'Rolling (sparring) fundamentals',
      'Anti-bullying tactics',
      'Mental toughness',
      'Goal setting and achievement',
      'Leadership skills',
    ],
    benefits: [
      {
        icon: Shield,
        title: 'Self-Defense',
        description: 'Learn practical techniques to defend themselves effectively',
      },
      {
        icon: Target,
        title: 'Focus & Discipline',
        description: 'Develop concentration and mental resilience',
      },
      {
        icon: Trophy,
        title: 'Competition Ready',
        description: 'Optional tournament training for those interested',
      },
      {
        icon: Zap,
        title: 'Physical Fitness',
        description: 'Build strength, flexibility, and endurance',
      },
    ],
    whoItsFor: [
      'All skill levels',
      'Anti-bullying training',
      'Competition interested',
      'Building discipline',
      'Physical fitness',
      'Self-defense skills',
      'Character development',
      'Leadership training',
    ],
    schedule: [
      { day: 'Monday', time: '5:30 PM - 6:30 PM' },
      { day: 'Wednesday', time: '5:30 PM - 6:30 PM' },
      { day: 'Friday', time: '5:30 PM - 6:30 PM' },
      { day: 'Saturday', time: '11:00 AM - 12:00 PM' },
    ],
    pricing: {
      monthly: '$119',
      sixMonth: '$109/mo',
      yearly: '$99/mo',
    },
  };

  return <ProgramTemplate data={programData} />;
}
