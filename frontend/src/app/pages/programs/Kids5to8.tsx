import React from 'react';
import { ProgramTemplate } from '../ProgramTemplate';
import { Heart, Users, Award, TrendingUp } from 'lucide-react';

export function Kids5to8() {
  const programData = {
    title: 'Kids Program (5-8 Years)',
    ageRange: 'Ages 5-8',
    tagline: 'Building Foundations Through Fun and Discipline',
    description: 'Our youngest program introduces children to Brazilian Jiu-Jitsu through engaging, age-appropriate activities that develop coordination, confidence, and social skills in a safe, supportive environment.',
    image: 'https://images.unsplash.com/photo-1769095207072-0c84d9b7b9ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGtpZHMlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NzA4NjQ4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    whatYouLearn: [
      'Basic positions and movements',
      'Body awareness and coordination',
      'Following instructions and discipline',
      'Respect for instructors and peers',
      'Basic self-defense concepts',
      'Balance and motor skills',
      'Teamwork and cooperation',
      'Confidence building exercises',
      'Fun games with martial arts principles',
    ],
    benefits: [
      {
        icon: Heart,
        title: 'Confidence',
        description: 'Build self-esteem through achievement and positive reinforcement',
      },
      {
        icon: Users,
        title: 'Social Skills',
        description: 'Learn to interact positively with peers in a structured setting',
      },
      {
        icon: Award,
        title: 'Discipline',
        description: 'Develop focus and the ability to follow directions',
      },
      {
        icon: TrendingUp,
        title: 'Physical Development',
        description: 'Improve coordination, balance, and overall fitness',
      },
    ],
    whoItsFor: [
      'Beginner-friendly',
      'Active kids',
      'Shy or timid children',
      'Kids needing structure',
      'Children who love games',
      'Building confidence',
      'Making new friends',
    ],
    schedule: [
      { day: 'Monday', time: '4:30 PM - 5:15 PM' },
      { day: 'Wednesday', time: '4:30 PM - 5:15 PM' },
      { day: 'Saturday', time: '10:00 AM - 10:45 AM' },
    ],
    pricing: {
      monthly: '$99',
      sixMonth: '$89/mo',
      yearly: '$79/mo',
    },
  };

  return <ProgramTemplate data={programData} />;
}
