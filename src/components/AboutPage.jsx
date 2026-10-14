import React from 'react';
import './AboutPage.css';
import dharmapuriImg from '../assets/dharmapuri_origin.webp';
import slide1Img from '../assets/slide1.webp';

export default function AboutPage({ onNavigateToServices, onNavigateToContact }) {
  return (
    <div className="about-page">
      {/* Top Banner with rich gradient for transparent navbar blend */}
      <section className="about-hero-banner">
        <div className="about-hero-inner">
          <span className="about-top-badge">Since 2006</span>
          <h1 className="about-page-title">Rooted in Tradition</h1>
          <p className="about-page-desc">
            Agricultural processing excellence from Dharmapuri, Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="about-content-wrapper">
        {/* Story Section */}
        <section className="about-story-section">
          <div className="about-story-grid">
            <div className="story-media-box">
              <img src={dharmapuriImg} alt="Dharmapuri agricultural origins" className="story-featured-img" />
              <div className="story-img-badge">
                <span>Dharmapuri, Tamil Nadu</span>
              </div>
            </div>

            <div className="story-text-col">
              <span className="section-mini-tag">Our Journey</span>
              <h2 className="story-headline">Crafting Purity Since 2006</h2>
              <p className="story-paragraph">
                Mugil Foods began in 2006 under the visionary leadership of <strong>Kermugil Venthen</strong> in the fertile agricultural heartland of <strong>Dharmapuri, Tamil Nadu</strong>. Renowned for yielding some of India's finest tamarind groves, Dharmapuri provided the ideal ground to pioneer natural, hygienic curing and grading methods.
              </p>
              <p className="story-paragraph">
                What began as a focused processing unit has grown into an internationally respected enterprise. Today, we supply retail and wholesale networks <strong>across all of South India</strong> and export to discerning partners in <strong>America</strong> and international markets, backed by over <strong>20+ major completed export consignments</strong>.
              </p>

              <div className="founder-quote-box">
                <p className="quote-text">
                  “Our philosophy has never deviated: produce food with uncompromised integrity, honor traditional curing, and let trust be the cornerstone of every relationship.”
                </p>
                <div className="founder-signature">
                  <span className="founder-name">Kermugil Venthen</span>
                  <span className="founder-title">Founder, Mugil Foods</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Milestone Metrics Ribbon */}
        <section className="about-metrics-strip">
          <div className="milestone-col">
            <span className="milestone-number">2006</span>
            <span className="milestone-label">Year Founded in Dharmapuri</span>
          </div>
          <div className="milestone-col">
            <span className="milestone-number">20+</span>
            <span className="milestone-label">Successful Global Export Consignments</span>
          </div>
          <div className="milestone-col">
            <span className="milestone-number">100%</span>
            <span className="milestone-label">Pan South India Supply Footprint</span>
          </div>
          <div className="milestone-col">
            <span className="milestone-number">USA & India</span>
            <span className="milestone-label">Active Retail & Wholesale Presence</span>
          </div>
        </section>

        {/* Global & Domestic Presence Grid */}
        <section className="about-presence-section">
          <div className="presence-header">
            <span className="section-mini-tag">Our Reach</span>
            <h2 className="presence-headline">From Local Groves to Global Kitchens</h2>
          </div>

          <div className="presence-grid">
            <div className="presence-card">
              <div className="presence-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="presence-title">Dharmapuri Processing Hub</h3>
              <p className="presence-desc">
                Our main processing and warehousing facilities in Dharmapuri, Tamil Nadu, ensure direct access to prime harvests, sun-curing yards, and clean hygienic sorting.
              </p>
            </div>

            <div className="presence-card">
              <div className="presence-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="m9 8 6 4-6 4Z"></path>
                </svg>
              </div>
              <h3 className="presence-title">South India Retail & Supply</h3>
              <p className="presence-desc">
                Comprehensive distribution spanning Tamil Nadu, Karnataka, Kerala, Andhra Pradesh, and Telangana supplying supermarkets, grocery chains, and commercial institutions.
              </p>
            </div>

            <div className="presence-card">
              <div className="presence-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3 className="presence-title">International & America Exports</h3>
              <p className="presence-desc">
                Placing retail units and container consignments directly into the United States of America and diaspora markets, compliant with strict international food regulations.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="about-values-section">
          <div className="values-grid">
            <div className="value-item">
              <h4 className="value-title">Pure & Natural</h4>
              <p className="value-desc">No additives, no artificial acidulants, and no chemical preservation. Only honest harvest.</p>
            </div>
            <div className="value-item">
              <h4 className="value-title">Farmer Partnerships</h4>
              <p className="value-desc">Ethical sourcing directly supporting generational farming families across Dharmapuri.</p>
            </div>
            <div className="value-item">
              <h4 className="value-title">Global Quality Standard</h4>
              <p className="value-desc">Standardized moisture levels, vacuum sealed packs, and phytosanitary clearance for seamless export.</p>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
}
