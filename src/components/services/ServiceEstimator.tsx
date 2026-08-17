import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import {
  SERVICE_QUOTE_STORAGE_KEY,
  selectableServices,
  serviceCategories,
  type ServiceQuotePayload,
} from '../../data/services';
import './ServiceEstimator.css';

interface ServiceEstimatorProps {
  selectedIds: Set<string>;
  setSelectedIds: React.Dispatch<React.SetStateAction<Set<string>>>;
  appliedBundleId: string | null;
  setAppliedBundleId: React.Dispatch<React.SetStateAction<string | null>>;
}

export function ServiceEstimator({
  selectedIds,
  setSelectedIds,
  appliedBundleId,
  setAppliedBundleId,
}: ServiceEstimatorProps) {
  const navigate = useNavigate();

  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    () => new Set(serviceCategories.map((c) => c.id)),
  );

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);

      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }

      return next;
    });
  };

  const toggleService = useCallback(
    (serviceId: string, exclusiveGroup?: string) => {
      setAppliedBundleId(null);

      setSelectedIds((prev) => {
        const next = new Set(prev);

        if (next.has(serviceId)) {
          next.delete(serviceId);
          return next;
        }

        if (exclusiveGroup) {
          selectableServices
            .filter(
              (service) =>
                service.exclusiveGroup === exclusiveGroup &&
                service.id !== serviceId,
            )
            .forEach((service) => next.delete(service.id));
        }

        next.add(serviceId);
        return next;
      });
    },
    [setAppliedBundleId, setSelectedIds],
  );

  const clearSelection = () => {
    setSelectedIds(new Set());
    setAppliedBundleId(null);
  };

  const handleContact = () => {
    const selectedServices = selectableServices.filter((service) =>
      selectedIds.has(service.id),
    );

    const payload: ServiceQuotePayload = {
      selectedIds: [...selectedIds],
      appliedBundleId,
      itemLabels: selectedServices.map((service) => service.name),
    };

    sessionStorage.setItem(
      SERVICE_QUOTE_STORAGE_KEY,
      JSON.stringify(payload),
    );

    navigate('/contact?from=services');
  };

  return (
    <div className="estimator">
      <div className="estimator-menu">
        <div className="estimator-menu-header">
          <h3 className="estimator-menu-title">Build your bundle</h3>

          <p className="estimator-menu-desc">
            Select the services that fit what you need. You can combine
            services from different categories and change your selections at
            any time.
          </p>

          {selectedIds.size > 0 && (
            <button
              type="button"
              className="estimator-clear"
              onClick={clearSelection}
            >
              Clear selection
            </button>
          )}
        </div>

        <div className="estimator-categories">
          {serviceCategories.map((category) => {
            const services = selectableServices.filter(
              (service) => service.categoryId === category.id,
            );

            const isOpen = expandedCategories.has(category.id);

            const selectedInCategory = services.filter((service) =>
              selectedIds.has(service.id),
            ).length;

            return (
              <div key={category.id} className="estimator-category">
                <button
                  type="button"
                  className="estimator-category-toggle"
                  aria-expanded={isOpen}
                  onClick={() => toggleCategory(category.id)}
                >
                  <span className="estimator-category-name">
                    {category.title}
                  </span>

                  {selectedInCategory > 0 && (
                    <span className="estimator-category-count">
                      {selectedInCategory} selected
                    </span>
                  )}

                  <span
                    className="estimator-category-chevron"
                    aria-hidden="true"
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="estimator-category-body">
                    {category.description && (
                      <p className="estimator-category-desc">
                        {category.description}
                      </p>
                    )}

                    {category.note && (
                      <p className="estimator-category-note">
                        {category.note}
                      </p>
                    )}

                    <ul className="estimator-service-list">
                      {services.map((service) => {
                        const checked = selectedIds.has(service.id);
                        const inputId = `service-${service.id}`;

                        return (
                          <li key={service.id}>
                            <label
                              htmlFor={inputId}
                              className={`estimator-service-option ${
                                checked ? 'is-selected' : ''
                              }`}
                            >
                              <input
                                id={inputId}
                                type="checkbox"
                                checked={checked}
                                onChange={() =>
                                  toggleService(
                                    service.id,
                                    service.exclusiveGroup,
                                  )
                                }
                              />

                              <span
                                className="estimator-service-check"
                                aria-hidden="true"
                              />

                              <span className="estimator-service-content">
                                <span className="estimator-service-name">
                                  {service.name}
                                </span>

                                {service.description && (
                                  <span className="estimator-service-desc">
                                    {service.description}
                                  </span>
                                )}
                              </span>
                            </label>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <aside className="estimator-summary" aria-live="polite">
        <div className="estimator-summary-inner">
          <p className="section-label accent-gold">Bundle planner</p>

          <h3 className="estimator-summary-title">
            Your selected services
          </h3>

          {selectedIds.size > 0 ? (
            <ul className="estimator-summary-items">
              {selectableServices
                .filter((service) => selectedIds.has(service.id))
                .map((service) => (
                  <li key={service.id}>
                    <span>{service.name}</span>
                  </li>
                ))}
            </ul>
          ) : (
            <p className="estimator-summary-empty">
              Select services to start building your bundle.
            </p>
          )}

          {appliedBundleId && (
            <p className="estimator-summary-bundle">
              A suggested bundle has been added to your selection. You can
              change any of its services before requesting it.
            </p>
          )}

          <div className="estimator-summary-actions">
            <Button
              type="button"
              variant="primary"
              onClick={handleContact}
              disabled={selectedIds.size === 0}
            >
              Request this bundle
            </Button>

            <Button to="/contact" variant="secondary">
              General inquiry
            </Button>
          </div>

          <p className="estimator-summary-contact-note">
            Your selected services will be included in the contact form so we
            can discuss scope, timing, and pricing together.
          </p>
        </div>
      </aside>
    </div>
  );
}
