import React from 'react';
import './Footer.css';
import logoImg from '../assets/logo.png';

export default function Footer({ onNavigate }) {
  const handleLinkClick = (pageId, href, e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(pageId, href);
    } else {
      window.location.hash = pageId;
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-compact-grid">
          {/* Brand Info */}
          <div className="footer-brand-pane">
            <div className="footer-logo-wrapper">
              <img src={logoImg} alt="Mugil Foods Logo" className="footer-logo-img" />
            </div>
            <p className="footer-tagline">
              Premium seedless tamarind & agro-commodities from Dharmapuri since 2006.
            </p>
            <span className="footer-origin-badge">Dharmapuri, Tamil Nadu • Global Exports</span>
          </div>

          {/* Quick Links */}
          <div className="footer-nav-pane">
            <span className="footer-pane-heading">Quick Links</span>
            <div className="footer-nav-links">
              <a href="#home" onClick={(e) => handleLinkClick('home', '#home', e)}>Home</a>
              <a href="#products" onClick={(e) => handleLinkClick('products', '#products', e)}>Products</a>
              <a href="#services" onClick={(e) => handleLinkClick('services', '#services', e)}>Services</a>
              <a href="#about" onClick={(e) => handleLinkClick('about', '#about', e)}>About Us</a>
              <a href="#enquiry" onClick={(e) => handleLinkClick('enquiry', '#enquiry', e)}>Make an Enquiry</a>
            </div>
          </div>

          {/* Direct Contact */}
          <div className="footer-contact-pane">
            <span className="footer-pane-heading">Contact Us</span>
            <ul className="footer-contact-items">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Dharmapuri, Tamil Nadu, India</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+919442177026">+91 9442177026</a>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <a href="mailto:mugiltamarind26@gmail.com">mugiltamarind26@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Concise Bottom Bar */}
        <div className="footer-compact-bottom">
          <p>© {new Date().getFullYear()} Mugil Foods. All rights reserved.</p>
          <p className="footer-credit">Authenticity & Quality Guaranteed</p>
        </div>
      </div>
    </footer>
  );
}
