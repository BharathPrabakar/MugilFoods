import React, { useState, useEffect, useRef } from 'react';
import './ProductsPage.css';
import { categoriesData, productsData } from '../data/productsData';

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
      {/* Top Banner with Rich Backdrop so transparent header blends nicely */}
      <section className="products-top-banner">
        <div className="products-banner-inner">
          <h1 className="products-clean-title">Explore the world of MugilFoods</h1>
          <p className="products-clean-subtitle">Select a category to view our authentic range</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="products-content-container">
        {/* Compact Everest-Spices style category selector */}
        <section className="compact-category-bar" aria-label="Product Categories">
          <div className="compact-category-row">
            {categoriesData.map((cat) => {
              const isSelected = cat.id === selectedCategoryId;
              return (
                <button
                  key={cat.id}
                  className={`compact-cat-card ${isSelected ? 'selected' : 'faded'}`}
                  onClick={() => handleCategoryClick(cat.id)}
                  aria-pressed={isSelected}
                  aria-label={`Select ${cat.name}`}
                >
                  <div className="compact-cat-img-box">
                    <img src={cat.image} alt={cat.name} className="compact-cat-img" />
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
              <h2 className="compact-section-headline">{selectedCategory.name} Products</h2>
            </div>
            
            {/* Status Indicator */}
            {selectedCategoryId === 'tamarind' ? (
              <div className="active-catalog-pill">
                <span className="live-dot" />
                <span>{currentProducts.length} Products Available</span>
              </div>
            ) : (
              <div className="coming-soon-pill">
                <span className="pulse-dot" />
                <span>Coming Soon</span>
              </div>
            )}
          </div>

          {/* Minimal Products Grid: JUST PHOTO AND NAME */}
          <div className="clean-minimal-products-grid">
            {currentProducts.map((prod) => {
              const isComingSoon = prod.status === 'coming-soon';

              return (
                <div
                  key={prod.id}
                  className="clean-prod-card"
                  tabIndex={0}
                  role="button"
                  aria-label={`View details of ${prod.name}`}
                  onClick={() => onSelectProduct && onSelectProduct(prod)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectProduct && onSelectProduct(prod);
                    }
                  }}
                >
                  {/* Photo with zoom & hover overlay */}
                  <div className="clean-prod-img-wrap">
                    <img src={prod.image} alt={prod.name} className="clean-prod-img" loading="lazy" />
                    
                    {isComingSoon && (
                      <div className="clean-coming-overlay">
                        <span>Coming Soon</span>
                      </div>
                    )}

                    <div className="clean-prod-hover-hint">
                      <span>View Details</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>

                  {/* Just Product Name & Arrow */}
                  <div className="clean-prod-footer">
                    <h3 className="clean-prod-name">{prod.name}</h3>
                    <div className="clean-prod-arrow" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
