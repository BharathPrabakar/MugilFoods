import React, { useState, useEffect, lazy, Suspense } from 'react'
import Header from './components/Header'
import HeroCarousel from './components/HeroCarousel'
import CategoryCards from './components/CategoryCards'
import ServicesSection from './components/ServicesSection'
import AboutSnippet from './components/AboutSnippet'
import WhyChooseUs from './components/WhyChooseUs'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'
import './App.css'

// Lazy-load standalone pages and widgets not needed on initial landing page load
const ProductsPage = lazy(() => import('./components/ProductsPage'))
const ProductDetailPage = lazy(() => import('./components/ProductDetailPage'))
const ServicesPage = lazy(() => import('./components/ServicesPage'))
const AboutPage = lazy(() => import('./components/AboutPage'))
const EnquiryPage = lazy(() => import('./components/EnquiryPage'))
const FloatingWhatsApp = lazy(() => import('./components/FloatingWhatsApp'))

// Lightweight page loading fallback
function PageFallback() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '3px solid #f3f3f3', borderTop: '3px solid #d9232d', animation: 'spin 0.8s linear infinite' }} />
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'products' | 'product-detail' | 'services' | 'about' | 'enquiry'
  const [selectedCategory, setSelectedCategory] = useState('tamarind');
  const [activeProduct, setActiveProduct] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen to hash changes (deep-linking & browser back/forward buttons)
  useEffect(() => {
    const handleHash = async () => {
      const hash = window.location.hash.replace('#', '');
      
      if (hash.startsWith('product-')) {
        const prodId = hash.replace('product-', '');
        const { productsData } = await import('./data/productsData');
        const allProds = Object.values(productsData).flat();
        const found = allProds.find((p) => p.id === prodId);
        if (found) {
          setActiveProduct(found);
          setCurrentPage('product-detail');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }

      if (hash === 'products') {
        setCurrentPage('products');
        setActiveProduct(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === 'services') {
        setCurrentPage('services');
        setActiveProduct(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === 'about') {
        setCurrentPage('about');
        setActiveProduct(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === 'enquiry' || hash.includes('enquiry')) {
        setCurrentPage('enquiry');
        setActiveProduct(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (!hash.startsWith('product-')) {
        setCurrentPage('home');
        setActiveProduct(null);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigation = (page, targetId) => {
    setActiveProduct(null);

    if (page === 'products') {
      setCurrentPage('products');
      window.location.hash = 'products';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'services') {
      setCurrentPage('services');
      window.location.hash = 'services';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'about') {
      setCurrentPage('about');
      window.location.hash = 'about';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'enquiry') {
      setCurrentPage('enquiry');
      window.location.hash = 'enquiry';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentPage('home');
      window.location.hash = targetId || 'home';
      if (targetId && targetId !== '#home') {
        setTimeout(() => {
          const el = document.querySelector(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleCategorySelectFromHome = (catId) => {
    setSelectedCategory(catId);
    setActiveProduct(null);
    setCurrentPage('products');
    window.location.hash = 'products';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductSelect = (product) => {
    setActiveProduct(product);
    setCurrentPage('product-detail');
    window.location.hash = `product-${product.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      {/* Sticky Header with navigation */}
      <Header 
        currentPage={currentPage === 'product-detail' ? 'products' : currentPage} 
        onNavigate={handleNavigation} 
        isScrolled={isScrolled} 
      />

      {/* Main Content Router */}
      <Suspense fallback={<PageFallback />}>
        {currentPage === 'product-detail' && activeProduct ? (
          <main>
            <ProductDetailPage 
              key={activeProduct.id}
              product={activeProduct} 
              onBackToProducts={() => {
                setActiveProduct(null);
                setCurrentPage('products');
                window.location.hash = 'products';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectProduct={handleProductSelect}
            />
          </main>
        ) : currentPage === 'products' ? (
          <main>
            <ProductsPage 
              initialCategory={selectedCategory} 
              onSelectProduct={handleProductSelect}
            />
          </main>
        ) : currentPage === 'services' ? (
          <main>
            <ServicesPage />
          </main>
        ) : currentPage === 'about' ? (
          <main>
            <AboutPage />
          </main>
        ) : currentPage === 'enquiry' ? (
          <main>
            <EnquiryPage />
          </main>
        ) : (
          <main>
            {/* Master Full-Screen Auto-Carousel */}
            <HeroCarousel onNavigate={handleNavigation} />

            {/* Product Categories Cards (Tamarind, Natural Honey/comb) */}
            <CategoryCards onSelectCategory={handleCategorySelectFromHome} />

            {/* We Offer (Services) Section -> Wholesale, Retail, Custom Label */}
            <div id="services-preview">
              <ServicesSection onExploreServices={() => handleNavigation('services', '#services')} />
            </div>

            {/* Concise, non-over-explained About section on Home */}
            <AboutSnippet onExploreAbout={() => handleNavigation('about', '#about')} />

            {/* Why Choose Us Section -> Pure, Fresh, Traditional, Built With Trust */}
            <WhyChooseUs />

            {/* Testimonials Section -> Sideways Scrollable Customer & Partner Reviews */}
            <div id="testimonials">
              <TestimonialsSection />
            </div>
          </main>
        )}
      </Suspense>

      {/* Master Compact Multi-column Footer */}
      <Footer onNavigate={handleNavigation} />

      {/* Subtle Floating WhatsApp Button */}
      <Suspense fallback={null}>
        <FloatingWhatsApp />
      </Suspense>
    </div>
  );
}

export default App;
