import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatedBackground } from './components/AnimatedBackground';
import { SiteHeader } from './components/layout/SiteHeader';
import { SiteFooter } from './components/layout/SiteFooter';
import { PageShell } from './components/layout/PageShell';
import { RouteAnnouncer } from './components/layout/RouteAnnouncer';
import { Home } from './routes/Home';
import { NotFound } from './routes/NotFound';
import { useEffect } from 'react';

const About = lazy(() => import('./routes/About').then((m) => ({ default: m.About })));
const Projects = lazy(() => import('./routes/Projects').then((m) => ({ default: m.Projects })));
const ProjectCaseStudy = lazy(() =>
  import('./routes/ProjectCaseStudy').then((m) => ({ default: m.ProjectCaseStudy })),
);
const Gallery = lazy(() => import('./routes/Gallery').then((m) => ({ default: m.Gallery })));
const Services = lazy(() => import('./routes/Services').then((m) => ({ default: m.Services })));
const Resume = lazy(() => import('./routes/Resume').then((m) => ({ default: m.Resume })));
const Contact = lazy(() => import('./routes/Contact').then((m) => ({ default: m.Contact })));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageLoader() {
  return (
    <div className="page-loader" aria-live="polite" aria-busy="true">
      Loading…
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'}>
      <AnimatedBackground />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <RouteAnnouncer />
      <PageShell>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </PageShell>
      <SiteFooter />
    </BrowserRouter>
  );
}
