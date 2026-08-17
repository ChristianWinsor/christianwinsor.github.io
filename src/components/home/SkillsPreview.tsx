import { Link } from 'react-router-dom';
import { skillGroups } from '../../data/skills';
import './SkillsPreview.css';

export function SkillsPreview() {
  const preview = skillGroups.slice(0, 4);

  return (
    <section className="home-section container" aria-labelledby="skills-heading">
      <div className="section-header">
        <h2 id="skills-heading" className="section-title">Skills & tools</h2>
        <Link to="/resume" className="text-link">Full skill set on resume →</Link>
      </div>
      <div className="skills-grid">
        {preview.map((group) => (
          <div key={group.title} className="skill-group">
            <p className="skill-group-title">{group.title}</p>
            <div className="skill-tags">
              {group.skills.slice(0, 6).map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
