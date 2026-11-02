import { useEffect } from 'react';
import './MotionEnhancer.css';

const REVEAL_TARGETS = [
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

const STAGGER_TARGETS = new Set([
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
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const selector = REVEAL_TARGETS.join(',');

    if (reduceMotion || !('IntersectionObserver' in window)) return undefined;

    let observer;
    const prepareTargets = (scope = document) => {
      const elements = [];
      if (scope instanceof Element && scope.matches(selector)) elements.push(scope);
      elements.push(...scope.querySelectorAll(selector));

      elements.forEach((element) => {
        if (element.dataset.motionReady === 'true') return;
        element.dataset.motionReady = 'true';
        element.classList.add('motion-reveal');

        const staggerSelector = [...STAGGER_TARGETS].find((item) => element.matches(item));
        if (staggerSelector) {
          const siblings = [...document.querySelectorAll(staggerSelector)];
          const index = siblings.indexOf(element);
          element.style.setProperty('--motion-delay', `${Math.max(0, index % 4) * 55}ms`);
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
      threshold: 0.08,
      rootMargin: '0px 0px -12px 0px',
    });

    document.documentElement.classList.add('motion-ready');
    prepareTargets();

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
      document.documentElement.classList.remove('motion-ready');
    };
  }, []);

  return null;
}
