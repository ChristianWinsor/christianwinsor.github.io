import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { site } from '../data/site';
import {
  creativeWritingIntro,
  retainerBundles,
  serviceApproach,
  servicePillars,
  serviceProcess,
  servicesNotIncluded,
  writingBundles,
} from '../data/services';
import { ServiceEstimator } from '../components/services/ServiceEstimator';
import { ServicesCollapsibleSection } from '../components/services/ServicesCollapsibleSection';
import { Button } from '../components/ui/Button';
import { useDocumentTitle } from '../hooks/useScrollReveal';
import '../components/services/ServiceEstimator.css';
import './Services.css';

export function Services() {
  useDocumentTitle(`Services | ${site.name}`);

  const [selectedIds, setSelectedIds] = useState<Set<string>>(() => new Set());
  const [appliedBundleId, setAppliedBundleId] = useState<string | null>(null);

  const applyBundle = useCallback(
    (bundleId: string) => {
      const bundle = retainerBundles.find((b) => b.id === bundleId);
      if (!bundle) return;

      setAppliedBundleId(bundleId);
      setSelectedIds(new Set(bundle.serviceIds));

      document
        .getElementById('service-estimator')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    [],
  );

  const applyWritingBundle = useCallback((estimatorServiceId: string) => {
    setAppliedBundleId(null);

    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.add(estimatorServiceId);
      return next;
    });

    document
      .getElementById('service-estimator')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <>
      <div className="page-hero container">
        <p className="section-label accent-gold">Services</p>

        <h1>Design, build, and support</h1>

        <p>
          A digital product studio including research, design, development, and ongoing
          marketing for businesses that need products that work well and look considered.
          Mix-and-match services to create a bundle that fits what you need.
        </p>

        <div className="services-hero-cta">
          <Button to="#service-estimator" variant="primary">
            Build a bundle
          </Button>

          <Button to="/contact" variant="secondary">
            Get in touch
          </Button>
        </div>
      </div>

      <ServicesCollapsibleSection title="What I offer">
        <div className="pillars-grid">
          {servicePillars.map((pillar) => (
            <article
              key={pillar.title}
              className={`pillar-card accent-${pillar.accent}`}
            >
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </ServicesCollapsibleSection>

      <ServicesCollapsibleSection title="Featured client work">
        <div className="featured-clients">
          <article className="featured-client-card">
            <h3>
              <Link to="/projects/malawian-fish-room">
                The Malawian Fish Room
              </Link>
            </h3>

            <p>
              Full custom website, product catalog, SEO, and print campaign
              from a single engagement.
            </p>
          </article>

          <article className="featured-client-card">
            <h3>
              <Link to="/projects/pawn-stars">Pawn Stars</Link>
            </h3>

            <p>
              Website, branding, and promotional graphics for a local London,
              Ontario business.
            </p>
          </article>
        </div>
      </ServicesCollapsibleSection>

      <ServicesCollapsibleSection title="How I work">
        <div className="approach-grid">
          {serviceApproach.map((item) => (
            <article key={item.title} className="approach-card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </ServicesCollapsibleSection>

      <ServicesCollapsibleSection title="Suggested starting bundles">
        <p className="services-note">
          Suggested combinations for common needs. Start with one of these
          bundles or build your own selection below.
        </p>

        <div className="bundles-grid">
          {retainerBundles.map((bundle) => (
            <article
              key={bundle.id}
              className={`bundle-card bundle-card-accent-${bundle.accent}`}
            >
              <h3>{bundle.name}</h3>

              <p>{bundle.description}</p>

              <button
                type="button"
                className="bundle-apply"
                onClick={() => applyBundle(bundle.id)}
              >
                Use this bundle →
              </button>
            </article>
          ))}
        </div>
      </ServicesCollapsibleSection>

      <section
        id="service-estimator"
        className="services-section container estimator-section-anchor"
        aria-labelledby="estimator-heading"
      >
        <h2 id="estimator-heading" className="section-title">
          Bundle Planner
        </h2>

        <p className="services-note">
          Choose the services that fit what you're trying to accomplish. You
          can combine services from different areas and adjust your selection
          before requesting a bundle.
        </p>

        <ServiceEstimator
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
          appliedBundleId={appliedBundleId}
          setAppliedBundleId={setAppliedBundleId}
        />
      </section>

      <ServicesCollapsibleSection title="Creative & content writing" titleId="creative-writing-heading">
        <p className="services-note">{creativeWritingIntro}</p>

        <h3 className="services-subtitle">Writing bundles</h3>

        <div className="bundles-grid writing-bundles-grid">
          {writingBundles.map((bundle) => (
            <article
              key={bundle.id}
              className="bundle-card bundle-card-accent-gold"
            >
              <h3>{bundle.name}</h3>

              <p>{bundle.description}</p>

              {bundle.estimatorServiceId ? (
                <button
                  type="button"
                  className="bundle-apply"
                  onClick={() =>
                    applyWritingBundle(bundle.estimatorServiceId!)
                  }
                >
                  Add to bundle →
                </button>
              ) : (
                <Button to="/contact" variant="secondary">
                  Discuss this bundle
                </Button>
              )}
            </article>
          ))}
        </div>
      </ServicesCollapsibleSection>

      <ServicesCollapsibleSection title="How it works">
        <div className="process-grid">
          {serviceProcess.map((step) => (
            <article key={step.step} className="process-card">
              <span className="process-step">{step.step}</span>

              <h3>{step.title}</h3>

              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </ServicesCollapsibleSection>

      <ServicesCollapsibleSection title="Not included in retainer">
        <p className="services-note">
          The following are available as separate projects or add-ons and can
          be discussed as part of your overall scope:
        </p>

        <ul className="services-excluded-list">
          {servicesNotIncluded.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ServicesCollapsibleSection>

      <section className="services-section container">
        <p className="services-disclaimer">
          Final scope, timing, and pricing are confirmed in writing before
          work begins. Advertising spend, hosting, domains, and third-party
          subscriptions are paid directly by the client.
        </p>
      </section>

      <section className="services-cta container">
        <Button to="#service-estimator" variant="primary">
          Build a bundle
        </Button>

        <Button to="/contact" variant="secondary">
          Contact me
        </Button>
      </section>
    </>
  );
}
