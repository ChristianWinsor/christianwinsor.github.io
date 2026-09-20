import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SERVICE_DRAFT_STORAGE_KEY,
  SERVICE_QUOTE_STORAGE_KEY,
  catalogGoals,
  catalogOptions,
  getCatalogOption,
  getOptionContext,
  includedByPlan,
  type CatalogOption,
  type ServiceQuotePayload,
} from '../../data/serviceCatalog';
import { MatrixRain } from './MatrixRain';
import './ServiceEstimator.css';

interface BuilderDraft {
  optionIds: string[];
  note: string;
}

function readDraft(): BuilderDraft {
  try {
    const raw = sessionStorage.getItem(SERVICE_DRAFT_STORAGE_KEY);
    if (!raw) return { optionIds: [], note: '' };
    const value: unknown = JSON.parse(raw);
    if (!value || typeof value !== 'object') return { optionIds: [], note: '' };
    const draft = value as Partial<BuilderDraft>;
    return {
      optionIds: Array.isArray(draft.optionIds)
        ? [...new Set(draft.optionIds.filter((id): id is string => typeof id === 'string' && Boolean(getCatalogOption(id))))]
        : [],
      note: typeof draft.note === 'string' ? draft.note.slice(0, 2000) : '',
    };
  } catch {
    return { optionIds: [], note: '' };
  }
}

export function ServiceEstimator() {
  const navigate = useNavigate();
  const summaryRef = useRef<HTMLElement>(null);
  const [draft, setDraft] = useState<BuilderDraft>(readDraft);
  const [goalId, setGoalId] = useState(catalogGoals[0].id);
  const [sectionId, setSectionId] = useState(catalogGoals[0].sections[0].id);
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const selectedIds = new Set(draft.optionIds);
  const goal = catalogGoals.find((item) => item.id === goalId) ?? catalogGoals[0];
  const section = goal.sections.find((item) => item.id === sectionId) ?? goal.sections[0];
  const search = query.trim().toLocaleLowerCase();
  const visibleOptions = search
    ? catalogOptions.filter((option) => [option.name, option.emailLabel, option.description, ...(option.includes ?? [])]
        .some((value) => value.toLocaleLowerCase().includes(search)))
    : section.options;
  const chosen = draft.optionIds.map(getCatalogOption).filter((option): option is CatalogOption => Boolean(option));
  const hasRequest = chosen.length > 0 || draft.note.trim().length > 0;

  useEffect(() => {
    try { sessionStorage.setItem(SERVICE_DRAFT_STORAGE_KEY, JSON.stringify(draft)); } catch { /* The builder still works without storage. */ }
  }, [draft]);

  function chooseGoal(nextId: string) {
    const next = catalogGoals.find((item) => item.id === nextId);
    if (!next) return;
    setGoalId(next.id);
    setSectionId(next.sections[0].id);
    setFocusedId(null);
    setQuery('');
  }

  function chooseSection(nextId: string) {
    setSectionId(nextId);
    setFocusedId(null);
  }

  function updateSelected(next: Set<string>) {
    setDraft((current) => ({ ...current, optionIds: [...next] }));
  }

  function expandPlan(plan: CatalogOption) {
    const next = new Set(selectedIds);
    next.delete(plan.id);
    plan.includedIds?.forEach((id) => next.add(id));
    updateSelected(next);
  }

  function addOption(option: CatalogOption) {
    const next = new Set(selectedIds);
    if (next.has(option.id)) {
      next.delete(option.id);
      updateSelected(next);
      return;
    }
    if (option.includedIds) {
      for (const id of [...next]) {
        const existing = getCatalogOption(id);
        if (existing?.includedIds || option.includedIds.includes(id) ||
          (existing?.exclusiveGroup && option.includedIds.some((memberId) =>
            getCatalogOption(memberId)?.exclusiveGroup === existing.exclusiveGroup))) next.delete(id);
      }
    } else if (option.exclusiveGroup) {
      for (const id of [...next]) {
        const existing = getCatalogOption(id);
        if (existing?.includedIds?.some((memberId) =>
          getCatalogOption(memberId)?.exclusiveGroup === option.exclusiveGroup)) {
          next.delete(id);
          existing.includedIds.forEach((memberId) => next.add(memberId));
        }
      }
      for (const id of [...next]) {
        if (getCatalogOption(id)?.exclusiveGroup === option.exclusiveGroup) next.delete(id);
      }
    }
    next.add(option.id);
    updateSelected(next);
  }

  function clearBrief() {
    setDraft({ optionIds: [], note: '' });
    try { sessionStorage.removeItem(SERVICE_QUOTE_STORAGE_KEY); } catch { /* Local state is cleared. */ }
  }

  function sendToContact() {
    if (!hasRequest) return;
    const quote: ServiceQuotePayload = { version: 2, optionIds: draft.optionIds, note: draft.note };
    try { sessionStorage.setItem(SERVICE_QUOTE_STORAGE_KEY, JSON.stringify(quote)); } catch { /* Contact still opens without a prefilled message. */ }
    navigate('/contact?from=services', { state: quote });
  }

  return (
    <div className="control-panel" id="service-builder">
      <MatrixRain />
      <div className="console-content">
        <header className="console-topline">
          <span><i className="console-signal" aria-hidden="true" /> CW / SCOPE CONSOLE</span>
          <span>CONFIGURE → REVIEW → CONTACT</span>
        </header>
        <div className="console-heading">
          <p className="console-overline">Interactive service directory / 2026</p>
          <h2>Build a brief for your project.</h2>
          <p>Start with what you want to achieve. Open an option to see what it covers, add what fits, and send the list to me for a personal quote. You can mix one-time work with ongoing support.</p>
          <div className="console-steps" aria-label="How the builder works"><span>01 Choose an area</span><span>02 Inspect the options</span><span>03 Add to your brief</span></div>
        </div>

        <div className="console-layout">
          <nav className="console-goals console-surface" aria-label="What would you like help with?">
            <p className="console-label">01 / What do you need?</p>
            <p className="console-swipe-hint">Swipe to see all six areas →</p>
            <div className="console-goal-list">
              {catalogGoals.map((item, index) => (
                <button key={item.id} type="button" className={'console-goal' + (goal.id === item.id && !search ? ' is-active' : '')}
                  aria-pressed={goal.id === item.id && !search} onClick={() => chooseGoal(item.id)}>
                  <span className="console-index">{String(index + 1).padStart(2, '0')}</span>
                  <span><strong>{item.title}</strong><small>{item.prompt}</small></span>
                  <span aria-hidden="true">↗</span>
                </button>
              ))}
            </div>
          </nav>

          <section className="console-workspace console-surface" aria-label="Explore services">
            <div className="console-workspace-header">
              <p className="console-label">02 / Explore the options</p>
              <label className="console-search-label" htmlFor="service-search">Know what you need? Search everything</label>
              <input id="service-search" type="search" placeholder="Try logo, website, editing, social…"
                value={query} onChange={(event) => { setQuery(event.target.value); setFocusedId(null); }} />
            </div>
            {search ? (
              <div className="console-section-heading"><h3>Results for “{query.trim()}”</h3><p>{visibleOptions.length} matching options across the directory</p></div>
            ) : (
              <>
                <p className="console-swipe-hint">Swipe to see more topics →</p>
                <div className="console-section-list" role="group" aria-label={`${goal.title} topics`}>
                  {goal.sections.map((item) => (
                    <button key={item.id} type="button" className={'console-section-tab' + (section.id === item.id ? ' is-active' : '')}
                      aria-pressed={section.id === item.id} onClick={() => chooseSection(item.id)}>{item.title}</button>
                  ))}
                </div>
                <div className="console-section-heading"><h3>{section.title}</h3><p>{section.description || 'Select an option to see the scope and add it to your brief.'}</p></div>
              </>
            )}
            <div className="console-options">
              {visibleOptions.length === 0 && <p className="console-no-results">No matches yet. Try a broader word or choose an area on the left.</p>}
              {visibleOptions.map((option) => {
                const selected = selectedIds.has(option.id);
                const includedPlan = includedByPlan(option.id, selectedIds);
                const expanded = focusedId === option.id;
                return (
                  <article className={'console-option' + (selected || includedPlan ? ' is-chosen' : '')} key={option.id}>
                    <button className="console-option-trigger" type="button" aria-expanded={expanded}
                      onClick={() => setFocusedId(expanded ? null : option.id)}>
                      <span>{search && <em className="console-search-context">{getOptionContext(option.id)}</em>}<strong>{option.name}</strong><small>{option.description || (option.kind === 'package' ? 'Open to see what is inside.' : 'We can define the exact scope together.')}</small></span>
                      <span className="console-option-state">{selected ? 'ADDED' : includedPlan ? 'IN PLAN' : option.kind === 'package' ? 'PACKAGE' : option.billing === 'monthly' ? 'MONTHLY' : 'PROJECT'} <b aria-hidden="true">{expanded ? '−' : '+'}</b></span>
                    </button>
                    {expanded && (
                      <div className="console-option-detail">
                        <p>{option.description || 'We can work out the right scope when we talk.'}</p>
                        {option.includes && <><strong>What this includes</strong><ul>{option.includes.map((item) => <li key={item}>{item}</li>)}</ul></>}
                        {option.includedIds && <p className="console-detail-note">You can keep this as a starting plan and add more services, or turn its parts into individual choices to customize them.</p>}
                        {includedPlan ? (
                          <div className="console-detail-actions"><span>Included in {includedPlan.name}</span><button type="button" onClick={() => expandPlan(includedPlan)}>Customize its parts</button></div>
                        ) : (
                          <button className="console-add" type="button" aria-pressed={selected} onClick={() => addOption(option)}>
                            {selected ? 'Remove from brief' : option.kind === 'package' ? 'Add this package' : 'Add to my brief'} <span aria-hidden="true">{selected ? '×' : '→'}</span>
                          </button>
                        )}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>

          <aside className="console-summary console-surface" ref={summaryRef} aria-labelledby="console-summary-heading">
            <p className="console-label">03 / Your brief <span className="console-count" role="status" aria-live="polite">{chosen.length} selected</span></p>
            <h3 id="console-summary-heading">What we can discuss</h3>
            {chosen.length ? (
              <ul className="console-selected">
                {chosen.map((option) => <li key={option.id}>
                  <div><small>{option.billing === 'monthly' ? 'Ongoing' : 'One-time / project'}</small><strong>{option.emailLabel}</strong>
                    {option.includedIds && <span>{option.includedIds.length} parts included · open the package to customize</span>}
                  </div>
                  <button type="button" aria-label={`Remove ${option.name}`} onClick={() => addOption(option)}>×</button>
                </li>)}
              </ul>
            ) : <p className="console-empty">Nothing selected yet. Browse an area or search for a service. If you are unsure, describe your idea below.</p>}
            <label htmlFor="service-goal-note">What are you trying to achieve? <span>(optional)</span></label>
            <textarea id="service-goal-note" rows={4} maxLength={2000} value={draft.note}
              onChange={(event) => setDraft((current) => ({ ...current, note: event.target.value }))}
              placeholder="Tell me about the goal, timeline, or what is not working today." />
            <button className="console-contact" type="button" onClick={sendToContact} disabled={!hasRequest}>
              Prepare my email <span aria-hidden="true">↗</span>
            </button>
            <button className="console-clear" type="button" onClick={clearBrief} disabled={!hasRequest}>Clear my brief</button>
            <p className="console-quote-note">Your selections and note will appear in an editable email. We will confirm the scope, timing, and quote together.</p>
          </aside>
        </div>
        <details className="console-scope-note">
          <summary>How the quote and outside costs work <span aria-hidden="true">+</span></summary>
          <p>This list helps us begin a conversation. We will agree on the actual deliverables, timeline, and quote in writing before work begins. Advertising spend, hosting, domains, and third-party subscriptions are handled directly by the client where needed.</p>
        </details>
        <div className="console-bottomline"><span>CHOICES ARE A STARTING POINT / NOT A FINAL SCOPE</span><button type="button" onClick={() => summaryRef.current?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' })}>Review my brief ↑</button></div>
      </div>
    </div>
  );
}
