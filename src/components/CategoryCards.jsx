import React from 'react';
import './CategoryCards.css';

import tamarindImg from '../assets/category_tamarind.webp';
import oilImg from '../assets/category_oil.webp';
import gheeImg from '../assets/category_ghee.webp';
import honeyImg from '../assets/category_honey.webp';

const categories = [
  {
    id: 'tamarind',
    name: 'Tamarind',
    image: tamarindImg,
    alt: 'Premium Tamarind Slabs and Pods'
  },
  {
    id: 'cold-pressed-oil',
    name: 'Cold-pressed Oil',
    image: oilImg,
    alt: 'Pure Cold-pressed Edible Oil'
  },
  {
    id: 'pure-ghee',
    name: 'Pure Ghee',
    image: gheeImg,
    alt: 'Traditional Pure Desi Ghee'
  },
  {
    id: 'natural-honey-comb',
    name: 'Natural Honey/comb',
    image: honeyImg,
    alt: 'Raw Natural Honey with Honeycomb'
  }
];

export default function CategoryCards({ onSelectCategory }) {
  const handleClick = (catId) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
  };

  return (
    <section className="categories-section" aria-label="Product Categories">
      <div className="categories-header">
        <span className="categories-badge">Categories</span>
        <h2 className="categories-title">Explore Our Categories</h2>
      </div>

      <div className="categories-grid">
        {categories.map((item) => (
          <div 
            key={item.id} 
            className="category-card"
            tabIndex={0}
            role="button"
            aria-label={`View ${item.name} products`}
            onClick={() => handleClick(item.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleClick(item.id);
              }
            }}
          >
            {/* Image Container with Zoom effect */}
            <div className="category-image-wrap">
              <img 
                src={item.image} 
                alt={item.alt} 
                className="category-image" 
                loading="lazy" 
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
          </div>
        ))}
      </div>
    </section>
  );
}
