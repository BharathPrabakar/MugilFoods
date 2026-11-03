import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext';
import './CartDrawer.css';

function CloseIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>;
}

export default function CartDrawer() {
  const {
    items, itemCount, isCartOpen, closeCart, updateQuantity,
    removeFromCart, clearCart, sendOrderToWhatsApp
  } = useCart();
  const [customerName, setCustomerName] = useState('');

  useEffect(() => {
    if (!isCartOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeCart();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  const handleSend = () => {
    if (sendOrderToWhatsApp(customerName)) closeCart();
  };

  return (
    <div className="cart-overlay" onMouseDown={(event) => {
      if (event.target === event.currentTarget) closeCart();
    }}>
      <aside className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title">
        <div className="cart-drawer-header">
          <div>
            <span className="cart-eyebrow">MUGIL FOODS</span>
            <h2 id="cart-title">Your Enquiry Cart <span>({itemCount})</span></h2>
            <p>Review your selection before sending it to us.</p>
          </div>
          <button className="cart-close-btn" type="button" onClick={closeCart} aria-label="Close cart"><CloseIcon /></button>
        </div>

        {items.length ? (
          <>
            <div className="cart-items-list">
              {items.map((item) => (
                <article className="cart-item" key={item.id}>
                  <div className="cart-item-image">
                    {item.image ? <img src={item.image} alt="" /> : <span>MF</span>}
                  </div>
                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <div className="cart-quantity-control" aria-label={`Quantity for ${item.name}`}>
                      <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Decrease quantity">−</button>
                      <span aria-live="polite">{item.quantity}</span>
                      <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Increase quantity" disabled={item.quantity >= 99}>+</button>
                    </div>
                  </div>
                  <button className="cart-remove-btn" type="button" onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.name}`}>Remove</button>
                </article>
              ))}
            </div>
            <div className="cart-drawer-footer">
              <div className="cart-summary-line"><span>Selected products</span><strong>{items.length}</strong></div>
              <div className="cart-summary-line"><span>Total quantity</span><strong>{itemCount}</strong></div>
              <p className="cart-price-note">Pricing is confirmed by our team based on your selected products, quantity and packaging requirements.</p>
              <label className="cart-name-label" htmlFor="cart-customer-name">Your name <span>(optional)</span></label>
              <input id="cart-customer-name" className="cart-name-input" type="text" value={customerName} onChange={(event) => setCustomerName(event.target.value)} maxLength={80} placeholder="Enter your name" />
              <button className="cart-whatsapp-btn" type="button" onClick={handleSend}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.2 1.6 6L0 24l6.4-1.7a11.8 11.8 0 0 0 5.7 1.5h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.2-3.5-8.5ZM12.1 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 1 1 8.4 4.7Zm5.4-7.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.7l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.6-.9-2.1c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.7 1.1 2.9c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.3Z"/></svg>
                Send Enquiry via WhatsApp
              </button>
              <button className="cart-clear-btn" type="button" onClick={clearCart}>Clear cart</button>
              <p className="cart-disclaimer">WhatsApp will open with your enquiry prepared. Please tap Send in WhatsApp to submit it.</p>
            </div>
          </>
        ) : (
          <div className="cart-empty-state">
            <div className="cart-empty-icon">🛒</div>
            <h3>Your cart is waiting</h3>
            <p>Explore our catalogue and add the products you are interested in.</p>
            <button type="button" onClick={closeCart}>Continue browsing</button>
          </div>
        )}
      </aside>
    </div>
  );
}
