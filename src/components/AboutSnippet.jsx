import React from 'react';
import './AboutSnippet.css';

export default function AboutSnippet({ onExploreAbout }) {
  return (
    <section id="about" className="about-snippet-section" aria-label="About Mugil Tamarind">
      <div className="about-snippet-container">
        <div className="about-snippet-card">
          <div className="about-snippet-left">
            <span className="about-tag">Mugil Tamarind • Dharmapuri, Tamil Nadu</span>
            <h2 className="about-snippet-title">
              Best Tamarind in Tamil Nadu, Processed in Dharmapuri
            </h2>
            <p className="about-snippet-lead">
              At <strong>Mugil Tamarind</strong> (by <strong>Mugil Foods</strong>), we operate a dedicated processing plant in <strong>Dharmapuri, Tamil Nadu</strong>, sourcing high-grade raw tamarind directly from farmers across Indian states. In our modern facility, we wash, clean, deshell, deseed, and carefully sort every batch before drying under ideal hygienic conditions — making us the trusted hub for <strong>wholesale tamarind in Dharmapuri</strong> with versatile <strong>custom packaging</strong> for every scale.
            </p>
            <div className="about-snippet-action">
              <a 
                href="#about" 
                className="btn-snippet-link"
                onClick={(e) => {
                  if (onExploreAbout) {
                    e.preventDefault();
                    onExploreAbout();
                  }
                }}
              >
                <span>Read More About Our Processing</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>

          <div className="about-snippet-stats">
            <div className="stat-box">
              <span className="stat-number">Direct Sourcing</span>
              <span className="stat-label">From Farmers Across India</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">Dharmapuri Unit</span>
              <span className="stat-label">Hygienic Washing & Curing</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">100% Pure</span>
              <span className="stat-label">Zero Additives & No Chemicals</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">Custom Packing</span>
              <span className="stat-label">Retail Slabs & Bulk Cartons</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
