import { useEffect, useId, useState, type ReactNode } from 'react';

interface ServicesCollapsibleSectionProps {
  title: string;
  titleId?: string;
  children: ReactNode;
  className?: string;
}

function useMobileAccordionViewport() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 768px)').matches : false,
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return isMobile;
}

export function ServicesCollapsibleSection({
  title,
  titleId,
  children,
  className = '',
}: ServicesCollapsibleSectionProps) {
  const [open, setOpen] = useState(false);
  const isMobile = useMobileAccordionViewport();
  const generatedId = useId();
  const panelId = titleId ? `${titleId}-panel` : `${generatedId}-panel`;
  const headingId = titleId ?? `${generatedId}-heading`;
  const collapsedOnMobile = isMobile && !open;

  return (
    <section
      className={`services-section services-collapsible container${open ? ' is-open' : ''}${className ? ` ${className}` : ''}`}
    >
      <div className="services-collapsible__header">
        <h2 id={headingId} className="section-title">
          {title}
        </h2>
        <button
          type="button"
          className="services-collapsible__trigger"
          aria-expanded={isMobile ? open : true}
          aria-controls={panelId}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">{open ? `Collapse ${title}` : `Expand ${title}`}</span>
          <span className="services-collapsible__icon" aria-hidden="true">
            {open ? '−' : '+'}
          </span>
        </button>
      </div>

      <div
        id={panelId}
        className="services-collapsible__panel"
        role="region"
        aria-labelledby={headingId}
        hidden={collapsedOnMobile ? true : undefined}
      >
        {children}
      </div>
    </section>
  );
}
