import React, { useState, useEffect, useRef } from 'react';
import './HeroCarousel.css';

import slideHoney from '../assets/slide_honey.png';
import slideTamarind from '../assets/slide_tamarind.jpg';

const slidesData = [
  {
    id: 1,
    image: slideHoney,
    alt: "Mugil Honey"
  },
  {
    id: 2,
    image: slideTamarind,
    alt: "Mugil Tamarind - Built With Trust"
  }
];

export default function HeroCarousel({ onNavigate }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  const totalSlides = slidesData.length;

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
      aria-label="Mugil Foods Showcase"
    >
      {slidesData.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`carousel-slide ${isActive ? 'active' : ''}`}
            aria-hidden={!isActive}
          >
            {/* Full length master slide image */}
            <div className="carousel-slide-inner">
              <img 
                src={slide.image} 
                alt={slide.alt} 
                className="carousel-img-full" 
              />
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
