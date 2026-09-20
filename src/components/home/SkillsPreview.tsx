import { useState } from 'react';
import { Link } from 'react-router-dom';
import { skillGroups } from '../../data/skills';
import './SkillsPreview.css';

export function SkillsPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = skillGroups[activeIndex];

  return (
    <section className="home-section container home-capabilities" aria-labelledby="skills-heading">
      <div className="section-header">
        <div>
          <p className="section-label accent-purple">Across disciplines</p>
          <h2 id="skills-heading" className="section-title">Skills that connect the whole project</h2>
        </div>
        <Link to="/resume" className="text-link">Full experience and skills →</Link>
      </div>
      <p className="capabilities-intro">
        My work crosses research, visual systems, writing, development, and delivery. Select an area to see the skills behind it and a project where they were applied.
      </p>
      <div className="capabilities-console">
        <div className="capabilities-menu" role="group" aria-label="Explore skill areas">
          {skillGroups.map((group, index) => (
            <button
              key={group.title}
              type="button"
              className={'capability-choice' + (activeIndex === index ? ' is-active' : '')}
              aria-pressed={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            >
              <span className="capability-choice-index">0{index + 1}</span>
              <span>{group.title}</span>
              <span className="capability-choice-arrow" aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
        {active && (
          <div className="capabilities-detail" aria-live="polite">
            <p className="capabilities-kicker">Selected discipline / 0{activeIndex + 1}</p>
            <h3>{active.title}</h3>
            <p>{active.summary}</p>
            <div className="capabilities-tags">
              {active.skills.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
            <Link to={'/projects/' + active.projectSlug} className="capabilities-proof">
              {active.projectLabel} <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
