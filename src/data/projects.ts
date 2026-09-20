export type ProjectType = 'client' | 'personal' | 'professional';
export type ProjectStatus = 'shipped' | 'live' | 'in-progress' | 'documented' | 'archived';

export interface ProjectSection {
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
}

export interface ProjectMedia {
  src: string;
  alt: string;
  caption: string;
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
  listed: boolean;
  tags: string[];
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  publicationUrl?: string;
  heroImage: string;
  cardImage?: string;
  cardDescription: string;
  overview: string;
  challenge: string[];
  solution: string[];
  deliverables: string[];
  sections?: ProjectSection[];
  outcomes?: string[];
  media?: ProjectMedia[];
  mediaIntro?: string;
  techStack: string[];
  nextProject?: string;
}

export const projects: Project[] = [
  {
    slug: 'malawian-fish-room',
    title: 'The Malawian Fish Room',
    subtitle: 'Building a retail brand and sales journey from a logo and 33 fish images',
    role: 'Sole Designer, Developer & Marketing Partner',
    timeline: '2026',
    status: 'shipped',
    type: 'client',
    featured: true,
    listed: true,
    tags: ['Client work', 'Brand & web', 'Launch campaign'],
    stack: ['Next.js', 'Tailwind', 'Vercel', 'Print design'],
    liveUrl: 'https://www.themalawianfishroom.ca',
    repoUrl: 'https://github.com/TheMalawianFishRoom/MalawianFishRoomWebsite',
    heroImage: '/projects/malawian-fish-room/malawianfishroom_website_screenshot.png',
    cardDescription: 'From a logo and 33 supplied images to a retail website, searchable catalogue, launch materials, and client handoff.',
    overview: 'The owners wanted to launch a fish business. They supplied a logo and 33 images; I developed the information, visual direction, website, catalogue, SEO foundation, and promotional materials around them. I also helped with social advertising and showed the owners how to set up campaigns so they could carry the work forward themselves.',
    challenge: [
      'A new retail audience needed to understand the fish, the business, and how to inquire without a conventional checkout.',
      'The available starting materials were a logo and 33 fish photographs; the content, structure, and launch materials still needed to be created.',
      'The owners needed a way to maintain promotion without depending on me for every campaign.',
    ],
    solution: [
      'Defined the site structure, product information, brand voice, and visual treatment for a premium cichlid retailer.',
      'Designed and built a responsive Next.js website with a searchable and filterable catalogue, galleries, FAQs, and inquiry paths.',
      'Developed SEO metadata, sitemap, promotional sections, flyers, and press-ready artwork as one connected launch presence.',
      'Helped the owners set up social ad campaigns and walked them through the process for future use.',
    ],
    deliverables: [
      'Responsive website and searchable fish catalogue',
      'Product information and brand voice',
      'SEO foundation and reusable site sections',
      'Digital and print flyers with press-ready artwork',
      'Social campaign guidance and owner handoff',
    ],
    sections: [
      { title: 'From raw assets to a retail story', body: 'With only a logo and 33 fish images at the start, I established the information hierarchy, product presentation, and voice that let a new customer understand the offering and make an inquiry.' },
      { title: 'A catalogue matched to the sales model', body: 'Search, filters, product cards, and image views make the fish easy to explore. Inquiry calls to action support the way the business sells instead of forcing a checkout the business did not need.' },
      { title: 'A launch beyond the website', body: 'Flyers, promotional content, and social advertising carried the same direction into print and digital channels. I showed the owners how to manage campaigns after handoff.' },
    ],
    outcomes: [
      'Launched a public retail presence and a browsable, inquiry-led catalogue.',
      'Helped the business reach more than 200 social followers in its first month of promotion.',
      'Equipped the owners to set up and run future social ad campaigns themselves.',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Catalogue UX', 'SEO', 'Print production', 'Social advertising'],
    nextProject: 'among-the-letters',
  },
  {
    slug: 'among-the-letters',
    title: 'Among the Letters',
    subtitle: 'An independent literary publication connecting writers and readers with useful opportunities and worthwhile work',
    role: 'Founder, Editor, Designer & Developer',
    timeline: '2026 – Present',
    status: 'live',
    type: 'personal',
    featured: true,
    listed: true,
    tags: ['Editorial direction', 'Publication', 'Brand identity'],
    stack: ['Editorial strategy', 'Web design', 'Branding', 'Substack'],
    liveUrl: 'https://amongtheletters.github.io/',
    publicationUrl: 'https://amongtheletters.substack.com/',
    heroImage: '/amongletters.png',
    cardDescription:
      'An independent newsletter and website with two editorial formats, a distinct visual identity, and publishing on Substack.',
    overview:
      'I created Among the Letters as a publication for writers, readers, and curious people. I developed its concept, editorial direction, brand identity, website, newsletter formats, and publishing presence. Morning Opportunities brings together source-checked writing and editorial opportunities; Afternoon Discoveries introduces books, authors, essays, stories, and other literary finds.',
    challenge: [
      'Writing opportunities and literary recommendations are scattered across many sources, making discovery time-consuming.',
      'The publication needed two distinct formats without feeling like two unrelated brands.',
      'The public website needed to explain the value of both free and paid editions clearly before sending readers to Substack.',
    ],
    solution: [
      'Defined the editorial promise, publishing rhythm, and two complementary newsletter formats.',
      'Created a literary visual identity with wordmarks, circular marks, warm imagery, and a consistent tone of voice.',
      'Built a public website that explains the editorial formats, selection approach, subscription options, and next steps.',
      'Established a Substack publication for distributing and archiving the newsletter.',
    ],
    deliverables: [
      'Publication concept and editorial strategy',
      'Among the Letters brand identity and visual assets',
      'Responsive public website',
      'Morning Opportunities and Afternoon Discoveries newsletter formats',
      'Substack publication and published editions',
    ],
    sections: [
      { title: 'One publication, two reader needs', body: 'Morning Opportunities helps writers find work, contests, grants, residencies, and calls for submissions. Afternoon Discoveries creates a daily space for books, essays, authors, stories, and literary work worth revisiting. The formats serve different moments while sharing the same editorial voice.' },
      { title: 'Trust through sourcing', body: 'Opportunity editions foreground practical details and point readers to original sources. That sourcing standard is explained on the website so readers know how to assess a listing before they act.' },
      { title: 'A connected reading journey', body: 'The website introduces the concept and subscription choices; Substack hosts the editions and manages delivery. Clear links between the two keep discovery, reading, and subscribing easy to follow.' },
    ],
    outcomes: [
      'Launched a public website and Substack publication under one editorial identity.',
      'Published both opportunity and discovery editions.',
      'Established a repeatable format and source-checking approach for future issues.',
    ],
    media: [
      { src: '/amongletters.png', alt: 'Among the Letters editorial still life with an open book, envelopes, pen, and coffee', caption: 'Editorial imagery' },
      { src: '/amongthelettersbranding.png', alt: 'Among the Letters script wordmark in a framed brand treatment', caption: 'Publication wordmark' },
      { src: '/atllogo-removebg-preview.png', alt: 'Circular Among the Letters brand mark', caption: 'Circular brand mark' },
      //{ src: '/atllogo.jpg', alt: 'Among the Letters circular logo on a light background', caption: 'Logo variation' },
    ],
    techStack: ['Editorial direction', 'Brand identity', 'Website design', 'Newsletter publishing', 'Substack'],
    nextProject: 'hubbit',
  },
  {
    slug: 'hubbit',
    title: 'HubBit',
    subtitle: 'An independent full-stack chess arcade with an original survival mode',
    role: 'Founder, Designer & Developer',
    timeline: '2025 – Present',
    status: 'live',
    type: 'personal',
    featured: true,
    listed: true,
    tags: ['Independent product', 'Live', 'Full stack'],
    stack: ['React', 'Supabase', 'Stripe', 'Game systems'],
    liveUrl: 'https://hubbit-pi.vercel.app',
    heroImage: '/projects/hubbit/hubbit_cosmetics.png',
    cardDescription: 'A live chess arcade I conceived and built end to end, with an original survival mode, accounts, payments, quests, and cosmetics.',
    overview: 'I conceived, designed, and built HubBit as a live browser-based arcade. It brings standard chess and my original survival game into one platform, with accounts, payments, cosmetics, quests, leaderboards, and progression. The survival mode uses its own rules, economy mechanics, and working game engines.',
    challenge: [
      'A custom chess mode needed clear rules and feedback while preserving the familiarity of a chess board.',
      'Accounts, progression, purchases, and cosmetics needed to feel like one coherent product rather than separate features.',
      'A solo build required the design, game logic, data, payments, and live deployment to work together.',
    ],
    solution: [
      'Designed the product concept, visual system, responsive interface, and game journeys.',
      'Built standard chess and a distinct wave-based survival mode with tokens, piece purchasing, and escalating challenges.',
      'Developed working game engines and connected the platform to account data, quests, rewards, leaderboards, and customization.',
      'Integrated Supabase-backed accounts and persistence with Stripe payment flows for purchases.',
    ],
    deliverables: [
      'Live browser-based chess arcade',
      'Original survival chess mode and economy',
      'Working chess engines and game interfaces',
      'Accounts, quests, leaderboards, and progression',
      'Payment flows and cosmetic customization',
    ],
    sections: [
      { title: 'A new mode built on a familiar board', body: 'Survival chess uses waves, tokens, piece purchasing, and custom rules to create a different rhythm from a standard match. The interface has to explain each decision in the moment of play.' },
      { title: 'A platform around the games', body: 'Profiles, quests, rewards, leaderboards, and cosmetics connect individual sessions into a longer journey, with persistent account data and purchase flows.' },
      { title: 'Design through production', body: 'I own the concept, experience, visual assets, game mechanics, frontend, backend integration, and continued development of the live site.' },
    ],
    outcomes: [
      'Launched a full-stack arcade website with standard and original survival chess experiences.',
      'Connected game systems to accounts, payment flows, progression, quests, cosmetics, and leaderboards.',
      'Continued developing the independent product beyond the initial release.',
    ],
    techStack: ['React', 'Next.js', 'Supabase', 'PostgreSQL', 'Stripe', 'Stockfish', 'Custom game logic'],
    nextProject: 'accelera',
  },
  {
    slug: 'accelera',
    title: 'Product & Creative Leadership at Accelera / Root',
    subtitle: 'Leading teams and connecting client products, design systems, brand, content, and development',
    role: 'Design Lead; Frontend Developer',
    timeline: '2020 – 2024',
    status: 'archived',
    type: 'professional',
    featured: true,
    listed: true,
    tags: ['Team leadership', 'Product design', 'Brand & media'],
    stack: ['Figma', 'React', 'Design systems', 'Video'],
    heroImage: '/projects/accelera/accelerahero.png',
    cardDescription: 'Led creative and frontend teams while shaping client products, design systems, brand work, training, and a 100+ video channel.',
    overview: 'Across roughly four years at Accelera / Root, I moved from frontend development into design leadership. I led and coordinated creative and frontend work, reported to company leadership, and worked directly with clients. My scope covered SaaS and fintech products, crypto, blockchain, and metaverse concepts, product interfaces, websites, identity, presentations, documentation, promotions, social presence, and a YouTube channel I scripted, produced, and maintained.',
    challenge: [
      'Client concepts and complex product domains needed to become usable interfaces and credible presentations.',
      'Teams needed shared design standards, manuals, and coordination to carry work consistently into development.',
      'The company needed a coherent brand and a sustained content presence across products, client work, and public channels.',
    ],
    solution: [
      'Led creative and frontend coordination, reviewed work with teams, and reported progress to company heads.',
      'Worked directly with clients, including live sessions, to turn supplied concepts into prototypes, interfaces, websites, and product flows.',
      'Created design systems, palettes, logos, brand voice, promotional assets, presentations, and developer and creative training/setup manuals.',
      'Contributed frontend code, beta testing, and design-to-development handoff across SaaS and fintech work.',
      'Researched grants and funding, and created the scripts, visuals, production, editing, and maintenance for the company YouTube channel.',
    ],
    deliverables: [
      'Client prototypes, websites, user interfaces, and product flows',
      'Design systems, component libraries, brand standards, and logos',
      'Developer and creative training and setup manuals',
      'Presentations, promotions, and social media work',
      'More than 100 scripted and produced YouTube videos',
      'Frontend implementation and beta testing',
    ],
    sections: [
      { title: 'From client concept to working interface', body: 'I translated client ideas into flows, prototypes, and interfaces, often working with clients directly and making changes in real time. That work spanned SaaS, fintech, and emerging technology concepts.' },
      { title: 'Shared systems for teams', body: 'I coordinated creative and frontend contributors and documented the visual and technical standards they needed: palettes, components, style guides, and manuals for developers and creatives.' },
      { title: 'A public voice built in-house', body: 'I handled the channel identity, scripts, production, editing, and ongoing YouTube publishing, alongside presentations, promotions, and periods of social media management.' },
    ],
    outcomes: [
      'Built and maintained a YouTube channel with more than 100 videos and over 60,000 views.',
      'Created a presentation that helped the company gain acceptance to the Microsoft startup program.',
      'Connected client-facing design, brand work, documentation, and frontend execution through team leadership.',
    ],
    techStack: ['Figma', 'React', 'Frontend development', 'Design systems', 'Brand identity', 'Video production', 'Scriptwriting', 'Team coordination'],
    nextProject: 'kitchen-navigator',
  },
  {
    slug: 'kitchen-navigator',
    title: 'Kitchen Navigator',
    subtitle: 'An independently created recipe discovery and kitchen-planning product',
    role: 'Founder, Product Designer & Developer',
    timeline: '2024 – Present',
    status: 'in-progress',
    type: 'personal',
    featured: true,
    listed: true,
    tags: ['Independent product', 'Web & Android', 'Full stack'],
    stack: ['React', 'PWA', 'Cloudflare', 'Supabase'],
    heroImage: '/projects/kitchen-navigator/KitNav192Logo.png',
    cardImage: '/projects/kitchen-navigator/10inchtabletview2.png',
    cardDescription: 'From concept and a previously live app to a new deployment-ready architecture spanning recipes, pantry search, menus, and planning.',
    overview: 'I created Kitchen Navigator independently, from the concept and brand through the interface, application code, and deployment planning. An earlier version was live. The product helps people turn ingredients on hand into recipe options and carry those choices into menus, grocery lists, and meal plans. I am now restoring and migrating the codebase to a new architecture; the current version is prepared for deployment but still needs live infrastructure and end-to-end verification.',
    challenge: [
      'Recipe discovery, pantry ingredients, menus, grocery lists, and calendar planning needed to form one practical household workflow.',
      'The original live build needed a more maintainable application and recipe-data architecture.',
      'Free account access and optional premium features needed to be treated as distinct product paths.',
    ],
    solution: [
      'Designed ingredient-led recipe discovery, recipe details, favourites, menus, list generation, and meal/calendar planning flows.',
      'Built the web interface and PWA with an Android delivery path, along with the brand identity and app assets.',
      'Migrated the current architecture toward Cloudflare Pages, Workers, and D1 for application data, with a separate Supabase recipe platform.',
      'Planned account, premium entitlement, payment, deployment, and production verification paths without requiring a subscription for ordinary access.',
    ],
    deliverables: [
      'Earlier live web application and responsive interface',
      'Recipe search, detail, favourites, and pantry flows',
      'Menus, grocery lists, meal planning, and calendar planning',
      'Brand identity, app assets, PWA, and Android delivery path',
      'Current frontend, API, data migration, and deployment documentation',
    ],
    sections: [
      { title: 'Start with what is in the kitchen', body: 'Ingredient entry and filters give a person useful recipe options from what they already have. Recipe details make preparation, ingredients, and the next action clear.' },
      { title: 'Turn discovery into a plan', body: 'Saved recipes and menus can feed grocery lists and meal planning, connecting one meal choice to the rest of the week.' },
      { title: 'Rebuilding the foundation', body: 'The current project separates app and account state in Cloudflare D1 from recipe content and search in Supabase PostgreSQL. Worker APIs connect them to the React frontend, with optional premium entitlements planned separately from free accounts.' },
    ],
    outcomes: [
      'Designed, built, and previously launched an independent recipe and planning application.',
      'Developed connected discovery, menu, list, and planning journeys across web and Android paths.',
      'Completed a major architecture restoration through Phase 14; current production validation remains in progress.',
    ],
    mediaIntro: 'Screens from the earlier live interface. The current architecture is being prepared and verified separately.',
    media: [
      { src: '/projects/kitchen-navigator/10inchtabletview2.png', alt: 'Kitchen Navigator ingredient entry and suggested recipe cards', caption: 'Earlier live build: ingredient-led discovery' },
      { src: '/projects/kitchen-navigator/10inchtabletview3.png', alt: 'Kitchen Navigator recipe detail showing image, ingredients, instructions, and add-to-menu action', caption: 'Earlier live build: recipe detail' },
      { src: '/projects/kitchen-navigator/10inchtabletview4.png', alt: 'Kitchen Navigator menu editor with recipe order, print, and save actions', caption: 'Earlier live build: menu planning' },
      { src: '/projects/kitchen-navigator/10inchtabletview6.png', alt: 'Kitchen Navigator grocery list generated from selected menus', caption: 'Earlier live build: grocery list' },
    ],
    techStack: ['React', 'PWA', 'Android TWA', 'Cloudflare Pages', 'Cloudflare Workers', 'Cloudflare D1', 'Supabase PostgreSQL', 'Product architecture'],
    nextProject: 'maidol',
  },
  {
    slug: 'maidol',
    title: 'Maidol',
    subtitle: 'A local-first Android AI assistant built around model choice and user control',
    role: 'Founder, Product Designer & Developer',
    timeline: '2026 – Present',
    status: 'in-progress',
    type: 'personal',
    featured: false,
    listed: true,
    tags: ['Independent product', 'Android', 'Local AI'],
    stack: ['Kotlin', 'Jetpack Compose', 'llama.cpp', 'Room'],
    heroImage: '/Maidol_6.png',
    cardDescription: 'An on-device Android AI app I planned and built, with local GGUF chat, model downloads, API options, and explicit privacy controls.',
    overview: 'I planned, designed, and built Maidol as a model-agnostic Android AI chat app. It runs on my personal phone today. A user can bring a compatible GGUF model, download one in the app, or configure an official model API. Conversations are stored on the device, with controls for active context, generation, and whether network tools are allowed. I am debugging and extending the app while preparing it for a commercial release; it is not yet a publicly sold product.',
    challenge: [
      'On-device AI needs to make large models, active context, and device limits understandable to users.',
      'Local inference, optional API connections, and optional web access have different privacy implications.',
      'Long-running generation and multi-GB model transfers need recovery paths on a mobile device.',
    ],
    solution: [
      'Built the Android interface in Kotlin and Jetpack Compose, with local GGUF inference through llama.cpp and a native bridge.',
      'Added a three-path model chooser for local files, curated downloads, and official API connections; API keys use Android Keystore-backed encryption.',
      'Stored chats in Room and settings in DataStore, with saved conversations, streaming output, cancellation, and recovery work.',
      'Designed OFF, ASK, and ON network modes and bounded web-tool execution so access is explicit and constrained.',
      'Exposed optional controls for context size, token limits, temperature, system prompt, and diagnostics.',
    ],
    deliverables: [
      'Installed Android app and mobile chat interface',
      'Local GGUF model selection and on-device inference',
      'Model download and API connection paths',
      'Conversation history and generation settings',
      'Network permission modes, diagnostics, and runtime repair work',
    ],
    sections: [
      { title: 'Model choice without lock-in', body: 'The setup flow offers a local file, an in-app download, or an API connection. Maidol does not require a bundled model, and the interface explains the choice before a conversation starts.' },
      { title: 'Privacy as a visible decision', body: 'Local conversation history stays in Room. Internet OFF is the default; ASK requires approval for a supported tool request, and ON allows permitted requests. API conversations send the required prompt and context to the selected provider.' },
      { title: 'Building for real device constraints', body: 'The current code includes streamed model downloads, cancellation, chat checkpoints, model-access persistence, and native inference repairs. I am continuing device debugging before commercial release.' },
    ],
    outcomes: [
      'Built and installed a working personal Android app with local chat and configurable model paths.',
      'Connected mobile interface design to native inference, local persistence, API adapters, and explicit network controls.',
      'Established a product foundation now being debugged and expanded for a future commercial release.',
    ],
    mediaIntro: 'Screens from the current personal on-device build. Select any image to view it at full size.',
    media: [
      { src: '/Maidol_1.png', alt: 'Maidol empty conversation screen with message composer and settings access', caption: 'Conversation start' },
      { src: '/Maidol_6.png', alt: 'Maidol dialog offering local model, model download, and API connection paths', caption: 'Model choice' },
      { src: '/Maidol_7.png', alt: 'Maidol local model download options with sizes and descriptions', caption: 'Local model downloads' },
      { src: '/Maidol_4.png', alt: 'Maidol settings showing a local model, system prompt, and internet permission modes', caption: 'Privacy and system prompt settings' },
      { src: '/Maidol_2.png', alt: 'Maidol settings showing context, token, and temperature controls', caption: 'Generation controls' },
      { src: '/Maidol_3.png', alt: 'Maidol settings showing saved chats and diagnostics access', caption: 'Conversation management' },
      { src: '/Maidol_5.png', alt: 'Maidol chat screen while generating a response', caption: 'Chat in progress' },
    ],
    techStack: ['Kotlin', 'Jetpack Compose', 'Android', 'llama.cpp', 'JNI', 'GGUF', 'Room', 'DataStore', 'Android Keystore'],
    nextProject: 'malawian-fish-room',
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
    listed: false,
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
