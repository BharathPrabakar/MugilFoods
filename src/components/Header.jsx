import React, { useState } from 'react';
import './Header.css';
import logoImg from '../assets/logo.png';
import { toAppPath, handleLinkClick } from '../utils/navigation';
import { useCart } from './CartContext';

export default function Header({ currentPath = '/', currentPage = 'home', isScrolled = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { itemCount, openCart } = useCart();

  const navLinks = [
    { label: 'Home', path: '/', page: 'home' },
    { label: 'Products', path: '/products/', page: 'products' },
    { label: 'Services', path: '/services/', page: 'services' },
    { label: 'About Us', path: '/about/', page: 'about' },
    { label: 'Resources', path: '/resources/', page: 'resources' },
  ];

  const onNavClick = (e, path) => {
    handleLinkClick(e, path);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo Section on Left */}
        <a 
          href={toAppPath('/')} 
          className="header-logo-link" 
          onClick={(e) => onNavClick(e, '/')}
          aria-label="Mugil Foods - Return to Homepage"
        >
          <div className="logo-wrapper">
            <img 
              src={logoImg} 
              alt="Mugil Foods Logo" 
              className="header-logo-img" 
              width="52" 
              height="52" 
            />
          </div>
        </a>

        {/* Navigation & Make an Enquiry on Right */}
        <div className="header-right">
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {navLinks.map((item) => {
                const isActive = currentPage === item.page || (item.path !== '/' && currentPath.startsWith(item.path));
                return (
                  <li key={item.label} className="nav-item">
                    <a
                      href={toAppPath(item.path)}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      onClick={(e) => onNavClick(e, item.path)}
                      aria-current={isActive ? 'page' : undefined}
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
            <button type="button" className="header-cart-btn" onClick={openCart} aria-label={`Open shopping cart with ${itemCount} items`}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3h2l2.2 11.2a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 1.9-1.4L22 8H6"/><circle cx="10" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>
              <span className="header-cart-label">Cart</span><span className="header-cart-count">{itemCount}</span>
            </button>
            <a
              href={toAppPath('/contact/')}
              className="enquiry-btn"
              onClick={(e) => onNavClick(e, '/contact/')}
              aria-label="Make a wholesale enquiry"
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
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className={`mobile-toggle-btn ${mobileMenuOpen ? 'open' : ''}`}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
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
      <div 
        id="mobile-nav-drawer" 
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <ul className="mobile-nav-list">
          {navLinks.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <li key={item.label}>
                <a
                  href={toAppPath(item.path)}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => onNavClick(e, item.path)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
          <li className="mobile-cta-wrapper">
            <a
              href={toAppPath('/contact/')}
              className="mobile-enquiry-btn"
              onClick={(e) => onNavClick(e, '/contact/')}
            >
              Make an Enquiry
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
