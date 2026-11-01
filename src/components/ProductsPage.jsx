import React, { useState, useEffect, useRef } from 'react';
import './ProductsPage.css';
import { categoriesData, productsData } from '../data/productsData';
import { toAppPath, handleLinkClick } from '../utils/navigation';
import { BRAND_NAME, SITE_NAME } from '../data/routesData';

export default function ProductsPage({ 
  initialCategory = 'tamarind',
  onSelectProduct 
}) {
  const [selectedCategoryId, setSelectedCategoryId] = useState(initialCategory);
  const productsSectionRef = useRef(null);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategoryId(initialCategory);
    }
  }, [initialCategory]);

  const selectedCategory = categoriesData.find((c) => c.id === selectedCategoryId) || categoriesData[0];
  const currentProducts = productsData[selectedCategoryId] || [];

  const handleCategoryClick = (catId) => {
    setSelectedCategoryId(catId);
    setTimeout(() => {
      if (productsSectionRef.current) {
        productsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

  return (
    <div className="products-page">
      {/* Top Banner */}
      <section className="products-top-banner">
        <div className="products-banner-inner">
          <span className="products-banner-badge">{SITE_NAME} Catalog</span>
          <h1 className="products-clean-title">Commercial & Wholesale Tamarind Products</h1>
          <p className="products-clean-subtitle">Direct from our Dharmapuri processing unit to commercial kitchens and retail shelves</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="products-content-container">
        {/* Category selector */}
        <section className="compact-category-bar" aria-label="Product Categories">
          <div className="compact-category-row" role="tablist">
            {categoriesData.map((cat) => {
              const isSelected = cat.id === selectedCategoryId;
              return (
                <button
                  key={cat.id}
                  className={`compact-cat-card ${isSelected ? 'selected' : 'faded'}`}
                  onClick={() => handleCategoryClick(cat.id)}
                  aria-selected={isSelected}
                  role="tab"
                  aria-label={`Show ${cat.name} products`}
                >
                  <div className="compact-cat-img-box">
                    <img 
                      src={cat.image} 
                      alt={cat.name} 
                      className="compact-cat-img" 
                      width="110" 
                      height="110" 
                      loading="lazy" 
                      decoding="async"
                    />
                  </div>
                  <span className="compact-cat-title">{cat.name}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Selected Category Products Section */}
        <section 
          id="category-products-area" 
          ref={productsSectionRef} 
          className="compact-products-section" 
          aria-live="polite"
        >
          <div className="compact-section-header">
            <div className="compact-title-group">
              <span className="compact-cat-badge">{selectedCategory.name} Collection</span>
              <h2 className="compact-section-headline">{selectedCategory.name} Catalog</h2>
            </div>
            
            {/* Status Indicator */}
            {selectedCategoryId === 'tamarind' ? (
              <div className="active-catalog-pill">
                <span className="live-dot" />
                <span>{currentProducts.length} Products Available for Dispatch</span>
              </div>
            ) : (
              <div className="coming-soon-pill">
                <span className="pulse-dot" />
                <span>Harvest Coming Soon</span>
              </div>
            )}
          </div>

          {/* Minimal Products Grid with REAL CRAWLABLE ANCHOR TAGS */}
          <div className="clean-minimal-products-grid">
            {currentProducts.map((prod, idx) => {
              const isComingSoon = prod.status === 'coming-soon';
              const productUrl = `/products/${prod.id}/`;

              return (
                <a
                  key={prod.id}
                  href={toAppPath(productUrl)}
                  className="clean-prod-card"
                  aria-label={`View full specifications and bulk inquiry for ${prod.name}`}
                  onClick={(e) => {
                    if (onSelectProduct) {
                      handleLinkClick(e, productUrl);
                      onSelectProduct(prod);
                    } else {
                      handleLinkClick(e, productUrl);
                    }
                  }}
                >
                  {/* Photo with zoom & hover overlay */}
                  <div className="clean-prod-img-wrap">
                    <img 
                      src={prod.image} 
                      alt={`${prod.name} - ${BRAND_NAME}`} 
                      className="clean-prod-img" 
                      width="400" 
                      height="300" 
                      loading={idx < 4 ? "eager" : "lazy"} 
                      fetchPriority={idx < 2 ? "high" : "auto"}
                      decoding="async"
                    />
                    
                    {isComingSoon && (
                      <div className="clean-coming-overlay">
                        <span>Launching Soon</span>
                      </div>
                    )}

                    <div className="clean-prod-hover-hint">
                      <span>View Specifications</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>

                  {/* Product Name & Arrow */}
                  <div className="clean-prod-footer">
                    <h3 className="clean-prod-name">{prod.name}</h3>
                    <div className="clean-prod-arrow" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
