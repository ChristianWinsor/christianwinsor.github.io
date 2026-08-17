export interface GalleryItem {
  id: string;
  category: GalleryCategory;
  title: string;
  description: string;
  src: string;
  alt: string;
}

export type GalleryCategory =
  | 'ui-ux'
  | 'branding'
  | 'advertising'
  | 'illustration';

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: 'ui-ux', label: 'UI/UX & Prototypes' },
  { id: 'branding', label: 'Logos & Branding' },
  { id: 'advertising', label: 'Advertisements & Events' },
];

const base = '/gallery';

export const galleryItems: GalleryItem[] = [
  { id: 'figma0', category: 'ui-ux', title: 'Accelera Project Prototype', description: 'A prototype showing a large project for Accelera.', src: `${base}/Figma0.webp`, alt: 'Accelera project prototype' },
  { id: 'figma1', category: 'ui-ux', title: 'Single Page Ad', description: 'A Figma single-page advertisement for Accelera.', src: `${base}/figma1.webp`, alt: 'Figma single page ad' },
  { id: 'figma2', category: 'ui-ux', title: 'Login/Verification Flow', description: 'Login verification flow designed for Accelera.', src: `${base}/figma2.webp`, alt: 'Figma login flow' },
  { id: 'figma3', category: 'ui-ux', title: 'Large Project Design', description: 'Application flow design for a major Accelera project.', src: `${base}/figma3.webp`, alt: 'Large project design' },
  { id: 'figma4', category: 'ui-ux', title: 'Application Flow Design', description: 'Complex application flow design.', src: `${base}/figma4.webp`, alt: 'Application flow design' },
  { id: 'figma6', category: 'ui-ux', title: 'Application with Styleguide', description: 'Application design with styleguide and components.', src: `${base}/figma6.webp`, alt: 'Application with styleguide' },
  { id: 'figma7', category: 'ui-ux', title: 'Customizable Dashboard', description: 'Plan for a customizable dashboard experience.', src: `${base}/figma7.webp`, alt: 'Customizable dashboard design' },
  { id: 'figma8', category: 'ui-ux', title: 'Application Design', description: 'Another application design created for Accelera.', src: `${base}/figma8.webp`, alt: 'Application design' },
  { id: 'figma9', category: 'ui-ux', title: 'Public Samples & Styles', description: 'Presentation screen showing various styles and samples.', src: `${base}/figma9.webp`, alt: 'Presentation with styles and samples' },
  { id: 'figma91', category: 'ui-ux', title: 'YouTube Screens & Logos', description: 'Logo design and YouTube video screens.', src: `${base}/figma91.webp`, alt: 'Logo designs and YouTube screens' },
  { id: 'figmaproto1', category: 'ui-ux', title: 'Prototype Collage', description: 'Collage of prototypes with large Prototypes heading.', src: `${base}/figmaproto1.webp`, alt: 'Prototypes collage' },
  { id: 'prototype0', category: 'ui-ux', title: 'Full Prototype Flow', description: 'Complete prototype flow built from scratch.', src: `${base}/prototype0.webp`, alt: 'Full prototype flow' },
  { id: 'prototype1', category: 'ui-ux', title: 'Complex Prototype', description: 'Large prototype with complex user flow.', src: `${base}/prototype1.webp`, alt: 'Complex prototype flow' },
  { id: 'prototypes2', category: 'ui-ux', title: 'Multi-Page Prototype', description: '51-page prototype zoomed to a single screen.', src: `${base}/prototypes2.webp`, alt: 'Multi-page prototype' },
  { id: 'prototypes3', category: 'ui-ux', title: 'Accelera App Design', description: 'Large application design for Accelera.', src: `${base}/prototypes3.webp`, alt: 'Accelera application design' },
  { id: 'pawnstars', category: 'branding', title: 'Pawn Stars Logo', description: 'Logo created for Pawn Stars.', src: `${base}/1.webp`, alt: 'Pawn Stars Logo' },
  { id: 'accelera-banner', category: 'branding', title: 'Accelera YouTube Banner', description: 'Banner design for Accelera YouTube channel.', src: `${base}/Accelerabanner.webp`, alt: 'Accelera YouTube banner' },
  { id: 'cblogo', category: 'branding', title: 'Cardboarder Logo', description: 'Logo for the Cardboarder mobile application.', src: `${base}/cblogo.webp`, alt: 'Cardboarder Logo' },
  { id: 'twslogo2', category: 'branding', title: 'TWS Game Logo v3', description: 'Alternate logo for Three Word Story.', src: `${base}/TWSlogo2.webp`, alt: 'TWS game logo alternate' },
  { id: 'carbuncle', category: 'advertising', title: 'Trading Card Ad', description: 'Trading card style event advertisement.', src: `${base}/carbuncle.webp`, alt: 'Trading card style ad' },
  { id: 'cardboarderpreview', category: 'advertising', title: 'Kickstarter Flier', description: 'Flier for Cardboarder Kickstarter.', src: `${base}/cardboarderpreview.webp`, alt: 'Cardboarder Kickstarter flier' },
  { id: 'figmafcads', category: 'advertising', title: 'FFXIV Event Ads', description: 'Seven event advertisements for FFXIV group.', src: `${base}/figmafcads.webp`, alt: 'FFXIV event ads' },
  { id: 'jackboxnight', category: 'advertising', title: 'FFXIV Jackbox Ad', description: 'Commissioned ad for FFXIV community event.', src: `${base}/jackboxnight.webp`, alt: 'FFXIV Jackbox Night ad' },
];

export function filterGallery(category: GalleryCategory | 'all'): GalleryItem[] {
  if (category === 'all') return galleryItems;
  return galleryItems.filter((item) => item.category === category);
}
