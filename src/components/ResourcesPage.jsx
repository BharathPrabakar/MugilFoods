import React from 'react';
import './ResourcesPage.css';
import { articlesData, BRAND_NAME, SITE_NAME, COMPANY_PHONE_DISPLAY } from '../data/routesData';
import { toAppPath, handleLinkClick } from '../utils/navigation';

export default function ResourcesPage({ activeSlug = null }) {
  const currentArticle = activeSlug ? articlesData.find((a) => a.slug === activeSlug) : null;

  if (currentArticle) {
    return (
      <div className="resources-page">
        {/* Article Breadcrumb */}
        <nav className="resource-breadcrumb-bar" aria-label="Breadcrumb">
          <div className="resource-container">
            <a 
              href={toAppPath('/resources/')} 
              className="back-to-resources-btn"
              onClick={(e) => handleLinkClick(e, '/resources/')}
              aria-label="Return to Tamarind Knowledge Hub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>Back to Resources</span>
            </a>
            <div className="breadcrumb-trail">
              <a href={toAppPath('/')} onClick={(e) => handleLinkClick(e, '/')}>Home</a>
              <span className="crumb-sep" aria-hidden="true">/</span>
              <a href={toAppPath('/resources/')} onClick={(e) => handleLinkClick(e, '/resources/')}>Resources</a>
              <span className="crumb-sep" aria-hidden="true">/</span>
              <span className="crumb-active" title={currentArticle.title}>{currentArticle.title}</span>
            </div>
          </div>
        </nav>

        {/* Article Content */}
        <article className="article-main-section">
          <div className="resource-container article-inner">
            <header className="article-header">
              <div className="article-meta-badge">
                <span>Educational Guide</span>
                <span>•</span>
                <span>{currentArticle.readTime}</span>
              </div>
              <h1 className="article-title">{currentArticle.title}</h1>
              <p className="article-subtitle">{currentArticle.subtitle}</p>
              
              <div className="article-author-row">
                <div className="author-avatar-badge">MT</div>
                <div>
                  <span className="author-name">{BRAND_NAME} Agro-Processing Team</span>
                  <span className="author-detail">Dharmapuri Processing Facility, Tamil Nadu • Updated {currentArticle.dateModified}</span>
                </div>
              </div>
            </header>

            <div className="article-body">
              {currentArticle.content.map((sec, idx) => (
                <section key={idx} className="article-section-block">
                  <h2 className="article-sec-heading">{sec.heading}</h2>
                  <p className="article-sec-paragraph">{sec.body}</p>
                </section>
              ))}
            </div>

            {/* Quick Product Links inside Article */}
            <div className="article-related-products">
              <h3 className="related-title">Explore Mentioned Commercial Products</h3>
              <div className="related-grid">
                <a 
                  href={toAppPath('/products/seedless-tamarind/')} 
                  className="related-prod-card"
                  onClick={(e) => handleLinkClick(e, '/products/seedless-tamarind/')}
                >
                  <span className="related-name">Seedless Flower Tamarind</span>
                  <span className="related-link-text">View Specifications →</span>
                </a>
                <a 
                  href={toAppPath('/products/round-seedless-tamarind/')} 
                  className="related-prod-card"
                  onClick={(e) => handleLinkClick(e, '/products/round-seedless-tamarind/')}
                >
                  <span className="related-name">Round Seedless Tamarind</span>
                  <span className="related-link-text">View Specifications →</span>
                </a>
                <a 
                  href={toAppPath('/products/loose-karipuli-30kg/')} 
                  className="related-prod-card"
                  onClick={(e) => handleLinkClick(e, '/products/loose-karipuli-30kg/')}
                >
                  <span className="related-name">Loose Karipuli 30kg Box</span>
                  <span className="related-link-text">View Specifications →</span>
                </a>
                <a 
                  href={toAppPath('/wholesale-tamarind-supply/')} 
                  className="related-prod-card"
                  onClick={(e) => handleLinkClick(e, '/wholesale-tamarind-supply/')}
                >
                  <span className="related-name">Wholesale Supply Logistics</span>
                  <span className="related-link-text">Learn More →</span>
                </a>
              </div>
            </div>

            {/* Bottom Commercial Enquiry CTA */}
            <div className="article-cta-box">
              <h3>Need Bulk Tamarind for Your Manufacturing or Distribution?</h3>
              <p>
                Connect directly with our Dharmapuri processing unit for bulk pricing, packaging samples, and freight schedules.
              </p>
              <div className="article-cta-actions">
                <a 
                  href={toAppPath('/contact/')} 
                  className="btn-article-primary"
                  onClick={(e) => handleLinkClick(e, '/contact/')}
                >
                  Request Wholesale Quotation
                </a>
                <a 
                  href="tel:+919442177026" 
                  className="btn-article-secondary"
                >
                  Call: {COMPANY_PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="resources-page">
      {/* Top Banner */}
      <section className="resources-hero-banner">
        <div className="resource-container">
          <span className="resources-top-badge">Knowledge Hub</span>
          <h1 className="resources-page-title">Tamarind Buyer's Guide & Industry Resources</h1>
          <p className="resources-page-desc">
            Essential guides, moisture thresholds, processing standards, and commercial procurement insights from our agro-processing unit in Dharmapuri, Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="resources-grid-section">
        <div className="resource-container">
          <div className="articles-list-grid">
            {articlesData.map((article) => (
              <article key={article.slug} className="article-card">
                <div className="article-card-header">
                  <span className="badge-read-time">{article.readTime}</span>
                  <span className="badge-date">{article.datePublished}</span>
                </div>
                <h2 className="article-card-title">
                  <a 
                    href={toAppPath(`/resources/${article.slug}/`)}
                    onClick={(e) => handleLinkClick(e, `/resources/${article.slug}/`)}
                  >
                    {article.title}
                  </a>
                </h2>
                <p className="article-card-subtitle">{article.subtitle}</p>
                <p className="article-card-excerpt">{article.excerpt}</p>
                <div className="article-card-footer">
                  <a 
                    href={toAppPath(`/resources/${article.slug}/`)}
                    className="read-article-link"
                    onClick={(e) => handleLinkClick(e, `/resources/${article.slug}/`)}
                  >
                    <span>Read Complete Guide</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Quick Hub Navigation Cards */}
          <div className="resources-hub-footer">
            <div className="hub-box">
              <h3>Wholesale Tamarind Inquiries</h3>
              <p>Procuring in bulk for food processing, spice extraction, or commercial retail distribution?</p>
              <a 
                href={toAppPath('/wholesale-tamarind-supply/')} 
                className="hub-link"
                onClick={(e) => handleLinkClick(e, '/wholesale-tamarind-supply/')}
              >
                Explore Wholesale Tamarind Supply →
              </a>
            </div>
            <div className="hub-box">
              <h3>Private Label & Custom Packaging</h3>
              <p>Explore contract packaging, OEM vacuum pouches, and custom branded cartons from Dharmapuri.</p>
              <a 
                href={toAppPath('/custom-packaging/')} 
                className="hub-link"
                onClick={(e) => handleLinkClick(e, '/custom-packaging/')}
              >
                Explore Custom Packaging →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

