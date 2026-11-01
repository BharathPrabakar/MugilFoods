import React from 'react';
import './NotFoundPage.css';
import { toAppPath, handleLinkClick } from '../utils/navigation';
import { COMPANY_PHONE_DISPLAY } from '../data/routesData';

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <span className="not-found-badge">404 Error</span>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-desc">
          The page or product link you requested may have moved or is temporarily unavailable. Explore our wholesale tamarind catalog or get in touch with our Dharmapuri team below.
        </p>

        <div className="not-found-actions">
          <a 
            href={toAppPath('/')} 
            className="btn-404-primary"
            onClick={(e) => handleLinkClick(e, '/')}
          >
            <span>Return to Homepage</span>
          </a>
          <a 
            href={toAppPath('/products/')} 
            className="btn-404-secondary"
            onClick={(e) => handleLinkClick(e, '/products/')}
          >
            <span>Browse Products</span>
          </a>
          <a 
            href={toAppPath('/contact/')} 
            className="btn-404-secondary"
            onClick={(e) => handleLinkClick(e, '/contact/')}
          >
            <span>Contact & Enquiries</span>
          </a>
        </div>

        <div className="not-found-popular-links">
          <h3>Popular Destinations</h3>
          <div className="popular-links-grid">
            <a href={toAppPath('/products/seedless-tamarind/')} onClick={(e) => handleLinkClick(e, '/products/seedless-tamarind/')}>
              Seedless Flower Tamarind
            </a>
            <a href={toAppPath('/products/round-seedless-tamarind/')} onClick={(e) => handleLinkClick(e, '/products/round-seedless-tamarind/')}>
              Round Seedless Tamarind
            </a>
            <a href={toAppPath('/wholesale-tamarind-supply/')} onClick={(e) => handleLinkClick(e, '/wholesale-tamarind-supply/')}>
              Wholesale Tamarind Supply
            </a>
            <a href={toAppPath('/resources/')} onClick={(e) => handleLinkClick(e, '/resources/')}>
              Tamarind Buying Guide
            </a>
          </div>
        </div>

        <div className="not-found-direct-contact">
          <p>
            Urgent wholesale inquiry? Call us directly: <a href="tel:+919442177026">{COMPANY_PHONE_DISPLAY}</a>
          </p>
        </div>
      </div>
    </div>
  );
}

