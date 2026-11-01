import React from 'react';
import './PrivacyPolicyPage.css';
import { SITE_NAME, BRAND_NAME, COMPANY_EMAIL, COMPANY_PHONE_DISPLAY } from '../data/routesData';
import { toAppPath, handleLinkClick } from '../utils/navigation';

export default function PrivacyPolicyPage() {
  return (
    <div className="privacy-page">
      <section className="privacy-hero-banner">
        <div className="privacy-container">
          <span className="privacy-badge">Legal & Transparency</span>
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-subtitle">
            How {SITE_NAME} handles contact inquiries, commercial business information, and website visitor privacy.
          </p>
        </div>
      </section>

      <div className="privacy-container privacy-content">
        <section className="policy-block">
          <h2>1. Introduction</h2>
          <p>
            {SITE_NAME} (operating under the brand <strong>{BRAND_NAME}</strong>) is committed to safeguarding the privacy and confidentiality of our website visitors, wholesale buyers, suppliers, and commercial partners. This Privacy Policy outlines what information we collect when you browse our website or make an enquiry, and how that information is utilized.
          </p>
        </section>

        <section className="policy-block">
          <h2>2. Information We Collect</h2>
          <p>
            When you interact with our website or submit an enquiry through our contact forms or direct messaging links, we may collect:
          </p>
          <ul>
            <li><strong>Contact Information:</strong> Your name, business name, phone/WhatsApp number, and email address.</li>
            <li><strong>Product Requirements:</strong> Products required, order quantities, delivery destination, packaging specifications, and custom requests.</li>
            <li><strong>Technical Data:</strong> Non-personally identifiable technical analytics such as browser type, operating system, and pages visited to improve site performance and accessibility.</li>
          </ul>
        </section>

        <section className="policy-block">
          <h2>3. How We Use Your Information</h2>
          <p>
            Information provided by visitors and prospective clients is strictly used for legitimate business operations:
          </p>
          <ul>
            <li>Responding to product enquiries, quote requests, and sample orders.</li>
            <li>Coordinating freight logistics, dispatch schedules, and commercial documentation.</li>
            <li>Providing technical product specifications, quality test reports, and harvest updates.</li>
            <li>We do not sell, rent, or trade your personal or business data to third-party marketing entities.</li>
          </ul>
        </section>

        <section className="policy-block">
          <h2>4. Data Storage & Security</h2>
          <p>
            We implement appropriate administrative and technical safeguards to preserve the confidentiality of business enquiries. Enquiries sent via email or direct messaging are handled directly by our management and agro-processing team in Dharmapuri, Tamil Nadu.
          </p>
        </section>

        <section className="policy-block">
          <h2>5. Cookies and Third-Party Links</h2>
          <p>
            Our website uses minimal, essential cookies required for basic navigation, performance optimization, and layout consistency. External links (such as Google Maps or WhatsApp) operate under their respective privacy policies.
          </p>
        </section>

        <section className="policy-block">
          <h2>6. Contact Us Regarding Your Data</h2>
          <p>
            If you have questions about this policy or wish to update or delete your contact records from our commercial database, please reach out directly:
          </p>
          <div className="policy-contact-box">
            <p><strong>{SITE_NAME} • {BRAND_NAME}</strong></p>
            <p>Dharmapuri, Tamil Nadu, 636701, India</p>
            <p>Email: <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a></p>
            <p>Phone: <a href="tel:+919442177026">{COMPANY_PHONE_DISPLAY}</a></p>
          </div>
        </section>

        <div className="policy-back-link">
          <a 
            href={toAppPath('/')} 
            onClick={(e) => handleLinkClick(e, '/')}
            className="btn-back-home"
          >
            ← Return to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}

