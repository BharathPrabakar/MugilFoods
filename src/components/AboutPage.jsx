import React from 'react';
import './AboutPage.css';
import dharmapuriImg from '../assets/dharmapuri_origin.webp';

export default function AboutPage({ onNavigateToServices, onNavigateToContact }) {
  return (
    <div className="about-page">
      {/* Top Banner */}
      <section className="about-hero-banner">
        <div className="about-hero-inner">
          <span className="about-top-badge">Dharmapuri, Tamil Nadu</span>
          <h1 className="about-page-title">Mugil Tamarind</h1>
          <p className="about-page-desc">
            Premium wholesale tamarind in Dharmapuri, Tamil Nadu — natural, hygienic, and built with trust by Mugil Foods.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="about-content-wrapper">
        {/* Story & Processing Facility Section */}
        <section className="about-story-section">
          <div className="about-story-grid">
            <div className="story-media-box">
              <img src={dharmapuriImg} alt="Dharmapuri Tamarind Processing Plant" className="story-featured-img" width="800" height="600" loading="lazy" />
              <div className="story-img-badge">
                <span>Dharmapuri Processing Plant</span>
              </div>
            </div>

            <div className="story-text-col">
              <span className="section-mini-tag">Our Sourcing & Facility</span>
              <h2 className="story-headline">Crafting the Best Tamarind in Tamil Nadu</h2>
              <p className="story-paragraph">
                <strong>Mugil Tamarind</strong> by <strong>Mugil Foods</strong> is centered in the agro-processing belt of <strong>Dharmapuri, Tamil Nadu</strong>. We partner directly with farmers across prime Indian agricultural states to procure only top-grade, naturally ripened raw tamarind.
              </p>
              <p className="story-paragraph">
                Every batch brought into our Dharmapuri plant undergoes a methodical, natural refinement process: thorough washing, hygienic cleaning, manual and mechanized shell removal, careful deseeding, and meticulous fiber separation. The purified tamarind pulp is then sorted and dried under ideal, controlled weather conditions without any artificial chemicals or preservatives.
              </p>
              <p className="story-paragraph">
                Whether you need wholesale seedless tamarind slabs, artisanal concentric rounds, karipuli cakes, or tailored <strong>custom packaging</strong> for private brands, our Dharmapuri facility ensures unmatched consistency, natural acidity, and supreme flavor yield.
              </p>

              <div className="founder-quote-box">
                <p className="quote-text">
                  “From washing and deseeding to drying in ideal conditions, our Dharmapuri plant is committed to delivering pure, unadulterated tamarind that businesses and households can trust completely.”
                </p>
                <div className="founder-signature">
                  <span className="founder-name">Mugil Tamarind</span>
                  <span className="founder-title">Mugil Foods • Dharmapuri, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reach & Capability Grid */}
        <section className="about-presence-section">
          <div className="presence-header">
            <span className="section-mini-tag">Our Infrastructure</span>
            <h2 className="presence-headline">Wholesale Tamarind in Dharmapuri with Nationwide Reach</h2>
          </div>

          <div className="presence-grid">
            <div className="presence-card">
              <div className="presence-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="presence-title">Dharmapuri Processing Plant</h3>
              <p className="presence-desc">
                Our advanced central processing and warehousing unit in Dharmapuri, Tamil Nadu features systematic cleaning, deshelling, grading, and controlled drying infrastructure.
              </p>
            </div>

            <div className="presence-card">
              <div className="presence-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="presence-title">Direct Farmer Procurement</h3>
              <p className="presence-desc">
                We work directly with agricultural growers across multiple Indian states, securing prime seasonal harvests with authentic tartness, rich pulp yield, and no middlemen compromise.
              </p>
            </div>

            <div className="presence-card">
              <div className="presence-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="presence-title">Custom Packaging & Bulk Supply</h3>
              <p className="presence-desc">
                Comprehensive packaging flexibility from 250g/500g retail branded packs to 10kg, 30kg, and 40kg master carton boxes, along with OEM white-labeling solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="about-values-section">
          <div className="values-grid">
            <div className="value-item">
              <h4 className="value-title">100% Pure & Chemical Free</h4>
              <p className="value-desc">Zero artificial coloring, zero added sugar, and zero preservatives. Retaining natural tartaric acid and authentic flavor.</p>
            </div>
            <div className="value-item">
              <h4 className="value-title">Hygienic De-seeding & Sorting</h4>
              <p className="value-desc">Washed, deshelled, and deseeded with minimal fiber content under rigorous food safety and hygiene protocols.</p>
            </div>
            <div className="value-item">
              <h4 className="value-title">Dependable Wholesale Supply</h4>
              <p className="value-desc">Prompt freight dispatch across Tamil Nadu and India for supermarkets, food processing industries, restaurants, and wholesalers.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
