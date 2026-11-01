import React from 'react';
import './ServicesSection.css';
import wholesaleImg from '../assets/service_wholesale.webp';
import retailImg from '../assets/service_retail.webp';
import customLabelImg from '../assets/service_custom_label.webp';
import { toAppPath, handleLinkClick } from '../utils/navigation';

const services = [
  {
    id: 'wholesale',
    name: 'Wholesale Tamarind Supply',
    subtitle: 'Bulk Quantities & Institutional Supply',
    image: wholesaleImg,
    path: '/wholesale-tamarind-supply/',
    description:
      'Direct farm-to-industry bulk shipments of seedless tamarind slabs, rounds, karipuli cakes, and tamarind concentrates, processed naturally in Dharmapuri, Tamil Nadu.',
    highlights: ['Export Grade Quality', 'Container & Tonne Volumes', 'Standardized Pallet Logistics'],
    ctaLabel: 'Wholesale Capabilities'
  },
  {
    id: 'retail',
    name: 'Retail Distribution',
    subtitle: 'Store-Ready Consumer Packs',
    image: retailImg,
    path: '/retail-distribution/',
    description:
      'Hygienically packaged consumer-ready products crafted for retail shelves, supermarkets, and grocery networks with barcodes, tamper-proof seals, and superior shelf stability.',
    highlights: ['Compact Consumer Sizing', 'Aroma-Locked Packaging', 'High Shelf Appeal'],
    ctaLabel: 'Retail Shelf Details'
  },
  {
    id: 'custom-label',
    name: 'Custom Label & OEM Packaging',
    subtitle: 'White Label & Private Branding',
    image: customLabelImg,
    path: '/custom-packaging/',
    description:
      'End-to-end contract packaging and customized private labelling for food brands, restaurants, and exporters. We handle processing, custom packaging formats, and compliant labelling.',
    highlights: ['Your Brand, Our Quality', 'Custom Jars, Pouches & Boxes', 'Food Grade Compliance'],
    ctaLabel: 'Custom Packaging Options'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="services-section" aria-label="Our Supply and Packaging Services">
      <div className="services-container">
        {/* Section Header */}
        <div className="services-header">
          <span className="services-badge">B2B & Commercial Supply</span>
          <h2 className="services-title">Tailored Processing Services for Every Scale</h2>
          <p className="services-subtitle">
            Whether you are sourcing bulk agricultural commodities, stocking supermarket aisles, or launching your own private food brand, Mugil Foods delivers unwavering quality from Dharmapuri.
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
                  width="600"
                  height="360"
                  loading="lazy"
                  decoding="async"
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
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action CTA link */}
                <div className="service-footer">
                  <a 
                    href={toAppPath(item.path)} 
                    className="service-cta-link"
                    onClick={(e) => handleLinkClick(e, item.path)}
                    aria-label={`View detailed capabilities for ${item.name}`}
                  >
                    <span>{item.ctaLabel}</span>
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
                      aria-hidden="true"
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
