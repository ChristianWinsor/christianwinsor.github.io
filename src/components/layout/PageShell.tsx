import { useEffect, useRef, type ReactNode } from 'react';
import './PageShell.css';

interface PageShellProps {
  children: ReactNode;
  className?: string;
}

const revealSelector = [
  '.hero-paths a', '.feat-card', '.capabilities-console', '.writing-feature',
  '.exp-row', '.process-card', '.about-writing-feature', '.project-card',
  '.case-panel', '.case-decision', '.case-media-item', '.case-result-list li',
  '.case-next-link', '.gallery-item', '.services-proof-grid a',
  '.services-process-card', '.resume-exp-item', '.resume-project-item',
  '.resume-pubs article', '.contact-info', '.contact-form-section',
].join(', ');

export function PageShell({ children, className = '' }: PageShellProps) {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const seen = new WeakSet<Element>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });

    const scan = () => {
      root.querySelectorAll<HTMLElement>(revealSelector).forEach((element, index) => {
        if (seen.has(element)) return;
        seen.add(element);
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.82 || rect.bottom < 0) return;
        element.style.setProperty('--reveal-delay', `${(index % 3) * 55}ms`);
        element.classList.add('site-reveal');
        observer.observe(element);
      });
    };

    scan();
    const mutations = new MutationObserver(scan);
    mutations.observe(root, { childList: true, subtree: true });
    return () => { mutations.disconnect(); observer.disconnect(); };
  }, []);

  return (
    <main ref={mainRef} id="main-content" className={`page-shell ${className}`.trim()}>
      {children}
    </main>
  );
}
