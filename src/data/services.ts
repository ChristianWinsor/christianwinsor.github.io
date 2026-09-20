export type ServiceBilling = 'monthly' | 'one-time';

export interface SelectableService {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  billing: ServiceBilling;
  exclusiveGroup?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description?: string;
  note?: string;
}

export interface RetainerBundle {
  id: string;
  name: string;
  description: string;
  serviceIds: string[];
  accent: 'gold' | 'purple' | 'blue' | 'green';
}

export interface InfoTableRow {
  name: string;
  detail?: string;
}

export interface InfoTableSection {
  title: string;
  intro?: string;
  rows: InfoTableRow[];
}

export const servicePillars = [
  {
    title: 'Product & UX Design',
    description:
      'Discovery, user flows, wireframes, interactive prototypes, UI design, and design systems; from research to production ready handoff.',
    accent: 'purple' as const,
  },
  {
    title: 'Web Design & Development',
    description:
      'Custom-coded websites and applications (React/Next.js, TypeScript), no templates; built with care, optimized to perform, and SEO-ready.',
    accent: 'blue' as const,
  },
  {
    title: 'Creative & Content',
    description:
      'Copywriting, brand voice, promotional materials, flyers, and marketing graphics aligned with your digital presence.',
    accent: 'gold' as const,
  },
  {
    title: 'Ongoing Support',
    description:
      'Mix-and-match monthly retainer: website maintenance, social media, SEO monitoring, advertising management, and more.',
    accent: 'green' as const,
  },
];

export const serviceApproach = [
  {
    title: 'User-first',
    body: 'Recommendations start from what end users need to accomplish, then work backward into visuals, code, and content.',
  },
  {
    title: 'Plain communication',
    body: 'Direct, written updates on a predictable rhythm-especially when scope, timeline, or budget shifts.',
  },
  {
    title: 'Honest scoping',
    body: 'Part of the job is flagging when a simpler option works just as well, or when a request will cost more than expected.',
  },
  {
    title: 'Maintainable builds',
    body: 'Modern tooling and clean structure so sites and apps can be extended or handed off later without lock-in.',
  },
];

export const serviceProcess = [
  {
    step: '01',
    title: 'Initial conversation',
    body: 'No-obligation discussion of goals, timeline, and budget to confirm fit before formal scoping.',
  },
  {
    step: '02',
    title: 'Discovery & proposal',
    body: 'A written scope, timeline, and personal quote. Work begins after approval.',
  },
  {
    step: '03',
    title: 'Design & build',
    body: 'Flows, wireframes, visual design, and development, and review cycles before launch.',
  },
  {
    step: '04',
    title: 'Launch & support',
    body: 'Go live, hand off access, and optional ongoing retainer for maintenance and marketing.',
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'core-care',
    title: 'Website maintenance - Core Care',
    description: 'Required foundation for any retainer that includes website maintenance. Select one tier.',
    note: 'Higher tiers include everything in the tiers below them.',
  },
  {
    id: 'care-addons',
    title: 'Website maintenance - add-ons',
    description: 'Stack on top of Core Care when you need more than your tier includes.',
  },
  {
    id: 'support',
    title: 'Support level',
    description: 'Standard support (1–5 business days) is included with every retainer.',
  },
  {
    id: 'social',
    title: 'Social media support',
    description: 'Recurring post packages include caption copy, up to two revision rounds per post, and scheduling assistance.',
  },
  {
    id: 'promotional',
    title: 'Promotional materials',
    description: 'Monthly flyer subscriptions. Select one tier if needed.',
  },
  {
    id: 'advertising',
    title: 'Advertising campaign management',
    note: 'Advertising spend is handled directly by the client.',
  },
  {
    id: 'reporting',
    title: 'Reporting & strategy',
  },
  {
    id: 'email',
    title: 'Email marketing',
    description: 'Each campaign includes copywriting, template design, audience segmentation, and one revision round.',
  },
  {
    id: 'content',
    title: 'Creative & content writing',
    description:
      'Ongoing editorial support that stacks with any retainer selection. Standalone writing projects are listed in the Creative & content writing section below.',
  },
];

export const selectableServices: SelectableService[] = [
  {
    id: 'care-basic',
    categoryId: 'core-care',
    name: 'Basic Care',
    description:
      'Uptime monitoring, monthly security & software updates, minor bug fixes, backup verification, up to 5 content updates/mo.',
    billing: 'monthly',
    exclusiveGroup: 'core-care',
  },
  {
    id: 'care-standard',
    categoryId: 'core-care',
    name: 'Standard Care',
    description:
      'Everything in Basic Care, plus up to 10 content updates/mo, bi-weekly performance monitoring, and hosting coordination.',
    billing: 'monthly',
    exclusiveGroup: 'core-care',
  },
  {
    id: 'care-advanced',
    categoryId: 'core-care',
    name: 'Advanced Care',
    description:
      'Everything in Standard Care, plus up to 20 content updates/mo, up to 10 new listings/products/mo, and priority scheduling.',
    billing: 'monthly',
    exclusiveGroup: 'core-care',
  },
  {
    id: 'addon-content-5',
    categoryId: 'care-addons',
    name: 'Additional content updates (block of 5/mo)',
    description: '',
    billing: 'monthly',
  },
  {
    id: 'addon-listings-5',
    categoryId: 'care-addons',
    name: 'Additional new listings/products (block of 5/mo)',
    description: '',
    billing: 'monthly',
  },
  {
    id: 'addon-priority-sched',
    categoryId: 'care-addons',
    name: 'Priority scheduling (standalone)',
    description: '',
    billing: 'monthly',
  },
  {
    id: 'addon-hosting',
    categoryId: 'care-addons',
    name: 'Hosting issue coordination (standalone)',
    description: '',
    billing: 'monthly',
  },
  {
    id: 'addon-perf',
    categoryId: 'care-addons',
    name: 'Additional bi-weekly performance monitoring',
    description: '',
    billing: 'monthly',
  },
  {
    id: 'support-priority',
    categoryId: 'support',
    name: 'Priority Support',
    description: 'Email, phone, and SMS support. Target response 1–2 business days.',
    billing: 'monthly',
  },
  {
    id: 'social-4',
    categoryId: 'social',
    name: '4 posts/mo',
    description: '',
    billing: 'monthly',
    exclusiveGroup: 'social-package',
  },
  {
    id: 'social-8',
    categoryId: 'social',
    name: '8 posts/mo',
    description: '',
    billing: 'monthly',
    exclusiveGroup: 'social-package',
  },
  {
    id: 'social-12',
    categoryId: 'social',
    name: '12 posts/mo',
    description: '',
    billing: 'monthly',
    exclusiveGroup: 'social-package',
  },
  {
    id: 'social-16',
    categoryId: 'social',
    name: '16 posts/mo',
    description: '',
    billing: 'monthly',
    exclusiveGroup: 'social-package',
  },
  {
    id: 'social-planning',
    categoryId: 'social',
    name: 'Content planning & audience engagement recommendations',
    description: '',
    billing: 'monthly',
  },
  {
    id: 'social-calendar',
    categoryId: 'social',
    name: 'Content calendar (ongoing planning & scheduling)',
    description: '',
    billing: 'monthly',
  },
  {
    id: 'flyer-basic',
    categoryId: 'promotional',
    name: 'Flyer subscription - Basic',
    description: '1 flyer/mo using existing brand assets, up to 3 revision rounds.',
    billing: 'monthly',
    exclusiveGroup: 'flyer-sub',
  },
  {
    id: 'flyer-standard',
    categoryId: 'promotional',
    name: 'Flyer subscription - Standard',
    description: '1 flyer/mo with elevated visual treatment and custom graphics, up to 3 revision rounds.',
    billing: 'monthly',
    exclusiveGroup: 'flyer-sub',
  },
  {
    id: 'flyer-advanced',
    categoryId: 'promotional',
    name: 'Flyer subscription - Advanced',
    description: 'Up to 2 flyers/mo, campaign-quality material, priority turnaround, up to 3 revision rounds each.',
    billing: 'monthly',
    exclusiveGroup: 'flyer-sub',
  },
  {
    id: 'ad-first',
    categoryId: 'advertising',
    name: 'Ad campaign management - first active campaign',
    description: '',
    billing: 'monthly',
  },
  {
    id: 'ad-additional',
    categoryId: 'advertising',
    name: 'Ad campaign management - each additional active campaign',
    description: '',
    billing: 'monthly',
  },
  {
    id: 'ad-report',
    categoryId: 'advertising',
    name: 'Monthly ad performance report & budget recommendations',
    description: '',
    billing: 'monthly',
  },
  {
    id: 'report-monthly',
    categoryId: 'reporting',
    name: 'Monthly marketing performance report',
    description: 'All active channels, key metrics, and recommendations.',
    billing: 'monthly',
  },
  {
    id: 'report-strategy',
    categoryId: 'reporting',
    name: 'Ongoing marketing strategy consultation',
    description: '',
    billing: 'monthly',
  },
  {
    id: 'report-seo',
    categoryId: 'reporting',
    name: 'SEO monitoring & optimization',
    description: 'Up to 15 tracked keywords on one site.',
    billing: 'monthly',
  },
  {
    id: 'email-1',
    categoryId: 'email',
    name: 'Email marketing - 1 campaign/mo',
    description: '',
    billing: 'monthly',
    exclusiveGroup: 'email-package',
  },
  {
    id: 'email-2',
    categoryId: 'email',
    name: 'Email marketing - 2 campaigns/mo',
    description: '',
    billing: 'monthly',
    exclusiveGroup: 'email-package',
  },
  {
    id: 'email-4',
    categoryId: 'email',
    name: 'Email marketing - 4 campaigns/mo',
    description: '',
    billing: 'monthly',
    exclusiveGroup: 'email-package',
  },
  {
    id: 'content-ongoing-bundle',
    categoryId: 'content',
    name: 'Ongoing Content Bundle',
    description:
      '2 blog posts/mo, editing/proofreading up to 3,000 words/mo, and brand voice consistency review. Stacks with any retainer.',
    billing: 'monthly',
  },
];

export interface WritingBundle {
  id: string;
  name: string;
  description: string;
  billing: ServiceBilling;
  estimatorServiceId?: string;
}

export const writingBundles: WritingBundle[] = [
  {
    id: 'brand-foundations-writing',
    name: 'Brand Foundations Writing Bundle',
    description:
      'A brand voice guide, website copy for up to five pages, and a long-form launch blog post to establish or reset your written identity.',
    billing: 'one-time',
  },
  {
    id: 'ongoing-content',
    name: 'Ongoing Content Bundle',
    description:
      'Two blog posts each month, editing or proofreading up to 3,000 words, and a brand voice consistency review. Can accompany other ongoing support.',
    billing: 'monthly',
    estimatorServiceId: 'content-ongoing-bundle',
  },
];

export const creativeWritingIntro =
  'Words are part of the product. Choose standalone writing or combine it with a website, brand, or product project. The tiers describe different scopes and levels of research.';

export const creativeWritingSections: InfoTableSection[] = [
  {
    title: 'Website & marketing copywriting',
    rows: [
      { name: 'Basic', detail: 'SEO-aware copy from client info, up to 1 revision round' },
      {
        name: 'Standard',
        detail: 'Conversion-focused copy with light research, up to 2 revision rounds',
      },
      {
        name: 'Advanced',
        detail: 'In-depth research, brand voice, conversion-optimized copy, up to 3 revision rounds',
      },
    ],
  },
  {
    title: 'Technical writing & documentation',
    rows: [
      { name: 'Basic', detail: 'Straightforward docs (~500 words/page), 1 revision round' },
      { name: 'Standard', detail: 'User guides & how-tos with light research, 2 revision rounds' },
      {
        name: 'Advanced',
        detail: 'API/developer docs & specifications, subject-matter research, 3 revision rounds',
      },
    ],
  },
  {
    title: 'Editing & proofreading',
    intro: 'Choose the depth of editing that your writing needs.',
    rows: [
      { name: 'Proofreading', detail: 'Typos, grammar, formatting' },
      { name: 'Copy editing', detail: 'Grammar, structure, consistency, flow' },
      {
        name: 'Content / developmental editing',
        detail: 'Restructuring, clarity, substantive rewrites',
      },
    ],
  },
  {
    title: 'Brand voice development',
    rows: [
      {
        name: 'Brand voice guide',
        detail: 'Tone, vocabulary, sample messaging-scoped by number of contexts (web, social, email)',
      },
    ],
  },
  {
    title: 'Long-form, creative & narrative content',
    rows: [
      { name: 'Blog post (up to 800 words)', detail: '' },
      { name: 'Long-form article or essay (1,500–3,000 words)', detail: '' },
      { name: 'Ghostwriting, long-form', detail: 'Includes 1 revision round' },
      {
        name: 'Creative writing - short fiction or narrative',
        detail: '',
      },
      { name: 'Script or screenplay writing', detail: 'Industry-standard format' },
      {
        name: 'Narrative / story consulting session',
        detail: 'Structure, pacing, voice feedback',
      },
    ],
  },
  {
    title: 'Other content services',
    rows: [
      { name: 'Product or service descriptions', detail: '' },
      { name: 'Email newsletter (design + copy)', detail: '' },
      { name: 'Promotional caption or ad copy', detail: '' },
    ],
  },
];

export const retainerBundles: RetainerBundle[] = [
  {
    id: 'essentials',
    name: 'Essentials Bundle',
    description:
      'Lean starting point: professional website maintenance and ongoing strategic guidance without social or design services.',
    serviceIds: ['care-basic', 'report-seo', 'report-strategy'],
    accent: 'blue',
  },
  {
    id: 'foundation',
    name: 'Foundation Bundle',
    description: 'Foundational maintenance and a basic marketing presence for small or newly launched businesses.',
    serviceIds: ['care-basic', 'report-seo', 'flyer-basic'],
    accent: 'purple',
  },
  {
    id: 'advanced',
    name: 'Advanced Bundle',
    description: 'Expanded content management and increased marketing output for growing businesses.',
    serviceIds: ['care-advanced', 'social-8', 'report-seo', 'flyer-basic', 'social-calendar'],
    accent: 'green',
  },
  {
    id: 'complete',
    name: 'Complete Bundle',
    description:
      'Comprehensive website management, full marketing support, ad oversight, reporting, and priority response.',
    serviceIds: [
      'care-advanced',
      'social-12',
      'report-seo',
      'flyer-basic',
      'social-calendar',
      'ad-first',
      'ad-additional',
      'report-monthly',
      'support-priority',
    ],
    accent: 'gold',
  },
];

export const projectServiceSections: InfoTableSection[] = [
  {
    title: 'Website packages',
    intro:
      'Custom-coded websites built for your goals. The exact scope and quote are confirmed together before work begins.',
    rows: [
      { name: 'Starter Site', detail: '1–3 pages, contact form, basic on-page SEO' },
      { name: 'Business Site', detail: '5–8 pages, blog, full SEO architecture' },
      { name: 'Professional Site', detail: 'Catalog, gallery, FAQ, advanced SEO' },
      { name: 'E-Commerce / Custom', detail: 'Scope to be discussed' },
    ],
  },
  {
    title: 'Website feature & functionality add-ons',
    intro: 'Stack on any website package to match required functionality.',
    rows: [
      { name: 'Custom searchable/filterable catalogue or portfolio', detail: 'Up to 25 items, 3 filter categories' },
      { name: 'Image gallery with lightbox', detail: 'Up to 20 images sourced & optimized' },
      { name: 'Hero slideshow / promotional animation', detail: 'Up to 6 slides' },
      { name: 'FAQ accordion system', detail: 'Up to 10 Q&A entries' },
      { name: 'Dynamic contact/inquiry form', detail: 'Up to 8 fields, 1 routing rule' },
      { name: 'Multi-language support', detail: 'One additional language' },
      { name: 'Membership or login system', detail: 'Single account tier' },
      { name: 'Blog or news system', detail: 'System build; writing can be added separately' },
      { name: 'Booking/scheduling integration', detail: 'Confirmed after scope review' },
      { name: 'Custom animations or interactions', detail: 'Scoped to the interaction' },
    ],
  },
  {
    title: 'Product design & development',
    intro: 'Start with research, a prototype, interface design, or a full product build. We can scope the right path together.',
    rows: [
      { name: 'Discovery & UX research', detail: 'Up to 3 sessions' },
      { name: 'User flow mapping', detail: '' },
      { name: 'Wireframes - low-fidelity', detail: '' },
      { name: 'Wireframes - high-fidelity', detail: '' },
      { name: 'Visual & UI design', detail: 'Production-ready screens' },
      { name: 'Design system', detail: 'Scoped in writing' },
      { name: 'Interactive prototype (click-through)', detail: 'Up to 8 connected screens' },
      { name: 'Foundation Build', detail: 'Single-platform MVP' },
      { name: 'Standard Application', detail: 'Accounts, database, multi-flow' },
      { name: 'Advanced Application', detail: 'Complex logic / multi-platform' },
      { name: 'User authentication & accounts', detail: 'Single role/permission tier' },
      { name: 'Payment processing integration', detail: 'One payment flow' },
      { name: 'Admin dashboard / back-office', detail: 'Up to 5 management views' },
    ],
  },
  {
    title: 'Product design bundles',
    intro: 'Connected design phases grouped into starting scopes. Development can be scoped separately.',
    rows: [
      { name: 'Discovery & Flow Bundle', detail: 'Research, 3 user flows, and 10 detailed wireframe screens' },
      { name: 'UI & Design System Bundle', detail: '10 interface screens and a starting design system' },
      { name: 'Prototype Bundle', detail: 'A connected, clickable prototype ready for review' },
      {
        name: 'Product Launch Bundle (design phase)',
        detail: 'Research through interface design for 10 screens; development scoped separately',
      },
    ],
  },
  {
    title: 'Website development (one-time)',
    intro: 'Available with or without ongoing support. Ask about timing if a request is urgent.',
    rows: [
      { name: 'New website page', detail: 'Standard content page using existing layout' },
      { name: 'New website feature or functionality', detail: 'Small addition using existing patterns' },
      { name: 'Major page redesign', detail: 'Layout/visual restructure, up to 2 revision rounds' },
      { name: 'Bulk content or catalogue updates', detail: 'Up to 50 items; additional items scoped separately' },
      { name: 'Google Analytics setup', detail: '' },
      { name: 'Website speed & performance optimization', detail: 'Up to 15 pages at base rate' },
      { name: 'SEO optimization of existing pages', detail: '' },
      {
        name: 'Website SEO audit & report - Basic',
        detail: 'Up to 10 pages, prioritized findings',
      },
      {
        name: 'Website SEO audit & report - Standard',
        detail: 'Up to 25 pages, competitor comparison',
      },
      {
        name: 'Website SEO audit & report - Advanced',
        detail: 'Up to 40 pages, full competitor benchmarking',
      },
    ],
  },
  {
    title: 'One-time maintenance & support',
    rows: [
      { name: 'One-time security update & audit', detail: '' },
      { name: 'One-time performance check & optimization', detail: '' },
      { name: 'Emergency troubleshooting (outside business hours)', detail: '' },
    ],
  },
  {
    title: 'Graphic design & promotional materials',
    rows: [
      { name: 'Promotional flyer (one-off) - Basic', detail: 'Up to 3 revision rounds' },
      { name: 'Promotional flyer (one-off) - Standard', detail: 'Advanced layout & custom graphics' },
      { name: 'Promotional flyer (one-off) - Advanced', detail: 'Up to 2 concept directions' },
      { name: 'Marketing graphic - Branded', detail: 'Templated graphic, existing brand assets' },
      { name: 'Marketing graphic - Custom promotional', detail: '' },
      { name: 'Campaign illustration / hero graphic', detail: 'Up to 2 concept directions' },
      { name: 'Logo design - Basic', detail: '1 concept, 3 revision rounds' },
      { name: 'Logo design - Standard', detail: '2 concepts, primary + secondary variations' },
      { name: 'Logo design - Advanced', detail: '3 concepts, full brand mark system' },
      { name: 'Brand identity package - Basic', detail: 'Logo, colours, fonts, 1-page guideline' },
      { name: 'Brand identity package - Standard', detail: 'Full colour & typography system, collateral templates' },
      { name: 'Brand identity package - Advanced', detail: 'Full system, up to 15-page guideline' },
      { name: 'Marketing graphic pack (3 posts, Basic)', detail: '' },
      { name: 'Event promotion campaign (graphics + copy)', detail: '' },
      { name: 'Business card design', detail: '' },
      { name: 'Banner or signage design', detail: '1 design, up to 2 sizes' },
    ],
  },
  {
    title: 'One-time social, ads, reporting & email',
    rows: [
      { name: 'Additional single social post', detail: 'Outside a monthly package' },
      { name: 'Social media account setup & profile optimization', detail: '' },
      { name: 'Additional flyer (beyond monthly allocation)', detail: 'Additional flyer outside a monthly allocation' },
      { name: 'Quarterly seasonal or promotional campaign', detail: 'Graphics + copy' },
      { name: 'Ad campaign setup & audience targeting', detail: 'One-time per platform' },
      { name: 'Marketing strategy consultation (1 hour)', detail: '' },
      { name: 'Email marketing platform & template setup', detail: '' },
      { name: 'Email automation workflow', detail: 'Up to 3 emails in sequence' },
    ],
  },
];

export const servicesNotIncluded = [
  'New website pages or custom functionality beyond your retainer selection',
  'Major redesigns, e-commerce implementation, and custom application development beyond scope',
  'Photography, video production, and complete rebranding projects',
  'Large-scale graphic design, SEO campaigns, and printed production costs',
  'Third-party subscriptions, domains, and community management on social platforms',
];
