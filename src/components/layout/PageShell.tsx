import type { ReactNode } from 'react';
import './PageShell.css';

interface PageShellProps {
  children: ReactNode;
  className?: string;
}

export function PageShell({ children, className = '' }: PageShellProps) {
  return (
    <main id="main-content" className={`page-shell ${className}`.trim()}>
      {children}
    </main>
  );
}
