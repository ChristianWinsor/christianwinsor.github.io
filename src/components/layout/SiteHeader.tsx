import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef, useId } from 'react';
import { site, navLinks } from '../../data/site';
import { useEscapeKey, useFocusTrap, useBodyScrollLock } from '../../hooks/useA11y';
import './SiteHeader.css';

function isActivePath(current: string, path: string): boolean {
  if (path === '/') return current === '/';
  return current === path || current.startsWith(`${path}/`);
}

export function SiteHeader() {
  const { pathname } = useLocation();
  const menuId = useId();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setProjectsOpen(false);
  }, [pathname]);

  useBodyScrollLock(menuOpen);
  useEscapeKey(() => setMenuOpen(false), menuOpen);
  useFocusTrap(mobileMenuRef, menuOpen, () => setMenuOpen(false));

  function navClass(path: string) {
    return isActivePath(pathname, path) ? 'nav-link nav-link-active' : 'nav-link';
  }

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container site-header-inner">
        <Link to="/" className="site-logo" onClick={() => setMenuOpen(false)}>
          {site.name}
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          <ul className="nav-list">
            {navLinks.map((link) =>
              'children' in link ? (
                <li
                  key={link.label}
                  className="nav-item nav-item-dropdown"
                  onMouseEnter={() => setProjectsOpen(true)}
                  onMouseLeave={() => setProjectsOpen(false)}
                  onFocus={() => setProjectsOpen(true)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                      setProjectsOpen(false);
                    }
                  }}
                >
                  <Link
                    to={link.to}
                    className={navClass(link.to)}
                    aria-current={isActivePath(pathname, link.to) ? 'page' : undefined}
                    aria-haspopup="true"
                    aria-expanded={projectsOpen}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') setProjectsOpen(false);
                    }}
                  >
                    {link.label}
                    <span className="nav-chevron" aria-hidden="true">▾</span>
                  </Link>
                  {projectsOpen && (
                    <ul className="nav-dropdown" aria-label="Projects submenu">
                      {link.children.map((child) => (
                        <li key={child.to}>
                          <Link
                            to={child.to}
                            className="nav-dropdown-link"
                            aria-current={isActivePath(pathname, child.to) ? 'page' : undefined}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.label} className="nav-item">
                  <Link
                    to={link.to}
                    className={navClass(link.to)}
                    aria-current={isActivePath(pathname, link.to) ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`menu-bar ${menuOpen ? 'open' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div
          id={menuId}
          ref={mobileMenuRef}
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation menu"
        >
          <nav aria-label="Mobile navigation">
            <ul className="mobile-nav-list">
              {navLinks.flatMap((link) =>
                'children' in link
                  ? link.children.map((child) => (
                      <li key={child.to}>
                        <Link
                          to={child.to}
                          className={`mobile-nav-link${isActivePath(pathname, child.to) ? ' active' : ''}`}
                          aria-current={isActivePath(pathname, child.to) ? 'page' : undefined}
                          onClick={() => setMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))
                  : [
                      <li key={link.to}>
                        <Link
                          to={link.to}
                          className={`mobile-nav-link${isActivePath(pathname, link.to) ? ' active' : ''}`}
                          aria-current={isActivePath(pathname, link.to) ? 'page' : undefined}
                          onClick={() => setMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </li>,
                    ],
              )}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
