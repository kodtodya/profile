import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './HireMe.css';

const offerings = [
  {
    icon: '🏗️',
    title: 'Architecture Consulting',
    desc: 'Design and review of middleware integration systems, microservices topologies, and cloud-native architecture patterns.',
  },
  {
    icon: '🔧',
    title: 'Integration Development',
    desc: 'Full-cycle development using Apache Camel, Kafka, Spring Boot, and Red Hat Fuse enterprise platforms.',
  },
  {
    icon: '📡',
    title: 'Technical Training',
    desc: 'Corporate training on open-source middleware, integration frameworks, and OSS development best practices.',
  },
  {
    icon: '☁️',
    title: 'Cloud Migration',
    desc: 'Re-architecture of legacy systems to OpenShift, Kubernetes, and cloud-native containerized platforms.',
  },
];

const INITIAL = { name: '', email: '', company: '', type: 'Architecture Consulting', message: '' };

export default function HireMe() {
  useScrollReveal();
  const [form, setForm] = useState(INITIAL);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm(INITIAL);
    }, 4000);
  };

  return (
    <section id="hire" className="hire-wrapper">
      <div className="hire-inner section">
        {/* Header */}
        <div className="hire-header fade-in">
          <div className="hire-badge">
            <span className="hire-dot" />
            Open to Opportunities
          </div>
          <h2 className="section-title">
            Want to <span className="accent2">Hire Me?</span>
          </h2>
          <div className="section-divider" />
          <p className="hire-desc">
            I'm open to exciting integration architecture roles, consulting engagements, and
            technical training sessions. Let's talk about what we can build together. I believe
            in writing clean, maintainable, open-source-powered solutions that genuinely help
            organisations.
          </p>
        </div>

        {/* Offering cards */}
        <div className="hire-cards fade-in delay-1">
          {offerings.map((o) => (
            <div className="offer-card" key={o.title}>
              <div className="offer-icon">{o.icon}</div>
              <div className="offer-title">{o.title}</div>
              <p className="offer-desc">{o.desc}</p>
            </div>
          ))}
        </div>

        {/* Contact form */}
        <div className="contact-box fade-in delay-2">
          <h3 className="form-heading">Send a Message</h3>

          {sent ? (
            <div className="form-success">
              <div className="form-success-icon">✓</div>
              <div className="form-success-text">Message sent! I'll be in touch soon.</div>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="e.g. Jane Smith"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="company">Company / Organisation</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company name"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="type">Engagement Type</label>
                  <select
                    id="type"
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                  >
                    <option>Architecture Consulting</option>
                    <option>Integration Development</option>
                    <option>Technical Training</option>
                    <option>Cloud Migration</option>
                    <option>Full-time Role</option>
                    <option>Open Source Collaboration</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-field form-full">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, requirements, or opportunity..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="submit-btn">
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
