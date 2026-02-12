export interface Coach {
  name: string;
  role: string;
  bio: string;
  special?: string[];
  accomplishments?: string[];
}

export const coaches: Coach[] = [
  {
    name: "Professor Dainis Nguyen-Huu",
    role: "Head Coach",
    bio: "Accomplished head coach with extensive experience in both judo and Brazilian Jiu-Jitsu. Breaks down complex techniques into simple steps and focuses on personalized instruction and student growth.",
    special: [
      "Instructor on BJJ Fanatics 'Foot Sweep the World'",
      "Sponsored Athlete - Lu Strength & Therapy",
      "Sponsored Athlete - Cauliflower and Co."
    ],
    accomplishments: [
      "21× IBJJF Open Champion",
      "6× Canada National Pro Champion",
      "9× Ontario Open Champion",
      "8× OJA Provincial Champion (Gi/Nogi)",
      "4× Quebec Open Champion (Gi/Nogi)",
      "Ace Middle Weight Grand Prix Champion",
      "2× IBJJF No-Gi Pan Bronze Medalist",
      "IBJJF World Masters Bronze Medalist",
      "Abu Dhabi World Pro Bronze Medalist"
    ]
  },
  {
    name: "Coach Sarah",
    role: "Coach",
    bio: "Warm and understanding coach who excels at working with kids, creating a supportive, fun environment for youth development."
  },
  {
    name: "Coach Bill",
    role: "Coach",
    bio: "Patient and passionate coach who nurtures kids, builds confidence, and keeps learning fun."
  },
  {
    name: "Coach Scott",
    role: "Coach",
    bio: "Dedicated coach committed to student growth, skill improvement, and mentorship on and off the mats."
  },
  {
    name: "Coach Ti",
    role: "Coach",
    bio: "Compassionate and results-driven coach who breaks down skills into manageable steps in a positive learning environment."
  },
  {
    name: "Eesa",
    role: "BJJ Instructor (No-Gi Specialist)",
    bio: "Skilled no-gi instructor with a friendly teaching style focused on clarity, technique, and student progress."
  }
];
