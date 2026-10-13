import React, { useState } from 'react';
import './Header.css';
import logoImg from '../assets/logo.png';

export default function Header({ currentPage = 'home', onNavigate, isScrolled = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', page: 'home', href: '#home' },
    { label: 'Products', page: 'products', href: '#products' },
    { label: 'Services', page: 'services', href: '#services' },
    { label: 'About Us', page: 'about', href: '#about' },
  ];

  const handleNavClick = (pageId, href, e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(pageId, href);
    }
    setMobileMenuOpen(false);
  };

  // Header starts transparent initially; has solid background only on scroll movement
  const showSolidHeader = isScrolled;

  return (
    <header className={`header ${showSolidHeader ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo Section on Left */}
        <a 
          href="#home" 
          className="header-logo-link" 
          onClick={(e) => handleNavClick('home', '#home', e)}
        >
          <div className="logo-wrapper">
            <img src={logoImg} alt="Mugil Foods Logo" className="header-logo-img" />
          </div>
        </a>

        {/* Navigation & Make an Enquiry on Right */}
        <div className="header-right">
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navLinks.map((item) => {
                const isActive = currentPage === item.page;
                return (
                  <li key={item.label} className="nav-item">
                    <a
                      href={item.href}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      onClick={(e) => handleNavClick(item.page, item.href, e)}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="active-indicator" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Make an Enquiry CTA Button */}
          <div className="header-cta-group">
            <a
              href="#enquiry"
              className="enquiry-btn"
              onClick={(e) => handleNavClick('enquiry', '#enquiry', e)}
            >
              <span>Make an Enquiry</span>
              <svg 
                className="cta-arrow" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className={`mobile-toggle-btn ${mobileMenuOpen ? 'open' : ''}`}
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(item.page, item.href, e)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
          <li className="mobile-cta-wrapper">
            <a
              href="#enquiry"
              className="mobile-enquiry-btn"
              onClick={(e) => handleNavClick('enquiry', '#enquiry', e)}
            >
              Make an Enquiry
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
