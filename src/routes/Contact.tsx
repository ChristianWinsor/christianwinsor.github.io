import { useEffect, useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { site } from '../data/site';
import {
  SERVICE_QUOTE_STORAGE_KEY,
  buildServiceQuoteMessage,
  type ServiceQuotePayload,
} from '../data/services';
import { Button } from '../components/ui/Button';
import { useDocumentTitle } from '../hooks/useScrollReveal';
import './Contact.css';

const subjects = [
  'Job opportunity',
  'Freelance project',
  'Retainer inquiry',
  'Other',
];

function readServiceQuote(): ServiceQuotePayload | null {
  try {
    const raw = sessionStorage.getItem(SERVICE_QUOTE_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ServiceQuotePayload;
  } catch {
    return null;
  }
}

export function Contact() {
  useDocumentTitle(`Contact | ${site.name}`);
  const [searchParams] = useSearchParams();
  const fromServices = searchParams.get('from') === 'services';

  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [quoteNotice, setQuoteNotice] = useState(false);

  useEffect(() => {
    if (!fromServices) return;
    const quote = readServiceQuote();
    if (!quote) return;

    setSubject('Service inquiry');
    setMessage(buildServiceQuoteMessage(quote));
    setQuoteNotice(true);
    sessionStorage.removeItem(SERVICE_QUOTE_STORAGE_KEY);
  }, [fromServices]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      <div className="page-hero container">
        <p className="section-label accent-green">Contact</p>
        <h1>Let's work together</h1>
        <p>
          Open to senior design roles, lead design positions, freelance projects, and retainer engagements.
          I typically respond within 2–3 business days.
        </p>
      </div>

      <div className="contact-layout container">
        <section className="contact-info" aria-labelledby="contact-methods">
          <h2 id="contact-methods" className="section-title">Reach me directly</h2>
          <ul className="contact-methods">
            <li>
              <span className="contact-label">Email</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <span className="contact-label">Phone</span>
              <a href={`tel:${site.phone.replace(/\D/g, '')}`}>{site.phone}</a>
            </li>
            <li>
              <span className="contact-label">Location</span>
              <span>{site.location}, Canada</span>
            </li>
          </ul>
        </section>

        <section className="contact-form-section" aria-labelledby="contact-form-heading">
          <h2 id="contact-form-heading" className="section-title">Send a message</h2>

          {quoteNotice && !submitted && (
            <p className="contact-quote-notice" role="status">
              Your selected services from the Bundle Planner are included below. Edit anything before sending.
            </p>
          )}

          {submitted ? (
            <p className="contact-success">
              Your email client should open with your message ready to send. If it didn't open, email me directly at{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <Button type="submit" variant="primary">
                Open in email
              </Button>
              <p className="form-note">Opens your email client.</p>
            </form>
          )}
        </section>
      </div>
    </>
  );
}
