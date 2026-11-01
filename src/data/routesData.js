/**
 * Route metadata, SEO titles, descriptions, and Structured Data
 * for all crawlable pages of Mugil Foods.
 */

export const SITE_URL = 'https://bharathprabakar.github.io/MugilFoods';
export const SITE_NAME = 'Mugil Foods';
export const BRAND_NAME = 'Mugil Tamarind';
export const COMPANY_PHONE = '+919442177026';
export const COMPANY_PHONE_DISPLAY = '+91 94421 77026';
export const COMPANY_EMAIL = 'mugiltamarind@gmail.com';
export const WHATSAPP_URL = 'https://wa.me/919442177026?text=' + encodeURIComponent('Hello Mugil Foods, I would like to enquire about your wholesale tamarind products and services.');
export const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/ipBBQmJx93ar5S9x5?g_st=aw';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const businessAddress = {
  streetAddress: 'Mugil Tamarind Processing Plant, Collectorate Post',
  addressLocality: 'Dharmapuri',
  addressRegion: 'Tamil Nadu',
  postalCode: '636701',
  addressCountry: 'IN'
};

export const geoCoordinates = {
  latitude: 12.1211,
  longitude: 78.1582
};

export const organizationSchema = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: BRAND_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/favicon.png`,
  image: DEFAULT_OG_IMAGE,
  description: 'Leading wholesale tamarind processor and supplier in Dharmapuri, Tamil Nadu, supplying seedless tamarind slabs, rounds, karipuli cakes, and custom packaging solutions across India and export markets.',
  telephone: COMPANY_PHONE,
  email: COMPANY_EMAIL,
  address: {
    '@type': 'PostalAddress',
    ...businessAddress
  },
  sameAs: []
};

export const localBusinessSchema = {
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#localbusiness`,
  name: `${BRAND_NAME} - ${SITE_NAME}`,
  alternateName: BRAND_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/favicon.png`,
  image: DEFAULT_OG_IMAGE,
  description: 'Wholesale tamarind processing plant and supplier based in Dharmapuri, Tamil Nadu. Premium seedless tamarind slabs, concentric rounds, karipuli cakes, and custom packaging.',
  telephone: COMPANY_PHONE,
  email: COMPANY_EMAIL,
  priceRange: '₹₹ - Wholesale & Bulk Commercial Pricing',
  address: {
    '@type': 'PostalAddress',
    ...businessAddress
  },
  geo: {
    '@type': 'GeoCoordinates',
    ...geoCoordinates
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00'
    }
  ]
};

export function buildBreadcrumbSchema(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`
    }))
  };
}

export function buildProductSchema(product) {
  return {
    '@type': 'Product',
    '@id': `${SITE_URL}/products/${product.id}/#product`,
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
      url: `${SITE_URL}/products/${product.id}/`,
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

export function buildArticleSchema({ title, description, url, datePublished, dateModified }) {
  return {
    '@type': 'Article',
    '@id': `${SITE_URL}${url}#article`,
    headline: title,
    description: description,
    image: DEFAULT_OG_IMAGE,
    datePublished: datePublished || '2026-10-15',
    dateModified: dateModified || '2026-11-01',
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
      '@id': `${SITE_URL}${url}`
    }
  };
}

// Educational Articles Data
export const articlesData = [
  {
    slug: 'tamarind-buying-guide',
    title: 'Commercial Tamarind Buying Guide: Slabs, Rounds & Karipuli',
    subtitle: 'A practical selection guide for food processors, caterers, and wholesale distributors',
    datePublished: '2026-10-15',
    dateModified: '2026-11-01',
    readTime: '6 min read',
    excerpt: 'Understand differences in tartaric acid yield, moisture retention, seed removal grades, and bulk shelf stability between seedless slabs, concentric rounds, and compressed Karipuli cakes.',
    content: [
      {
        heading: 'Why Tamarind Variety & Format Matters for Commercial Buyers',
        body: 'For food manufacturers, catering operations, and spice blenders, tamarind is not merely a souring agent — it is a primary functional ingredient where moisture consistency, pulp extraction yield, and seedless purity directly determine production cost and batch flavor balance. Choosing between compact seedless slabs, artisanal concentric rounds, and compressed Karipuli cakes depends heavily on your processing method, dissolution time, and storage infrastructure.'
      },
      {
        heading: '1. Seedless Tamarind Slabs (Clean & White Layer Options)',
        body: 'Seedless tamarind slabs are among the most versatile commercial formats. Sourced from sun-cured harvest, deshelled, and deseeded, slabs are compressed into uniform blocks. Slabs with a natural white layer represent traditional processing where natural moisture and salt cure create a protective bloom. Clean slabs without the white layer offer immediate dark pulp appearance ideal for direct culinary prep and sauces where a darker color profile is preferred.'
      },
      {
        heading: '2. Concentric Round Seedless Tamarind Discs',
        body: 'Formed into handcrafted uniform circular coils or discs, round tamarind is renowned for retail visual appeal and traditional culinary households. The concentric shape allows air circulation in breathable packaging such as woven baskets, preventing over-compaction during transport while preserving natural aroma and tanginess.'
      },
      {
        heading: '3. Karipuli Tamarind Cakes & Loose 30kg Cartons',
        body: 'Karipuli is specifically cured and pressed for high-volume commercial food industries, pickle manufacturers, and institutional kitchens. Characterized by deep dark color, intense tanginess, and minimal fiber content, Karipuli gives superior tartaric acid extraction per kilogram, reducing the quantity needed per cooking batch.'
      },
      {
        heading: 'Bulk Storage & Quality Preservation',
        body: 'Always store bulk tamarind in a cool, dry, well-ventilated warehouse away from direct concrete floor moisture. Food-grade polythene liners inside corrugated cartons shield against relative humidity fluctuations, ensuring a reliable shelf life of 12 months or more.'
      }
    ]
  },
  {
    slug: 'quality-and-moisture-standards',
    title: 'Moisture Control & Quality Standards in Bulk Tamarind Processing',
    subtitle: 'How hygienic deshelling, deseeding, and controlled drying in Dharmapuri protect shelf life',
    datePublished: '2026-10-20',
    dateModified: '2026-11-01',
    readTime: '5 min read',
    excerpt: 'Detailed overview of physical sorting, moisture percentage thresholds, fiber cleaning, and zero-chemical preservation protocols practiced at Mugil Foods in Dharmapuri, Tamil Nadu.',
    content: [
      {
        heading: 'The Agro-Processing Advantage of Dharmapuri, Tamil Nadu',
        body: 'Dharmapuri is situated in the heart of South India\'s agricultural tamarind corridor. Its warm, low-humidity microclimate provides ideal seasonal conditions for natural curing and drying of raw tamarind pods without resorting to artificial chemical preservatives or high-temperature kilns that degrade tartaric acid and natural enzymes.'
      },
      {
        heading: 'Key Quality Parameters for Industrial Procurement',
        body: 'When evaluating bulk tamarind consignments, institutional quality assurance managers inspect four primary metrics: 1) Moisture Content: Maintained between 15% and 18% to prevent mold growth while preserving softness; 2) Foreign Matter & Seeds: Rigorous mechanical and manual sorting ensures seeds and pod shell fragments are thoroughly removed; 3) Fiber Ratio: High-quality grades minimize tough stringy vascular bundles; 4) Total Acidity: Pure tartaric acid content is preserved through prompt batch processing.'
      },
      {
        heading: 'Hygienic Processing Flow at Mugil Foods',
        body: 'At the Mugil Foods Dharmapuri facility, incoming raw harvest undergoes: pod inspection and grading, hygienic cracking and shell separation, deseeding and fiber sorting, natural solar curing in clean environments, and immediate packaging into moisture-barrier cartons or sealed packs.'
      }
    ]
  }
];

