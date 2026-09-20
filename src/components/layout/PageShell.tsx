import { useEffect, useRef, type ReactNode } from 'react';
import './PageShell.css';

interface PageShellProps {
  children: ReactNode;
  className?: string;
}

// Editorial and experience content stays still; selected cards create the rhythm.
const motionGroups = [
  {
    kind: 'motion-rise',
    selector: [
      '.hero-paths a', '.capabilities-console', '.writing-feature',
      '.process-card', '.project-card', '.case-panel', '.case-decision',
      '.case-result-list li', '.gallery-item', '.services-process-card',
      '.resume-project-item', '.contact-form-section',
    ].join(', '),
  },
  {
    kind: 'motion-right',
    selector: [
      '.featured-grid .feat-card', '.about-writing-feature', '.case-media-grid',
      '.services-proof-grid a', '.case-next-link',
    ].join(', '),
  },
] as const;

export function PageShell({ children, className = '' }: PageShellProps) {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root || !('IntersectionObserver' in window)) return;

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const seen = new WeakSet<Element>();
    const pending = new Set<HTMLElement>();

    const reveal = (element: HTMLElement) => {
      if (!pending.has(element)) return;
      pending.delete(element);
      element.classList.add('motion-visible');
      observer.unobserve(element);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) reveal(entry.target as HTMLElement);
      });
    }, { threshold: 0.01, rootMargin: '0px 0px -9% 0px' });

    const scan = () => {
      for (const element of pending) {
        if (!root.contains(element)) {
          pending.delete(element);
          observer.unobserve(element);
        }
      }
      for (const group of motionGroups) {
        root.querySelectorAll<HTMLElement>(group.selector).forEach((element, index) => {
          if (seen.has(element)) return;
          seen.add(element);
          if (motionPreference.matches) return;

          const rect = element.getBoundingClientRect();
          // The first viewport stays calm; motion belongs to the scroll journey.
          if (rect.top < window.innerHeight * 0.86 || rect.bottom <= 0) return;

          element.style.setProperty('--motion-delay', `${(index % 3) * 85}ms`);
          element.classList.add('motion-pending', group.kind);
          pending.add(element);
          observer.observe(element);
        });
      }
    };

    // A scroll check also catches rapid jumps that may skip an observer frame.
    let frame = 0;
    const checkVisible = () => {
      frame = 0;
      for (const element of pending) {
        if (!root.contains(element)) {
          pending.delete(element);
          observer.unobserve(element);
          continue;
        }
        const rect = element.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight * 0.91) reveal(element);
      }
    };
    const scheduleCheck = () => {
      if (!frame) frame = window.requestAnimationFrame(checkVisible);
    };
    const revealFocused = (event: FocusEvent) => {
      const element = (event.target as HTMLElement).closest<HTMLElement>('.motion-pending');
      if (element) reveal(element);
    };
    const onMotionPreferenceChange = () => {
      if (motionPreference.matches) pending.forEach(reveal);
    };

    scan();
    const mutations = new MutationObserver(scan);
    mutations.observe(root, { childList: true, subtree: true });
    window.addEventListener('scroll', scheduleCheck, { passive: true });
    window.addEventListener('resize', scheduleCheck);
    root.addEventListener('focusin', revealFocused);
    motionPreference.addEventListener('change', onMotionPreferenceChange);
    return () => {
      pending.forEach((element) => {
        element.classList.remove('motion-pending', 'motion-rise', 'motion-right', 'motion-visible');
        element.style.removeProperty('--motion-delay');
      });
      mutations.disconnect();
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleCheck);
      window.removeEventListener('resize', scheduleCheck);
      root.removeEventListener('focusin', revealFocused);
      motionPreference.removeEventListener('change', onMotionPreferenceChange);
    };
  }, []);

  return (
    <main ref={mainRef} id="main-content" className={`page-shell ${className}`.trim()}>
      {children}
    </main>
  );
}
