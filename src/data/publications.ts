export interface Publication {
  title: string;
  venue: string;
  year: string;
  description: string;
  url: string;
}

export const publications: Publication[] = [
  {
    title: 'The Point, The Pursuit, & The Impossible',
    venue: 'Zenodo',
    year: '2025',
    description:
      'A preprint presenting three original paradoxes exploring the intersection of philosophy, logic, and poetry.',
    url: 'https://doi.org/10.5281/zenodo.15289202',
  },
  {
    title: 'Oculus Aeternum: A Framework for Entangled Viewing Across Space-Time',
    venue: 'Zenodo',
    year: '2025',
    description:
      'Speculative paper proposing a conceptual pathway for quantum information retrieval across cosmological distances.',
    url: 'https://doi.org/10.5281/zenodo.15289148',
  },
  {
    title: 'Reditus Cosmicus: A Thought Experiment in Gravitational Lensing',
    venue: 'Zenodo',
    year: '2025',
    description:
      'Analytical thought experiment exploring light path capture via cascaded gravitational lens structures.',
    url: 'https://doi.org/10.5281/zenodo.15648075',
  },
];
