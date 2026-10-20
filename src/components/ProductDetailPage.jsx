import React, { useState } from 'react';
import './ProductDetailPage.css';
import { productsData, categoriesData } from '../data/productsData';

export default function ProductDetailPage({ 
  product, 
  onBackToProducts, 
  onSelectProduct 
}) {
  const [selectedImage, setSelectedImage] = useState(product.image);

  // Find related products in the same category (excluding current product)
  const categoryProducts = productsData[product.categoryId] || [];
  const otherProducts = categoryProducts.filter((p) => p.id !== product.id);

  // If other products in the same category are few, pick from other categories
  const exploreOthersList = otherProducts.length > 0 
    ? otherProducts 
    : Object.values(productsData).flat().filter((p) => p.id !== product.id).slice(0, 4);

  const categoryInfo = categoriesData.find((c) => c.id === product.categoryId);

  return (
    <div className="product-detail-page">
      {/* Top Breadcrumb & Back bar */}
      <section className="detail-top-nav-bar">
        <div className="detail-container">
          <button 
            className="back-to-catalog-btn" 
            onClick={onBackToProducts}
            aria-label="Back to products list"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back to Products</span>
          </button>
          
          <div className="breadcrumb-trail">
            <span>Products</span>
            <span className="crumb-sep">/</span>
            <span>{categoryInfo?.name || 'Tamarind'}</span>
            <span className="crumb-sep">/</span>
            <strong className="crumb-active">{product.name}</strong>
          </div>
        </div>
      </section>

      {/* Main Product Presentation */}
      <section className="detail-main-section">
        <div className="detail-container detail-main-grid">
          {/* Left Column: Image Gallery & Previews */}
          <div className="detail-media-col">
            <div className="main-image-display">
              <img src={selectedImage} alt={product.name} className="product-primary-img" />
              <div className="detail-badge-pill">
                <span>{product.status === 'coming-soon' ? 'Launching Soon' : 'Pure & Cured'}</span>
              </div>
            </div>

            {/* Thumbnail switcher if gallery exists */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="thumbnails-row">
                {product.gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    className={`thumb-btn ${selectedImage === imgUrl ? 'active' : ''}`}
                    onClick={() => setSelectedImage(imgUrl)}
                    aria-label={`View photo ${idx + 1}`}
                  >
                    <img src={imgUrl} alt={`${product.name} thumbnail ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Title, Tagline, Description & Inquiries */}
          <div className="detail-info-col">
            <span className="detail-category-tag">{categoryInfo?.name}</span>
            <h1 className="detail-product-title">{product.name}</h1>
            {product.tagline && <p className="detail-product-tagline">{product.tagline}</p>}

            <div className="detail-divider" />

            {/* Comprehensive Description */}
            <div className="detail-block">
              <h3 className="block-heading">Description</h3>
              <p className="detail-description-text">{product.description}</p>
            </div>

            {/* Key Features */}
            {product.features && (
              <div className="detail-block">
                <h3 className="block-heading">Key Highlights & Quality</h3>
                <ul className="features-checklist">
                  {product.features.map((feat, i) => (
                    <li key={i}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Product Specifications Table */}
            {product.specifications && product.specifications.length > 0 && (
              <div className="detail-block">
                <h3 className="block-heading">Product Specifications</h3>
                <div className="specs-table-wrapper">
                  <table className="specs-table">
                    <tbody>
                      {product.specifications.map((spec, sIdx) => (
                        <tr key={sIdx}>
                          <th scope="row" className="spec-label">{spec.label}</th>
                          <td className="spec-value">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Packaging Sizes */}
            {product.packagingSizes && (
              <div className="detail-block">
                <h3 className="block-heading">Packaging Availability</h3>
                <div className="packaging-pills-row">
                  {product.packagingSizes.map((size, idx) => (
                    <span key={idx} className="size-pill">{size}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Storage Instruction */}
            {product.storageInstruction && (
              <div className="detail-block storage-note-box">
                <div className="storage-note-content">
                  <span className="storage-icon">📦</span>
                  <div>
                    <strong className="storage-title">Storage & Handling: </strong>
                    <span className="storage-text">{product.storageInstruction}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Action CTAs */}
            <div className="detail-actions-row">
              <a href="#enquiry" className="btn-detail-enquire">
                <span>Make an Enquiry for this Product</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <button className="btn-detail-secondary" onClick={onBackToProducts}>
                Browse Category
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Others Section */}
      <section className="explore-others-section">
        <div className="detail-container">
          <div className="explore-header">
            <span className="explore-badge">Explore More</span>
            <h2 className="explore-title">Other Products You Might Like</h2>
          </div>

          <div className="explore-grid">
            {exploreOthersList.map((item) => (
              <button
                key={item.id}
                className="explore-item-card"
                onClick={() => {
                  onSelectProduct(item);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="explore-img-wrap">
                  <img src={item.image} alt={item.name} className="explore-img" />
                </div>
                <h3 className="explore-item-name">{item.name}</h3>
                <div className="explore-view-arrow">
                  <span>View Details</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
