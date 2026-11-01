import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import { productsData } from './data/productsData.js';

export { productsData };

export function render(url) {
  return renderToString(<App initialUrl={url} />);
}
