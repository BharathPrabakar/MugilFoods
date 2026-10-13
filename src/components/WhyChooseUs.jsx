import React from 'react';
import './WhyChooseUs.css';

const features = [
  {
    id: 'pure',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
    badge: '100% Authentic',
    title: 'Uncompromising Purity',
    description:
      'Zero adulteration, zero artificial additives, and zero chemical preservatives. From raw tamarind harvest to pure cold-pressed extraction, every batch preserves its natural richness.'
  },
  {
    id: 'fresh',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 0-7.07 17.07L12 22l7.07-2.93A10 10 0 0 0 12 2z"></path>
        <path d="M12 6v6l4 2"></path>
      </svg>
    ),
    badge: 'Farm to Shelf',
    title: 'Peak Freshness Guaranteed',
    description:
      'Direct sourcing and immediate hygienic curing lock in original aroma, vibrant color, and rich tangy taste. Vacuum-sealed packaging guarantees long-lasting natural freshness.'
  },
  {
    id: 'traditional',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
      </svg>
    ),
    badge: 'Time-Tested Methods',
    title: 'Honoring Traditional Craft',
    description:
      'We respect generational processing wisdom—traditional sun drying, gentle wood cold-pressing, and artisanal compacting methods that retain nutrition and authentic culinary heritage.'
  },
  {
    id: 'trust',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      </svg>
    ),
    badge: 'Our Core Promise',
    title: 'Built With Trust',
    description:
      'Our name is synonymous with integrity and transparent relationships. Trusted by households, food manufacturers, and commercial partners across regions for honest quality.'
  }
];

const metrics = [
  { value: 'Since 2006', label: 'Rooted in Dharmapuri' },
  { value: '20+', label: 'Global Export Orders' },
  { value: 'South India', label: 'Pan-Regional Supply' },
  { value: 'America', label: 'Retail & Wholesale Units' }
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us-section" aria-label="Why Choose Mugil Foods">
      <div className="why-container">
        {/* Section Header */}
        <div className="why-header">
          <span className="why-badge">Why Choose Us</span>
          <h2 className="why-title">
            Pure. Fresh. Traditional. <br />
            <span className="why-highlight">Built With Trust.</span>
          </h2>
          <p className="why-subtitle">
            At Mugil Foods, our passion lies in preserving the honest integrity of natural food. We bring you uncompromised quality, age-old culinary wisdom, and ethical agricultural partnerships.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="features-grid">
          {features.map((item) => (
            <div key={item.id} className="feature-card">
              <div className="feature-card-top">
                <div className="feature-icon-box">
                  {item.icon}
                </div>
                <span className="feature-pill">{item.badge}</span>
              </div>
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Metrics Ribbon */}
        <div className="trust-metrics-ribbon">
          {metrics.map((metric, idx) => (
            <div key={idx} className="metric-item">
              <span className="metric-value">{metric.value}</span>
              <span className="metric-label">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
