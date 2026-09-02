export const site = {
  name: 'Christian Winsor',
  title: 'Senior Designer',
  tagline: 'Multidisciplinary creative lead who can move from strategy and concept through UX, Visual design, development, client communication, and delivery. Experienced leading while bridging creative and technical teams to create thoughtful products.',
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
      { label: 'Pawn Stars', to: '/projects/pawn-stars' },
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
