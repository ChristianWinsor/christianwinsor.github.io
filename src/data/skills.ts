export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Design & UX Architecture',
    skills: ['Figma', 'Adobe Creative Suite', 'Canva', 'DaVinci Resolve', 'CapCut'],
  },
  {
    title: 'UX Methodologies',
    skills: [
      'User Flows',
      'Wireframing',
      'Prototyping',
      'Design Systems Architecture',
      'Component Libraries',
      'Design Tokens',
      'Usability Testing',
      'Mobile/Web Responsive Design',
      'Storyboarding',
      'Brand Identity',
    ],
  },
  {
    title: 'Core Engineering Languages',
    skills: ['JavaScript', 'TypeScript', 'C#', 'C++', 'Rust', 'HTML5', 'SQL'],
  },
  {
    title: 'Frameworks & Cloud Infrastructure',
    skills: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Supabase', 'Vercel', 'Docker', 'Git', 'Cursor'],
  },
];
