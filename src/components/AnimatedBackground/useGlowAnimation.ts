import { useEffect, useRef, useState } from 'react';

export interface GlowParticleConfig {
  pathId: string;
  speed: number;
  brightness: number;
  phase: number;
  radius: number;
  startProgress?: number;
}

interface ParticleState {
  pathId: string;
  progress: number;
  speed: number;
  brightness: number;
  pulsePhase: number;
  radius: number;
  branchCooldown: number;
  id: number;
}

const BRANCH_CHANCE = 0.0008;
const MAX_PARTICLES = 7;

function pickBranchPath(currentId: string, eligible: string[]): string | null {
  const others = eligible.filter((id) => id !== currentId);
  if (others.length === 0) return null;
  return others[Math.floor(Math.random() * others.length)]!;
}

export function useGlowAnimation(
  svgRef: React.RefObject<SVGSVGElement | null>,
  configs: GlowParticleConfig[],
  enabled: boolean,
  eligiblePathIds: string[],
) {
  const statesRef = useRef<ParticleState[]>([]);
  const rafRef = useRef(0);
  const lastTimeRef = useRef(0);
  const pausedRef = useRef(false);
  const nextIdRef = useRef(configs.length);

  useEffect(() => {
    if (!enabled) return;

    statesRef.current = configs.map((c, i) => ({
      pathId: c.pathId,
      progress: c.startProgress ?? (i * 0.23 + 0.05) % 1,
      speed: c.speed,
      brightness: c.brightness,
      pulsePhase: c.phase,
      radius: c.radius,
      branchCooldown: 4 + i * 2,
      id: i,
    }));

    const handleVisibility = () => {
      pausedRef.current = document.hidden;
      if (!document.hidden) {
        lastTimeRef.current = performance.now();
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);

    const updateSpot = (state: ParticleState) => {
      const svg = svgRef.current;
      if (!svg) return;

      const path = svg.querySelector(`#${state.pathId}`) as SVGPathElement | null;
      const spot = svg.querySelector(`#glow-spot-${state.id}`) as SVGCircleElement | null;
      const orb = svg.querySelector(`#glow-orb-${state.id}`) as SVGCircleElement | null;
      if (!path || !spot) return;

      const length = path.getTotalLength();
      const point = path.getPointAtLength(state.progress * length);
      const pulse = 0.65 + 0.35 * Math.sin(state.pulsePhase);
      const r = state.radius * (0.85 + 0.15 * pulse);
      const opacity = state.brightness * pulse;

      spot.setAttribute('cx', point.x.toFixed(1));
      spot.setAttribute('cy', point.y.toFixed(1));
      spot.setAttribute('r', r.toFixed(1));
      spot.setAttribute('opacity', opacity.toFixed(3));

      if (orb) {
        orb.setAttribute('cx', point.x.toFixed(1));
        orb.setAttribute('cy', point.y.toFixed(1));
        orb.setAttribute('r', (r * 0.35).toFixed(1));
        orb.setAttribute('opacity', (opacity * 0.55).toFixed(3));
      }
    };

    const animate = (time: number) => {
      rafRef.current = requestAnimationFrame(animate);

      if (pausedRef.current) return;

      const delta = lastTimeRef.current ? (time - lastTimeRef.current) / 1000 : 0;
      lastTimeRef.current = time;
      if (delta <= 0 || delta > 0.1) return;

      const svg = svgRef.current;
      if (!svg) return;

      for (const state of statesRef.current) {
        state.progress = (state.progress + state.speed * delta) % 1;
        state.pulsePhase += delta * (0.9 + state.speed * 40);
        state.branchCooldown -= delta;

        if (
          state.branchCooldown <= 0 &&
          statesRef.current.length < MAX_PARTICLES &&
          Math.random() < BRANCH_CHANCE
        ) {
          const branchPath = pickBranchPath(state.pathId, eligiblePathIds);
          if (branchPath) {
            const newId = nextIdRef.current++;
            const branchSpot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            branchSpot.setAttribute('id', `glow-spot-${newId}`);
            branchSpot.setAttribute('fill', 'white');
            branchSpot.setAttribute('class', 'art-nouveau-glow-spot');

            const maskGroup = svg.querySelector('#glow-mask-spots');
            maskGroup?.appendChild(branchSpot);

            statesRef.current.push({
              pathId: branchPath,
              progress: state.progress,
              speed: state.speed * (0.6 + Math.random() * 0.5),
              brightness: state.brightness * (0.5 + Math.random() * 0.3),
              pulsePhase: state.pulsePhase + Math.random() * Math.PI,
              radius: state.radius * 0.65,
              branchCooldown: 8 + Math.random() * 6,
              id: newId,
            });
          }
          state.branchCooldown = 6 + Math.random() * 8;
        }

        updateSpot(state);
      }
    };

    lastTimeRef.current = performance.now();
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [enabled, svgRef, configs, eligiblePathIds]);
}

export function useMouseParallax(containerRef: React.RefObject<HTMLElement | null>, enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;

    const el = containerRef.current;
    if (!el) return;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMove = (e: PointerEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;
      el.style.setProperty('--parallax-x', currentX.toFixed(4));
      el.style.setProperty('--parallax-y', currentY.toFixed(4));

      const proximity = 1 - Math.min(1, Math.hypot(currentX, currentY) * 0.4);
      el.style.setProperty('--mouse-proximity', proximity.toFixed(3));

      if (Math.abs(targetX - currentX) > 0.001 || Math.abs(targetY - currentY) > 0.001) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [containerRef, enabled]);
}

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false,
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return reduced;
}
