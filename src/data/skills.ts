export interface SkillGroup {
  title: string;
  summary: string;
  skills: string[];
  projectSlug: string;
  projectLabel: string;
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Design & UX Architecture',
    summary: 'Shape product direction, visual language, and the systems that help teams build consistently.',
    skills: [
      'Figma', 'Adobe Creative Suite', 'Canva', 'DaVinci Resolve', 'CapCut',
      'Art direction', 'Creative strategy', 'Editorial design', 'Brand systems', 'Print production',
      'Team coordination', 'Client presentations',
    ],
    projectSlug: 'accelera',
    projectLabel: 'See design leadership at Accelera',
  },
  {
    title: 'UX Methodologies',
    summary: 'Move from a user problem to a clear journey, tested structure, and detailed interaction.',
    skills: [
      'User Flows', 'Wireframing', 'Prototyping', 'Design Systems Architecture',
      'Component Libraries', 'Design Tokens', 'Usability Testing',
      'Mobile/Web Responsive Design', 'Storyboarding', 'Brand Identity',
      'Information architecture', 'Content strategy', 'Accessibility',
      'Design-to-development handoff',
    ],
    projectSlug: 'malawian-fish-room',
    projectLabel: 'See the client website process',
  },
  {
    title: 'Core Engineering Languages',
    summary: 'Work directly with implementation so design decisions can survive the build.',
    skills: ['JavaScript', 'TypeScript', 'C#', 'C++', 'Rust', 'HTML5', 'SQL', 'CSS'],
    projectSlug: 'hubbit',
    projectLabel: 'See HubBit',
  },
  {
    title: 'Frameworks & Cloud Infrastructure',
    summary: 'Build connected digital products across frontend, data, deployment, and integrations.',
    skills: [
      'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Supabase', 'Vercel',
      'Docker', 'Git', 'Cursor', 'PostgreSQL', 'Cloudflare Workers',
      'Cloudflare D1', 'GitHub Pages', 'Stripe integrations',
    ],
    projectSlug: 'kitchen-navigator',
    projectLabel: 'See Kitchen Navigator',
  },
  {
    title: 'Content, Publishing & Delivery',
    summary: 'Give ideas a voice and carry them through production, publishing, and client communication.',
    skills: [
      'Editorial direction', 'Writing & editing', 'Publication design',
      'Newsletter production', 'Campaign design', 'Video production',
      'SEO foundations', 'Project planning', 'Client communication', 'Quality assurance',
      'Training manuals', 'Scriptwriting', 'Funding research',
    ],
    projectSlug: 'among-the-letters',
    projectLabel: 'See Among the Letters',
  },
  {
    title: 'Android & Local AI',
    summary: 'Design and build mobile experiences that make model choice, device limits, and privacy controls visible.',
    skills: ['Kotlin', 'Jetpack Compose', 'Android', 'Room', 'DataStore', 'JNI', 'GGUF', 'llama.cpp', 'Android Keystore', 'On-device inference'],
    projectSlug: 'maidol',
    projectLabel: 'See Maidol',
  },
];
