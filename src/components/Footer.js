import React from 'react';
import './Footer.css';

const socials = [
  { label: 'GitHub', href: 'https://github.com/kodtodya' },
  { label: 'Portfolio', href: 'https://kodtodya.github.io' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">kodtodya</div>
        <div className="footer-links">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Avadhut Lele — Crafted with ☕ in Pune, India</p>
        <p className="footer-sub">Solutions Architect · Middleware Integration · Open Source Advocate</p>
      </div>
    </footer>
  );
}
