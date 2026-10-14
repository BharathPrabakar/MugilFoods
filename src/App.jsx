import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import HeroCarousel from './components/HeroCarousel'
import CategoryCards from './components/CategoryCards'
import ServicesSection from './components/ServicesSection'
import AboutSnippet from './components/AboutSnippet'
import WhyChooseUs from './components/WhyChooseUs'
import TestimonialsSection from './components/TestimonialsSection'
import ProductsPage from './components/ProductsPage'
import ProductDetailPage from './components/ProductDetailPage'
import ServicesPage from './components/ServicesPage'
import AboutPage from './components/AboutPage'
import EnquiryPage from './components/EnquiryPage'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import { productsData } from './data/productsData'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'products' | 'product-detail' | 'services' | 'about' | 'enquiry'
  const [selectedCategory, setSelectedCategory] = useState('tamarind');
  const [activeProduct, setActiveProduct] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen to hash changes (deep-linking & browser back/forward buttons)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      
      if (hash.startsWith('product-')) {
        const prodId = hash.replace('product-', '');
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

  const handleNavigation = (pageId, hash) => {
    setActiveProduct(null);
    if (pageId === 'products') {
      setCurrentPage('products');
      window.location.hash = 'products';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (pageId === 'services') {
      setCurrentPage('services');
      window.location.hash = 'services';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (pageId === 'about') {
      setCurrentPage('about');
      window.location.hash = 'about';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (pageId === 'enquiry') {
      setCurrentPage('enquiry');
      window.location.hash = 'enquiry';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentPage('home');
      window.location.hash = hash || 'home';
      if (hash && hash !== '#home') {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
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

  const handleBackToProducts = () => {
    setActiveProduct(null);
    setCurrentPage('products');
    window.location.hash = 'products';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      {/* Dynamic Header with Active Route Awareness */}
      <Header 
        currentPage={currentPage === 'product-detail' ? 'products' : currentPage} 
        onNavigate={handleNavigation}
        isScrolled={isScrolled}
      />

      {/* Route Views: Home | Products Catalog | Dedicated Product Detail | Detailed Services | Detailed About | Dedicated Enquiry */}
      {currentPage === 'product-detail' && activeProduct ? (
        <main>
          <ProductDetailPage 
            key={activeProduct.id}
            product={activeProduct}
            onBackToProducts={handleBackToProducts}
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

          {/* Product Categories Cards (Tamarind, Cold-pressed Oil, Pure Ghee, Natural Honey/comb) */}
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

      {/* Comprehensive Brand Footer */}
      <Footer onNavigate={handleNavigation} />

      {/* Persistent Floating WhatsApp Icon */}
      <FloatingWhatsApp />
    </div>
  )
}

export default App
