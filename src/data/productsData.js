import tamarindImg from '../assets/category_tamarind.webp';
import oilImg from '../assets/category_oil.webp';
import gheeImg from '../assets/category_ghee.webp';
import honeyImg from '../assets/category_honey.webp';

import slide1Img from '../assets/slide1.webp'; // Slab Tamarind
import slide2Img from '../assets/slide2.webp'; // Round Swirl Tamarind
import slide3Img from '../assets/slide3.webp'; // Raw Tamarind Pods
import slide4Img from '../assets/slide4.webp'; // Tamarind Paste
import karipuliImg from '../assets/prod_karipuli.webp'; // Karipuli

export const categoriesData = [
  {
    id: 'tamarind',
    name: 'Tamarind',
    image: tamarindImg,
  },
  {
    id: 'cold-pressed-oil',
    name: 'Cold-pressed Oil',
    image: oilImg,
  },
  {
    id: 'pure-ghee',
    name: 'Pure Ghee',
    image: gheeImg,
  },
  {
    id: 'natural-honey-comb',
    name: 'Natural Honey / Comb',
    image: honeyImg,
  }
];

export const productsData = {
  'tamarind': [
    {
      id: 'raw-tamarind',
      categoryId: 'tamarind',
      name: 'Raw Tamarind',
      tagline: 'Whole Naturally Ripened & Sun-Cured Pods',
      image: slide3Img,
      gallery: [slide3Img, slide1Img],
      description:
        'Naturally ripened, sun-cured whole tamarind pods sourced straight from organic groves with rich, earthy zest. The outer shell is brittle and easy to deshell, revealing luscious aromatic pulp with dense natural nutrients.',
      features: [
        '100% Naturally Sun-Dried Pods',
        'Direct Farm Harvest with Zero Chemical Curing',
        'Traditional Taste and Natural Shelf Longevity',
        'Rich in Dietary Fiber, Tartaric Acid & Antioxidants'
      ],
      packagingSizes: ['1 kg Retail Pack', '10 kg Carton', '25 kg / 50 kg Jute Bag (Bulk)'],
      storageInstruction: 'Store in a cool, dry place away from direct moisture.',
      status: 'available'
    },
    {
      id: 'seedless-tamarind',
      categoryId: 'tamarind',
      name: 'Seedless Tamarind',
      tagline: 'Carefully Deseeded, High-Yield Natural Pulp',
      image: slide1Img,
      gallery: [slide1Img, slide2Img],
      description:
        'Carefully deseeded and destringed whole pulp with uniform moisture, high pulping yield, and natural tang. Thoroughly sorted to ensure zero stone particles and foreign matter, making it ready for instant kitchen and commercial use.',
      features: [
        'Clean & Stone-Free Seedless Pulp',
        'Optimal Moisture Retained for Fast Dissolving',
        'Export Grade Sorting & Hygiene Standards',
        'Zero Added Sugar, Starch, or Preservatives'
      ],
      packagingSizes: ['500g Pouch', '1kg Vacuum Brick', '10kg / 20kg Master Carton'],
      storageInstruction: 'Keep sealed in airtight container or refrigerate for maximum aroma retention.',
      status: 'available'
    },
    {
      id: 'round-seedless-tamarind',
      categoryId: 'tamarind',
      name: 'Round Seedless Tamarind',
      tagline: 'Artisanal Ring-Packed Traditional Coil',
      image: slide2Img,
      gallery: [slide2Img, slide1Img],
      description:
        'Spiraled into traditional concentric rings to seal in freshness, natural moisture, and age-old culinary aroma. This authentic South Indian ring-packing technique protects delicate pulp strands from breaking down during transit.',
      features: [
        'Traditional Concentric Ring Layering',
        'Aroma-Locked & Moisture Preserved Naturally',
        'Ideal for Heritage Cooking & Gifting',
        'Hygienically Packed under Stringent Quality Controls'
      ],
      packagingSizes: ['250g Box', '500g Sealed Ring Pack', '1kg Round Tin / Pack'],
      storageInstruction: 'Store in an airtight jar in a cool pantry.',
      status: 'available'
    },
    {
      id: 'seedless-bar-tamarind',
      categoryId: 'tamarind',
      name: 'Seedless Bar Tamarind',
      tagline: 'Hydraulically Compacted Rectangular Slabs',
      image: slide1Img,
      gallery: [slide1Img, slide3Img],
      description:
        'Hydraulically pressed into dense, easy-to-store rectangular bars. Specially engineered for easy slicing, retail shelf efficiency, and long international transit durability without loss of flavor.',
      features: [
        'Compacted Vacuum-Sealed Slab Format',
        'Space-Saving & Tamper-Evident Packaging',
        'High Concentration of Natural Sourness',
        'Preferred by Commercial Kitchens & Food Processors'
      ],
      packagingSizes: ['500g Bar', '1kg Slab', '10kg Commercial Slab'],
      storageInstruction: 'Store at room temperature; keep dry.',
      status: 'available'
    },
    {
      id: 'seedless-flower-tamarind',
      categoryId: 'tamarind',
      name: 'Seedless Flower Tamarind',
      tagline: 'Hand-Bloomed Blossom Presentation',
      image: slide2Img,
      gallery: [slide2Img, slide3Img],
      description:
        'Hand-picked flower-grade tamarind carefully layered into delicate blossom patterns, showcasing premium clarity, golden-brown hue, and pristine clean flesh. Revered as the pinnacle of table presentation.',
      features: [
        'Finest Flower-Grade Selection',
        'Exquisite Hand-Spread Aesthetic',
        'Delicate Pulp with Balanced Sweet-Tart Balance',
        'Premium Gift Packaging Available'
      ],
      packagingSizes: ['500g Gift Box', '1kg Premium Pack'],
      storageInstruction: 'Store in a cool dry place.',
      status: 'available'
    },
    {
      id: 'tamarind-paste',
      categoryId: 'tamarind',
      name: 'Tamarind Paste',
      tagline: 'Smooth, Ready-to-Blend Pure Concentrate',
      image: slide4Img,
      gallery: [slide4Img, slide1Img],
      description:
        'Silky, thick, ready-to-use pure tamarind concentrate with zero added starch or artificial souring agents. Saves time in professional restaurants and home kitchens with instant spoonable consistency.',
      features: [
        'Zero Added Starch or Gums',
        'Smooth Strained Texture without Seeds or Fiber',
        'Instant Spoonable Acidic Tang for Sambar, Rasam & Curries',
        'Available in Retail Jars and Food Service Tubs'
      ],
      packagingSizes: ['200g Jar', '400g Glass Bottle', '5kg / 20kg Foodservice Bucket'],
      storageInstruction: 'Refrigerate after opening.',
      status: 'available'
    },
    {
      id: 'karipuli',
      categoryId: 'tamarind',
      name: 'Karipuli',
      tagline: 'Smoked Sun-Cured Malabar Tamarind (Kudampuli)',
      image: karipuliImg,
      gallery: [karipuliImg, slide3Img],
      description:
        'Smoked, sun-dried authentic black Malabar tamarind (Garcinia cambogia/Kudampuli) revered for traditional coastal fish curries, rasams, and natural digestive support. Imparts a signature smoky tartness.',
      features: [
        'Traditional Smoke-Cured Process',
        'Authentic Malabar / Kudampuli Flavor',
        'Rich in Hydroxycitric Acid (HCA)',
        'Essential for Coastal Fish & Vegetarian Curries'
      ],
      packagingSizes: ['250g Pouch', '500g Kraft Pouch', '5kg Commercial Bag'],
      storageInstruction: 'Keep tightly sealed in a dry container.',
      status: 'available'
    }
  ],
  'cold-pressed-oil': [
    {
      id: 'groundnut-oil',
      categoryId: 'cold-pressed-oil',
      name: 'Cold-Pressed Groundnut Oil',
      tagline: 'Traditional Wood-Pressed Peanut Oil',
      image: oilImg,
      gallery: [oilImg],
      description: 'Extracted from hand-selected groundnuts using traditional wood press (mara chekku), preserving natural aroma and plant phytosterols.',
      features: ['Wood Pressed', 'Unrefined & Pure', 'Zero Hexane Processing'],
      packagingSizes: ['1 Liter Bottle', '5 Liter Tin'],
      status: 'coming-soon'
    },
    {
      id: 'sesame-oil',
      categoryId: 'cold-pressed-oil',
      name: 'Cold-Pressed Sesame Oil',
      tagline: 'Traditional Gingelly Oil',
      image: oilImg,
      gallery: [oilImg],
      description: 'Cold-pressed black sesame oil prepared with natural palm jaggery in traditional stone mortars.',
      features: ['Cold Extracted', 'Rich Antioxidants', 'Authentic Flavor'],
      packagingSizes: ['500ml Glass Bottle', '1 Liter Bottle'],
      status: 'coming-soon'
    }
  ],
  'pure-ghee': [
    {
      id: 'bilona-cow-ghee',
      categoryId: 'pure-ghee',
      name: 'Traditional Bilona Cow Ghee',
      tagline: 'Curd-Churned Golden Granular Ghee',
      image: gheeImg,
      gallery: [gheeImg],
      description: 'Slow-simmered artisanal cow ghee prepared following the age-old Vedic bilona method.',
      features: ['Bilona Churned', 'Granular Texture', 'Unmatched Aroma'],
      packagingSizes: ['500ml Jar', '1 Liter Jar'],
      status: 'coming-soon'
    }
  ],
  'natural-honey-comb': [
    {
      id: 'wildflower-honey',
      categoryId: 'natural-honey-comb',
      name: 'Raw Forest Wildflower Honey',
      tagline: 'Unpasteurized Pure Hive Honey',
      image: honeyImg,
      gallery: [honeyImg],
      description: '100% natural, raw wildflower honey harvested from pristine forest reserves with live enzymes intact.',
      features: ['Unfiltered & Raw', 'Natural Floral Aroma', 'Zero Added Sugars'],
      packagingSizes: ['250g Jar', '500g Jar', 'Fresh Cut Honeycomb Box'],
      status: 'coming-soon'
    }
  ]
};
