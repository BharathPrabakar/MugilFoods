import React, { useState } from 'react';
import './ServicesPage.css';

import wholesaleImg from '../assets/service_wholesale.jpg';
import retailImg from '../assets/service_retail.jpg';
import customLabelImg from '../assets/service_custom_label.jpg';

const serviceSegments = [
  {
    id: 'wholesale',
    name: 'Wholesale & Institutional Supply',
    subtitle: 'Direct Agro-Processing • Container Loads • Pan-India & Export Logistics',
    image: wholesaleImg,
    lead: 'We operate at commercial agricultural scale, supplying premium seedless tamarind slabs, whole pods, cold-pressed oils, and pure desi ghee directly to food manufacturers, large-scale caterers, spice millers, and international importers.',
    capabilities: [
      {
        title: 'High-Volume Capacity',
        desc: 'Supplying bulk tonnage per month with consistent year-round buffer inventory to prevent seasonal supply volatility.'
      },
      {
        title: 'Phytosanitary & Lab Certified',
        desc: 'Every batch is inspected for moisture limits, zero adulteration, aflatoxin testing, and international food hygiene compliance.'
      },
      {
        title: 'Standardized Bulk Packaging',
        desc: 'Available in 10kg/20kg corrugated master cartons, 25kg/50kg multi-layer food-grade poly-lined jute sacks, and containerized pallet loads.'
      },
      {
        title: 'Direct Farm-to-Port Freight',
        desc: 'Complete export logistics handling including FOB/CIF shipping, bill of lading, fumigation certificates, and customs documentation.'
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
    name: 'Retail Distribution & Supermarket Supply',
    subtitle: 'Store-Ready Consumer Packs • Barcoded • Shelf-Optimized Durability',
    image: retailImg,
    lead: 'Empowering regional supermarkets, gourmet organic grocers, and modern retail chains with beautifully branded, tamper-evident consumer packs that retain maximum countertop freshness and shelf appeal.',
    capabilities: [
      {
        title: 'Consumer Convenience Sizing',
        desc: 'Packaged in convenient 200g, 500g, and 1kg portioned units designed for modern kitchen pantries.'
      },
      {
        title: 'Aroma-Locked Barrier Packing',
        desc: 'Multi-layer vacuum pouches and nitrogen-flushed containers to lock in natural volatiles, fragrance, and color without artificial preservatives.'
      },
      {
        title: 'Compliant Retail Labelling',
        desc: 'Equipped with GS1 EAN/UPC barcodes, clear nutritional facts, batch numbering, manufacturing dates, and FSSAI statutory declarations.'
      },
      {
        title: 'Reliable Distributor Margins',
        desc: 'Structured distributor and retailer margin models, promotional display point-of-sale support, and fast replenishment fulfillment.'
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
    name: 'Custom Label & Contract Packaging (OEM)',
    subtitle: 'White Label • Bespoke Recipe Blends • Custom Packaging Solutions',
    image: customLabelImg,
    lead: 'Turnkey private label manufacturing for emerging food brands, export private labels, and culinary franchises who want their own brand name powered by Mugil Foods uncompromising quality and processing infrastructure.',
    capabilities: [
      {
        title: 'End-to-End Brand Integration',
        desc: 'We place your logo, custom brand typography, and tailored artwork on approved food-grade packaging formats.'
      },
      {
        title: 'Custom Packaging Material Formats',
        desc: 'Glass jars, matte/glossy stand-up zipper pouches, recyclable craft paper boxes, food-grade tins, and custom vacuum trays.'
      },
      {
        title: 'Flexible Low MOQs',
        desc: 'Accessible Minimum Order Quantities (MOQs) tailored to support both startup brand launches and high-capacity established labels.'
      },
      {
        title: 'Regulatory & Formulation Compliance',
        desc: 'Complete assistance with mandatory packaging compliance, nutritional testing verification, and export labelling guidelines.'
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

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('wholesale');

  const selectedService = serviceSegments.find((s) => s.id === activeTab) || serviceSegments[0];

  return (
    <div className="services-page">
      {/* Top Banner with rich gradient for transparent navbar blend */}
      <section className="services-hero-banner">
        <div className="services-hero-inner">
          <span className="services-top-badge">Our Services</span>
          <h1 className="services-page-title">Supply & Processing Solutions</h1>
          <p className="services-page-desc">
            Direct processing, retail distribution, and private label packaging from Dharmapuri.
          </p>
        </div>
      </section>

      {/* Segment Selector Tabs */}
      <div className="services-tabs-container">
        <div className="services-tabs-bar">
          {serviceSegments.map((segment) => {
            const isActive = segment.id === activeTab;
            return (
              <button
                key={segment.id}
                className={`service-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(segment.id)}
              >
                <span>{segment.name.split('&')[0]}</span>
                {isActive && <span className="tab-active-bar" />}
              </button>
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
              <img src={selectedService.image} alt={selectedService.name} className="service-featured-img" />
              <div className="service-media-badge">
                <span>{selectedService.id.toUpperCase()}</span>
              </div>
            </div>

            <div className="service-intro-col">
              <span className="service-tag-label">{selectedService.subtitle}</span>
              <h2 className="service-detail-title">{selectedService.name}</h2>
              <p className="service-lead-text">{selectedService.lead}</p>
              
              <div className="service-quick-actions">
                <a href="#enquiry" className="btn-service-primary">
                  {selectedService.ctaText}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
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
                  <div className="cap-num-icon">0{idx + 1}</div>
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
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quality Assurance & Compliance Banner */}
        <section className="services-assurance-strip">
          <div className="assurance-col">
            <div className="assurance-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div>
              <h4 className="assurance-heading">Certified Quality Control</h4>
              <p className="assurance-desc">Stringent testing for moisture content, heavy metals, and zero adulteration.</p>
            </div>
          </div>

          <div className="assurance-col">
            <div className="assurance-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <div>
              <h4 className="assurance-heading">Reliable Lead Times</h4>
              <p className="assurance-desc">On-schedule production runs and guaranteed harvest cycle delivery dates.</p>
            </div>
          </div>

          <div className="assurance-col">
            <div className="assurance-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m4.93 4.93 4.24 4.24"></path>
                <path d="m14.83 9.17 4.24-4.24"></path>
                <path d="m14.83 14.83 4.24 4.24"></path>
                <path d="m9.17 14.83-4.24 4.24"></path>
                <circle cx="12" cy="12" r="4"></circle>
              </svg>
            </div>
            <div>
              <h4 className="assurance-heading">Dedicated Account Management</h4>
              <p className="assurance-desc">A single point of contact for batch specifications, paperwork, and shipping updates.</p>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
}
