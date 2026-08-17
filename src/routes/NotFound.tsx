import { Link } from 'react-router-dom';
import { site } from '../data/site';
import { Button } from '../components/ui/Button';
import { useDocumentTitle } from '../hooks/useScrollReveal';
import './NotFound.css';

export function NotFound() {
  useDocumentTitle(`404 | ${site.name}`);

  return (
    <div className="not-found">
      <div className="not-found-grid" aria-hidden="true">
        <div className="wireframe-box box-1 animate-float" />
        <div className="wireframe-box box-2 animate-float-delayed" />
        <div className="wireframe-box box-3 animate-float" />
      </div>

      <div className="not-found-content">
        <p className="not-found-code">404</p>
        <h1>This page hasn't been designed yet.</h1>
        <p className="not-found-sub">
          Like a blank artboard: nothing here but potential. Maybe the page moved, or maybe it was never wireframed.
        </p>

        <div className="not-found-terminal">
          <span className="terminal-prompt">designer@portfolio:~$</span>
          <span className="terminal-cmd"> find /this-page</span>
          <br />
          <span className="terminal-error">Error: Artboard not found. Try 'cd /home' instead.</span>
        </div>

        <div className="not-found-actions">
          <Button to="/" variant="primary">Back to home</Button>
          <Button to="/projects" variant="secondary">View projects</Button>
          <Link to="/contact" className="not-found-link">Contact me →</Link>
        </div>

        <p className="not-found-easter">♟ The chess piece fell off the board.</p>
      </div>
    </div>
  );
}
