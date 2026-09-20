export const site = {
  name: 'Christian Winsor',
  title: 'Senior Designer',
  tagline: 'I turn complex ideas into clear experiences, building the strategy, visual language, and working product that carry an idea from concept through launch.',
  location: 'London, Ontario',
  email: 'Christianwinsor@gmail.com',
  phone: '(519) 281-4318',
  openToWork: true,
  copyright: `© ${new Date().getFullYear()} Christian Winsor`,
} as const;

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Projects',
    to: '/projects',
    children: [
      { label: 'All Projects', to: '/projects' },
      { label: 'Malawian Fish Room', to: '/projects/malawian-fish-room' },
      { label: 'Among the Letters', to: '/projects/among-the-letters' },
      { label: 'Kitchen Navigator', to: '/projects/kitchen-navigator' },
      { label: 'Maidol', to: '/projects/maidol' },
      { label: 'HubBit', to: '/projects/hubbit' },
      { label: 'Gallery', to: '/gallery' },
    ],
  },
  { label: 'Services', to: '/services' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' },
] as const;

export const footerLinks = [
  { label: 'Projects', to: '/projects' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Services', to: '/services' },
  { label: 'Resume', to: '/resume' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const;
