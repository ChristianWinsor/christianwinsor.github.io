import { Link } from 'react-router-dom';
import type { ReactNode, ButtonHTMLAttributes } from 'react';
import './Button.css';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
  to?: string;
  href?: string;
  external?: boolean;
}

export function Button({
  variant = 'primary',
  children,
  to,
  href,
  external,
  className = '',
  ...props
}: ButtonProps) {
  const cls = `btn btn-${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
        {external && <span className="sr-only"> (opens in new tab)</span>}
      </a>
    );
  }

  return (
    <button type="button" className={cls} {...props}>
      {children}
    </button>
  );
}
