import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Experience.css';

const jobs = [
  {
    period: 'Nov 2023 — Present',
    role: 'Principal Consultant',
    company: 'OptiValueTek Consulting',
    current: true,
    desc: 'Leading AI RAG integration, middleware integration development, architecture reviews, and consulting.',
  },
  {
    period: 'Mar 2020 — Nov 2023',
    role: 'Sr. Integration Developer',
    company: 'Patona Technologies Ltd',
    current: false,
    desc: 'Leading middleware integration development, architecture reviews, and consulting for enterprise clients using Apache Camel, Kafka, and Red Hat Fuse.',
  },
  {
    period: 'May 2018 — Feb 2020',
    role: 'Officer / Manager',
    company: 'Citicorp Services India Private Limited',
    current: false,
    desc: 'Managed and developed Java & middleware integration applications for financial services infrastructure in a CMMI-5 process environment.',
  },
  {
    period: 'Jun 2016 — May 2018',
    role: 'Software Maintenance Engineer',
    company: 'Red Hat Inc',
    current: false,
    desc: 'Provided expert software maintenance support for Red Hat JBoss middleware products including Fuse, EAP, and A-MQ. Worked directly with enterprise clients to resolve integration issues.',
  },
  {
    period: 'Jan 2015 — May 2016',
    role: 'Senior Applications Developer',
    company: 'BNY Mellon Technologies',
    current: false,
    desc: 'Developed and enhanced Java-based financial applications and middleware integrations. Responsible for design patterns implementation and code quality.',
  },
  {
    period: 'Sep 2011 — Dec 2014',
    role: 'Senior Software Engineer',
    company: 'IGATE Global Solutions Limited',
    current: false,
    desc: 'Built enterprise Java applications and integration solutions across multiple client engagements. Established foundation in open-source middleware technologies.',
  },
];

export default function Experience() {
  useScrollReveal();

  return (
    <section id="experience" className="section">
      <div className="section-tag">03 / Experience</div>
      <h2 className="section-title">
        Career <span className="accent">Chronicle</span>
      </h2>
      <div className="section-divider" />

      <div className="timeline fade-in">
        {jobs.map((job, i) => (
          <div className="timeline-item" key={i}>
            <div className={`timeline-dot ${job.current ? 'timeline-dot--current' : ''}`} />
            <div className="timeline-content">
              <div className="timeline-period">{job.period}</div>
              <div className="timeline-role">{job.role}</div>
              <div className="timeline-company">{job.company}</div>
              <p className="timeline-desc">{job.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
