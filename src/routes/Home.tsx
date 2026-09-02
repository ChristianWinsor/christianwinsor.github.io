import { site } from '../data/site';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { FeaturedWorkGrid } from '../components/home/FeaturedWorkGrid';
import { ExperiencePreview } from '../components/home/ExperiencePreview';
import { SkillsPreview } from '../components/home/SkillsPreview';
import { WritingPreview } from '../components/home/WritingPreview';
import { ContactCTA } from '../components/home/ContactCTA';
import { useDocumentTitle } from '../hooks/useScrollReveal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Home.css';

export function Home() {
  useDocumentTitle(`${site.name} | ${site.title}`);
  const heroRef = useScrollReveal<HTMLElement>();

  return (
    <>
      <section className="hero" ref={heroRef}>
        <div className="container hero-inner">
          {site.openToWork && (
            <Badge variant="live" dot>Conceive · Contrive · Create</Badge>
          )}
          <h1 className="hero-title">
            Senior Designer
            <span className="hero-title-sub">& Creative Lead</span>
          </h1>
          <p className="hero-sub">{site.tagline} Based in {site.location}.</p>
          <div className="hero-ctas">
            <Button to="/resume" variant="primary">View resume</Button>
            <Button to="/projects" variant="secondary">See my work</Button>
          </div>
        </div>
        <div className="hero-glow" aria-hidden="true" />
      </section>

      <FeaturedWorkGrid />
      <ExperiencePreview />
      <SkillsPreview />
      <WritingPreview />
      <ContactCTA />
    </>
  );
}
