"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Works", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Testimonial", href: "/case-studies" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="logoisum-nav">
      <div className="logoisum-nav__inner">
        {/* Logo */}
        <Link href="/" className="logoisum-nav__logo">
          <svg className="logoisum-nav__logo-icon" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="28" rx="6" fill="#222" />
            <path d="M8 20V8h2.5v10H17v2H8z" fill="#fff" />
          </svg>
          <span className="logoisum-nav__logo-text">Edbros</span>
        </Link>

        {/* Menu Links */}
        <ul className={`logoisum-nav__menu ${mobileOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="logoisum-nav__link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link href="/start-project" className="logoisum-nav__cta">
          <span>Book A Free Meeting</span>
          <span className="logoisum-nav__cta-arrow">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className={`logoisum-nav__toggle ${mobileOpen ? "active" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
