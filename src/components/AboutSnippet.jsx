import React from 'react';
import './AboutSnippet.css';
import { toAppPath, handleLinkClick } from '../utils/navigation';
import { BRAND_NAME, SITE_NAME } from '../data/routesData';

export default function AboutSnippet() {
  return (
    <section id="about" className="about-snippet-section" aria-label={`About ${BRAND_NAME}`}>
      <div className="about-snippet-container">
        <div className="about-snippet-card">
          <div className="about-snippet-left">
            <span className="about-tag">{BRAND_NAME} • Dharmapuri, Tamil Nadu</span>
            <h2 className="about-snippet-title">
              Pure Tamarind Naturally Processed in Dharmapuri
            </h2>
            <p className="about-snippet-lead">
              At <strong>{BRAND_NAME}</strong> (by <strong>{SITE_NAME}</strong>), we operate a dedicated processing unit in <strong>Dharmapuri, Tamil Nadu</strong>, sourcing high-grade raw tamarind directly from farmers across agricultural belts in South India. In our facility, we wash, clean, deshell, deseed, and carefully sort every batch before drying under controlled hygienic conditions — making us the trusted hub for <strong>wholesale tamarind in Dharmapuri</strong> with versatile <strong>custom packaging</strong> for commercial buyers.
            </p>
            <div className="about-snippet-action">
              <a 
                href={toAppPath('/about/')} 
                className="btn-snippet-link"
                onClick={(e) => handleLinkClick(e, '/about/')}
                aria-label="Read complete details about our Dharmapuri tamarind processing facility"
              >
                <span>Read More About Our Processing Facility</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>

          <div className="about-snippet-stats">
            <div className="stat-box">
              <span className="stat-number">Direct Sourcing</span>
              <span className="stat-label">From Farmers Across South India</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">Dharmapuri Unit</span>
              <span className="stat-label">Hygienic Washing, Deseeding & Curing</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">100% Pure</span>
              <span className="stat-label">Zero Additives & No Artificial Colors</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">Custom Packing</span>
              <span className="stat-label">Consumer Slabs & Bulk 30kg/40kg Cartons</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
