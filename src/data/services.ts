export type ServiceBilling = 'monthly' | 'one-time';

export interface SelectableService {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  priceLabel: string;
  amountCad: number;
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
  monthlyTotal: number;
  bundleSavings: number;
  setupFeeWaived: true;
  serviceIds: string[];
  accent: 'gold' | 'purple' | 'blue' | 'green';
}

export interface InfoTableRow {
  name: string;
  price: string;
  detail?: string;
}

export interface InfoTableSection {
  title: string;
  intro?: string;
  rows: InfoTableRow[];
}

export const SERVICE_QUOTE_STORAGE_KEY = 'portfolioServiceQuote';

export const retainerRules = {
  currency: 'CAD',
  minimumMonthly: 500,
  setupFeeUnder1500: 350,
  setupFee1500Plus: 500,
  setupThreshold: 1500,
  disclaimer:
    'All listed prices are starting prices in Canadian Dollars (CAD) unless otherwise stated. Final scope and pricing are confirmed in writing before work begins.',
};

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
    body: 'Written scope, timeline, and price. Work begins after approval and any required deposit.',
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
    note: 'Ad spend is paid directly by the client and is not included in retainer pricing.',
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
    priceLabel: '$275/mo',
    amountCad: 275,
    billing: 'monthly',
    exclusiveGroup: 'core-care',
  },
  {
    id: 'care-standard',
    categoryId: 'core-care',
    name: 'Standard Care',
    description:
      'Everything in Basic Care, plus up to 10 content updates/mo, bi-weekly performance monitoring, and hosting coordination.',
    priceLabel: '$450/mo',
    amountCad: 450,
    billing: 'monthly',
    exclusiveGroup: 'core-care',
  },
  {
    id: 'care-advanced',
    categoryId: 'core-care',
    name: 'Advanced Care',
    description:
      'Everything in Standard Care, plus up to 20 content updates/mo, up to 10 new listings/products/mo, and priority scheduling.',
    priceLabel: '$650/mo',
    amountCad: 650,
    billing: 'monthly',
    exclusiveGroup: 'core-care',
  },
  {
    id: 'addon-content-5',
    categoryId: 'care-addons',
    name: 'Additional content updates (block of 5/mo)',
    description: '',
    priceLabel: '$75/mo',
    amountCad: 75,
    billing: 'monthly',
  },
  {
    id: 'addon-listings-5',
    categoryId: 'care-addons',
    name: 'Additional new listings/products (block of 5/mo)',
    description: '',
    priceLabel: '$100/mo',
    amountCad: 100,
    billing: 'monthly',
  },
  {
    id: 'addon-priority-sched',
    categoryId: 'care-addons',
    name: 'Priority scheduling (standalone)',
    description: '',
    priceLabel: '$50/mo',
    amountCad: 50,
    billing: 'monthly',
  },
  {
    id: 'addon-hosting',
    categoryId: 'care-addons',
    name: 'Hosting issue coordination (standalone)',
    description: '',
    priceLabel: '$50/mo',
    amountCad: 50,
    billing: 'monthly',
  },
  {
    id: 'addon-perf',
    categoryId: 'care-addons',
    name: 'Additional bi-weekly performance monitoring',
    description: '',
    priceLabel: '$75/mo',
    amountCad: 75,
    billing: 'monthly',
  },
  {
    id: 'support-priority',
    categoryId: 'support',
    name: 'Priority Support',
    description: 'Email, phone, and SMS support. Target response 1–2 business days.',
    priceLabel: '$150/mo',
    amountCad: 150,
    billing: 'monthly',
  },
  {
    id: 'social-4',
    categoryId: 'social',
    name: '4 posts/mo',
    description: '',
    priceLabel: '$175/mo',
    amountCad: 175,
    billing: 'monthly',
    exclusiveGroup: 'social-package',
  },
  {
    id: 'social-8',
    categoryId: 'social',
    name: '8 posts/mo',
    description: '',
    priceLabel: '$325/mo',
    amountCad: 325,
    billing: 'monthly',
    exclusiveGroup: 'social-package',
  },
  {
    id: 'social-12',
    categoryId: 'social',
    name: '12 posts/mo',
    description: '',
    priceLabel: '$450/mo',
    amountCad: 450,
    billing: 'monthly',
    exclusiveGroup: 'social-package',
  },
  {
    id: 'social-16',
    categoryId: 'social',
    name: '16 posts/mo',
    description: '',
    priceLabel: '$575/mo',
    amountCad: 575,
    billing: 'monthly',
    exclusiveGroup: 'social-package',
  },
  {
    id: 'social-planning',
    categoryId: 'social',
    name: 'Content planning & audience engagement recommendations',
    description: '',
    priceLabel: '$100/mo',
    amountCad: 100,
    billing: 'monthly',
  },
  {
    id: 'social-calendar',
    categoryId: 'social',
    name: 'Content calendar (ongoing planning & scheduling)',
    description: '',
    priceLabel: '$150/mo',
    amountCad: 150,
    billing: 'monthly',
  },
  {
    id: 'flyer-basic',
    categoryId: 'promotional',
    name: 'Flyer subscription - Basic',
    description: '1 flyer/mo using existing brand assets, up to 3 revision rounds.',
    priceLabel: '$300/mo',
    amountCad: 300,
    billing: 'monthly',
    exclusiveGroup: 'flyer-sub',
  },
  {
    id: 'flyer-standard',
    categoryId: 'promotional',
    name: 'Flyer subscription - Standard',
    description: '1 flyer/mo with elevated visual treatment and custom graphics, up to 3 revision rounds.',
    priceLabel: '$600/mo',
    amountCad: 600,
    billing: 'monthly',
    exclusiveGroup: 'flyer-sub',
  },
  {
    id: 'flyer-advanced',
    categoryId: 'promotional',
    name: 'Flyer subscription - Advanced',
    description: 'Up to 2 flyers/mo, campaign-quality material, priority turnaround, up to 3 revision rounds each.',
    priceLabel: '$900/mo',
    amountCad: 900,
    billing: 'monthly',
    exclusiveGroup: 'flyer-sub',
  },
  {
    id: 'ad-first',
    categoryId: 'advertising',
    name: 'Ad campaign management - first active campaign',
    description: '',
    priceLabel: '$300/mo',
    amountCad: 300,
    billing: 'monthly',
  },
  {
    id: 'ad-additional',
    categoryId: 'advertising',
    name: 'Ad campaign management - each additional active campaign',
    description: '',
    priceLabel: '$250/mo',
    amountCad: 250,
    billing: 'monthly',
  },
  {
    id: 'ad-report',
    categoryId: 'advertising',
    name: 'Monthly ad performance report & budget recommendations',
    description: '',
    priceLabel: '$100/mo',
    amountCad: 100,
    billing: 'monthly',
  },
  {
    id: 'report-monthly',
    categoryId: 'reporting',
    name: 'Monthly marketing performance report',
    description: 'All active channels, key metrics, and recommendations.',
    priceLabel: '$125/mo',
    amountCad: 125,
    billing: 'monthly',
  },
  {
    id: 'report-strategy',
    categoryId: 'reporting',
    name: 'Ongoing marketing strategy consultation',
    description: '',
    priceLabel: '$150/mo',
    amountCad: 150,
    billing: 'monthly',
  },
  {
    id: 'report-seo',
    categoryId: 'reporting',
    name: 'SEO monitoring & optimization',
    description: 'Up to 15 tracked keywords on one site.',
    priceLabel: '$175/mo',
    amountCad: 175,
    billing: 'monthly',
  },
  {
    id: 'email-1',
    categoryId: 'email',
    name: 'Email marketing - 1 campaign/mo',
    description: '',
    priceLabel: '$150/mo',
    amountCad: 150,
    billing: 'monthly',
    exclusiveGroup: 'email-package',
  },
  {
    id: 'email-2',
    categoryId: 'email',
    name: 'Email marketing - 2 campaigns/mo',
    description: '',
    priceLabel: '$275/mo',
    amountCad: 275,
    billing: 'monthly',
    exclusiveGroup: 'email-package',
  },
  {
    id: 'email-4',
    categoryId: 'email',
    name: 'Email marketing - 4 campaigns/mo',
    description: '',
    priceLabel: '$500/mo',
    amountCad: 500,
    billing: 'monthly',
    exclusiveGroup: 'email-package',
  },
  {
    id: 'content-ongoing-bundle',
    categoryId: 'content',
    name: 'Ongoing Content Bundle',
    description:
      '2 blog posts/mo, editing/proofreading up to 3,000 words/mo, and brand voice consistency review. Stacks with any retainer.',
    priceLabel: '$425/mo',
    amountCad: 425,
    billing: 'monthly',
  },
];

export interface WritingBundle {
  id: string;
  name: string;
  description: string;
  priceLabel: string;
  savingsLabel: string;
  billing: ServiceBilling;
  estimatorServiceId?: string;
}

export const writingBundles: WritingBundle[] = [
  {
    id: 'brand-foundations-writing',
    name: 'Brand Foundations Writing Bundle',
    description:
      'Brand voice guide, Standard-tier website copywriting (up to 5 pages), and a long-form launch blog post-for establishing or resetting written identity.',
    priceLabel: '$1,900 flat',
    savingsLabel: 'Save $350 vs individual pricing ($2,250)',
    billing: 'one-time',
  },
  {
    id: 'ongoing-content',
    name: 'Ongoing Content Bundle',
    description:
      '2 blog posts/mo, editing/proofreading up to 3,000 words/mo, and brand voice consistency review. Stacks with any retainer selection.',
    priceLabel: '$425/mo',
    savingsLabel: 'Save $70/mo vs individual pricing ($495/mo)',
    billing: 'monthly',
    estimatorServiceId: 'content-ongoing-bundle',
  },
];

export const creativeWritingIntro =
  'Words are part of the product-not an afterthought. Available standalone or alongside website, product design, and development work. Basic / Standard / Advanced tiers reflect depth of research and polish, not level of care.';

export const creativeWritingSections: InfoTableSection[] = [
  {
    title: 'Website & marketing copywriting',
    rows: [
      { name: 'Basic', price: '$200/page', detail: 'SEO-aware copy from client info, up to 1 revision round' },
      {
        name: 'Standard',
        price: '$300/page',
        detail: 'Conversion-focused copy with light research, up to 2 revision rounds',
      },
      {
        name: 'Advanced',
        price: '$500/page',
        detail: 'In-depth research, brand voice, conversion-optimized copy, up to 3 revision rounds',
      },
    ],
  },
  {
    title: 'Technical writing & documentation',
    rows: [
      { name: 'Basic', price: '$150/page', detail: 'Straightforward docs (~500 words/page), 1 revision round' },
      { name: 'Standard', price: '$250/page', detail: 'User guides & how-tos with light research, 2 revision rounds' },
      {
        name: 'Advanced',
        price: '$400/page',
        detail: 'API/developer docs & specifications, subject-matter research, 3 revision rounds',
      },
    ],
  },
  {
    title: 'Editing & proofreading',
    intro: 'Minimum project fee of $75 applies to requests under 3,000 words.',
    rows: [
      { name: 'Proofreading', price: '$25 per 1,000 words', detail: 'Typos, grammar, formatting' },
      { name: 'Copy editing', price: '$40 per 1,000 words', detail: 'Grammar, structure, consistency, flow' },
      {
        name: 'Content / developmental editing',
        price: '$80 per 1,000 words',
        detail: 'Restructuring, clarity, substantive rewrites',
      },
    ],
  },
  {
    title: 'Brand voice development',
    rows: [
      {
        name: 'Brand voice guide',
        price: 'From $600',
        detail: 'Tone, vocabulary, sample messaging-scoped by number of contexts (web, social, email)',
      },
    ],
  },
  {
    title: 'Long-form, creative & narrative content',
    rows: [
      { name: 'Blog post (up to 800 words)', price: '$150', detail: '' },
      { name: 'Long-form article or essay (1,500–3,000 words)', price: '$450', detail: '' },
      { name: 'Ghostwriting, long-form', price: '$275/1,000 words', detail: 'Includes 1 revision round' },
      {
        name: 'Creative writing - short fiction or narrative',
        price: '$200/1,000 words',
        detail: '',
      },
      { name: 'Script or screenplay writing', price: '$150/page', detail: 'Industry-standard format' },
      {
        name: 'Narrative / story consulting session',
        price: '$80/session',
        detail: 'Structure, pacing, voice feedback',
      },
    ],
  },
  {
    title: 'Other content services',
    rows: [
      { name: 'Product or service descriptions', price: '$25 per item', detail: '' },
      { name: 'Email newsletter (design + copy)', price: '$200', detail: '' },
      { name: 'Promotional caption or ad copy', price: '$100', detail: '' },
    ],
  },
];

export const retainerBundles: RetainerBundle[] = [
  {
    id: 'essentials',
    name: 'Essentials Bundle',
    description:
      'Lean starting point: professional website maintenance and ongoing strategic guidance without social or design services.',
    monthlyTotal: 550,
    bundleSavings: 50,
    setupFeeWaived: true,
    serviceIds: ['care-basic', 'report-seo', 'report-strategy'],
    accent: 'blue',
  },
  {
    id: 'foundation',
    name: 'Foundation Bundle',
    description: 'Foundational maintenance and a basic marketing presence for small or newly launched businesses.',
    monthlyTotal: 700,
    bundleSavings: 50,
    setupFeeWaived: true,
    serviceIds: ['care-basic', 'report-seo', 'flyer-basic'],
    accent: 'purple',
  },
  {
    id: 'advanced',
    name: 'Advanced Bundle',
    description: 'Expanded content management and increased marketing output for growing businesses.',
    monthlyTotal: 1500,
    bundleSavings: 100,
    setupFeeWaived: true,
    serviceIds: ['care-advanced', 'social-8', 'report-seo', 'flyer-basic', 'social-calendar'],
    accent: 'green',
  },
  {
    id: 'complete',
    name: 'Complete Bundle',
    description:
      'Comprehensive website management, full marketing support, ad oversight, reporting, and priority response.',
    monthlyTotal: 2400,
    bundleSavings: 150,
    setupFeeWaived: true,
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
      'Custom-coded sites (React/Next.js, TypeScript)-no templates. 50% deposit before work begins; balance due before launch. Exact price confirmed in a written proposal.',
    rows: [
      { name: 'Starter Site', price: '$3,000 – $4,500', detail: '1–3 pages, contact form, basic on-page SEO' },
      { name: 'Business Site', price: '$4,500 – $7,500', detail: '5–8 pages, blog, full SEO architecture' },
      { name: 'Professional Site', price: '$7,500 – $15,000+', detail: 'Catalog, gallery, FAQ, advanced SEO' },
      { name: 'E-Commerce / Custom', price: 'From $10,000', detail: 'Quoted on scope' },
    ],
  },
  {
    title: 'Website feature & functionality add-ons',
    intro: 'Stack on any website package to match required functionality.',
    rows: [
      { name: 'Custom searchable/filterable catalogue or portfolio', price: 'From $1,200', detail: 'Up to 25 items, 3 filter categories' },
      { name: 'Image gallery with lightbox', price: 'From $350', detail: 'Up to 20 images sourced & optimized' },
      { name: 'Hero slideshow / promotional animation', price: 'From $300', detail: 'Up to 6 slides' },
      { name: 'FAQ accordion system', price: 'From $200', detail: 'Up to 10 Q&A entries' },
      { name: 'Dynamic contact/inquiry form', price: 'From $250', detail: 'Up to 8 fields, 1 routing rule' },
      { name: 'Multi-language support', price: 'From $500', detail: 'One additional language' },
      { name: 'Membership or login system', price: 'From $1,500', detail: 'Single account tier' },
      { name: 'Blog or news system', price: '$600', detail: 'System build only-post writing priced separately' },
      { name: 'Booking/scheduling integration', price: 'From $800', detail: 'Quoted after scope review' },
      { name: 'Custom animations or interactions', price: 'From $250', detail: 'Quoted by complexity' },
    ],
  },
  {
    title: 'Product design & development',
    intro: 'Enter at UX, product design, or full build. Product Design $750–$7,950; full design-to-launch from $10,000.',
    rows: [
      { name: 'Discovery & UX research', price: 'From $750', detail: 'Up to 3 sessions' },
      { name: 'User flow mapping', price: '$300/flow', detail: '' },
      { name: 'Wireframes - low-fidelity', price: '$150/screen', detail: '' },
      { name: 'Wireframes - high-fidelity', price: '$275/screen', detail: '' },
      { name: 'Visual & UI design', price: '$325/screen', detail: 'Production-ready screens' },
      { name: 'Design system', price: 'From $3,500', detail: 'Scoped in writing' },
      { name: 'Interactive prototype (click-through)', price: 'From $1,800', detail: 'Up to 8 connected screens' },
      { name: 'Foundation Build', price: 'From $10,000', detail: 'Single-platform MVP' },
      { name: 'Standard Application', price: 'From $18,000', detail: 'Accounts, database, multi-flow' },
      { name: 'Advanced Application', price: 'From $30,000+', detail: 'Complex logic / multi-platform' },
      { name: 'User authentication & accounts', price: 'From $1,200', detail: 'Single role/permission tier' },
      { name: 'Payment processing integration', price: 'From $1,500', detail: 'One payment flow' },
      { name: 'Admin dashboard / back-office', price: 'From $2,000', detail: 'Up to 5 management views' },
    ],
  },
  {
    title: 'Product design bundles',
    intro: 'Fixed-price design bundles with stated savings vs selecting items individually.',
    rows: [
      { name: 'Discovery & Flow Bundle', price: '$3,900', detail: 'Research, 3 flows, 10 hi-fi wireframe screens - save $500' },
      { name: 'UI & Design System Bundle', price: '$6,000', detail: '10 screens + design system starting scope - save $750' },
      { name: 'Prototype Bundle', price: '$7,950', detail: 'Full path to clickable prototype - save $1,500' },
      {
        name: 'Product Launch Bundle (design phase)',
        price: '$6,750',
        detail: 'Research through UI for 10 screens - save $900; development quoted from $10,000',
      },
    ],
  },
  {
    title: 'Website development (one-time)',
    intro: 'Available with or without an active retainer. Rush delivery within 48 hours +25% where accepted.',
    rows: [
      { name: 'New website page', price: 'From $300', detail: 'Standard content page using existing layout' },
      { name: 'New website feature or functionality', price: 'From $300', detail: 'Small addition using existing patterns' },
      { name: 'Major page redesign', price: 'From $600', detail: 'Layout/visual restructure, up to 2 revision rounds' },
      { name: 'Bulk content or catalogue updates', price: 'From $250', detail: 'Up to 50 items; $4 per additional item' },
      { name: 'Google Analytics setup', price: '$250', detail: '' },
      { name: 'Website speed & performance optimization', price: 'From $200', detail: 'Up to 15 pages at base rate' },
      { name: 'SEO optimization of existing pages', price: '$100/page', detail: '' },
      {
        name: 'Website SEO audit & report - Basic',
        price: '$500',
        detail: 'Up to 10 pages, prioritized findings',
      },
      {
        name: 'Website SEO audit & report - Standard',
        price: '$700',
        detail: 'Up to 25 pages, competitor comparison',
      },
      {
        name: 'Website SEO audit & report - Advanced',
        price: 'From $900',
        detail: 'Up to 40 pages, full competitor benchmarking',
      },
    ],
  },
  {
    title: 'One-time maintenance & support',
    rows: [
      { name: 'One-time security update & audit', price: '$200', detail: '' },
      { name: 'One-time performance check & optimization', price: '$150', detail: '' },
      { name: 'Emergency troubleshooting (outside business hours)', price: '$150 flat', detail: '' },
    ],
  },
  {
    title: 'Graphic design & promotional materials',
    rows: [
      { name: 'Promotional flyer (one-off) - Basic', price: 'From $350', detail: 'Up to 3 revision rounds' },
      { name: 'Promotional flyer (one-off) - Standard', price: 'From $600', detail: 'Advanced layout & custom graphics' },
      { name: 'Promotional flyer (one-off) - Advanced', price: 'From $900', detail: 'Up to 2 concept directions' },
      { name: 'Marketing graphic - Branded', price: '$150', detail: 'Templated graphic, existing brand assets' },
      { name: 'Marketing graphic - Custom promotional', price: '$300–500', detail: '' },
      { name: 'Campaign illustration / hero graphic', price: 'From $700', detail: 'Up to 2 concept directions' },
      { name: 'Logo design - Basic', price: 'From $1,000', detail: '1 concept, 3 revision rounds' },
      { name: 'Logo design - Standard', price: 'From $1,500', detail: '2 concepts, primary + secondary variations' },
      { name: 'Logo design - Advanced', price: 'From $2,500', detail: '3 concepts, full brand mark system' },
      { name: 'Brand identity package - Basic', price: 'From $1,500', detail: 'Logo, colours, fonts, 1-page guideline' },
      { name: 'Brand identity package - Standard', price: 'From $2,000', detail: 'Full colour & typography system, collateral templates' },
      { name: 'Brand identity package - Advanced', price: 'From $4,000', detail: 'Full system, up to 15-page guideline' },
      { name: 'Marketing graphic pack (3 posts, Basic)', price: '$400', detail: '' },
      { name: 'Event promotion campaign (graphics + copy)', price: '$600', detail: '' },
      { name: 'Business card design', price: '$250', detail: '' },
      { name: 'Banner or signage design', price: 'From $200', detail: '1 design, up to 2 sizes' },
    ],
  },
  {
    title: 'One-time social, ads, reporting & email',
    rows: [
      { name: 'Additional single social post', price: '$50/post', detail: 'Outside a monthly package' },
      { name: 'Social media account setup & profile optimization', price: '$150', detail: '' },
      { name: 'Additional flyer (beyond monthly allocation)', price: '$250/flyer', detail: 'Basic tier rate' },
      { name: 'Quarterly seasonal or promotional campaign', price: '$450/quarter', detail: 'Graphics + copy' },
      { name: 'Ad campaign setup & audience targeting', price: '$250/platform', detail: 'One-time per platform' },
      { name: 'Marketing strategy consultation (1 hour)', price: '$100', detail: '' },
      { name: 'Email marketing platform & template setup', price: '$400', detail: '' },
      { name: 'Email automation workflow', price: 'From $300', detail: 'Up to 3 emails in sequence' },
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

export function getServiceById(id: string): SelectableService | undefined {
  return selectableServices.find((s) => s.id === id);
}

export function computeRetainerEstimate(selectedIds: Set<string>, appliedBundleId: string | null) {
  const items = selectableServices.filter((s) => selectedIds.has(s.id));
  const monthlyTotal = items.filter((s) => s.billing === 'monthly').reduce((sum, s) => sum + s.amountCad, 0);

  const setupFee =
    appliedBundleId != null
      ? 0
      : monthlyTotal > 0
        ? monthlyTotal >= retainerRules.setupThreshold
          ? retainerRules.setupFee1500Plus
          : retainerRules.setupFeeUnder1500
        : 0;

  const bundle = appliedBundleId ? retainerBundles.find((b) => b.id === appliedBundleId) : undefined;

  return {
    items,
    monthlyTotal,
    setupFee,
    bundle,
    meetsMinimum: monthlyTotal === 0 || monthlyTotal >= retainerRules.minimumMonthly,
  };
}

export function formatCad(amount: number): string {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    maximumFractionDigits: 0,
  }).format(amount);
}

export interface ServiceQuotePayload {
  selectedIds: string[];
  appliedBundleId: string | null;
  itemLabels: string[];
}

export function buildServiceQuoteMessage(quote: ServiceQuotePayload): string {
  const lines = quote.itemLabels.map((label) => `• ${label}`).join('\n');

  const bundleNote = quote.appliedBundleId
    ? '\n\nI selected a suggested bundle as a starting point, but I am open to adjusting the services based on scope.'
    : '';

  return `Hi Christian,

I'm interested in discussing the following services:

${lines || '(No services selected)'}${bundleNote}

I'd like to discuss scope, timing, pricing, and next steps.`;
}
