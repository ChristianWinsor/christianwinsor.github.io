import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import {
  SERVICE_QUOTE_STORAGE_KEY,
  computeRetainerEstimate,
  formatCad,
  retainerBundles,
  retainerRules,
  selectableServices,
  serviceCategories,
  type ServiceQuotePayload,
} from '../../data/services';
import './ServiceEstimator.css';

export function ServiceEstimator() {
  const navigate = useNavigate();
  const [selectedIds, setSelectedIds] = useState<Set<string>>(() => new Set());
  const [appliedBundleId, setAppliedBundleId] = useState<string | null>(null);
  const [activeCategoryId, setActiveCategoryId] = useState(serviceCategories[0].id);
  const activeCategory = serviceCategories.find((category) => category.id === activeCategoryId) ?? serviceCategories[0];
  const activeServices = selectableServices.filter((service) => service.categoryId === activeCategory.id);
  const estimate = computeRetainerEstimate(selectedIds, appliedBundleId);

  function applyBundle(bundleId: string) {
    const bundle = retainerBundles.find((item) => item.id === bundleId);
    if (!bundle) return;
    setSelectedIds(new Set(bundle.serviceIds));
    setAppliedBundleId(bundleId);
  }

  function toggleService(serviceId: string, exclusiveGroup?: string) {
    const next = new Set(selectedIds);
    if (next.has(serviceId)) {
      next.delete(serviceId);
    } else {
      if (exclusiveGroup) {
        selectableServices
          .filter((service) => service.exclusiveGroup === exclusiveGroup)
          .forEach((service) => next.delete(service.id));
      }
      next.add(serviceId);
    }
    const appliedBundle = retainerBundles.find((bundle) => bundle.id === appliedBundleId);
    if (appliedBundle && !appliedBundle.serviceIds.every((id) => next.has(id))) {
      setAppliedBundleId(null);
    }
    setSelectedIds(next);
  }

  function clearSelection() {
    setSelectedIds(new Set());
    setAppliedBundleId(null);
  }

  function handleContact() {
    const payload: ServiceQuotePayload = {
      selectedIds: [...selectedIds],
      appliedBundleId,
      itemLabels: estimate.items.map((service) => service.name),
    };
    sessionStorage.setItem(SERVICE_QUOTE_STORAGE_KEY, JSON.stringify(payload));
    navigate('/contact?from=services');
  }

  return (
    <div className="control-panel">
      <div className="control-panel-topline">
        <span><span className="control-status-light" aria-hidden="true" /> SERVICE CONFIGURATION</span>
        <span>CAD / MONTHLY RETAINER</span>
      </div>

      <div className="control-panel-intro">
        <div>
          <p className="section-label accent-green">01 / Choose a starting point</p>
          <h3>Start with a plan, or build your own.</h3>
          <p>Each plan is a starting point. Add services across categories as needed; your estimate updates immediately.</p>
        </div>
        <button type="button" className="control-clear" onClick={clearSelection}>Start custom / clear</button>
      </div>

      <div className="control-presets" aria-label="Suggested monthly bundles">
        {retainerBundles.map((bundle) => (
          <button
            type="button"
            key={bundle.id}
            className={'control-preset' + (appliedBundleId === bundle.id ? ' is-active' : '')}
            aria-pressed={appliedBundleId === bundle.id}
            onClick={() => applyBundle(bundle.id)}
          >
            <span className="control-preset-name">{bundle.name}</span>
            <span className="control-preset-price">{formatCad(bundle.monthlyTotal)}<small>/mo</small></span>
            <span className="control-preset-desc">{bundle.description}</span>
            <span className="control-preset-savings">Save {formatCad(bundle.bundleSavings)}/mo · setup waived</span>
          </button>
        ))}
      </div>

      <div className="control-panel-workspace">
        <div className="control-catalog">
          <div className="control-workspace-heading">
            <p className="section-label accent-green">02 / Adjust your services</p>
            <h3>Explore the options</h3>
          </div>
          <p className="control-category-hint">Swipe to explore service categories →</p>
          <div className="control-category-list" aria-label="Service categories">
            {serviceCategories.map((category, index) => {
              const count = selectableServices.filter((service) => service.categoryId === category.id && selectedIds.has(service.id)).length;
              return (
                <button
                  type="button"
                  key={category.id}
                  className={'control-category' + (category.id === activeCategory.id ? ' is-active' : '')}
                  aria-pressed={category.id === activeCategory.id}
                  onClick={() => setActiveCategoryId(category.id)}
                >
                  <span className="control-category-index">{String(index + 1).padStart(2, '0')}</span>
                  <span>{category.title}</span>
                  {count > 0 && <span className="control-category-count">{count}</span>}
                </button>
              );
            })}
          </div>
          <div className="control-options" aria-live="polite">
            <h4>{activeCategory.title}</h4>
            {activeCategory.description && <p>{activeCategory.description}</p>}
            {activeCategory.note && <p className="control-option-note">{activeCategory.note}</p>}
            <div className="control-option-list">
              {activeServices.map((service) => (
                <label key={service.id} className={'control-option' + (selectedIds.has(service.id) ? ' is-selected' : '')}>
                  <input
                    type="checkbox"
                    checked={selectedIds.has(service.id)}
                    onChange={() => toggleService(service.id, service.exclusiveGroup)}
                  />
                  <span className="control-option-copy">
                    <strong>{service.name}</strong>
                    {service.description && <small>{service.description}</small>}
                  </span>
                  <span className="control-option-price">{service.priceLabel}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <aside className="control-summary" aria-labelledby="control-summary-heading">
          <p className="section-label accent-green">03 / Review your plan</p>
          <h3 id="control-summary-heading">Your monthly estimate</h3>
          <p className="control-total">{formatCad(estimate.monthlyTotal)}<small>/mo</small></p>
          {estimate.bundle && <p className="control-savings">{estimate.bundle.name}: {formatCad(estimate.bundle.bundleSavings)}/mo savings and setup waived.</p>}
          <p className="control-setup">One-time setup: {formatCad(estimate.setupFee)}{estimate.items.length === 0 ? ' when services are selected' : ''}</p>
          {!estimate.meetsMinimum && <p className="control-minimum">Monthly retainers start at {formatCad(retainerRules.minimumMonthly)}. Add services to reach the minimum.</p>}
          {estimate.items.length > 0 ? (
            <ul className="control-selected">
              {estimate.items.map((item) => <li key={item.id}><span>{item.name}</span><span>{item.priceLabel}</span></li>)}
            </ul>
          ) : <p className="control-empty">Choose a plan or select individual services to see your estimate.</p>}
          <Button type="button" variant="primary" onClick={handleContact} disabled={estimate.items.length === 0 || !estimate.meetsMinimum}>Discuss this plan</Button>
          <p className="control-fineprint">{retainerRules.disclaimer} Advertising spend, hosting, domains, and third-party subscriptions are separate.</p>
        </aside>
      </div>
    </div>
  );
}
