import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LogoIntro from './components/LogoIntro';
import MotionEnhancer from './components/MotionEnhancer';
import BackToTop from './components/BackToTop';
import HeroCarousel from './components/HeroCarousel';
import CategoryCards from './components/CategoryCards';
import ServicesSection from './components/ServicesSection';
import AboutSnippet from './components/AboutSnippet';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import ProductsPage from './components/ProductsPage';
import ProductDetailPage from './components/ProductDetailPage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import EnquiryPage from './components/EnquiryPage';
import ResourcesPage from './components/ResourcesPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import NotFoundPage from './components/NotFoundPage';

import { productsData } from './data/productsData';
import { parseRoute, navigateTo, toAppPath } from './utils/navigation';
import { SITE_NAME, BRAND_NAME } from './data/routesData';
import './App.css';
import './motion-overrides.css';

function App({ initialUrl = '/' }) {
  const [route, setRoute] = useState(() => parseRoute(typeof window !== 'undefined' ? window.location.pathname : initialUrl));
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const currentRoute = parseRoute();
    setRoute(currentRoute);

    if (typeof window !== 'undefined' && window.location.hash && currentRoute.canonicalPath) {
      window.history.replaceState({}, '', toAppPath(currentRoute.canonicalPath));
    }

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleRouteChange = () => {
      const parsed = parseRoute();
      setRoute(parsed);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('app-navigate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('app-navigate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  let activeProduct = null;
  if (route.page === 'product-detail' && route.param) {
    const allProds = Object.values(productsData).flat();
    activeProduct = allProds.find((p) => p.id === route.param);
  }

  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (route.page === 'product-detail' && activeProduct) {
      const isTamarind = activeProduct.categoryId === 'tamarind';
      document.title = isTamarind
        ? `${activeProduct.name} - Wholesale Tamarind | ${BRAND_NAME}`
        : `${activeProduct.name} - Pure Harvest Honey | ${SITE_NAME}`;
    } else if (route.page === 'products') {
      document.title = `Wholesale Tamarind Products - Slabs, Rounds & Karipuli | ${SITE_NAME}`;
    } else if (route.page === 'about') {
      document.title = `About Us - Tamarind Processing Plant in Dharmapuri | ${BRAND_NAME}`;
    } else if (route.page === 'services') {
      document.title = `Wholesale Tamarind Supply & Custom Packaging | ${SITE_NAME}`;
    } else if (route.page === 'enquiry') {
      document.title = `Contact & Wholesale Quotation - Dharmapuri Facility | ${SITE_NAME}`;
    } else if (route.page === 'resources' || route.page === 'resource-detail') {
      document.title = `Tamarind Buyer's Guide & Processing Quality Standards | ${SITE_NAME}`;
    } else if (route.page === 'privacy-policy') {
      document.title = `Privacy Policy - ${SITE_NAME}`;
    } else if (route.page === '404') {
      document.title = `Page Not Found (404) - ${SITE_NAME}`;
    } else {
      document.title = `Mugil Tamarind - Wholesale Tamarind in Dharmapuri, Tamil Nadu | ${SITE_NAME}`;
    }
  }, [route, activeProduct]);

  return (
    <div className="app-container">
      <LogoIntro />
      <MotionEnhancer />
      <Header
        currentPath={route.canonicalPath}
        currentPage={route.page}
        isScrolled={isScrolled}
      />

      <main id="main-content" className="page-transition" key={route.canonicalPath} tabIndex="-1">
        {route.page === 'product-detail' && activeProduct ? (
          <ProductDetailPage
            key={activeProduct.id}
            product={activeProduct}
            onBackToProducts={() => navigateTo('/products/')}
            onSelectProduct={(p) => navigateTo(`/products/${p.id}/`)}
          />
        ) : route.page === 'products' ? (
          <ProductsPage
            initialCategory="tamarind"
            onSelectProduct={(p) => navigateTo(`/products/${p.id}/`)}
          />
        ) : route.page === 'services' ? (
          <ServicesPage initialSegment={route.param || 'wholesale'} />
        ) : route.page === 'about' ? (
          <AboutPage />
        ) : route.page === 'enquiry' ? (
          <EnquiryPage initialProduct={route.param || ''} />
        ) : route.page === 'resources' ? (
          <ResourcesPage />
        ) : route.page === 'resource-detail' ? (
          <ResourcesPage activeSlug={route.param} />
        ) : route.page === 'privacy-policy' ? (
          <PrivacyPolicyPage />
        ) : route.page === '404' ? (
          <NotFoundPage />
        ) : (
          <>
            <HeroCarousel />
            <CategoryCards />
            <div id="services-preview">
              <ServicesSection />
            </div>
            <AboutSnippet />
            <WhyChooseUs />
            <div id="testimonials">
              <TestimonialsSection />
            </div>
          </>
        )}
      </main>

      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}

export default App;
