/**
 * SSG Prerendering and Sitemap Generation Script for Mugil Foods
 * Generates static HTML for all crawlable routes with complete initial DOM,
 * unique SEO metadata, Open Graph tags, canonical URLs, and Schema.org JSON-LD.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const distSsrDir = path.resolve(rootDir, 'dist-ssr');

const SITE_URL = 'https://bharathprabakar.github.io/MugilFoods';
const SITE_NAME = 'Mugil Foods';
const BRAND_NAME = 'Mugil Tamarind';
const COMPANY_PHONE = '+919442177026';
const COMPANY_EMAIL = 'mugiltamarind@gmail.com';
const TODAY = new Date().toISOString().split('T')[0];

console.log('🚀 Step 1: Compiling SSR bundle with Vite...');
execSync('npx vite build --ssr src/entry-server.jsx --outDir dist-ssr', {
  cwd: rootDir,
  stdio: 'inherit'
});

console.log('📦 Step 2: Loading SSR render function and routes metadata...');
const entryServerUrl = pathToFileURL(path.resolve(distSsrDir, 'entry-server.js')).href;
const { render, productsData } = await import(entryServerUrl);

const indexTemplate = fs.readFileSync(path.resolve(distDir, 'index.html'), 'utf-8');

// Find hero image from dist/assets for LCP preloading on homepage
const distAssets = fs.readdirSync(path.resolve(distDir, 'assets'));
const heroAsset = distAssets.find(f => f.startsWith('slide_mugil_foods') && f.endsWith('.webp'));
const heroPreloadTag = heroAsset 
  ? `<link rel="preload" as="image" href="/MugilFoods/assets/${heroAsset}" fetchpriority="high">`
  : '';

// Route Definitions
const routes = [
  {
    path: '/',
    canonicalPath: '/',
    title: 'Mugil Tamarind - Wholesale Tamarind in Dharmapuri, Tamil Nadu | Mugil Foods',
    description: 'Leading wholesale tamarind manufacturer and processor in Dharmapuri, Tamil Nadu. Seedless tamarind slabs, rounds, Karipuli cakes, and custom packaging sourced directly from farmers.',
    keywords: 'wholesale tamarind dharmapuri, tamarind supplier tamil nadu, seedless tamarind slabs, bulk tamarind supply, karipuli tamarind, mugil foods, mugil tamarind',
    changefreq: 'weekly',
    priority: '1.0'
  },
  {
    path: '/about/',
    canonicalPath: '/about/',
    title: 'About Us - Wholesale Tamarind Processing Plant in Dharmapuri | Mugil Foods',
    description: 'Learn about Mugil Foods and our Dharmapuri tamarind processing facility. Direct farmer procurement, hygienic cleaning, deseeding, and natural solar curing across South India.',
    keywords: 'about mugil foods, tamarind processing plant dharmapuri, tamarind factory tamil nadu, raw tamarind sourcing, hygienic tamarind deseeding',
    changefreq: 'monthly',
    priority: '0.8',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'About Us', url: '/about/' }
    ]
  },
  {
    path: '/products/',
    canonicalPath: '/products/',
    title: 'Wholesale Tamarind Products - Slabs, Rounds & Karipuli | Mugil Foods',
    description: 'Explore the complete Mugil Tamarind commercial catalog. Seedless flower tamarind, white-layer slabs, concentric rounds, Karipuli 30kg cartons, and pure pulp paste.',
    keywords: 'tamarind products catalog, seedless tamarind bulk, tamarind slabs wholesale, round tamarind discs, karipuli tamarind cake, bulk tamarind paste',
    changefreq: 'weekly',
    priority: '0.9',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products/' }
    ]
  },
  // Individual Tamarind Products
  {
    path: '/products/seedless-tamarind/',
    canonicalPath: '/products/seedless-tamarind/',
    productId: 'seedless-tamarind',
    changefreq: 'weekly',
    priority: '0.85',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products/' },
      { name: 'Seedless Flower Tamarind', url: '/products/seedless-tamarind/' }
    ]
  },
  {
    path: '/products/seedless-tamarind-slab-white-layer/',
    canonicalPath: '/products/seedless-tamarind-slab-white-layer/',
    productId: 'seedless-tamarind-slab-white-layer',
    changefreq: 'weekly',
    priority: '0.85',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products/' },
      { name: 'Seedless Tamarind Slab with White Layer', url: '/products/seedless-tamarind-slab-white-layer/' }
    ]
  },
  {
    path: '/products/seedless-tamarind-slab-without-white-layer/',
    canonicalPath: '/products/seedless-tamarind-slab-without-white-layer/',
    productId: 'seedless-tamarind-slab-without-white-layer',
    changefreq: 'weekly',
    priority: '0.85',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products/' },
      { name: 'Seedless Tamarind Slab without White Layer', url: '/products/seedless-tamarind-slab-without-white-layer/' }
    ]
  },
  {
    path: '/products/round-seedless-tamarind/',
    canonicalPath: '/products/round-seedless-tamarind/',
    productId: 'round-seedless-tamarind',
    changefreq: 'weekly',
    priority: '0.85',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products/' },
      { name: 'Round Seedless Tamarind', url: '/products/round-seedless-tamarind/' }
    ]
  },
  {
    path: '/products/karipuli-tamarind-cake/',
    canonicalPath: '/products/karipuli-tamarind-cake/',
    productId: 'karipuli-tamarind-cake',
    changefreq: 'weekly',
    priority: '0.85',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products/' },
      { name: 'Karipuli Tamarind Cake', url: '/products/karipuli-tamarind-cake/' }
    ]
  },
  {
    path: '/products/loose-karipuli-30kg/',
    canonicalPath: '/products/loose-karipuli-30kg/',
    productId: 'loose-karipuli-30kg',
    changefreq: 'weekly',
    priority: '0.85',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products/' },
      { name: 'Loose Karipuli 30kg Box', url: '/products/loose-karipuli-30kg/' }
    ]
  },
  {
    path: '/products/raw-tamarind/',
    canonicalPath: '/products/raw-tamarind/',
    productId: 'raw-tamarind',
    changefreq: 'weekly',
    priority: '0.8',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products/' },
      { name: 'Raw Tamarind Pods', url: '/products/raw-tamarind/' }
    ]
  },
  {
    path: '/products/tamarind-paste/',
    canonicalPath: '/products/tamarind-paste/',
    productId: 'tamarind-paste',
    changefreq: 'weekly',
    priority: '0.8',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products/' },
      { name: 'Tamarind Pulp Paste', url: '/products/tamarind-paste/' }
    ]
  },
  {
    path: '/products/wildflower-honey/',
    canonicalPath: '/products/wildflower-honey/',
    productId: 'wildflower-honey',
    changefreq: 'monthly',
    priority: '0.7',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products/' },
      { name: 'Raw Forest Wildflower Honey', url: '/products/wildflower-honey/' }
    ]
  },
  // Dedicated Service Pages
  {
    path: '/wholesale-tamarind-supply/',
    canonicalPath: '/wholesale-tamarind-supply/',
    title: 'Wholesale Tamarind Supplier - Bulk Orders & Freight | Mugil Foods',
    description: 'Bulk wholesale tamarind supply for food processors, caterers, spice millers, and exporters. Tonne-volume capacity, standardized cartons, and pan-India freight from Dharmapuri.',
    keywords: 'wholesale tamarind supplier, bulk tamarind supply, tamarind wholesale dharmapuri, commercial tamarind supply, container tamarind exporter',
    changefreq: 'monthly',
    priority: '0.9',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Wholesale Tamarind Supply', url: '/wholesale-tamarind-supply/' }
    ]
  },
  {
    path: '/retail-distribution/',
    canonicalPath: '/retail-distribution/',
    title: 'Retail Tamarind Distribution & Supermarket Supply | Mugil Foods',
    description: 'Store-ready consumer tamarind packs for supermarket chains, regional grocery distributors, and retail shelves. Barcoded, aroma-locked, tamper-proof packaging from Dharmapuri.',
    keywords: 'retail tamarind distribution, supermarket tamarind supply, store ready tamarind packs, barcode tamarind packets, retail food distributor tamil nadu',
    changefreq: 'monthly',
    priority: '0.8',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Retail Distribution', url: '/retail-distribution/' }
    ]
  },
  {
    path: '/custom-packaging/',
    canonicalPath: '/custom-packaging/',
    title: 'Custom Packaging & Private Label Tamarind (OEM) | Mugil Foods',
    description: 'Turnkey private label manufacturing and custom contract packaging for food brands, restaurants, and exporters. Tailored artwork, flexible MOQs, and food-grade packaging from Dharmapuri.',
    keywords: 'custom packaging tamarind, private label tamarind, OEM tamarind manufacturer, contract packaging dharmapuri, white label tamarind supplier',
    changefreq: 'monthly',
    priority: '0.8',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Custom Packaging', url: '/custom-packaging/' }
    ]
  },
  {
    path: '/services/',
    canonicalPath: '/services/',
    title: 'Services Overview - Wholesale, Retail & Private Label | Mugil Foods',
    description: 'Comprehensive tamarind agro-processing services from Dharmapuri: high-capacity wholesale supply, retail distribution packs, and custom OEM private branding.',
    keywords: 'tamarind processing services, wholesale supply dharmapuri, retail packaging, private label OEM',
    changefreq: 'monthly',
    priority: '0.75',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Services Overview', url: '/services/' }
    ]
  },
  // Contact & Enquiry Pages
  {
    path: '/contact/',
    canonicalPath: '/contact/',
    title: 'Contact Us & Wholesale Enquiries - Dharmapuri Unit | Mugil Foods',
    description: 'Get in touch with founder Kermugil Venthen and the Mugil Foods team in Dharmapuri, Tamil Nadu. Fast quotes on wholesale tamarind, specs, samples, and logistics via phone, email, and WhatsApp.',
    keywords: 'contact mugil foods, wholesale tamarind enquiry, dharmapuri tamarind factory contact, mugil tamarind phone number, tamarind price quotation',
    changefreq: 'monthly',
    priority: '0.85',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Contact & Enquiries', url: '/contact/' }
    ]
  },
  {
    path: '/enquiry/',
    canonicalPath: '/contact/', // Canonicalized to /contact/ to prevent duplicate indexing
    title: 'Make a Wholesale Tamarind Enquiry | Mugil Foods',
    description: 'Request commercial tamarind specifications, freight delivery timelines, and bulk wholesale quotes directly from our Dharmapuri processing unit.',
    keywords: 'wholesale enquiry, request tamarind price, bulk tamarind quotation, mugil foods enquiry',
    changefreq: 'monthly',
    priority: null // Do not put alias in sitemap
  },
  // Educational Knowledge Base
  {
    path: '/resources/',
    canonicalPath: '/resources/',
    title: 'Tamarind Buyer\'s Guide & Industry Quality Standards | Mugil Foods',
    description: 'Commercial guides for food processors and buyers: choosing between seedless slabs, concentric rounds, and Karipuli cakes, plus moisture testing and bulk storage advice from Dharmapuri.',
    keywords: 'tamarind buying guide, seedless tamarind vs karipuli, tamarind quality standards, bulk tamarind moisture testing, industrial tamarind guide',
    changefreq: 'monthly',
    priority: '0.8',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Resources', url: '/resources/' }
    ]
  },
  {
    path: '/resources/tamarind-buying-guide/',
    canonicalPath: '/resources/tamarind-buying-guide/',
    title: 'Commercial Tamarind Buying Guide: Slabs, Rounds & Karipuli | Mugil Foods',
    description: 'Practical guide for commercial food manufacturers and caterers: comparing pulp yield, dissolution speed, tartaric acid concentration, and bulk shelf life across tamarind formats.',
    keywords: 'commercial tamarind selection guide, seedless slabs vs rounds, karipuli tamarind cake uses, tartaric acid extraction yield, bulk tamarind shelf life',
    changefreq: 'monthly',
    priority: '0.75',
    isArticle: true,
    articleTitle: 'Commercial Tamarind Buying Guide: Slabs, Rounds & Karipuli',
    articleDesc: 'A practical selection guide for food processors, caterers, and wholesale distributors on tartaric acid yield and bulk formats.',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Resources', url: '/resources/' },
      { name: 'Tamarind Buying Guide', url: '/resources/tamarind-buying-guide/' }
    ]
  },
  {
    path: '/resources/quality-and-moisture-standards/',
    canonicalPath: '/resources/quality-and-moisture-standards/',
    title: 'Moisture Control & Quality Standards in Bulk Tamarind Processing | Mugil Foods',
    description: 'How hygienic deshelling, deseeding, and controlled solar curing in Dharmapuri, Tamil Nadu protect pulp quality, prevent spoilage, and maintain optimal moisture content.',
    keywords: 'tamarind moisture control, bulk tamarind quality standards, dharmapuri agro processing, hygienic tamarind deseeding, food safety tamarind testing',
    changefreq: 'monthly',
    priority: '0.75',
    isArticle: true,
    articleTitle: 'Moisture Control & Quality Standards in Bulk Tamarind Processing',
    articleDesc: 'Detailed overview of physical sorting, moisture thresholds, fiber cleaning, and zero-chemical preservation protocols practiced in Dharmapuri.',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Resources', url: '/resources/' },
      { name: 'Quality & Moisture Standards', url: '/resources/quality-and-moisture-standards/' }
    ]
  },
  // Privacy Policy
  {
    path: '/privacy-policy/',
    canonicalPath: '/privacy-policy/',
    title: 'Privacy Policy | Mugil Foods',
    description: 'Our commitment to data privacy, confidentiality of wholesale business inquiries, and fair usage policies at Mugil Foods and Mugil Tamarind.',
    keywords: 'mugil foods privacy policy, business data security, customer information protection',
    changefreq: 'yearly',
    priority: '0.3',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Privacy Policy', url: '/privacy-policy/' }
    ]
  },
  // 404 Error Page
  {
    path: '/404.html',
    canonicalPath: '/404.html',
    title: 'Page Not Found (404) | Mugil Foods',
    description: 'The requested page or product link was not found. Browse our wholesale tamarind catalog or contact our Dharmapuri facility directly.',
    keywords: '404 not found, mugil foods page not found',
    priority: null // Do not index 404 in sitemap
  }
];

// All products flattened
const allProductsList = Object.values(productsData).flat();

console.log(`🔨 Step 3: Prerendering ${routes.length} pages...`);

for (const route of routes) {
  let appHtml = '';
  try {
    appHtml = render(route.path);
  } catch (err) {
    console.error(`❌ Failed to render ${route.path}:`, err);
    throw err;
  }

  // Populate dynamic product details if route has productId
  let pageTitle = route.title;
  let pageDesc = route.description;
  let pageKeywords = route.keywords;
  let pageOgImage = `${SITE_URL}/og-image.jpg`;
  let productSchemaJson = null;

  if (route.productId) {
    const product = allProductsList.find(p => p.id === route.productId);
    if (product) {
      pageTitle = `${product.name} - Wholesale Tamarind in Dharmapuri | ${BRAND_NAME}`;
      pageDesc = `${product.name}: ${product.tagline || ''} Processed in Dharmapuri, Tamil Nadu by Mugil Foods. Available in bulk cartons & custom packaging for commercial buyers.`.slice(0, 160);
      pageKeywords = `${product.name.toLowerCase()}, wholesale tamarind dharmapuri, bulk ${product.name.toLowerCase()}, mugil tamarind, tamil nadu tamarind supplier`;
      
      productSchemaJson = {
        '@type': 'Product',
        '@id': `${SITE_URL}${route.canonicalPath}#product`,
        name: product.name,
        description: product.description,
        image: `${SITE_URL}/og-image.jpg`,
        category: product.categoryId === 'tamarind' ? 'Tamarind' : 'Honey',
        brand: {
          '@type': 'Brand',
          name: BRAND_NAME
        },
        manufacturer: {
          '@type': 'Organization',
          name: SITE_NAME
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          availability: product.status === 'coming-soon' ? 'https://schema.org/PreOrder' : 'https://schema.org/InStock',
          url: `${SITE_URL}${route.canonicalPath}`,
          seller: {
            '@type': 'Organization',
            name: SITE_NAME
          }
        },
        additionalProperty: (product.specifications || []).map((spec) => ({
          '@type': 'PropertyValue',
          name: spec.label,
          value: spec.value
        }))
      };
    }
  }

  // Build JSON-LD graph
  const jsonLdGraph = [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: BRAND_NAME,
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/favicon.png`,
      image: `${SITE_URL}/og-image.jpg`,
      description: 'Leading wholesale tamarind processor and supplier in Dharmapuri, Tamil Nadu. Seedless tamarind slabs, rounds, Karipuli cakes, and custom packaging solutions.',
      telephone: COMPANY_PHONE,
      email: COMPANY_EMAIL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Mugil Tamarind Processing Plant, Collectorate Post',
        addressLocality: 'Dharmapuri',
        addressRegion: 'Tamil Nadu',
        postalCode: '636701',
        addressCountry: 'IN'
      }
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#localbusiness`,
      name: `${BRAND_NAME} - ${SITE_NAME}`,
      alternateName: BRAND_NAME,
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/favicon.png`,
      image: `${SITE_URL}/og-image.jpg`,
      description: 'Wholesale tamarind processing plant and supplier based in Dharmapuri, Tamil Nadu. Premium seedless tamarind slabs, concentric rounds, karipuli cakes, and custom packaging.',
      telephone: COMPANY_PHONE,
      email: COMPANY_EMAIL,
      priceRange: '₹₹ - Wholesale & Commercial Supply',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Mugil Tamarind Processing Plant, Collectorate Post',
        addressLocality: 'Dharmapuri',
        addressRegion: 'Tamil Nadu',
        postalCode: '636701',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 12.1211,
        longitude: 78.1582
      }
    }
  ];

  if (route.breadcrumbs) {
    jsonLdGraph.push({
      '@type': 'BreadcrumbList',
      itemListElement: route.breadcrumbs.map((b, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: b.name,
        item: b.url.startsWith('http') ? b.url : `${SITE_URL}${b.url}`
      }))
    });
  }

  if (productSchemaJson) {
    jsonLdGraph.push(productSchemaJson);
  }

  if (route.isArticle) {
    jsonLdGraph.push({
      '@type': 'Article',
      '@id': `${SITE_URL}${route.canonicalPath}#article`,
      headline: route.articleTitle,
      description: route.articleDesc,
      image: pageOgImage,
      datePublished: '2026-10-15',
      dateModified: '2026-11-01',
      author: {
        '@type': 'Organization',
        name: `${BRAND_NAME} Agro-Processing Team`,
        url: `${SITE_URL}/`
      },
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/favicon.png`
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${SITE_URL}${route.canonicalPath}`
      }
    });
  }

  const canonicalUrl = `${SITE_URL}${route.canonicalPath === '/' ? '/' : route.canonicalPath}`;

  // Replace content in template
  let pageHtml = indexTemplate;

  // Title
  pageHtml = pageHtml.replace(/<title>.*?<\/title>/s, `<title>${pageTitle}</title>`);

  // Canonical
  pageHtml = pageHtml.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonicalUrl}" />`);

  // Description
  pageHtml = pageHtml.replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${pageDesc}" />`);

  // Keywords
  pageHtml = pageHtml.replace(/<meta name="keywords"[^>]*>/, `<meta name="keywords" content="${pageKeywords}" />`);

  // Open Graph
  pageHtml = pageHtml.replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${pageTitle}" />`);
  pageHtml = pageHtml.replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${pageDesc}" />`);
  pageHtml = pageHtml.replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${canonicalUrl}" />`);
  pageHtml = pageHtml.replace(/<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${pageOgImage}" />`);

  // Twitter
  pageHtml = pageHtml.replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${pageTitle}" />`);
  pageHtml = pageHtml.replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${pageDesc}" />`);

  // Add LCP Hero preload tag on homepage
  if (route.path === '/' && heroPreloadTag) {
    pageHtml = pageHtml.replace('</head>', `  ${heroPreloadTag}\n  </head>`);
  }

  // Structured Data (JSON-LD)
  const structuredDataScript = `<script type="application/ld+json">\n${JSON.stringify({ '@context': 'https://schema.org', '@graph': jsonLdGraph }, null, 2)}\n    </script>`;
  pageHtml = pageHtml.replace(/<script type="application\/ld\+json">.*?<\/script>/s, structuredDataScript);

  // Injected HTML into #root
  pageHtml = pageHtml.replace(/<div id="root">.*?<\/div>/s, `<div id="root">${appHtml}</div>`);

  // Output file location
  let outputPath = '';
  if (route.path === '/') {
    outputPath = path.resolve(distDir, 'index.html');
  } else if (route.path === '/404.html') {
    outputPath = path.resolve(distDir, '404.html');
  } else {
    const cleanSubdir = route.path.replace(/^\//, '').replace(/\/$/, '');
    const targetDir = path.resolve(distDir, cleanSubdir);
    fs.mkdirSync(targetDir, { recursive: true });
    outputPath = path.resolve(targetDir, 'index.html');
  }

  fs.writeFileSync(outputPath, pageHtml, 'utf-8');
  console.log(`  ✓ Written: ${path.relative(distDir, outputPath)} (${(Buffer.byteLength(pageHtml) / 1024).toFixed(1)} KB)`);
}

// Step 4: Generate Canonical Sitemap.xml
console.log('🗺️ Step 4: Generating sitemap.xml...');
const sitemapRoutes = routes.filter(r => r.priority !== null && r.path !== '/404.html' && (r.canonicalPath !== '/contact/' || r.path === '/contact/'));
const uniqueSitemapRoutes = [];
const seenCanonical = new Set();

for (const r of sitemapRoutes) {
  if (!seenCanonical.has(r.canonicalPath)) {
    seenCanonical.add(r.canonicalPath);
    uniqueSitemapRoutes.push(r);
  }
}

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueSitemapRoutes.map(r => `  <url>
    <loc>${SITE_URL}${r.canonicalPath === '/' ? '/' : r.canonicalPath}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${r.changefreq || 'monthly'}</changefreq>
    <priority>${r.priority || '0.7'}</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), sitemapXml.trim() + '\n', 'utf-8');
console.log(`  ✓ Generated sitemap.xml with ${uniqueSitemapRoutes.length} canonical indexable URLs`);

// Step 5: Generate Robots.txt
console.log('🤖 Step 5: Generating robots.txt...');
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
fs.writeFileSync(path.resolve(distDir, 'robots.txt'), robotsTxt, 'utf-8');
console.log('  ✓ Generated robots.txt');

// Step 6: Cleanup temporary dist-ssr directory
console.log('🧹 Step 6: Cleaning up temporary SSR artifacts...');
fs.rmSync(distSsrDir, { recursive: true, force: true });

console.log('🎉 SSG Prerendering and Technical SEO successfully completed!');
