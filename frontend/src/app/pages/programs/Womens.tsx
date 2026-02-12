import React from 'react';
import { ProgramTemplate } from '../ProgramTemplate';
import { Heart, Shield, Users, Sparkles } from 'lucide-react';

export function Womens() {
  const programData = {
    title: "Women's Program",
    ageRange: 'Women 14+',
    tagline: 'Empowerment Through Skill and Community',
    description: 'Our women-focused program provides a supportive, empowering environment to learn Brazilian Jiu-Jitsu. Build confidence, strength, and practical self-defense skills while connecting with an amazing community of women.',
    image: 'https://images.unsplash.com/photo-1703231528310-162c7ba654fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMG1hcnRpYWwlMjBhcnRzJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzcwODY0ODUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    whatYouLearn: [
      'BJJ fundamentals tailored for women',
      'Practical self-defense techniques',
      'Situational awareness',
      'Escape tactics and strategies',
      'Position control and leverage',
      'Building physical strength',
      'Mental confidence building',
      'Competition training (optional)',
      'Women-specific techniques',
      'Community and support systems',
      'Stress relief through training',
      'Goal achievement mindset',
    ],
    benefits: [
      {
        icon: Shield,
        title: 'Self-Defense',
        description: 'Learn effective techniques designed for real-world situations',
      },
      {
        icon: Heart,
        title: 'Empowerment',
        description: 'Build unshakeable confidence in yourself and your abilities',
      },
      {
        icon: Users,
        title: 'Sisterhood',
        description: 'Connect with supportive women on the same journey',
      },
      {
        icon: Sparkles,
        title: 'Transformation',
        description: 'Experience physical and mental growth you never thought possible',
      },
    ],
    whoItsFor: [
      'Complete beginners welcome',
      'All fitness levels',
      'Self-defense focused',
      'Building confidence',
      'Supportive environment',
      'Female empowerment',
      'Fitness goals',
      'Making connections',
    ],
    schedule: [
      { day: 'Tuesday', time: '6:00 PM - 7:00 PM' },
      { day: 'Thursday', time: '6:00 PM - 7:00 PM' },
      { day: 'Saturday', time: '9:00 AM - 10:00 AM' },
    ],
    pricing: {
      monthly: '$129',
      sixMonth: '$119/mo',
      yearly: '$109/mo',
    },
  };

  return <ProgramTemplate data={programData} />;
}
