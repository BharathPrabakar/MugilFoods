import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { COMPANY_PHONE } from '../data/routesData';

const STORAGE_KEY = 'mugil-foods-shopping-cart-v1';
const CartContext = createContext(null);

function readStoredCart() {
  if (typeof window === 'undefined') return [];
  try {
    const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(stored)
      ? stored.filter((item) => item && typeof item.id === 'string' && Number.isInteger(item.quantity) && item.quantity > 0)
      : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readStoredCart);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // The cart remains usable for this session when browser storage is unavailable.
    }
  }, [items]);

  const addToCart = useCallback((product, quantity = 1) => {
    if (!product?.id || product.status === 'coming-soon') return false;
    const safeQuantity = Math.max(1, Math.min(99, Math.floor(Number(quantity) || 1)));
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) => item.id === product.id
          ? { ...item, quantity: Math.min(99, item.quantity + safeQuantity) }
          : item);
      }
      return [...current, {
        id: product.id,
        name: product.name,
        image: product.image || '',
        quantity: safeQuantity,
      }];
    });
    setIsCartOpen(true);
    return true;
  }, []);

  const updateQuantity = useCallback((productId, quantity) => {
    const safeQuantity = Math.floor(Number(quantity));
    if (!Number.isFinite(safeQuantity) || safeQuantity <= 0) {
      setItems((current) => current.filter((item) => item.id !== productId));
      return;
    }
    setItems((current) => current.map((item) => item.id === productId
      ? { ...item, quantity: Math.min(99, safeQuantity) }
      : item));
  }, []);

  const removeFromCart = useCallback((productId) => {
    setItems((current) => current.filter((item) => item.id !== productId));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const sendOrderToWhatsApp = useCallback((customerName = '') => {
    if (!items.length || typeof window === 'undefined') return false;
    const totalUnits = items.reduce((sum, item) => sum + item.quantity, 0);
    const lines = items.map((item, index) =>
      `${index + 1}. ${item.name}\n   Quantity: ${item.quantity}`
    );
    const message = [
      'Hello Mugil Foods! 👋',
      '',
      'I would like to enquire about the following products:',
      ...(customerName.trim() ? ['', `Customer name: ${customerName.trim()}`] : []),
      '',
      ...lines.flatMap((line) => [line, '']),
      `Total products: ${items.length}`,
      `Total quantity: ${totalUnits}`,
      '',
      'Please share the current pricing, availability, packaging and delivery details.',
      '',
      'Thank you!'
    ].join('\n');
    const phone = COMPANY_PHONE.replace(/\D/g, '');
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    return true;
  }, [items]);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const value = useMemo(() => ({
    items, itemCount, isCartOpen, addToCart, updateQuantity, removeFromCart,
    clearCart, openCart, closeCart, sendOrderToWhatsApp
  }), [items, itemCount, isCartOpen, addToCart, updateQuantity, removeFromCart, clearCart, openCart, closeCart, sendOrderToWhatsApp]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
