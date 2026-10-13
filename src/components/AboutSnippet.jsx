import React from 'react';
import './AboutSnippet.css';

export default function AboutSnippet({ onExploreAbout }) {
  return (
    <section id="about" className="about-snippet-section" aria-label="About Mugil Foods">
      <div className="about-snippet-container">
        <div className="about-snippet-card">
          <div className="about-snippet-left">
            <span className="about-tag">Est. 2006 • Dharmapuri</span>
            <h2 className="about-snippet-title">
              Pioneering Pure Agro-Processing Since 2006
            </h2>
            <p className="about-snippet-lead">
              Founded by <strong>Kermugil Venthen</strong> in Dharmapuri, Tamil Nadu, Mugil Foods supplies premium seedless tamarind and cold-pressed staples across all of South India and exports to America with 20+ completed international consignments.
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
                <span>Read Our Story</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>

          <div className="about-snippet-stats">
            <div className="stat-box">
              <span className="stat-number">2006</span>
              <span className="stat-label">Founded in Dharmapuri</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">20+</span>
              <span className="stat-label">Completed Export Orders</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">South India</span>
              <span className="stat-label">Retail & Supply Footprint</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">America</span>
              <span className="stat-label">Direct Retail Units Placed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
