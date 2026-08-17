import type { VinePathData } from './vinePaths';

interface VinePathProps {
  data: VinePathData;
  reducedMotion?: boolean;
  includeId?: boolean;
}

export function VinePath({ data, reducedMotion = false, includeId = true }: VinePathProps) {
  const isFill = data.layer === 'leaf' || data.layer === 'flower';
  const baseClass = [
    'art-nouveau-vine',
    `art-nouveau-vine--${data.layer}`,
    data.highlight ? 'art-nouveau-vine--highlight' : '',
    reducedMotion ? 'art-nouveau-vine--static' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const breatheStyle =
    !reducedMotion && data.breatheDelay !== undefined
      ? ({ animationDelay: `${data.breatheDelay}s` } as const)
      : undefined;

  return (
    <path
      {...(includeId ? { id: data.id } : {})}
      d={data.d}
      className={baseClass}
      strokeWidth={data.strokeWidth}
      fill={isFill ? 'none' : 'none'}
      style={breatheStyle}
      vectorEffect="non-scaling-stroke"
    />
  );
}
