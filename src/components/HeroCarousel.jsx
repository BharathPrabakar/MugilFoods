import React, { useState, useEffect, useRef } from 'react';
import './HeroCarousel.css';

import slide1 from '../assets/slide1.jpg'; // Stacked Slab Tamarind
import slide2 from '../assets/slide2.jpg'; // Circular Bloom Packaged Tamarind
import slide3 from '../assets/slide3.jpg'; // Raw Tamarind Pods & Harvest
import slide4 from '../assets/slide4.jpg'; // Pure Tamarind Paste / Concentrate

const slidesData = [
  {
    id: 1,
    image: slide1,
    tag: "Natural Processing",
    title: "Seedless Tamarind Slabs",
    subtitle: "Cleaned, cured, and vacuum-compacted export blocks with authentic tang.",
    primaryCta: { label: "Explore Products", href: "#products" },
    secondaryCta: { label: "Make an Enquiry", href: "#enquiry" }
  },
  {
    id: 2,
    image: slide2,
    tag: "Traditional Curing",
    title: "Ring-Packed Tamarind",
    subtitle: "Artfully spiraled traditional tamarind preserving natural aroma and zest.",
    primaryCta: { label: "Our Story", href: "#about" },
    secondaryCta: { label: "Bulk Orders", href: "#enquiry" }
  },
  {
    id: 3,
    image: slide3,
    tag: "Dharmapuri Harvest",
    title: "Direct Harvest Tamarind",
    subtitle: "Sun-dried pods sourced directly from fertile groves in Dharmapuri.",
    primaryCta: { label: "Our Services", href: "#services" },
    secondaryCta: { label: "Make an Enquiry", href: "#enquiry" }
  },
  {
    id: 4,
    image: slide4,
    tag: "Culinary & Commercial",
    title: "Rich Tamarind Pulp",
    subtitle: "Ready-to-blend pulp crafted for food processors, restaurants, and kitchens.",
    primaryCta: { label: "Enquire Wholesale", href: "#enquiry" },
    secondaryCta: { label: "View Products", href: "#products" }
  }
];

export default function HeroCarousel({ onNavigate }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  const totalSlides = slidesData.length;

  const handleCtaClick = (href, e) => {
    e.preventDefault();
    const pageId = href.replace('#', '');
    if (onNavigate) {
      onNavigate(pageId, href);
    } else {
      window.location.hash = pageId;
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000); // 5 seconds per slide
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentIndex]);

  return (
    <section 
      id="home" 
      className="hero-carousel-container"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      aria-label="Mugil Foods Featured Showcase"
    >
      {slidesData.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`carousel-slide ${isActive ? 'active' : ''}`}
            aria-hidden={!isActive}
          >
            {/* Background Image with Zoom Ken Burns Effect */}
            <div 
              className="carousel-bg-image"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            
            {/* Cinematic Gradient Vignette Overlay for readability */}
            <div className="carousel-overlay" />

            {/* Slide Content */}
            <div className="carousel-content-wrapper">
              <div className="carousel-content">
                <div className="slide-tag">
                  <span className="slide-tag-dot" />
                  {slide.tag}
                </div>
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-subtitle">{slide.subtitle}</p>
                <div className="slide-cta-row">
                  <a 
                    href={slide.primaryCta.href} 
                    className="btn-carousel-primary"
                    onClick={(e) => handleCtaClick(slide.primaryCta.href, e)}
                  >
                    {slide.primaryCta.label}
                  </a>
                  <a 
                    href={slide.secondaryCta.href} 
                    className="btn-carousel-secondary"
                    onClick={(e) => handleCtaClick(slide.secondaryCta.href, e)}
                  >
                    {slide.secondaryCta.label}
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Modern Indicators & Progress Bar */}
      <div className="carousel-pagination">
        {slidesData.map((_, idx) => (
          <button
            key={idx}
            className={`pagination-dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          >
            <span className="dot-fill" />
          </button>
        ))}
      </div>
    </section>
  );
}
