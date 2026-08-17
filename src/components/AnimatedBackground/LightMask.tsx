interface LightMaskProps {
  spotCount: number;
  reducedMotion?: boolean;
}

export function LightMask({ spotCount, reducedMotion = false }: LightMaskProps) {
  return (
    <defs>
      <filter id="vine-soft-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter id="vine-ambient-glow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
      </filter>

      <radialGradient id="vine-glow-gradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(255, 248, 235, 0.95)" />
        <stop offset="35%" stopColor="rgba(255, 248, 235, 0.4)" />
        <stop offset="65%" stopColor="rgba(212, 168, 83, 0.08)" />
        <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
      </radialGradient>

      <mask id="vine-illumination-mask">
        <rect width="100%" height="100%" fill="black" />
        {!reducedMotion && (
          <g id="glow-mask-spots" filter="url(#vine-ambient-glow)">
            {Array.from({ length: spotCount }, (_, i) => (
              <circle
                key={i}
                id={`glow-spot-${i}`}
                r={0}
                cx={0}
                cy={0}
                fill="white"
                opacity={0}
                className="art-nouveau-glow-spot"
              />
            ))}
          </g>
        )}
      </mask>

      <linearGradient id="vine-fade-edge" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="white" stopOpacity="1" />
        <stop offset="70%" stopColor="white" stopOpacity="0.3" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  );
}
