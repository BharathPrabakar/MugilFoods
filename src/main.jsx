import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const rootEl = document.getElementById('root');

if (rootEl && rootEl.hasChildNodes() && !rootEl.querySelector('#app-shell-header')) {
  try {
    hydrateRoot(
      rootEl,
      <StrictMode>
        <App />
      </StrictMode>
    );
  } catch {
    createRoot(rootEl).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  }
} else if (rootEl) {
  createRoot(rootEl).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
