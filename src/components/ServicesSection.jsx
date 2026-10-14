import React from 'react';
import './ServicesSection.css';

import wholesaleImg from '../assets/service_wholesale.webp';
import retailImg from '../assets/service_retail.webp';
import customLabelImg from '../assets/service_custom_label.webp';

const services = [
  {
    id: 'wholesale',
    name: 'Wholesale Supply',
    subtitle: 'Bulk Quantities & Institutional Supply',
    image: wholesaleImg,
    description:
      'Direct farm-to-industry bulk shipments of seedless tamarind slabs and concentrates, with cold-pressed oils and pure ghee launching soon.',
    highlights: ['Export Grade Quality', 'Container & Tonne Volumes', 'Standardized Pallet Logistics'],
    ctaLabel: 'Request Wholesale Quote',
    href: '#enquiry'
  },
  {
    id: 'retail',
    name: 'Retail Distribution',
    subtitle: 'Store-Ready Consumer Packs',
    image: retailImg,
    description:
      'Hygienically packaged consumer-ready products crafted for retail shelves, supermarkets, and specialty grocery stores with clear barcodes, tamper-proof seals, and appealing shelf presence.',
    highlights: ['Compact Consumer Sizing', 'Aroma-Locked Packaging', 'High Shelf Appeal'],
    ctaLabel: 'Enquire for Retail Shelf',
    href: '#enquiry'
  },
  {
    id: 'custom-label',
    name: 'Custom Label & OEM',
    subtitle: 'White Label & Private Branding',
    image: customLabelImg,
    description:
      'End-to-end contract packaging and customized private labelling for brands, restaurants, and exporters. We handle processing, custom packaging formats, and compliant labelling with your brand identity.',
    highlights: ['Your Brand, Our Quality', 'Custom Jars, Pouches & Boxes', 'Food Grade Compliance'],
    ctaLabel: 'Discuss Custom Branding',
    href: '#enquiry'
  }
];

export default function ServicesSection({ onExploreServices }) {
  return (
    <section id="services" className="services-section" aria-label="We Offer - Our Services">
      <div className="services-container">
        {/* Section Header */}
        <div className="services-header">
          <span className="services-badge">We Offer</span>
          <h2 className="services-title">Tailored Services for Every Scale</h2>
          <p className="services-subtitle">
            Whether you are sourcing bulk agricultural commodities, stocking retail aisles, or launching your own private food label, Mugil Foods delivers unwavering trust and quality.
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="services-grid">
          {services.map((item) => (
            <article key={item.id} className="service-card">
              {/* Image banner with overlay */}
              <div className="service-img-wrap">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="service-img" 
                  loading="lazy"
                />
                <div className="service-img-overlay" />
                <span className="service-badge-pill">{item.subtitle}</span>
              </div>

              {/* Service Details */}
              <div className="service-body">
                <h3 className="service-name">{item.name}</h3>
                <p className="service-description">{item.description}</p>

                {/* Highlights pill tags */}
                <div className="service-highlights">
                  {item.highlights.map((tag, idx) => (
                    <span key={idx} className="highlight-tag">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action CTA link */}
                <div className="service-footer">
                  <a 
                    href="#services" 
                    className="service-cta-link"
                    onClick={(e) => {
                      if (onExploreServices) {
                        e.preventDefault();
                        onExploreServices();
                      }
                    }}
                  >
                    <span>View Detailed Capabilities</span>
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
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
