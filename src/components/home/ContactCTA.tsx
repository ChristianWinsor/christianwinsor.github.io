import { site } from '../../data/site';
import { Button } from '../ui/Button';
import './ContactCTA.css';

export function ContactCTA() {
  return (
    <section className="contact-cta container" aria-labelledby="contact-cta-heading">
      <div className="section-header">
        <h2 id="contact-cta-heading" className="section-title">Get in touch</h2>
      </div>
      <p className="contact-cta-text">
        Open to senior design roles, lead design positions, freelance projects, and interesting collaborations.
      </p>
      <div className="contact-chips">
        <a href={`mailto:${site.email}`} className="contact-chip">
          <span aria-hidden="true">✉</span> {site.email}
        </a>
      </div>
      <div className="contact-cta-actions">
        <Button to="/contact" variant="primary">Send a message</Button>
        <Button to="/services" variant="secondary">View services</Button>
      </div>
    </section>
  );
}
