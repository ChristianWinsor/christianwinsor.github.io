import type { ReactNode } from 'react';
import './Badge.css';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'live' | 'gold' | 'purple';
  dot?: boolean;
}

export function Badge({ children, variant = 'default', dot }: BadgeProps) {
  return (
    <span className={`badge badge-${variant}`}>
      {dot && <span className="badge-dot animate-pulse-dot" aria-hidden="true" />}
      {children}
    </span>
  );
}
