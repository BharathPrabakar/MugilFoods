import React, { useState, useEffect } from 'react';
import './ServicesPage.css';

import wholesaleImg from '../assets/service_wholesale.webp';
import retailImg from '../assets/service_retail.webp';
import customLabelImg from '../assets/service_custom_label.webp';
import { toAppPath, handleLinkClick, navigateTo } from '../utils/navigation';
import { BRAND_NAME, SITE_NAME, COMPANY_PHONE_DISPLAY } from '../data/routesData';

const serviceSegments = [
  {
    id: 'wholesale',
    slug: 'wholesale-tamarind-supply',
    path: '/wholesale-tamarind-supply/',
    name: 'Wholesale & Institutional Supply',
    subtitle: 'Direct Agro-Processing • Container Loads • Pan-India Freight Logistics',
    image: wholesaleImg,
    lead: 'We operate at commercial agricultural scale, supplying premium seedless tamarind slabs, whole pods, Karipuli cakes, and pulp paste directly to food manufacturers, large-scale caterers, spice millers, and international importers.',
    capabilities: [
      {
        title: 'High-Volume Production Capacity',
        desc: 'Supplying bulk tonnage per month with consistent buffer inventory in Dharmapuri to prevent seasonal market volatility.'
      },
      {
        title: 'Stringent Moisture & Purity Testing',
        desc: 'Every batch is tested for regulated moisture limits, high tartaric acid retention, aflatoxin compliance, and zero foreign matter.'
      },
      {
        title: 'Standardized Bulk Packaging Formats',
        desc: 'Available in 10kg/20kg corrugated master cartons, 30kg loose bulk boxes, 40kg cake cartons, and 50kg multi-layer poly-lined bags.'
      },
      {
        title: 'Direct Farm-to-Harbor Logistics',
        desc: 'Domestic freight across all Indian states and complete export documentation handling including phytosanitary certificates.'
      }
    ],
    idealFor: [
      'Spice Extractors & Condiment Processors',
      'Sauce, Pickle & Ready-to-Eat (RTE) Manufacturers',
      'Institutional Caterers & Hotel Chains',
      'Overseas Commodity Trading Houses & Importers'
    ],
    ctaText: 'Request Wholesale Price Sheet'
  },
  {
    id: 'retail',
    slug: 'retail-distribution',
    path: '/retail-distribution/',
    name: 'Retail Distribution & Supermarket Supply',
    subtitle: 'Store-Ready Consumer Packs • Barcoded • Shelf-Optimized Durability',
    image: retailImg,
    lead: 'Empowering regional supermarkets, grocery distributors, and retail chains with beautifully packaged, tamper-evident consumer packs that retain maximum countertop freshness and shelf appeal.',
    capabilities: [
      {
        title: 'Consumer Convenience Sizing',
        desc: 'Packaged in 200g, 500g, and 1kg portioned slab and round units designed for modern kitchen pantries.'
      },
      {
        title: 'Aroma-Locked Barrier Packaging',
        desc: 'Multi-layer vacuum pouches and sealed containers to lock in natural moisture, tanginess, and rich color without chemical preservatives.'
      },
      {
        title: 'Compliant Retail Labelling',
        desc: 'Equipped with GS1 barcodes, clear nutritional facts, batch numbering, manufacturing dates, and statutory food declarations.'
      },
      {
        title: 'Reliable Distributor Margins',
        desc: 'Structured distributor and retailer margin models, promotional POS support, and rapid replenishment fulfillment.'
      }
    ],
    idealFor: [
      'Supermarket Chains & Hypermarkets',
      'Specialty Organic & Gourmet Food Stores',
      'Regional FMCG Wholesalers & Distributors',
      'E-commerce Grocery Hubs & Quick-Commerce Warehouses'
    ],
    ctaText: 'Enquire for Retail Distribution'
  },
  {
    id: 'custom-label',
    slug: 'custom-packaging',
    path: '/custom-packaging/',
    name: 'Custom Label & Contract Packaging (OEM)',
    subtitle: 'White Label • Bespoke Packaging Formats • Private Brand Launches',
    image: customLabelImg,
    lead: 'Turnkey private label manufacturing for emerging food brands, export private labels, and culinary franchises who want their own brand identity powered by Mugil Foods quality and Dharmapuri processing infrastructure.',
    capabilities: [
      {
        title: 'End-to-End Brand Integration',
        desc: 'We place your brand artwork, logo, and statutory labeling on food-grade packaging formats.'
      },
      {
        title: 'Flexible Packaging Material Formats',
        desc: 'Stand-up zipper pouches, recyclable craft cartons, moisture-sealed vacuum blocks, and traditional handwoven baskets.'
      },
      {
        title: 'Accessible Minimum Order Quantities (MOQs)',
        desc: 'Tailored MOQs designed to support both startup food brand launches and established high-volume private labels.'
      },
      {
        title: 'Regulatory & Lab Testing Assistance',
        desc: 'Guidance with mandatory packaging compliance, nutritional testing verification, and export labeling guidelines.'
      }
    ],
    idealFor: [
      'Private Organic Food & Heritage Brands',
      'Restaurant Chains & Cloud Kitchen Franchises',
      'Export Trading Labels selling to Diaspora Markets',
      'Corporate Gifting & Artisanal Festive Hampers'
    ],
    ctaText: 'Discuss Custom Brand Launch'
  }
];

export default function ServicesPage({ initialSegment = 'wholesale' }) {
  const [activeTab, setActiveTab] = useState(initialSegment);

  useEffect(() => {
    if (initialSegment) {
      setActiveTab(initialSegment);
    }
  }, [initialSegment]);

  const selectedService = serviceSegments.find((s) => s.id === activeTab) || serviceSegments[0];

  const handleTabClick = (segment) => {
    setActiveTab(segment.id);
    navigateTo(segment.path);
  };

  return (
    <div className="services-page">
      {/* Top Banner */}
      <section className="services-hero-banner">
        <div className="services-hero-inner">
          <span className="services-top-badge">{BRAND_NAME} Commercial Solutions</span>
          <h1 className="services-page-title">Tamarind Supply & Processing Services</h1>
          <p className="services-page-desc">
            Direct agro-processing, wholesale bulk distribution, supermarket packaging, and private label OEM solutions from Dharmapuri, Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Segment Selector Tabs */}
      <div className="services-tabs-container" role="tablist" aria-label="Services selection">
        <div className="services-tabs-bar">
          {serviceSegments.map((segment) => {
            const isActive = segment.id === activeTab;
            return (
              <a
                key={segment.id}
                href={toAppPath(segment.path)}
                className={`service-tab-btn ${isActive ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick(segment);
                }}
                role="tab"
                aria-selected={isActive}
              >
                <span>{segment.name.split('&')[0]}</span>
                {isActive && <span className="tab-active-bar" />}
              </a>
            );
          })}
        </div>
      </div>

      {/* Active Service In-Depth Breakdown */}
      <div className="services-content-wrapper">
        <section className="service-detail-card" key={selectedService.id}>
          {/* Card Top Row: Image & High-level overview */}
          <div className="service-overview-grid">
            <div className="service-media-frame">
              <img 
                src={selectedService.image} 
                alt={`${selectedService.name} - ${SITE_NAME}`} 
                className="service-featured-img" 
                width="800" 
                height="500" 
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="service-media-badge">
                <span>{selectedService.id.toUpperCase()}</span>
              </div>
            </div>

            <div className="service-intro-col">
              <span className="service-tag-label">{selectedService.subtitle}</span>
              <h2 className="service-detail-title">{selectedService.name}</h2>
              <p className="service-lead-text">{selectedService.lead}</p>
              
              <div className="service-quick-actions">
                <a 
                  href={toAppPath('/contact/')} 
                  className="btn-service-primary"
                  onClick={(e) => handleLinkClick(e, '/contact/')}
                >
                  <span>{selectedService.ctaText}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <a 
                  href="tel:+919442177026" 
                  className="btn-service-phone"
                  aria-label={`Call directly: ${COMPANY_PHONE_DISPLAY}`}
                >
                  Call: {COMPANY_PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="service-capabilities-section">
            <h3 className="section-subheading">Core Operational Capabilities</h3>
            <div className="capabilities-grid">
              {selectedService.capabilities.map((cap, idx) => (
                <div key={idx} className="capability-card">
                  <div className="cap-num-icon" aria-hidden="true">0{idx + 1}</div>
                  <h4 className="cap-card-title">{cap.title}</h4>
                  <p className="cap-card-desc">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal For / Target Audience */}
          <div className="service-target-section">
            <div className="target-box-inner">
              <h3 className="target-box-title">Tailored Specifically For:</h3>
              <div className="target-pills-wrap">
                {selectedService.idealFor.map((item, idx) => (
                  <div key={idx} className="target-pill">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quality Assurance Strip */}
        <section className="services-assurance-strip" aria-label="Quality and Logistics Assurance">
          <div className="assurance-col">
            <div className="assurance-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div>
              <h4 className="assurance-heading">Quality Controlled Processing</h4>
              <p className="assurance-desc">Stringent checks for moisture thresholds, high pulp yield, and zero foreign matter.</p>
            </div>
          </div>

          <div className="assurance-col">
            <div className="assurance-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <div>
              <h4 className="assurance-heading">Dependable Harvest Dispatch</h4>
              <p className="assurance-desc">On-schedule production runs and guaranteed harvest cycle delivery dates.</p>
            </div>
          </div>

          <div className="assurance-col">
            <div className="assurance-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m4.93 4.93 4.24 4.24"></path>
                <path d="m14.83 9.17 4.24-4.24"></path>
                <path d="m14.83 14.83 4.24 4.24"></path>
                <path d="m9.17 14.83-4.24 4.24"></path>
                <circle cx="12" cy="12" r="4"></circle>
              </svg>
            </div>
            <div>
              <h4 className="assurance-heading">Direct Facility Communication</h4>
              <p className="assurance-desc">Single point of contact in Dharmapuri for batch specifications, paperwork, and shipping updates.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
