import React from 'react';
import './CategoryCards.css';
import tamarindImg from '../assets/category_tamarind.webp';
import honeyImg from '../assets/category_honey.webp';
import { toAppPath, handleLinkClick } from '../utils/navigation';

const categories = [
  {
    id: 'tamarind',
    name: 'Tamarind Products',
    path: '/products/',
    image: tamarindImg,
    alt: 'Premium Tamarind Slabs, Rounds & Karipuli Wholesale'
  },
  {
    id: 'natural-honey-comb',
    name: 'Honey',
    path: '/products/wildflower-honey/',
    image: honeyImg,
    alt: 'Pure Natural Honey - Direct Harvest'
  }
];

export default function CategoryCards() {
  return (
    <section className="categories-section" aria-label="Product Categories">
      <div className="categories-header">
        <span className="categories-badge">Product Range</span>
        <h2 className="categories-title">Explore Our Core Categories</h2>
      </div>

      <div className="categories-grid">
        {categories.map((item) => (
          <a 
            key={item.id} 
            href={toAppPath(item.path)}
            className="category-card"
            onClick={(e) => handleLinkClick(e, item.path)}
            aria-label={`Explore ${item.name}`}
          >
            {/* Image Container with Zoom effect */}
            <div className="category-image-wrap">
              <img 
                src={item.image} 
                alt={item.alt} 
                className="category-image" 
                width="600"
                height="400"
                loading="lazy" 
                decoding="async"
              />
              <div className="category-image-overlay" />
            </div>

            {/* Bottom Bar: Name and Navigation Arrow */}
            <div className="category-footer">
              <h3 className="category-name">{item.name}</h3>
              <div className="category-arrow-btn" aria-hidden="true">
                <svg 
                  width="18" 
                  height="18" 
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
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
