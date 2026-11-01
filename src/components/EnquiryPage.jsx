import React, { useState, useEffect } from 'react';
import './EnquiryPage.css';
import { 
  COMPANY_EMAIL, 
  COMPANY_PHONE, 
  COMPANY_PHONE_DISPLAY, 
  GOOGLE_MAPS_URL, 
  BRAND_NAME, 
  SITE_NAME 
} from '../data/routesData';

export default function EnquiryPage({ initialProduct = '', initialService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: initialService || 'Wholesale & Institutional Supply',
    productsNeeded: initialProduct || '',
    message: '',
    botcheck: '' // Honeypot spam trap
  });

  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({
        ...prev,
        productsNeeded: prev.productsNeeded || initialProduct
      }));
    }
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        serviceType: initialService
      }));
    }
  }, [initialProduct, initialService]);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = 'Please enter your full name.';
    }

    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanPhone || cleanPhone.length < 8) {
      errors.phone = 'Please enter a valid phone number (minimum 8 digits).';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!formData.productsNeeded.trim()) {
      errors.productsNeeded = 'Please specify the products or quantities required.';
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const triggerMailto = () => {
    const subject = encodeURIComponent(`Wholesale Enquiry: ${formData.name || 'Client'} - ${formData.serviceType}`);
    const bodyLines = [
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      formData.email ? `Email: ${formData.email}` : '',
      `Service Type: ${formData.serviceType}`,
      `Products / Quantities Needed: ${formData.productsNeeded}`,
      ``,
      `Message & Delivery Location:`,
      `${formData.message || 'N/A'}`
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join('\n'));
    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot spam check
    if (formData.botcheck) {
      console.warn('Spam submission suppressed');
      return;
    }

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormStatus('submitting');
    setStatusMessage('');

    const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const isRealKey = web3FormsKey && web3FormsKey !== 'YOUR_ACCESS_KEY_HERE' && web3FormsKey.trim().length > 10;

    if (!isRealKey) {
      // Create mail draft fallback without claiming false server-side receipt
      triggerMailto();
      setFormStatus('draft-opened');
      setStatusMessage('A pre-filled email draft has been opened in your default email client addressed to mugiltamarind@gmail.com. Please click Send in your email client to transmit your enquiry.');
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          from_name: 'Mugil Foods Website Enquiry',
          subject: `Enquiry from ${formData.name} - ${formData.serviceType}`,
          to_email: COMPANY_EMAIL,
          name: formData.name,
          phone: formData.phone,
          email: formData.email || 'Not provided',
          service_type: formData.serviceType,
          products_needed: formData.productsNeeded,
          message: formData.message,
          botcheck: formData.botcheck
        })
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setFormStatus('success');
        setStatusMessage('Your requirement has been transmitted to Mugil Foods. Our team will review specifications and respond promptly.');
      } else {
        setFormStatus('error');
        setStatusMessage(result.message || 'Service temporarily unavailable. Please use the direct email or WhatsApp options below.');
      }
    } catch {
      setFormStatus('error');
      setStatusMessage('Network connectivity issue. Please click below to send via your email client or WhatsApp.');
    }
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceType: 'Wholesale & Institutional Supply',
      productsNeeded: '',
      message: '',
      botcheck: ''
    });
    setFormErrors({});
    setFormStatus('idle');
    setStatusMessage('');
  };

  const dynamicWhatsAppMessage = `Hello Mugil Foods, my name is ${formData.name || 'Visitor'}. I am interested in: ${formData.productsNeeded || 'Wholesale Tamarind'}. Service: ${formData.serviceType}.`;
  const dynamicWhatsAppUrl = `https://wa.me/919442177026?text=${encodeURIComponent(dynamicWhatsAppMessage)}`;

  return (
    <div className="enquiry-page">
      {/* Hero Banner */}
      <section className="enquiry-hero-banner">
        <div className="enquiry-hero-inner">
          <span className="enquiry-top-badge">Direct Commercial Communication</span>
          <h1 className="enquiry-page-title">Wholesale & Business Enquiries</h1>
          <p className="enquiry-page-desc">
            Connect directly with founder Karmugil Vendhan and the {BRAND_NAME} agro-processing facility in Dharmapuri, Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="enquiry-content-container">
        {/* Instant WhatsApp Connect Bar */}
        <section className="reachout-header-bar" aria-label="Direct Communication Channels">
          <div className="reachout-left">
            <span className="reachout-tag">Instant Connect</span>
            <h2 className="reachout-title">Fast-Track Orders & Specifications</h2>
            <p className="reachout-desc">
              Require immediate moisture reports, container freight quotes, or customized packaging samples? Message our Dharmapuri unit directly on WhatsApp.
            </p>
          </div>

          <div className="reachout-action">
            <a 
              href={dynamicWhatsAppUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whatsapp-rounded-btn"
              aria-label={`Chat on WhatsApp with ${SITE_NAME} at ${COMPANY_PHONE_DISPLAY}`}
            >
              <svg className="whatsapp-icon" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.188 8.188 0 0 1-5.82 2.42c-1.47 0-2.91-.39-4.18-1.14l-.3-.18-3.11.82.83-3.03-.2-.31a8.216 8.216 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.22-8.24zm4.5 11.66c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.75.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.23-.19-.48-.31z" />
              </svg>
              <div className="whatsapp-btn-text">
                <span className="wa-title">Chat on WhatsApp</span>
                <span className="wa-number">{COMPANY_PHONE_DISPLAY}</span>
              </div>
            </a>
          </div>
        </section>

        {/* Form and Map Grid */}
        <section className="enquiry-main-grid">
          {/* Form Column */}
          <div className="enquiry-form-card">
            <h2 className="form-card-title">Send Us Your Product Requirement</h2>
            <p className="form-card-sub">
              Specify your quantities, packaging formats, and delivery schedule. We dispatch across Tamil Nadu, all Indian states, and export harbors.
            </p>

            {formStatus === 'success' ? (
              <div className="enquiry-thankyou-card">
                <div className="thankyou-icon-circle">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="thankyou-title">Thank You, {formData.name || 'Partner'}!</h3>
                <p className="thankyou-desc">
                  {statusMessage || 'Your enquiry has been received. Founder Karmugil Vendhan and our Dharmapuri team will review your requirement and follow up promptly.'}
                </p>
                <div className="thankyou-actions">
                  <button type="button" onClick={handleResetForm} className="btn-send-another">
                    Submit Another Requirement
                  </button>
                  <a href={dynamicWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="btn-thankyou-wa">
                    <span>Chat on WhatsApp Directly</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            ) : formStatus === 'draft-opened' ? (
              <div className="enquiry-thankyou-card draft-state">
                <div className="thankyou-icon-circle">
                  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <h3 className="thankyou-title">Email Draft Opened in Mail Client</h3>
                <p className="thankyou-desc">
                  {statusMessage}
                </p>
                <div className="thankyou-actions">
                  <button type="button" onClick={triggerMailto} className="btn-send-another">
                    Re-open Email Draft
                  </button>
                  <a href={dynamicWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="btn-thankyou-wa">
                    <span>Message Directly on WhatsApp</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                    </svg>
                  </a>
                  <button type="button" onClick={handleResetForm} className="btn-secondary-link">
                    Return to Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="enquiry-form" noValidate>
                {/* Honeypot field */}
                <input
                  type="text"
                  name="botcheck"
                  value={formData.botcheck}
                  onChange={handleChange}
                  tabIndex="-1"
                  autoComplete="off"
                  style={{ display: 'none' }}
                  aria-hidden="true"
                />

                {formStatus === 'error' && (
                  <div className="form-error-banner" role="alert">
                    <p>{statusMessage}</p>
                    <div className="error-banner-actions">
                      <button type="button" onClick={triggerMailto} className="btn-error-fallback">
                        Open in Email Client
                      </button>
                      <a href={dynamicWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="btn-error-wa">
                        Open WhatsApp
                      </a>
                    </div>
                  </div>
                )}

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name / Contact Person *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Anand Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${formErrors.name ? 'input-error' : ''}`}
                      aria-invalid={!!formErrors.name}
                      aria-describedby={formErrors.name ? 'name-error' : undefined}
                    />
                    {formErrors.name && <span id="name-error" className="field-error-text">{formErrors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="e.g. +91 94421 77026"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`form-input ${formErrors.phone ? 'input-error' : ''}`}
                      aria-invalid={!!formErrors.phone}
                      aria-describedby={formErrors.phone ? 'phone-error' : undefined}
                    />
                    {formErrors.phone && <span id="phone-error" className="field-error-text">{formErrors.phone}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Business Email Address (Optional)</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. procurement@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${formErrors.email ? 'input-error' : ''}`}
                      aria-invalid={!!formErrors.email}
                      aria-describedby={formErrors.email ? 'email-error' : undefined}
                    />
                    {formErrors.email && <span id="email-error" className="field-error-text">{formErrors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="serviceType" className="form-label">Type of Service *</label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="Wholesale & Institutional Supply">Wholesale & Institutional Bulk Supply</option>
                      <option value="Retail Distribution / Supermarket Supply">Retail Distribution / Store-Ready Packs</option>
                      <option value="Custom Private Label / OEM Packaging">Custom Private Label / Contract Packaging</option>
                      <option value="Bulk International Export Order">Bulk International Export Order</option>
                      <option value="Sample Request">Product Sample Request</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="productsNeeded" className="form-label">Products & Estimated Quantity *</label>
                  <input
                    type="text"
                    id="productsNeeded"
                    name="productsNeeded"
                    required
                    placeholder="e.g. Seedless Tamarind Slab (5 Tonnes), Round Tamarind (200 Baskets)"
                    value={formData.productsNeeded}
                    onChange={handleChange}
                    className={`form-input ${formErrors.productsNeeded ? 'input-error' : ''}`}
                    aria-invalid={!!formErrors.productsNeeded}
                    aria-describedby={formErrors.productsNeeded ? 'products-error' : undefined}
                  />
                  {formErrors.productsNeeded && <span id="products-error" className="field-error-text">{formErrors.productsNeeded}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Additional Specifications / Delivery Destination</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Specify target delivery location, packaging preferences (cartons, slabs, sacks), moisture limits, or custom private labeling details..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-submit-enquiry" 
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? (
                    <span>Processing Requirement...</span>
                  ) : (
                    <>
                      <span>Submit Requirement</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Location & Contact Info Column */}
          <div className="enquiry-location-card">
            <div className="location-info-top">
              <span className="location-badge">Our Processing Facility</span>
              <h3 className="location-title">Mugil Tamarind Processing Plant</h3>
              <p className="location-address">
                Dharmapuri, Tamil Nadu, 636701, India. Centrally located in South India's premier tamarind growing corridor with direct freight connectivity across national highways.
              </p>
              
              <div className="location-contact-points">
                <div className="point-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>
                </div>
                <div className="point-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a href={`tel:${COMPANY_PHONE}`}>{COMPANY_PHONE_DISPLAY}</a>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="map-frame-box">
              <iframe
                title="Mugil Tamarind Dharmapuri Facility Map"
                src="https://maps.google.com/maps?q=Dharmapuri,%20Tamil%20Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="map-direct-action">
              <a 
                href={GOOGLE_MAPS_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-open-google-maps"
                aria-label="Open Mugil Tamarind Dharmapuri location in Google Maps"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Open in Google Maps</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
