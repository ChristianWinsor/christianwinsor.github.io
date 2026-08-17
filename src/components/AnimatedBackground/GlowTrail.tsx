import type { GlowParticleConfig } from './useGlowAnimation';

interface GlowTrailProps {
  configs: GlowParticleConfig[];
}

/** Glow particle path assignments - kept as a declarative config layer. */
export const DEFAULT_GLOW_CONFIGS: GlowParticleConfig[] = [
  {
    pathId: 'vine-tl-stem',
    speed: 0.048,
    brightness: 0.85,
    phase: 0,
    radius: 72,
    startProgress: 0.05,
  },
  {
    pathId: 'vine-tr-branch-a',
    speed: 0.024,
    brightness: 0.7,
    phase: 1.8,
    radius: 58,
    startProgress: 0.35,
  },
  {
    pathId: 'vine-bl-branch-b',
    speed: 0.015,
    brightness: 0.75,
    phase: 3.2,
    radius: 65,
    startProgress: 0.62,
  },
  {
    pathId: 'vine-br-stem',
    speed: 0.021,
    brightness: 0.8,
    phase: 4.5,
    radius: 70,
    startProgress: 0.18,
  },
  {
    pathId: 'vine-left-stem',
    speed: 0.012,
    brightness: 0.55,
    phase: 2.1,
    radius: 48,
    startProgress: 0.78,
  },
  {
    pathId: 'vine-right-stem',
    speed: 0.036,
    brightness: 0.6,
    phase: 5.8,
    radius: 52,
    startProgress: 0.42,
  },
];

export function GlowTrail(_props: GlowTrailProps) {
  return null;
}
