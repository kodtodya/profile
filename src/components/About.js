import React, { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

const interests = [
  {
    icon: '🚀',
    label: 'Space Exploration',
    sub: 'Mars & Lunar missions, Starship structural engineering',
  },
  {
    icon: '💻',
    label: 'Open Source Advocate',
    sub: 'Building software that empowers communities worldwide',
  },
  {
    icon: '🌳',
    label: 'Nature Enthusiast',
    sub: 'Planting trees and giving back to the planet',
  },
  {
    icon: '🎓',
    label: 'Lifelong Learner',
    sub: 'Always chasing the next interesting technology',
  },
];

export default function About() {
  useScrollReveal();

  return (
    <section id="about" className="section">
      <div className="section-tag">01 / About</div>
      <h2 className="section-title">
        Hello, I am <span className="accent">Avadhut</span>
      </h2>
      <div className="section-divider" />

      <div className="about-grid">
        <div className="about-text fade-in">
          <p>
            Welcome to this corner of the world wide web. I believe if we all strive to leave our
            community better than we found it, this world would be a fantastic place to live.
          </p>
          <p>
            Everyday I look for ways to empower people by building software. I'm a{' '}
            <strong>software developer</strong> and proudly resonate with the word{' '}
            <strong className="about-accent">"GEEK"</strong>. Originally from Pune — India's most
            livable city — I call it home.
          </p>
          <p>
            Early on, I realized technology has a significant impact on improving lives. I dove into
            open-source technologies like Java and never stopped learning. I simultaneously completed
            my masters while building my professional career.
          </p>
          <p>
            I also take pride in architecture review and consultation for various open-source
            technologies, always searching for the latest, most interesting, and most importantly,
            open-source solutions.
          </p>
        </div>

        <div className="about-interests fade-in delay-2">
          {interests.map((item) => (
            <div className="interest-card" key={item.label}>
              <div className="interest-icon">{item.icon}</div>
              <div>
                <div className="interest-label">{item.label}</div>
                <div className="interest-sub">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
