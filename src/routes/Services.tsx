import { Link } from 'react-router-dom';
import { site } from '../data/site';
import { serviceProcess } from '../data/services';
import { ServiceEstimator } from '../components/services/ServiceEstimator';
import { Button } from '../components/ui/Button';
import { useDocumentTitle } from '../hooks/useScrollReveal';
import './Services.css';

export function Services() {
  useDocumentTitle('Services | ' + site.name);

  return (
    <div className="services-page">
      <div className="page-hero container services-hero">
        <p className="section-label accent-green">Services</p>
        <h1>Start with the goal. Shape the scope together.</h1>
        <p>Websites, apps, branding, writing, promotion, and ongoing care can all begin in one place. Explore what fits, build a brief, and reach out for a personal quote.</p>
        <div className="services-hero-cta">
          <Button href="#service-builder" variant="primary">Explore the service console</Button>
          <Button to="/contact" variant="secondary">Contact me directly</Button>
        </div>
      </div>

      <section className="services-console-section container" aria-label="Service and package builder">
        <ServiceEstimator />
      </section>

      <section className="services-section container" aria-labelledby="services-proof-heading">
        <div className="services-section-intro">
          <p className="section-label accent-blue">In practice</p>
          <h2 id="services-proof-heading" className="section-title">From an idea to something people can use.</h2>
          <p>These case studies show how strategy, design, content, and development can work together.</p>
        </div>
        <div className="services-proof-grid">
          <Link to="/projects/malawian-fish-room"><span>Client work</span><strong>The Malawian Fish Room</strong><small>Website, content, SEO, and print</small><b aria-hidden="true">↗</b></Link>
          <Link to="/projects/among-the-letters"><span>Independent work</span><strong>Among the Letters</strong><small>Brand, publication, and website</small><b aria-hidden="true">↗</b></Link>
        </div>
      </section>

      <section className="services-section container" aria-labelledby="process-heading">
        <div className="services-section-intro">
          <p className="section-label accent-gold">Working together</p>
          <h2 id="process-heading" className="section-title">A clear path after you reach out.</h2>
        </div>
        <div className="services-process-grid">
          {serviceProcess.map((step) => (
            <article key={step.step} className="services-process-card">
              <span>{step.step}</span><h3>{step.title}</h3><p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-cta container">
        <p>You can start with a goal even if you do not know which service fits yet.</p>
        <Button to="/contact" variant="primary">Start a conversation</Button>
      </section>
    </div>
  );
}
