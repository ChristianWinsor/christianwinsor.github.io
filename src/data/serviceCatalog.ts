import {
  creativeWritingSections,
  projectServiceSections,
  retainerBundles,
  selectableServices,
  serviceCategories,
  writingBundles,
  type InfoTableSection,
  type ServiceBilling,
} from './services';

export interface CatalogOption {
  id: string;
  name: string;
  emailLabel: string;
  description: string;
  billing: ServiceBilling;
  kind: 'package' | 'service';
  includes?: string[];
  includedIds?: string[];
  exclusiveGroup?: string;
}

export interface CatalogSection {
  id: string;
  title: string;
  description: string;
  options: CatalogOption[];
}

export interface CatalogGoal {
  id: string;
  title: string;
  prompt: string;
  sections: CatalogSection[];
}

const monthlyOptions: CatalogOption[] = selectableServices.map((service) => ({
  id: `monthly-${service.id}`,
  name: service.name,
  emailLabel: service.name,
  description: service.description,
  billing: service.billing,
  kind: service.id === 'content-ongoing-bundle' ? 'package' : 'service',
  exclusiveGroup: service.exclusiveGroup,
  includes: service.id === 'content-ongoing-bundle'
    ? ['Two blog posts each month', 'Editing or proofreading up to 3,000 words each month', 'Brand voice consistency review']
    : undefined,
}));

function monthlySection(sourceId: string, id: string, title: string): CatalogSection {
  const source = serviceCategories.find((category) => category.id === sourceId);
  return {
    id,
    title,
    description: [source?.description, source?.note].filter(Boolean).join(' '),
    options: monthlyOptions.filter((option) => selectableServices.some(
      (service) => `monthly-${service.id}` === option.id && service.categoryId === sourceId,
    )),
  };
}

function tableSection(
  source: InfoTableSection,
  prefix: 'project' | 'writing',
  index: number,
  id: string,
  title: string,
  rows = source.rows.map((_, rowIndex) => rowIndex),
  packageRows: number[] = [],
): CatalogSection {
  return {
    id,
    title,
    description: source.intro ?? '',
    options: rows.map((rowIndex) => {
      const row = source.rows[rowIndex];
      return {
        id: `${prefix}-${index}-${rowIndex}`,
        name: row.name,
        emailLabel: `${source.title}: ${row.name}`,
        description: row.detail ?? '',
        billing: 'one-time' as const,
        kind: packageRows.includes(rowIndex) ? 'package' as const : 'service' as const,
        includes: packageRows.includes(rowIndex) && row.detail && row.detail !== 'Scope to be discussed'
          ? row.detail.split(/,\s+/).filter(Boolean) : undefined,
        exclusiveGroup: prefix === 'project' && index === 0 ? 'site-package'
          : prefix === 'project' && index === 2 && rowIndex >= 7 && rowIndex <= 9 ? 'app-build-level'
          : prefix === 'project' && index === 3 ? 'app-design-package'
          : prefix === 'writing' && index <= 1 ? `writing-level-${index}`
          : prefix === 'project' && index === 6 && rowIndex >= 6 && rowIndex <= 8 ? 'logo-level'
          : prefix === 'project' && index === 6 && rowIndex >= 9 && rowIndex <= 11 ? 'identity-level'
          : undefined,
      };
    }),
  };
}

const monthlyPlans: CatalogOption[] = retainerBundles.map((bundle) => ({
  id: `plan-${bundle.id}`,
  name: bundle.name,
  emailLabel: bundle.name,
  description: bundle.description,
  billing: 'monthly',
  kind: 'package',
  includedIds: bundle.serviceIds.map((id) => `monthly-${id}`),
  includes: bundle.serviceIds.map((id) => selectableServices.find((service) => service.id === id)?.name ?? id),
}));

const writingPackage = writingBundles.find((bundle) => bundle.id === 'brand-foundations-writing');
const ongoingContent = monthlyOptions.find((option) => option.id === 'monthly-content-ongoing-bundle');
if (!writingPackage || !ongoingContent) throw new Error('Writing bundle catalog is incomplete');

export const catalogGoals: CatalogGoal[] = [
  {
    id: 'websites', title: 'Build a website',
    prompt: 'I need a new site, an online store, or something added to a site I already have.',
    sections: [
      tableSection(projectServiceSections[0], 'project', 0, 'site-packages', 'New website packages', undefined, [0, 1, 2, 3]),
      tableSection(projectServiceSections[1], 'project', 1, 'site-features', 'Features to add'),
      tableSection(projectServiceSections[4], 'project', 4, 'site-improvements', 'Improve an existing site'),
    ],
  },
  {
    id: 'apps', title: 'Make an app or product',
    prompt: 'I have a product idea, a difficult user journey, or a build that needs a design plan.',
    sections: [
      tableSection(projectServiceSections[2], 'project', 2, 'app-design', 'Research and design', [0, 1, 2, 3, 4, 5, 6]),
      tableSection(projectServiceSections[2], 'project', 2, 'app-build', 'Build and connect it', [7, 8, 9, 10, 11, 12], [7, 8, 9]),
      tableSection(projectServiceSections[3], 'project', 3, 'app-bundles', 'Design starting packages', undefined, [0, 1, 2, 3]),
    ],
  },
  {
    id: 'brand', title: 'Shape a brand',
    prompt: 'I need a logo, visual identity, graphics, flyers, or a consistent look across channels.',
    sections: [
      tableSection(projectServiceSections[6], 'project', 6, 'brand-identity', 'Logo and identity', [6, 7, 8, 9, 10, 11], [9, 10, 11]),
      tableSection(projectServiceSections[6], 'project', 6, 'brand-graphics', 'Graphics and print', [0, 1, 2, 3, 4, 5, 12, 13, 14, 15]),
    ],
  },
  {
    id: 'writing', title: 'Find the right words',
    prompt: 'I need website copy, a brand voice, articles, editing, documentation, or stories.',
    sections: [
      {
        id: 'writing-packages', title: 'Writing packages',
        description: 'Start with a connected scope, then add other writing or design work as needed.',
        options: [
          {
            id: 'writing-brand-foundations', name: writingPackage.name, emailLabel: writingPackage.name,
            description: writingPackage.description, billing: writingPackage.billing, kind: 'package',
            includes: ['Brand voice guide', 'Website copy for up to five pages', 'Long-form launch blog post'],
          },
          ongoingContent,
        ],
      },
      tableSection(creativeWritingSections[0], 'writing', 0, 'writing-web', 'Website and marketing copy'),
      tableSection(creativeWritingSections[1], 'writing', 1, 'writing-technical', 'Guides and documentation'),
      tableSection(creativeWritingSections[2], 'writing', 2, 'writing-editing', 'Editing and proofreading'),
      tableSection(creativeWritingSections[3], 'writing', 3, 'writing-voice', 'Brand voice'),
      tableSection(creativeWritingSections[4], 'writing', 4, 'writing-stories', 'Articles and stories'),
      tableSection(creativeWritingSections[5], 'writing', 5, 'writing-other', 'Other content'),
    ],
  },
  {
    id: 'marketing', title: 'Reach more people',
    prompt: 'I need help with social posts, campaigns, email, reporting, or search visibility.',
    sections: [
      monthlySection('social', 'social-monthly', 'Social posts each month'),
      monthlySection('promotional', 'flyers-monthly', 'Flyers each month'),
      monthlySection('advertising', 'ads-monthly', 'Ad campaigns each month'),
      monthlySection('reporting', 'reporting-monthly', 'Reports and search visibility'),
      monthlySection('email', 'email-monthly', 'Email campaigns each month'),
      tableSection(projectServiceSections[7], 'project', 7, 'marketing-projects', 'One-time marketing help'),
    ],
  },
  {
    id: 'care', title: 'Keep things running',
    prompt: 'I need ongoing website care, a support plan, or help with a specific issue.',
    sections: [
      {
        id: 'monthly-plans', title: 'Suggested monthly plans',
        description: 'These starting points can be combined with other services. Open one to see everything included.',
        options: monthlyPlans,
      },
      monthlySection('core-care', 'core-care', 'Website care levels'),
      monthlySection('care-addons', 'care-extras', 'Extra website care'),
      monthlySection('support', 'support-level', 'Faster response'),
      tableSection(projectServiceSections[5], 'project', 5, 'one-time-care', 'One-time fixes and checks'),
    ],
  },
];

export const catalogOptions = [...new Map(catalogGoals.flatMap((goal) =>
  goal.sections.flatMap((section) => section.options.map((option) => [option.id, option] as const)),
)).values()];

const optionById = new Map(catalogOptions.map((option) => [option.id, option]));
const optionContext = new Map(catalogGoals.flatMap((goal) =>
  goal.sections.flatMap((section) => section.options.map((option) => [option.id, `${goal.title} / ${section.title}`] as const)),
));
export function getOptionContext(id: string): string {
  return optionContext.get(id) ?? '';
}

export function getCatalogOption(id: string): CatalogOption | undefined {
  return optionById.get(id);
}

export function includedByPlan(optionId: string, selectedIds: Set<string>): CatalogOption | undefined {
  return monthlyPlans.find((plan) => selectedIds.has(plan.id) && plan.includedIds?.includes(optionId));
}

export const SERVICE_DRAFT_STORAGE_KEY = 'portfolioServiceDraftV2';
export const SERVICE_QUOTE_STORAGE_KEY = 'portfolioServiceQuoteV2';

export interface ServiceQuotePayload {
  version: 2;
  optionIds: string[];
  note: string;
}

export function validServiceQuote(value: unknown): value is ServiceQuotePayload {
  if (!value || typeof value !== 'object') return false;
  const quote = value as Partial<ServiceQuotePayload>;
  return quote.version === 2 && Array.isArray(quote.optionIds) &&
    quote.optionIds.length <= catalogOptions.length && quote.optionIds.every((id) => typeof id === 'string' && optionById.has(id)) &&
    typeof quote.note === 'string' && quote.note.length <= 2000;
}

export function buildServiceQuoteMessage(quote: ServiceQuotePayload): string {
  const selected = [...new Set(quote.optionIds)].map(getCatalogOption).filter((option): option is CatalogOption => Boolean(option));
  const section = (billing: ServiceBilling) => selected.filter((option) => option.billing === billing)
    .map((option) => {
      const contents = option.includes?.length ? `\n   Includes: ${option.includes.join('; ')}` : '';
      return `• ${option.emailLabel}${contents}`;
    }).join('\n');
  const projects = section('one-time');
  const ongoing = section('monthly');
  const parts = [
    projects && `Projects and one-time work:\n${projects}`,
    ongoing && `Ongoing support:\n${ongoing}`,
    quote.note.trim() && `What I am trying to achieve:\n${quote.note.trim()}`,
  ].filter(Boolean).join('\n\n');
  return `Hi Christian,\n\nI would like to discuss a custom scope for:\n\n${parts || 'I am not sure which services I need yet.'}\n\nPlease let me know what you recommend and provide a quote.\n`;
}
