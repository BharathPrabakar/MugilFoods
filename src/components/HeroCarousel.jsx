import React, { useState, useEffect, useRef } from 'react';
import './HeroCarousel.css';

import slideMugilFoods from '../assets/slide_mugil_foods.webp';
import slideMugilTamarind from '../assets/slide_mugil_tamarind.webp';
import slideMugilHoney from '../assets/slide_mugil_honey.webp';

const slidesData = [
  {
    id: 1,
    image: slideMugilFoods,
    alt: "Mugil Foods - Pure, Fresh, Traditional",
    bgClass: "slide-bg-red"
  },
  {
    id: 2,
    image: slideMugilTamarind,
    alt: "Mugil Tamarind - Built With Trust",
    bgClass: "slide-bg-white"
  },
  {
    id: 3,
    image: slideMugilHoney,
    alt: "Mugil Honey - Pure & Natural",
    bgClass: "slide-bg-white"
  }
];

export default function HeroCarousel({ onNavigate }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);
  
  // Touch / pointer swipe refs
  const touchStartXRef = useRef(null);
  const touchStartYRef = useRef(null);
  const isDraggingRef = useRef(false);

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

  // Touch Swipe Handlers (Mobile touch devices)
  const handleTouchStart = (e) => {
    setIsPlaying(false);
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    setIsPlaying(true);
    if (touchStartXRef.current === null) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchEndX - touchStartXRef.current;
    const deltaY = touchEndY - touchStartYRef.current;

    // Only trigger slide if horizontal swipe exceeds vertical scroll and distance > 40px
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        nextSlide(); // Swiped left -> next slide
      } else {
        prevSlide(); // Swiped right -> previous slide
      }
    }

    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  // Mouse Drag Handlers (Desktop swipe / drag)
  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    setIsPlaying(false);
    touchStartXRef.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsPlaying(true);

    if (touchStartXRef.current !== null) {
      const deltaX = e.clientX - touchStartXRef.current;
      if (Math.abs(deltaX) > 45) {
        if (deltaX < 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }
    touchStartXRef.current = null;
  };

  const handleMouseLeave = () => {
    isDraggingRef.current = false;
    setIsPlaying(true);
    touchStartXRef.current = null;
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
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      aria-label="Mugil Foods Showcase (Swipe left or right)"
    >
      {slidesData.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`carousel-slide ${slide.bgClass} ${isActive ? 'active' : ''}`}
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
