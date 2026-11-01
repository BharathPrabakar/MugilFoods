import React, { useState } from 'react';
import './ProductDetailPage.css';
import { productsData, categoriesData } from '../data/productsData';
import { toAppPath, handleLinkClick } from '../utils/navigation';
import { BRAND_NAME, COMPANY_PHONE_DISPLAY } from '../data/routesData';

export default function ProductDetailPage({ 
  product, 
  onBackToProducts, 
  onSelectProduct 
}) {
  const [selectedImage, setSelectedImage] = useState(product?.image);

  if (!product) return null;

  // Find related products in the same category (excluding current product)
  const categoryProducts = productsData[product.categoryId] || [];
  const otherProducts = categoryProducts.filter((p) => p.id !== product.id);

  // If other products in the same category are few, pick from other categories
  const exploreOthersList = otherProducts.length > 0 
    ? otherProducts 
    : Object.values(productsData).flat().filter((p) => p.id !== product.id).slice(0, 4);

  const categoryInfo = categoriesData.find((c) => c.id === product.categoryId);

  const productWhatsAppUrl = `https://wa.me/919442177026?text=${encodeURIComponent(
    `Hello Mugil Foods, I am interested in procuring: ${product.name}. Please share pricing, availability, and packaging options.`
  )}`;

  return (
    <div className="product-detail-page">
      {/* Top Breadcrumb & Back bar */}
      <section className="detail-top-nav-bar" aria-label="Breadcrumb Navigation">
        <div className="detail-container">
          <a 
            href={toAppPath('/products/')} 
            className="back-to-catalog-btn" 
            onClick={(e) => {
              if (onBackToProducts) {
                e.preventDefault();
                onBackToProducts();
              } else {
                handleLinkClick(e, '/products/');
              }
            }}
            aria-label="Back to products list"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back to Catalog</span>
          </a>
          
          <nav className="breadcrumb-trail" aria-label="Breadcrumb">
            <a href={toAppPath('/')} onClick={(e) => handleLinkClick(e, '/')}>Home</a>
            <span className="crumb-sep">/</span>
            <a href={toAppPath('/products/')} onClick={(e) => handleLinkClick(e, '/products/')}>Products</a>
            <span className="crumb-sep">/</span>
            <span>{categoryInfo?.name || 'Tamarind'}</span>
            <span className="crumb-sep">/</span>
            <strong className="crumb-active">{product.name}</strong>
          </nav>
        </div>
      </section>

      {/* Main Product Presentation */}
      <section className="detail-main-section" aria-label="Product Specifications">
        <div className="detail-container detail-main-grid">
          {/* Left Column: Image Gallery & Previews */}
          <div className="detail-media-col">
            <div className="main-image-display">
              <img 
                src={selectedImage || product.image} 
                alt={`${product.name} - ${BRAND_NAME} Dharmapuri`} 
                className="product-primary-img" 
                width="800" 
                height="600" 
                fetchPriority="high"
                loading="eager"
                decoding="async"
              />
              <div className="detail-badge-pill">
                <span>{product.status === 'coming-soon' ? 'Launching Soon' : 'Pure & Naturally Cured'}</span>
              </div>
            </div>

            {/* Thumbnail switcher if gallery exists */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="thumbnails-row" role="tablist" aria-label="Product image thumbnails">
                {product.gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    className={`thumb-btn ${(selectedImage || product.image) === imgUrl ? 'active' : ''}`}
                    onClick={() => setSelectedImage(imgUrl)}
                    aria-label={`View photo ${idx + 1} of ${product.name}`}
                    role="tab"
                    aria-selected={(selectedImage || product.image) === imgUrl}
                  >
                    <img 
                      src={imgUrl} 
                      alt={`${product.name} thumbnail ${idx + 1}`} 
                      width="100" 
                      height="100" 
                      loading="lazy" 
                      decoding="async"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Title, Tagline, Description & Inquiries */}
          <div className="detail-info-col">
            <span className="detail-category-tag">{categoryInfo?.name} • Dharmapuri, Tamil Nadu</span>
            <h1 className="detail-product-title">{product.name}</h1>
            {product.tagline && <p className="detail-product-tagline">{product.tagline}</p>}

            <div className="detail-divider" />

            {/* Comprehensive Description */}
            <div className="detail-block">
              <h2 className="block-heading">Product Overview</h2>
              <p className="detail-description-text">{product.description}</p>
            </div>

            {/* Product Key Features */}
            {product.features && product.features.length > 0 && (
              <div className="detail-block">
                <h3 className="block-heading">Key Processing Features</h3>
                <ul className="product-features-list">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="product-feature-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                <h3 className="block-heading">Available Packaging Formats</h3>
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
                  <span className="storage-icon" aria-hidden="true">📦</span>
                  <div>
                    <strong className="storage-title">Storage & Handling: </strong>
                    <span className="storage-text">{product.storageInstruction}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Action CTAs */}
            <div className="detail-actions-row">
              <a 
                href={toAppPath('/contact/')} 
                className="btn-detail-enquire"
                onClick={(e) => handleLinkClick(e, '/contact/')}
              >
                <span>Make an Enquiry for this Product</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a 
                href={productWhatsAppUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-detail-wa"
                aria-label={`Enquire about ${product.name} on WhatsApp`}
              >
                <span>WhatsApp Enquiry</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Others Section */}
      <section className="explore-others-section" aria-label="Related Products">
        <div className="detail-container">
          <div className="explore-header">
            <span className="explore-badge">Catalog Range</span>
            <h2 className="explore-title">Other Products from Our Dharmapuri Plant</h2>
          </div>

          <div className="explore-grid">
            {exploreOthersList.map((item) => {
              const itemUrl = `/products/${item.id}/`;
              return (
                <a
                  key={item.id}
                  href={toAppPath(itemUrl)}
                  className="explore-item-card"
                  onClick={(e) => {
                    if (onSelectProduct) {
                      handleLinkClick(e, itemUrl);
                      onSelectProduct(item);
                    } else {
                      handleLinkClick(e, itemUrl);
                    }
                  }}
                  aria-label={`View specifications for ${item.name}`}
                >
                  <div className="explore-img-wrap">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="explore-img" 
                      width="400" 
                      height="300" 
                      loading="lazy" 
                      decoding="async"
                    />
                  </div>
                  <h3 className="explore-item-name">{item.name}</h3>
                  <div className="explore-view-arrow">
                    <span>View Specifications</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
