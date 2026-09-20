import { Link } from 'react-router-dom';
import { site } from '../data/site';
import {
  creativeWritingIntro,
  creativeWritingSections,
  projectServiceSections,
  servicePillars,
  serviceProcess,
  servicesNotIncluded,
  writingBundles,
} from '../data/services';
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
        <h1>One clear path from idea to delivery.</h1>
        <p>Product design, custom websites, visual identity, content, and ongoing support. Explore a monthly plan below, or browse project services for a defined piece of work.</p>
        <div className="services-hero-cta">
          <Button to="#service-estimator" variant="primary">Plan ongoing support</Button>
          <Button to="#project-services" variant="secondary">Explore project work</Button>
        </div>
      </div>

      <section className="services-section container services-overview" aria-labelledby="services-overview-heading">
        <div className="services-section-intro">
          <p className="section-label accent-gold">Capabilities</p>
          <h2 id="services-overview-heading" className="section-title">A connected set of services</h2>
          <p>Bring me in for a focused need or an end-to-end engagement. I connect the user experience, visual language, content, and build.</p>
        </div>
        <div className="pillars-grid">
          {servicePillars.map((pillar) => (
            <article key={pillar.title} className={'pillar-card accent-' + pillar.accent}>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="service-estimator" className="services-section container estimator-section-anchor" aria-labelledby="estimator-heading">
        <div className="services-section-intro">
          <p className="section-label accent-green">Monthly support</p>
          <h2 id="estimator-heading" className="section-title">Configure a plan around your needs.</h2>
          <p>Choose a suggested bundle or assemble your own monthly support plan. The panel shows a starting estimate as you go.</p>
        </div>
        <ServiceEstimator />
      </section>

      <section id="project-services" className="services-section container" aria-labelledby="project-services-heading">
        <div className="services-section-intro">
          <p className="section-label accent-purple">Defined projects</p>
          <h2 id="project-services-heading" className="section-title">A specific challenge needs a specific scope.</h2>
          <p>Explore starting prices for websites, product design, brand work, and one-time support. The details open only when you need them.</p>
        </div>
        <div className="services-disclosure-grid">
          {projectServiceSections.map((section) => (
            <details className="services-disclosure" key={section.title}>
              <summary><span>{section.title}</span><span aria-hidden="true">+</span></summary>
              <div className="services-disclosure-body">
                {section.intro && <p>{section.intro}</p>}
                <ul className="services-price-list">
                  {section.rows.map((row) => (
                    <li key={row.name}>
                      <span><strong>{row.name}</strong>{row.detail && <small>{row.detail}</small>}</span>
                      <span>{row.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
        <Button to="/contact" variant="secondary">Discuss a project</Button>
      </section>

      <section className="services-section container" aria-labelledby="writing-heading">
        <div className="services-section-intro">
          <p className="section-label accent-gold">Words & editorial</p>
          <h2 id="writing-heading" className="section-title">Writing that works with the design.</h2>
          <p>{creativeWritingIntro}</p>
        </div>
        <details className="services-writing-panel">
          <summary>Explore writing packages and prices <span aria-hidden="true">+</span></summary>
          <div className="services-writing-bundles">
            {writingBundles.map((bundle) => (
              <article key={bundle.id} className="services-writing-card">
                <span className="section-label accent-gold">{bundle.billing === 'monthly' ? 'Monthly' : 'Project'}</span>
                <h3>{bundle.name}</h3>
                <p>{bundle.description}</p>
                <strong>{bundle.priceLabel}</strong>
                <small>{bundle.savingsLabel}</small>
                <Button to="/contact" variant="secondary">Discuss this work</Button>
              </article>
            ))}
          </div>
          <div className="services-disclosure-grid">
            {creativeWritingSections.map((section) => (
              <details className="services-disclosure" key={section.title}>
                <summary><span>{section.title}</span><span aria-hidden="true">+</span></summary>
                <div className="services-disclosure-body">
                  {section.intro && <p>{section.intro}</p>}
                  <ul className="services-price-list">
                    {section.rows.map((row) => (
                      <li key={row.name}>
                        <span><strong>{row.name}</strong>{row.detail && <small>{row.detail}</small>}</span>
                        <span>{row.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </details>
      </section>

      <section className="services-section container services-proof" aria-labelledby="services-proof-heading">
        <div className="services-section-intro">
          <p className="section-label accent-blue">In practice</p>
          <h2 id="services-proof-heading" className="section-title">Work across the full arc.</h2>
          <p>From a retail site and print campaign to an independently built publication, these case studies show how I connect strategy, execution, and delivery.</p>
        </div>
        <div className="services-proof-grid">
          <Link to="/projects/malawian-fish-room"><span>01 / Client work</span><strong>The Malawian Fish Room</strong><small>Web, content, SEO, and print</small><b aria-hidden="true">↗</b></Link>
          <Link to="/projects/among-the-letters"><span>02 / Independent work</span><strong>Among the Letters</strong><small>Brand, publication, and website</small><b aria-hidden="true">↗</b></Link>
        </div>
      </section>

      <section className="services-section container" aria-labelledby="process-heading">
        <div className="services-section-intro">
          <p className="section-label accent-gold">Working together</p>
          <h2 id="process-heading" className="section-title">From first conversation to handoff.</h2>
        </div>
        <div className="process-grid">
          {serviceProcess.map((step) => (
            <article key={step.step} className="process-card">
              <span className="process-step">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
        <details className="services-scope-note">
          <summary>Scope and outside costs</summary>
          <p>Retainer work covers the services selected in your written agreement. Larger work can be scoped separately:</p>
          <ul>{servicesNotIncluded.map((item) => <li key={item}>{item}</li>)}</ul>
          <p>Advertising spend, hosting, domains, and third-party subscriptions are paid directly by the client. Final scope, timing, and pricing are confirmed in writing before work begins.</p>
        </details>
      </section>

      <section className="services-cta container">
        <p>Have a challenge in mind? Tell me where you are and what you want to achieve.</p>
        <Button to="/contact" variant="primary">Start a conversation</Button>
      </section>
    </div>
  );
}
