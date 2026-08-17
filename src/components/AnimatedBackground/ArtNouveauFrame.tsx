import { forwardRef } from 'react';
import { VINE_PATHS, VIEWBOX } from './vinePaths';
import { VinePath } from './VinePath';
import { LightMask } from './LightMask';
import { DEFAULT_GLOW_CONFIGS } from './GlowTrail';

interface ArtNouveauFrameProps {
  reducedMotion?: boolean;
}

const GROUPS = [
  'corner-tl',
  'corner-tr',
  'corner-bl',
  'corner-br',
  'edge-left',
  'edge-right',
  'edge-top',
  'edge-bottom',
] as const;

export const ArtNouveauFrame = forwardRef<SVGSVGElement, ArtNouveauFrameProps>(
  function ArtNouveauFrame({ reducedMotion = false }, ref) {
    return (
      <svg
        ref={ref}
        className={`art-nouveau-frame${reducedMotion ? ' art-nouveau-frame--static' : ''}`}
        viewBox={VIEWBOX}
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        focusable="false"
      >
        <LightMask spotCount={DEFAULT_GLOW_CONFIGS.length} reducedMotion={reducedMotion} />

        {/* Base layer - nearly invisible resting state */}
        <g className="art-nouveau-base">
          {GROUPS.map((group) => (
            <g
              key={group}
              className={`art-nouveau-group art-nouveau-group--${group}`}
              data-group={group}
            >
              {VINE_PATHS.filter((p) => p.group === group).map((path) => (
                <VinePath key={path.id} data={path} reducedMotion={reducedMotion} />
              ))}
            </g>
          ))}
        </g>

        {/* Illuminated layer - revealed only where light travels */}
        {!reducedMotion && (
          <g className="art-nouveau-illuminated" mask="url(#vine-illumination-mask)">
            {GROUPS.map((group) => (
              <g key={`lit-${group}`} className={`art-nouveau-group art-nouveau-group--${group}`}>
                {VINE_PATHS.filter((p) => p.group === group).map((path) => (
                  <VinePath key={`lit-${path.id}`} data={path} reducedMotion={reducedMotion} includeId={false} />
                ))}
              </g>
            ))}
          </g>
        )}

        {/* Warm glow orbs riding the paths (visual accent) */}
        {!reducedMotion && (
          <g className="art-nouveau-orbs" filter="url(#vine-soft-glow)">
            {DEFAULT_GLOW_CONFIGS.map((_, i) => (
              <circle
                key={`orb-${i}`}
                id={`glow-orb-${i}`}
                r={0}
                cx={0}
                cy={0}
                fill="url(#vine-glow-gradient)"
                opacity={0}
                className="art-nouveau-glow-orb"
              />
            ))}
          </g>
        )}
      </svg>
    );
  },
);
