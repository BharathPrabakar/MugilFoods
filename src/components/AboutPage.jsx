import React from 'react';
import './AboutPage.css';
import dharmapuriImg from '../assets/dharmapuri_origin.webp';
import { toAppPath, handleLinkClick } from '../utils/navigation';
import { BRAND_NAME, SITE_NAME, COMPANY_PHONE_DISPLAY } from '../data/routesData';

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Top Banner */}
      <section className="about-hero-banner">
        <div className="about-hero-inner">
          <span className="about-top-badge">Dharmapuri, Tamil Nadu</span>
          <h1 className="about-page-title">About Mugil Foods & Mugil Tamarind</h1>
          <p className="about-page-desc">
            Dedicated tamarind agro-processing, wholesale supply, and custom packaging centered in the agricultural heartland of Dharmapuri, Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="about-content-wrapper">
        {/* Story & Processing Facility Section */}
        <section className="about-story-section" aria-label="Our Sourcing and Processing Facility">
          <div className="about-story-grid">
            <div className="story-media-box">
              <img 
                src={dharmapuriImg} 
                alt="Mugil Foods Dharmapuri Tamarind Processing Plant" 
                className="story-featured-img" 
                width="800" 
                height="600" 
                fetchPriority="high"
                loading="eager" 
                decoding="async"
              />
              <div className="story-img-badge">
                <span>Dharmapuri Processing Plant</span>
              </div>
            </div>

            <div className="story-text-col">
              <span className="section-mini-tag">Our Sourcing & Facility</span>
              <h2 className="story-headline">Natural Tamarind Processing in the Dharmapuri Agro-Belt</h2>
              <p className="story-paragraph">
                <strong>{BRAND_NAME}</strong> by <strong>{SITE_NAME}</strong> is centered in the renowned tamarind processing belt of <strong>Dharmapuri, Tamil Nadu</strong>. We partner directly with farmers across prime agricultural states including Tamil Nadu, Karnataka, and Andhra Pradesh to procure only top-grade, naturally ripened raw tamarind pods.
              </p>
              <p className="story-paragraph">
                Every batch arriving at our Dharmapuri plant undergoes a methodical, natural refinement process: thorough inspection, hygienic cleaning, shell removal, manual and mechanized deseeding, and fiber separation. The purified tamarind pulp is sorted and cured under ideal natural weather conditions without artificial chemicals, synthetic dyes, or added sugars.
              </p>
              <p className="story-paragraph">
                Whether you require wholesale <a href={toAppPath('/products/seedless-tamarind/')} onClick={(e) => handleLinkClick(e, '/products/seedless-tamarind/')}>seedless flower tamarind</a>, <a href={toAppPath('/products/seedless-tamarind-slab-white-layer/')} onClick={(e) => handleLinkClick(e, '/products/seedless-tamarind-slab-white-layer/')}>compact slabs</a>, <a href={toAppPath('/products/round-seedless-tamarind/')} onClick={(e) => handleLinkClick(e, '/products/round-seedless-tamarind/')}>artisanal concentric rounds</a>, <a href={toAppPath('/products/karipuli-tamarind-cake/')} onClick={(e) => handleLinkClick(e, '/products/karipuli-tamarind-cake/')}>Karipuli cakes</a>, or tailored <a href={toAppPath('/custom-packaging/')} onClick={(e) => handleLinkClick(e, '/custom-packaging/')}>custom packaging</a> for private retail brands, our Dharmapuri facility ensures consistency, high pulp yield, and authentic tanginess.
              </p>

              <div className="founder-quote-box">
                <p className="quote-text">
                  “From careful cleaning and deseeding to controlled drying in clean conditions, our Dharmapuri plant is committed to delivering pure, unadulterated tamarind that businesses and households can trust completely.”
                </p>
                <div className="founder-signature">
                  <span className="founder-name">Karmugil Vendhan</span>
                  <span className="founder-title">Founder • {SITE_NAME}, Dharmapuri, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reach & Capability Grid */}
        <section className="about-presence-section" aria-label="Our Infrastructure and Operations">
          <div className="presence-header">
            <span className="section-mini-tag">Our Infrastructure</span>
            <h2 className="presence-headline">Wholesale Tamarind in Dharmapuri with Nationwide Freight Logistics</h2>
          </div>

          <div className="presence-grid">
            <div className="presence-card">
              <div className="presence-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="presence-title">Central Processing Facility</h3>
              <p className="presence-desc">
                Our processing and warehousing unit in Dharmapuri, Tamil Nadu features systematic cleaning, deshelling, grading, and controlled storage infrastructure.
              </p>
            </div>

            <div className="presence-card">
              <div className="presence-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="presence-title">Direct Farmer Procurement</h3>
              <p className="presence-desc">
                We work directly with agricultural growers across multiple Indian states, procuring prime seasonal harvests with authentic tartness, rich pulp yield, and strict grading.
              </p>
            </div>

            <div className="presence-card">
              <div className="presence-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="presence-title">Custom Packaging & Bulk Supply</h3>
              <p className="presence-desc">
                Comprehensive packaging options from 250g/500g retail packs to 10kg, 30kg, and 40kg master carton boxes, along with OEM private labeling solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="about-values-section" aria-label="Core Processing Principles">
          <div className="values-grid">
            <div className="value-item">
              <h3 className="value-title">100% Pure & Chemical Free</h3>
              <p className="value-desc">Zero artificial coloring, zero added sugars, and zero chemical preservatives. Preserving natural tartaric acid and authentic sour profile.</p>
            </div>
            <div className="value-item">
              <h3 className="value-title">Hygienic Deseeding & Sorting</h3>
              <p className="value-desc">Cleaned, deshelled, and deseeded with minimal fiber content under rigorous food safety and hygiene protocols.</p>
            </div>
            <div className="value-item">
              <h3 className="value-title">Dependable Commercial Supply</h3>
              <p className="value-desc">Prompt freight dispatch across Tamil Nadu and India for supermarkets, food processing industries, restaurants, and wholesalers.</p>
            </div>
          </div>
        </section>

        {/* Call to Action Bar */}
        <section className="about-cta-strip">
          <div className="about-cta-content">
            <h3>Looking for a Reliable Wholesale Tamarind Partner?</h3>
            <p>Connect with our Dharmapuri team for current batch availability, sample packs, and commercial bulk pricing.</p>
            <div className="about-cta-buttons">
              <a 
                href={toAppPath('/contact/')} 
                className="btn-about-enquire"
                onClick={(e) => handleLinkClick(e, '/contact/')}
              >
                Contact Our Facility
              </a>
              <a 
                href={toAppPath('/products/')} 
                className="btn-about-catalog"
                onClick={(e) => handleLinkClick(e, '/products/')}
              >
                View Product Catalog
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
