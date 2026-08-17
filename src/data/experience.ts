export interface ExperienceItem {
  dates: string;
  title: string;
  company: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    dates: '2019 – Present',
    title: 'Freelance Designer & Developer',
    company: 'Independent',
    bullets: [
      'Contract Design & Strategy: Executed a multitude of contract roles for small businesses, managing various forms of design, event marketing, video production, and technical web consulting.',
      'The Malawian Fish Room (2026): Architected and executed the end-to-end digital and print presence for a specialized breeder transitioning to retail. Delivered a custom responsive website featuring product catalogs and SEO optimization, alongside a print campaign consisting of flyer design, brand voice establishment, and press-ready artwork. - www.themalawianfishroom.ca',
    ],
  },
  {
    dates: '2021 – 2024',
    title: 'Design Lead',
    company: 'Accelera / Root',
    bullets: [
      'Served as sole designer and design lead across multiple applications, owning the full lifecycle from user discovery and flows to building reusable component libraries and interactive, high-fidelity prototypes.',
      'Designed and optimized business-critical product flows; including secure login/verification systems, complex onboarding experiences, and highly customizable user dashboards.',
      'Established comprehensive visual design systems and style guides, defining typography, color, spacing, and interaction patterns to ensure a consistent plus streamlined design-to-development workflow.',
      "Single-handedly built and scaled the company's online presence, managing end-to-end video production, channel branding, scriptwriting, and visual storytelling; achieving over 60,000 views on showcase content.",
    ],
  },
  {
    dates: '2020 – 2021',
    title: 'Frontend Developer',
    company: 'Accelera / Root',
    bullets: [
      'Designed, wireframed, and coded responsive web pages and application interfaces within a collaborative full-stack start-up environment.',
      'Bridged design intent with engineering execution using a technical stack including React, Java, CSS, and Rust.',
      'Contributed to cross-functional testing and QA workflows to guarantee visual consistency and interface performance.',
    ],
  },
  {
    dates: '2019 – 2022',
    title: 'Foreman / Lead Hand',
    company: 'Seal It (Concrete Sealing)',
    bullets: [
      'Progressed from General Laborer to Foreman based on operational excellence, site leadership, and project execution quality.',
      'Directly managed field crews, oversaw on-site operations, and served as the primary head of worksites to guarantee strict quality assurance and high client satisfaction.',
      'Trained, mentored, and onboarded new employees in corporate technical procedures, professional service standards, and strict on-site safety protocols.',
    ],
  },
];

export const profile = `Multi-disciplined Senior Designer with 5+ years of professional experience along with over a decade of diverse creative and technical practice. Proven expertise directing complete product design; transforming complex concepts into intuitive user flows, comprehensive design systems, high-fidelity prototypes, and shipped digital products. Great at combining deep technical frontend fluency with a strong visual and logical vision to bridge the gap between design and development, working effectively both alone or within teams.`;

export const aboutProcess = [
  { step: '01', title: 'Discovery', body: 'Understand goals, users, constraints, and success criteria before pixels hit the screen.' },
  { step: '02', title: 'Flows & Wireframes', body: 'Map journeys, validate structure, and iterate quickly on layout and hierarchy.' },
  { step: '03', title: 'Design System', body: 'Establish typography, colour, spacing, and components that scale with the product.' },
  { step: '04', title: 'Prototype & Ship', body: 'High-fidelity interactive prototypes to production-ready implementations.' },
];
