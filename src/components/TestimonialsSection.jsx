import React, { useRef, useState, useEffect } from 'react';
import './TestimonialsSection.css';

const testimonials = [
  {
    id: 1,
    name: 'R. Senthil Kumar',
    role: 'Director, Annapoorna Spice & Condiments',
    location: 'Madurai, Tamil Nadu',
    rating: 5,
    avatar: 'SK',
    product: 'Wholesale Tamarind Slabs',
    quote:
      'We have been procuring export-grade seedless tamarind slabs from Mugil Foods for over 4 years. The moisture control, hygiene, and tanginess consistency batch after batch are unmatched in the southern market.'
  },
  {
    id: 2,
    name: 'Priya Sundaram',
    role: 'Home Chef & Food Blogger',
    location: 'Bengaluru, Karnataka',
    rating: 5,
    avatar: 'PS',
    product: 'Pure Desi Ghee & Honey',
    quote:
      'The aroma of Mugil Foods pure ghee brings back childhood memories of my grandmother’s kitchen. It is truly granular and pure. Their raw honeycomb is a staple on our breakfast table.'
  },
  {
    id: 3,
    name: 'A. Vijayaraghavan',
    role: 'Founder, Heritage Naturals Retail Chain',
    location: 'Chennai, Tamil Nadu',
    rating: 5,
    avatar: 'AV',
    product: 'Retail Distribution Partner',
    quote:
      'Stocking Mugil Foods in our 12 organic retail outlets has been one of our easiest success stories. Customers immediately notice the quality difference and repeatedly come back for their cold-pressed oils.'
  },
  {
    id: 4,
    name: 'David MacLeod',
    role: 'Procurement Head, Eastern Spices Import LLC',
    location: 'Dubai, UAE',
    rating: 5,
    avatar: 'DM',
    product: 'Export Container Consignments',
    quote:
      'Timely documentation, vacuum-sealed tamper-proof packaging, and zero foreign matter. Mugil Foods meets international phytosanitary and food safety standards with flying colors.'
  },
  {
    id: 5,
    name: 'Meenakshi Raman',
    role: 'Head of Kitchen, Traditional Feast Catering',
    location: 'Coimbatore, Tamil Nadu',
    rating: 5,
    avatar: 'MR',
    product: 'Tamarind Paste & Concentrates',
    quote:
      'When preparing feasts for thousands of guests, pulp consistency is critical. Mugil Foods tamarind paste saves us hours of manual extraction while delivering that authentic, rich sour note every single time.'
  },
  {
    id: 6,
    name: 'K. Rajeshwaran',
    role: 'Private Label Partner, GreenRoots Organics',
    location: 'Hyderabad, Telangana',
    rating: 5,
    avatar: 'KR',
    product: 'Custom Private Labelling',
    quote:
      'Their OEM white-labelling team is exceptionally responsive. From glass jar sourcing to tamper-evident seals and compliant nutritional labelling, they launched our oil brand in record time.'
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
    <section className="testimonials-section" aria-label="Customer Testimonials">
      <div className="testimonials-container">
        {/* Header & Horizontal Controls */}
        <div className="testimonials-header-row">
          <div className="testimonials-title-group">
            <span className="testimonials-badge">Voices of Trust</span>
            <h2 className="testimonials-title">What Our Partners & Customers Say</h2>
            <p className="testimonials-subtitle">
              Real feedback from households, retail networks, and commercial partners who trust Mugil Foods.
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
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              className={`testimonial-arrow-btn ${!canScrollRight ? 'disabled' : ''}`}
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll testimonials right"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
              <article 
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
                title="Click or tap to elaborate"
              >
                <div className="card-top-row">
                  <div className="star-rating" aria-label={`${item.rating} out of 5 stars`}>
                    {[...Array(item.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="star-icon"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  {/* Subtle expand / collapse indicator */}
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
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {item.location}
                  </span>
                </div>
              </div>
            </article>
          );
        })}
        </div>
      </div>
    </section>
  );
}
