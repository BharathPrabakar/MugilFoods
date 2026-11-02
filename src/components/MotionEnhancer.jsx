import { useEffect } from 'react';
import './MotionEnhancer.css';

const MOTION_TARGETS = [
  'main > section:not(.hero-carousel-container)',
  '.categories-header',
  '.category-card',
  '.services-header',
  '.service-card',
  '.about-snippet-left',
  '.about-snippet-stats',
  '.stat-box',
  '.why-header',
  '.feature-card',
  '.trust-metrics-ribbon',
  '.testimonials-title-group',
  '.testimonial-card',
  '.products-top-banner',
  '.compact-category-bar',
  '.compact-products-section',
  '.clean-prod-card',
  '.detail-top-nav-bar',
  '.detail-main-section',
  '.detail-media-col',
  '.detail-info-col',
  '.detail-content-col',
  '.service-page-header',
  '.about-page-header',
  '.enquiry-page-header',
  '.resource-card',
  '.resources-grid > *',
  'footer .footer-column',
  'footer .footer-bottom',
];

const CARD_TARGETS = new Set([
  '.category-card',
  '.service-card',
  '.stat-box',
  '.feature-card',
  '.testimonial-card',
  '.clean-prod-card',
  '.resource-card',
]);

export default function MotionEnhancer() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const selector = MOTION_TARGETS.join(',');

    if (reduceMotion || !('IntersectionObserver' in window)) {
      document.querySelectorAll(selector).forEach((element) => {
        element.classList.add('motion-reveal', 'motion-visible');
      });
      return undefined;
    }

    let observer;
    const prepareTargets = (scope = document) => {
      const elements = [];
      if (scope instanceof Element && scope.matches(selector)) elements.push(scope);
      elements.push(...scope.querySelectorAll(selector));

      elements.forEach((element) => {
        if (element.dataset.motionReady === 'true') return;
        element.dataset.motionReady = 'true';
        element.classList.add('motion-reveal');

        const cardSelector = [...CARD_TARGETS].find((item) => element.matches(item));
        if (cardSelector) {
          const siblings = [...document.querySelectorAll(cardSelector)];
          const siblingIndex = siblings.indexOf(element);
          element.style.setProperty('--motion-delay', `${Math.max(0, siblingIndex % 4) * 70}ms`);
        }

        if (element.matches('.about-snippet-stats, .detail-content-col, .detail-info-col')) {
          element.dataset.motionFrom = 'right';
        } else if (element.matches('.about-snippet-left, .detail-media-col')) {
          element.dataset.motionFrom = 'left';
        }

        observer.observe(element);
      });
    };

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('motion-visible');
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -36px 0px',
    });

    prepareTargets();
    root.classList.add('motion-ready');

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) prepareTargets(node);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      root.classList.remove('motion-ready');
    };
  }, []);

  return null;
}
