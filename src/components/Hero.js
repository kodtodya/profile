import React, { useEffect, useRef } from 'react';
import './Hero.css';

const stats = [
  { num: '10+', label: 'Years in IT' },
  { num: '5',   label: 'Companies' },
  { num: '20+', label: 'Technologies' },
  { num: 'OSS', label: 'Advocate' },
];


const connect = [
  {
    icon: '🚀',
    name: 'GitHub',
    url: 'https://github.com/kodtodya',
  },
  {
    icon: 'x',
    name: 'X',
    url: 'https://x.com/kodtodya',
  }
];

export default function Hero() {
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (el) {
      setTimeout(() => el.classList.add('hero-visible'), 100);
    }
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-orb hero-orb--1" />
        <div className="hero-orb hero-orb--2" />
        <div className="hero-grid" />
      </div>

      <div className="hero-content" ref={contentRef}>
        <div className="hero-chip">
          <span className="chip-dot" />
          Available for Opportunities
        </div>

        <h1 className="hero-name">
          Avadhut<br />
          <span className="hero-name--accent">Lele</span>
        </h1>

        <div className="hero-title">
          <span className="hero-title-prefix">// </span>
          Solutions Architect &amp; Integration Developer
        </div>

        <p className="hero-desc">
          Crafting resilient middleware integration systems and cloud-native architectures
          with 10+ years of experience. Based in Pune, India — empowering organisations
          through open-source technology.
        </p>

        <div className="hero-actions">
          <a href="#hire" className="btn-primary">Let's Build Together</a>
          <a href="#experience" className="btn-outline">View Experience</a>
        </div>

        <div className="hero-stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

      </div>

      <a href="#about" className="hero-scroll-hint" aria-label="Scroll to About">
        <span />
      </a>
    </section>
  );
}
