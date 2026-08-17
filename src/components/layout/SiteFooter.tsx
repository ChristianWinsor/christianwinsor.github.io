import { Link } from 'react-router-dom';
import { site, footerLinks } from '../../data/site';
import './SiteFooter.css';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <div className="footer-brand">
          <p className="footer-name">{site.name}</p>
          <p className="footer-tagline">
            Senior Designer specializing in product design, design systems, and shipped digital products.
          </p>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Explore</p>
          <ul className="footer-links">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Connect</p>
          <ul className="footer-links">
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>{site.copyright}</span>
        <span>{site.location}</span>
      </div>
    </footer>
  );
}
