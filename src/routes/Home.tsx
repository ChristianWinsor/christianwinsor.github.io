import { Link } from 'react-router-dom';
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
            <Badge variant="live" dot>Open to senior design and creative leadership roles</Badge>
          )}
          <h1 className="hero-title">
            Senior Designer
            <span className="hero-title-sub">from direction to delivery.</span>
          </h1>
          <p className="hero-sub">{site.tagline} Based in {site.location}.</p>
          <div className="hero-ctas">
            <Button to="/resume" variant="primary">View resume</Button>
            <Button to="/projects" variant="secondary">See my work</Button>
          </div>
          <div className="hero-paths" aria-label="Explore work by discipline">
            <Link to="/projects/accelera"><span>01 / Product systems</span><strong>Design leadership <span aria-hidden="true">↗</span></strong></Link>
            <Link to="/projects/among-the-letters"><span>02 / Editorial identity</span><strong>Brand and publishing <span aria-hidden="true">↗</span></strong></Link>
            <Link to="/projects/hubbit"><span>03 / Working products</span><strong>Design and development <span aria-hidden="true">↗</span></strong></Link>
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
