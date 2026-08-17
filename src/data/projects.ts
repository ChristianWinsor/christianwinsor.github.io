export type ProjectType = 'client' | 'personal' | 'professional';
export type ProjectStatus = 'shipped' | 'live' | 'archived';

export interface ProjectSection {
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  timeline: string;
  status: ProjectStatus;
  type: ProjectType;
  featured: boolean;
  tags: string[];
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  heroImage: string;
  cardDescription: string;
  overview: string;
  challenge: string[];
  solution: string[];
  deliverables: string[];
  sections?: ProjectSection[];
  techStack: string[];
  nextProject?: string;
}

export const projects: Project[] = [
  {
    slug: 'malawian-fish-room',
    title: 'The Malawian Fish Room',
    subtitle: 'Premium African cichlid breeder with a full website, catalog, SEO, and print marketing',
    role: 'Sole Designer & Developer',
    timeline: '2026',
    status: 'shipped',
    type: 'client',
    featured: true,
    tags: ['Client work', 'Next.js', 'Print design'],
    stack: ['Next.js', 'Tailwind', 'Vercel', 'Print design'],
    liveUrl: 'https://www.themalawianfishroom.ca',
    repoUrl: 'https://github.com/TheMalawianFishRoom/MalawianFishRoomWebsite',
    heroImage: '/projects/malawian-fish-room/malawianfishroom_website_screenshot.png',
    cardDescription:
      'Custom website + print collateral for an Ontario cichlid breeder. Next.js, SEO, catalog system, print flier design.',
    overview:
      'The Malawian Fish Room is an Ontario-based African cichlid breeder transitioning from wholesale to retail. I served as the sole designer and developer, delivering a premium digital presence alongside a complete print advertising campaign.',
    challenge: [
      'Needed a premium digital presence reflecting the quality of their livestock and breeding operation.',
      'Inquiry-based sales model requiring a browsable catalog without full ecommerce checkout.',
      'Grand opening promotional support with print and digital marketing materials.',
      'Long-term scalability for inventory growth and future campaign integrations.',
    ],
    solution: [
      'Built a custom Next.js 16 application with React 19, TypeScript, and Tailwind CSS v4.',
      'Designed a JSON-driven fish catalog with search, filtering, product cards, and image lightbox.',
      'Implemented SEO infrastructure: dynamic sitemap, robots.txt, semantic metadata, and optimized routing.',
      'Created promotional homepage sections: hero slideshow, announcement bar, and marketing CTAs.',
      'Designed and delivered press-ready print fliers with brand voice and promotional styling.',
    ],
    deliverables: [
      'Custom responsive website with 33+ fish catalog entries',
      'Reusable component architecture (nav, footer, slideshow, FAQ, contact)',
      'SEO and discovery optimization',
      'Print flier design (digital & print ready)',
      'Brand-aligned promotional styling system',
    ],
    sections: [
      {
        title: 'Catalog & discovery',
        body: 'A searchable, filterable catalog lets hobbyists browse peacocks and haps by collection, size, and availability; with inquiry-based CTAs that match how the business actually sells.',
      },
      {
        title: 'Premium visual direction',
        body: 'Dark cinematic styling, strong typography, and high-contrast promotional sections reflect the quality of the livestock and the professionalism of the operation.',
      },
      {
        title: 'Print marketing',
        body: 'Grand opening fliers and promotional artwork extend the brand beyond the screen. Same voice, same premium feel, ready for distribution.',
      },
    ],
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'JSON catalog', 'Vercel'],
    nextProject: 'pawn-stars',
  },
  {
    slug: 'pawn-stars',
    title: 'Pawn Stars',
    subtitle: 'Website, branding, and promotional graphics for a trusted London, Ontario pawn shop',
    role: 'Sole Designer & Developer',
    timeline: '2025',
    status: 'live',
    type: 'client',
    featured: false,
    tags: ['Client work', 'Web design', 'Branding'],
    stack: ['HTML/CSS', 'Responsive web', 'Brand design', 'GitHub Pages'],
    liveUrl: 'https://pawnstarslondon.github.io/pawnstarslondon.ca/',
    heroImage: '/projects/pawn-stars/pawnstars_website_about.png',
    cardDescription:
      'Full website and graphic design for a local pawn shop-clear service pages, collections, loans, and brand-aligned marketing visuals.',
    overview:
      'Pawn Stars is a community-focused pawn shop on Hamilton Road in London, Ontario. I designed and built their public website and supporting graphic work so customers can quickly understand loans, inventory, location, and contact options-while the brand feels approachable, trustworthy, and local.',
    challenge: [
      'Translate an in-store, relationship-driven business into a clear digital presence without feeling corporate or impersonal.',
      'Surface multiple services-loans, buying, selling, and varied inventory-in a scannable structure for mobile visitors.',
      'Reinforce trust and neighbourhood credibility alongside promotional calls to action.',
      'Ship a maintainable site the client can host reliably without a heavy CMS or backend.',
    ],
    solution: [
      'Designed and developed a responsive multi-page site with dedicated sections for About, Collections, Loans, Gallery, and Contact.',
      'Structured homepage messaging around quick cash, featured inventory categories, social proof, and location details.',
      'Created brand-aligned visuals and layout patterns consistent with in-store marketing needs.',
      'Deployed as a static site on GitHub Pages for simple updates and dependable performance.',
    ],
    deliverables: [
      'Responsive marketing website (Home, About, Collections, Loans, Gallery, Contact)',
      'Navigation and mobile menu tuned for local customers on the go',
      'Promotional sections highlighting gold buying, loans, and featured inventory',
      'Contact and location blocks with phone, email, and Hamilton Road address',
      'Logo and graphic assets supporting web and brand presence',
    ],
    sections: [
      {
        title: 'Local trust, clear services',
        body: 'Copy and layout lead with what visitors need: fair loans, quality pre-owned goods, and a friendly team-backed by review ratings and neighbourhood positioning.',
      },
      {
        title: 'Collections & discovery',
        body: 'Featured collections and gallery-style sections showcase the breadth of inventory-from gold and jewelry to tools, games, and music equipment-without overwhelming the page.',
      },
      {
        title: 'Brand & graphics',
        body: 'Visual design ties the site to Pawn Stars’ identity: bold promotional blocks, gold-buying creative, and consistent typography that reads well on desktop and mobile.',
      },
    ],
    techStack: ['HTML', 'CSS', 'Responsive layout', 'GitHub Pages', 'Brand & graphic design'],
    nextProject: 'hubbit',
  },
  {
    slug: 'hubbit',
    title: 'HubBit',
    subtitle: 'An arcade of minigames such as chess and survival mode chess with accounts, economy, quests, leaderboards, and progression',
    role: 'Founder, Designer & Developer',
    timeline: '2025 – Present',
    status: 'live',
    type: 'personal',
    featured: true,
    tags: ['Personal project', 'Live', 'Full-stack'],
    stack: ['React', 'Supabase', 'Stripe', 'Stockfish'],
    liveUrl: 'https://hubbit-pi.vercel.app',
    heroImage: '/projects/hubbit/hubbit_cosmetics.png',
    cardDescription:
      'Chess survival arcade game. Full-stack: Supabase auth, Stripe payments, leaderboards, working chess engine.',
    overview:
      'HubBit is a browser-based chess arcade platform I designed and built from scratch. It includes standard chess and survival chess currently. Survival mode is a wave-based mode with token economy, piece purchasing, and custom rules. The website also includes a full account system, purchases, leaderboards, quests, and customization.',
    challenge: [
      'Build a polished chess experience with a reliable engine for both standard and custom game modes.',
      'Design progression systems like skins, quests, and rewards that keep players engaged across sessions.',
      'Ship production infrastructure: auth, database, payments, and leaderboards as a solo developer.',
    ],
    solution: [
      'Integrated Stockfish for standard chess and survival mode at the highest level, with a custom fallback engine built from scratch.',
      'Built full Supabase authentication and PostgreSQL-backed persistence for accounts, stats, and progression.',
      'Implemented Stripe for in-app purchases, custom piece and board skins, and account customization.',
      'Designed quest systems with rewards and rules, plus global leaderboards for competitive play.',
    ],
    deliverables: [
      'Standard chess with Stockfish engine',
      'Survival chess - waves, tokens, piece purchasing, custom rules',
      'User accounts, leaderboards, and quest system',
      'Purchases and cosmetic customization',
      'Ongoing development toward standalone survival game',
    ],
    sections: [
      {
        title: 'Standard chess',
        body: 'Full Stockfish-powered chess with a clean, responsive board UI designed for both casual and competitive play.',
      },
      {
        title: 'Survival chess',
        body: 'Wave-based piece combat with a token economy - purchase pieces, survive escalating waves, and push for high scores on the leaderboard.',
      },
      {
        title: 'Platform depth',
        body: 'Accounts, custom skins, quests with rewards, Stripe purchases, and profile customization. A full product, not just a game demo.',
      },
    ],
    techStack: ['React', 'Next.js', 'Supabase', 'PostgreSQL', 'Stripe', 'Stockfish', 'Custom chess engine'],
    nextProject: 'accelera',
  },
  {
    slug: 'accelera',
    title: 'Product Design - Accelera / Root',
    subtitle: 'Design leadership, design systems, and shipped application flows',
    role: 'Design Lead / Sole Designer',
    timeline: '2020 – 2024',
    status: 'archived',
    type: 'professional',
    featured: true,
    tags: ['Design leadership', 'Figma', 'Design systems'],
    stack: ['Figma', 'React', 'Design systems'],
    heroImage: '/projects/accelera/accelerahero.png',
    cardDescription:
      'Led UX from wireframe to interactive prototype. Built design systems, component libraries, and app flows.',
    overview:
      'At Accelera/Root I served as the sole designer and design lead from 2021 through 2024, owning the complete design lifecycle across multiple applications. I built the visual design system from scratch and designed critical product flows from login verification to customizable dashboards.',
    challenge: [
      'Multiple applications needed consistent design language without an existing design system.',
      'Complex flows including authentication, verification, onboarding, dashboards which required careful UX iteration.',
      'Design-to-development handoff needed component libraries and style guides engineers could trust.',
    ],
    solution: [
      'Created a comprehensive design system: typography, colour, spacing, and interaction patterns.',
      'Designed and prototyped login/verification, onboarding, and customizable dashboard experiences.',
      'Built component libraries and style guides for consistent design-to-development workflow.',
      'Produced brand assets, YouTube channel branding, and social media creative.',
    ],
    deliverables: [
      'Ground-up design system and component library',
      'Interactive high-fidelity prototypes across multiple apps',
      'Login, verification, and dashboard flow designs',
      'YouTube branding and content design',
      'Style guides and digital asset libraries',
    ],
    sections: [
      {
        title: 'Design systems',
        body: 'I established typography, colour, spacing, and component standards used across every product surface.',
      },
      {
        title: 'End-to-end product flows',
        body: 'From first login through verification and into customizable dashboards; every step designed, prototyped, and iterated with engineering.',
      },
    ],
    techStack: ['Figma', 'React', 'Design systems', 'Prototyping', 'Storyboarding'],
    nextProject: 'malawian-fish-room',
  },
  {
    slug: 'kitchen-navigator',
    title: 'Kitchen Navigator',
    subtitle: 'Mobile app for finding recipes through ingredients you have',
    role: 'Founder, Designer & Developer',
    timeline: '2024 – 2025',
    status: 'shipped',
    type: 'personal',
    featured: false,
    tags: ['Personal project', 'Mobile'],
    stack: ['Mobile', 'Kickstarter'],
    liveUrl: 'https://impureclout.github.io/Kitnav/',
    heroImage: '/projects/kitchen-navigator/KitNav192Logo.png',
    cardDescription: 'Recipe finder app - concept through Kickstarter promotional campaign.',
    overview:
      'Kitchen Navigator is a mobile application I conceptualised, designed, and developed for finding recipes based on available ingredients. I managed all aspects from logo and UX through development and Kickstarter promotion.',
    challenge: ['Validate a recipe-discovery concept with a polished MVP and promotional campaign.'],
    solution: ['Designed and built the app end-to-end, including Kickstarter promotional materials.'],
    deliverables: ['Mobile app MVP', 'Logo and brand design', 'Kickstarter campaign assets'],
    techStack: ['Mobile development', 'UX design', 'Kickstarter'],
  },
  {
    slug: 'cardboarder',
    title: 'Cardboarder',
    subtitle: 'Mobile application for trading card enthusiasts',
    role: 'Founder, Designer & Developer',
    timeline: '2021 – 2022',
    status: 'archived',
    type: 'personal',
    featured: false,
    tags: ['Personal project', 'Kickstarter'],
    stack: ['Mobile', 'Kickstarter'],
    liveUrl: 'https://impureclout.github.io/cardboarder/',
    heroImage: '/projects/cardboarder/hero.svg',
    cardDescription: 'Trading card app - concept, design, development, and Kickstarter launch.',
    overview:
      'Cardboarder is an independent venture for trading card enthusiasts. I was responsible for all project aspects including concept, logo design, development, and Kickstarter promotional materials.',
    challenge: ['Launch an independent mobile product with full brand and promotional support.'],
    solution: ['Built the app and ran a Kickstarter campaign with custom promotional design.'],
    deliverables: ['App concept and design', 'Logo and branding', 'Kickstarter launch'],
    techStack: ['Mobile', 'Brand design', 'Kickstarter'],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export type ProjectFilter = 'all' | ProjectType;

export function filterProjects(filter: ProjectFilter): Project[] {
  if (filter === 'all') return projects;
  return projects.filter((p) => p.type === filter);
}
