import React, { useRef, useState, useEffect } from 'react';
import './TestimonialsSection.css';

const testimonials = [
  {
    id: 1,
    name: 'R. Senthil Kumar',
    role: 'Procurement Partner, Spice & Condiments Unit',
    location: 'Madurai, Tamil Nadu',
    rating: 5,
    avatar: 'SK',
    product: 'Wholesale Seedless Tamarind Slabs',
    quote:
      'Procuring seedless tamarind slabs from the Mugil Foods Dharmapuri facility provides reliable moisture control and batch-after-batch sourness balance for our culinary processing needs.'
  },
  {
    id: 2,
    name: 'D. MacLeod',
    role: 'Commercial Import Consultant',
    location: 'Export Channel',
    rating: 5,
    avatar: 'DM',
    product: 'Bulk Moisture-Proof Consignments',
    quote:
      'Timely documentation, vacuum-sealed tamper-proof packaging, and minimal fiber content. The Dharmapuri processing team adheres strictly to promised dispatch timelines.'
  },
  {
    id: 3,
    name: 'M. Raman',
    role: 'Head Chef & Commercial Kitchen Lead',
    location: 'Coimbatore, Tamil Nadu',
    rating: 5,
    avatar: 'MR',
    product: 'Tamarind Pulp Paste & Concentrates',
    quote:
      'When preparing dishes for large catering events, pulp yield and smooth consistency save significant manual kitchen extraction time while retaining authentic tartness.'
  }
];

export default function TestimonialsSection() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [expandedCardId, setExpandedCardId] = useState(null);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 420;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const toggleExpand = (id) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="testimonials-section" aria-label="Customer & Partner Feedback">
      <div className="testimonials-container">
        {/* Header & Horizontal Controls */}
        <div className="testimonials-header-row">
          <div className="testimonials-title-group">
            <span className="testimonials-badge">Partner Feedback</span>
            <h2 className="testimonials-title">What Commercial Buyers & Kitchens Say</h2>
            <p className="testimonials-subtitle">
              Feedback from food processors, catering leads, and distribution partners working with Mugil Foods.
            </p>
          </div>

          {/* Sideways Scroll Action Arrows */}
          <div className="testimonials-nav-arrows">
            <button
              className={`testimonial-arrow-btn ${!canScrollLeft ? 'disabled' : ''}`}
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll testimonials left"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              className={`testimonial-arrow-btn ${!canScrollRight ? 'disabled' : ''}`}
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll testimonials right"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Sideways Horizontal Scrollable Container */}
        <div
          className="testimonials-scroll-wrapper"
          ref={scrollContainerRef}
          onScroll={checkScroll}
        >
          {testimonials.map((item) => {
            const isExpanded = expandedCardId === item.id;
            return (
              <div 
                key={item.id} 
                className={`testimonial-card ${isExpanded ? 'expanded' : ''}`}
                onClick={() => toggleExpand(item.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleExpand(item.id);
                  }
                }}
                aria-expanded={isExpanded}
                aria-label={`Feedback from ${item.name}`}
                title="Click to toggle full text"
              >
                <div className="card-top-row">
                  <div className="star-rating" aria-label={`${item.rating} out of 5 rating`}>
                    {[...Array(item.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="star-icon"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="card-expand-hint" aria-hidden="true">
                    {isExpanded ? 'Show less' : 'Read more...'}
                  </span>
                </div>

                <div className="testimonial-quote-wrap">
                  <p className={`testimonial-quote ${isExpanded ? 'full-view' : 'clamped-view'}`}>
                    “{item.quote}”
                  </p>
                </div>

                <div className="author-row">
                  <div className="avatar-circle">{item.avatar}</div>
                  <div className="author-info">
                    <h3 className="author-name">{item.name}</h3>
                    <p className="author-role">{item.role}</p>
                    <span className="author-location">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
