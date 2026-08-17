import { useRef } from 'react';
import { ArtNouveauFrame } from './ArtNouveauFrame';
import { DEFAULT_GLOW_CONFIGS } from './GlowTrail';
import { GLOW_PATH_IDS } from './vinePaths';
import { useGlowAnimation, useMouseParallax, useReducedMotion } from './useGlowAnimation';
import './Background.css';

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const reducedMotion = useReducedMotion();
  const animate = !reducedMotion;

  useGlowAnimation(svgRef, DEFAULT_GLOW_CONFIGS, animate, GLOW_PATH_IDS);
  useMouseParallax(containerRef, animate);

  return (
    <div
      ref={containerRef}
      className={`animated-background${reducedMotion ? ' animated-background--reduced' : ''}`}
      aria-hidden="true"
    >
      <ArtNouveauFrame ref={svgRef} reducedMotion={reducedMotion} />
    </div>
  );
}
