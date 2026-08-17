import { useState, useRef, useId } from 'react';
import { site } from '../data/site';
import { galleryCategories, filterGallery, type GalleryCategory } from '../data/gallery';
import { useDocumentTitle } from '../hooks/useScrollReveal';
import { useBodyScrollLock, useFocusTrap } from '../hooks/useA11y';
import './Gallery.css';

type Filter = GalleryCategory | 'all';

export function Gallery() {
  useDocumentTitle(`Gallery | ${site.name}`);
  const [filter, setFilter] = useState<Filter>('all');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const captionId = useId();
  const items = filterGallery(filter);

  useBodyScrollLock(lightbox !== null);
  useFocusTrap(lightboxRef, lightbox !== null, () => setLightbox(null));

  function openLightbox(index: number) {
    setLightbox(index);
  }

  function closeLightbox() {
    setLightbox(null);
  }

  function navigateLightbox(dir: -1 | 1) {
    if (lightbox === null) return;
    const next = (lightbox + dir + items.length) % items.length;
    setLightbox(next);
  }

  return (
    <>
      <div className="page-hero container">
        <p className="section-label accent-purple">Gallery</p>
        <h1>Visual design work</h1>
        <p>
          UI/UX prototypes, branding, advertisements, and more. A sample of design craft across client and personal projects.
        </p>
      </div>

      <div className="gallery-page container">
        <div className="gallery-filters" role="group" aria-label="Filter gallery by category">
          <button
            type="button"
            aria-pressed={filter === 'all'}
            className={`filter-pill ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              aria-pressed={filter === cat.id}
              className={`filter-pill ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <p className="sr-only" aria-live="polite" aria-atomic="true">
          Showing {items.length} {items.length === 1 ? 'item' : 'items'}
          {filter !== 'all' ? ` in ${galleryCategories.find((c) => c.id === filter)?.label}` : ''}.
        </p>

        <div className="gallery-grid">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className="gallery-item"
              onClick={() => openLightbox(index)}
              aria-label={`View ${item.title}. ${item.description}`}
            >
              <img src={item.src} alt="" loading="lazy" decoding="async" />
              <div className="gallery-item-overlay" aria-hidden="true">
                <span className="gallery-item-title">{item.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && items[lightbox] && (
        <div
          ref={lightboxRef}
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby={captionId}
          onClick={closeLightbox}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="lightbox-close" onClick={closeLightbox} aria-label="Close image viewer">
              ✕
            </button>
            <button type="button" className="lightbox-nav prev" onClick={() => navigateLightbox(-1)} aria-label="Previous image">
              ‹
            </button>
            <img src={items[lightbox].src} alt={items[lightbox].alt} />
            <button type="button" className="lightbox-nav next" onClick={() => navigateLightbox(1)} aria-label="Next image">
              ›
            </button>
            <div className="lightbox-caption" id={captionId}>
              <h3>{items[lightbox].title}</h3>
              <p>{items[lightbox].description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
