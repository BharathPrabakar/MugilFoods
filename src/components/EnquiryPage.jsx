import React, { useState } from 'react';
import './EnquiryPage.css';

export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: 'Wholesale & Institutional Supply',
    productsNeeded: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const recipient = 'mugiltamarind26@gmail.com';
    const subject = encodeURIComponent(`Enquiry from ${formData.name || 'Mugil Foods Website Visitor'}`);
    
    const bodyLines = [
      `Name: ${formData.name}`,
      `Phone Number: ${formData.phone}`,
      `Type of Service: ${formData.serviceType}`,
      `Products Needed: ${formData.productsNeeded}`,
      ``,
      `Message:`,
      `${formData.message}`
    ];
    
    const body = encodeURIComponent(bodyLines.join('\n'));
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  // WhatsApp chat link (+91 9442177026)
  const whatsappUrl = 'https://wa.me/919442177026?text=' + encodeURIComponent('Hello Mugil Foods, I would like to enquire about your products and services.');

  // Google Maps link provided by user
  const googleMapsUrl = 'https://maps.app.goo.gl/ipBBQmJx93ar5S9x5?g_st=aw';

  return (
    <div className="enquiry-page">
      {/* Hero Banner with rich gradient for transparent navbar blend */}
      <section className="enquiry-hero-banner">
        <div className="enquiry-hero-inner">
          <span className="enquiry-top-badge">Direct Communication</span>
          <h1 className="enquiry-page-title">Make an Enquiry</h1>
          <p className="enquiry-page-desc">
            Connect directly with founder Kermugil Venthen and our agro-processing team in Dharmapuri.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="enquiry-content-container">
        {/* Reach Out / Let's Talk & WhatsApp Bar */}
        <section className="reachout-header-bar">
          <div className="reachout-left">
            <span className="reachout-tag">Instant Connect</span>
            <h2 className="reachout-title">Reach Out / Let's Talk</h2>
            <p className="reachout-desc">
              Have immediate product specifications, urgent orders, or bulk inquiries? Message us directly on WhatsApp for prompt assistance.
            </p>
          </div>

          <div className="reachout-action">
            {/* Rounded rectangle WhatsApp Button */}
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whatsapp-rounded-btn"
              aria-label="Chat on WhatsApp with Mugil Foods at +91 9442177026"
            >
              <svg className="whatsapp-icon" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.188 8.188 0 0 1-5.82 2.42c-1.47 0-2.91-.39-4.18-1.14l-.3-.18-3.11.82.83-3.03-.2-.31a8.216 8.216 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.22-8.24zm4.5 11.66c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.75.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.23-.19-.48-.31z" />
              </svg>
              <div className="whatsapp-btn-text">
                <span className="wa-title">Chat on WhatsApp</span>
                <span className="wa-number">+91 9442177026</span>
              </div>
            </a>
          </div>
        </section>

        {/* Form and Map Dual Column Section */}
        <section className="enquiry-main-grid">
          {/* Left / Form Column */}
          <div className="enquiry-form-card">
            <h2 className="form-card-title">Send Us Your Requirement</h2>
            <p className="form-card-sub">
              Fill in your specifications below. Upon clicking submit, it will automatically prepare your direct email to <strong>mugiltamarind26@gmail.com</strong>.
            </p>

            <form onSubmit={handleSubmit} className="enquiry-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
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
                  <option value="Wholesale & Institutional Supply">Wholesale & Institutional Supply</option>
                  <option value="Retail Distribution / Supermarket Supply">Retail Distribution / Supermarket Supply</option>
                  <option value="Custom Private Label / OEM Packaging">Custom Private Label / OEM Packaging</option>
                  <option value="Bulk International Export Order">Bulk International Export Order</option>
                  <option value="General Product Sample Request">General Product Sample Request</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="productsNeeded" className="form-label">Enter All Products You Need *</label>
                <input
                  type="text"
                  id="productsNeeded"
                  name="productsNeeded"
                  required
                  placeholder="e.g. Seedless Bar Tamarind (5 Tonnes), Round Tamarind, Pure Ghee..."
                  value={formData.productsNeeded}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message / Specifications</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Specify quantities, target delivery location, packaging preferences, or any custom requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn-submit-enquiry">
                <span>Submit & Email to mugiltamarind26@gmail.com</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>

          {/* Right / Map & Location Column */}
          <div className="enquiry-location-card">
            <div className="location-info-top">
              <span className="location-badge">Our Facility</span>
              <h3 className="location-title">Mugil Foods Dharmapuri</h3>
              <p className="location-address">
                Dharmapuri, Tamil Nadu, India — Situated amidst prime agricultural tamarind groves with direct highway freight connectivity across South India and export ports.
              </p>
              
              <div className="location-contact-points">
                <div className="point-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span>mugiltamarind26@gmail.com</span>
                </div>
                <div className="point-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>+91 9442177026</span>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="map-frame-box">
              <iframe
                title="Mugil Foods Dharmapuri Location"
                src="https://maps.google.com/maps?q=Dharmapuri,%20Tamil%20Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="map-direct-action">
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-open-google-maps"
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
