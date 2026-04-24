import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Education.css';

const education = [
  {
    icon: '🎓',
    degree: 'Bachelor in Computer Applications',
    specialization: 'Commerce',
    school: 'Sangola College, Solapur University',
    period: '2008 – 2011',
    result: '76.67% — Rank Holder',
    link: 'http://sangolacollege.org/meritholders.php',
  },
  {
    icon: '📜',
    degree: 'Higher Secondary Certificate (HSC)',
    specialization: 'Commerce',
    school: 'Vidya Mandir Junior College, Sangola',
    period: '2007 – 2008',
    result: '78.17%',
  },
  {
    icon: '🏫',
    degree: 'Secondary School Certificate (SSC)',
    specialization: null,
    school: 'Shri. Sitaram Maharaj Vidyalaya, Khardi',
    period: '2005 – 2006',
    result: '70.40%',
  },
];

export default function Education() {
  useScrollReveal();

  return (
    <section id="education" className="section edu-section">
      <div className="section-tag">04 / Education</div>
      <h2 className="section-title">
        Academic <span className="accent">Journey</span>
      </h2>
      <div className="section-divider" />

      <div className="edu-grid">
        {education.map((e, i) => (
          <div className={`edu-card fade-in delay-${i + 1}`} key={e.degree}>
            <div className="edu-icon">{e.icon}</div>
            <div className="edu-degree">{e.degree}</div>
            {e.specialization && (
              <div className="edu-spec">Specialization: {e.specialization}</div>
            )}
            <div className="edu-school">{e.school}</div>
            <div className="edu-meta">
              <span className="edu-badge">{e.period}</span>
              <span className="edu-badge edu-badge--result">{e.result}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
