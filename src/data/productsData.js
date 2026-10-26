import tamarindImg from '../assets/category_tamarind.webp';
import oilImg from '../assets/category_oil.webp';
import gheeImg from '../assets/category_ghee.webp';
import honeyImg from '../assets/category_honey.webp';

import slide1Img from '../assets/slide1.webp'; // Slab Tamarind
import slide2Img from '../assets/slide2.webp'; // Round Swirl Tamarind
import slide3Img from '../assets/slide3.webp'; // Raw Tamarind Pods
import slide4Img from '../assets/slide4.webp'; // Tamarind Paste
import karipuliImg from '../assets/prod_karipuli.webp'; // Karipuli

// Karipuli Tamarind Cake Photos
import karipuliCakeTop from '../assets/karipuli_cake_top.jpg';
import karipuliCakeSide from '../assets/karipuli_cake_side.jpg';
import karipuliCakeBulk from '../assets/karipuli_cake_bulk.jpg';

// Loose Karipuli 30kg Box Photos
import looseKaripuliOpen from '../assets/loose_karipuli_box_open.jpg';
import looseKaripuliPacked from '../assets/loose_karipuli_box_packed.jpg';
import looseKaripuliCloseup from '../assets/loose_karipuli_closeup.jpg';

// Pure Tamarind Pulp Paste Photos
import tPastePack from '../assets/tamarind_paste_pack.jpg';
import tPasteJar from '../assets/tamarind_paste_jar.jpg';
import tPasteBatch from '../assets/tamarind_paste_batch.jpg';
import tPasteCloseup from '../assets/tamarind_paste_closeup.jpg';
import tPasteLabel from '../assets/tamarind_paste_label.jpg';

// Client Raw Tamarind High-Res Photos
import rawTamPods from '../assets/raw_tamarind_pods.jpg';
import rawTamClean from '../assets/raw_tamarind_clean.jpg';
import rawTamBag from '../assets/raw_tamarind_bag.jpg';
import rawTamBulk from '../assets/raw_tamarind_bulk.jpg';

// Client Seedless Tamarind High-Res Photos
import seedlessBlock from '../assets/seedless_tamarind_block.jpg';
import seedlessClose from '../assets/seedless_tamarind_close.jpg';
import seedlessBags from '../assets/seedless_tamarind_bags.jpg';
import seedlessBulk from '../assets/seedless_tamarind_bulk.jpg';

// Client Seedless Round Tamarind High-Res Photos
import roundTamSwirl from '../assets/round_tamarind_swirl.jpg';
import roundTamDisc from '../assets/round_tamarind_disc.jpg';
import roundTamStack from '../assets/round_tamarind_stack.jpg';
import roundTamBaskets from '../assets/round_tamarind_woven_baskets.jpg';

// Seedless Tamarind Slab with White Layer Photos
import slabWhitePack from '../assets/tamarind_slab_white_pack.jpg';
import slabWhiteLayer from '../assets/tamarind_slab_white_layer.jpg';
import slabWhiteBulk from '../assets/tamarind_slab_white_bulk.jpg';
import slabWhiteDetail from '../assets/tamarind_slab_white_detail.jpg';

// Seedless Tamarind Slab without White Layer Photos
import slabCleanPack from '../assets/tamarind_slab_clean_pack.jpg';
import slabCleanStack from '../assets/tamarind_slab_clean_stack.jpg';
import slabCleanBlock from '../assets/tamarind_slab_clean_block.jpg';
import slabCleanCloseup from '../assets/tamarind_slab_clean_closeup.jpg';

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
      tagline: 'Whole Naturally Ripened Pods & Sun-Cured Harvest',
      image: rawTamPods,
      gallery: [rawTamPods, rawTamClean, rawTamBag, rawTamBulk],
      description:
        'Our Raw Tamarind is carefully sourced directly from fertile agricultural belts to guarantee authentic tangy taste, deep natural flavor, and consistent batch quality. Grown and harvested under optimal seasonal conditions, each pod is hygienically handled, sorted, and packed to preserve its natural freshness and shelf-life. Ideal for industrial food processing, culinary preparations, wholesale distribution, bulk manufacturing, and global export markets.',
      features: [
        '100% Natural Harvest with Characteristic Sour & Tangy Taste',
        'Whole Intact Pods & Clean Sorted Flesh',
        'Hygienically Handled & Stored Under Strict Quality Control',
        'Direct Farm Sourcing with Zero Artificial Ripening or Chemicals',
        'High Natural Pulp Yield, Rich in Tartaric Acid & Antioxidants',
        'Suited for Domestic Wholesalers, Food Processors & Global Exporters'
      ],
      specifications: [
        { label: 'Product Name', value: 'Raw Tamarind' },
        { label: 'Product Type', value: 'Natural Tamarind' },
        { label: 'Appearance', value: 'Natural brown to dark brown' },
        { label: 'Taste', value: 'Characteristically sour and tangy' },
        { label: 'Form', value: 'Whole tamarind pods' },
        { label: 'Usage', value: 'Food preparation, cooking, and food processing' },
        { label: 'Storage', value: 'Store in a cool, dry place away from direct sunlight and moisture' },
        { label: 'Packaging', value: 'Available in bulk and customized packaging options (subject to availability)' },
        { label: 'Supply Scope', value: 'Domestic and export markets' },
        { label: 'Quality Standard', value: 'Selected and handled with a focus on quality and freshness' }
      ],
      packagingSizes: [
        '1 kg / 5 kg Retail Packs',
        '10 kg / 20 kg Master Cartons',
        '25 kg / 50 kg Moisture-Proof Bulk Poly/Jute Bags',
        'Customized Export Packaging on Request'
      ],
      storageInstruction: 'Store in a cool, dry place away from direct sunlight and moisture to maintain natural color and tanginess.',
      status: 'available'
    },
    {
      id: 'seedless-tamarind',
      categoryId: 'tamarind',
      name: 'Seedless Flower Tamarind',
      tagline: 'Carefully Deseeded, Pure Tangy Pulp & Seedless Tamarind Cake',
      image: seedlessBlock,
      gallery: [seedlessBlock, seedlessClose, seedlessBags, seedlessBulk],
      description:
        'Our Seedless Tamarind is carefully processed to deliver natural tanginess, rich flavour, and consistent quality. Hygienically handled and prepared from premium sun-cured harvest with seeds and fibres thoroughly removed, it is perfectly suited for industrial food processing, culinary applications, gourmet sauces & chutneys, bulk wholesalers, and global export markets.',
      features: [
        'Pure Deseeded Pulp with Seeds & String Fibres Thoroughly Removed',
        'Naturally Sour and Tangy with Rich Authentic Taste',
        'Uniform Moisture Retained for Fast Dissolving & High Pulp Yield',
        'Hygienically Handled Under Strict Quality & Food Safety Controls',
        'Zero Added Sugar, Preservatives, Starch, or Artificial Flavours',
        'Ready for Commercial Food Processing, Sauces, Curries & Exports'
      ],
      specifications: [
        { label: 'Product Name', value: 'Seedless Flower Tamarind' },
        { label: 'Product Type', value: 'Seedless Flower Tamarind' },
        { label: 'Colour', value: 'Natural Brown' },
        { label: 'Taste', value: 'Naturally Sour and Tangy' },
        { label: 'Form', value: 'Seedless Tamarind Cake / Compressed Block' },
        { label: 'Processing', value: 'Seeds Removed & Fibres Cleaned' },
        { label: 'Usage', value: 'Food Processing, Cooking, Sauces & Chutneys' },
        { label: 'Packaging', value: 'As per Customer Requirement (Retail & Bulk Blocks)' },
        { label: 'Storage', value: 'Store in a Cool, Dry Place' },
        { label: 'Shelf Life', value: 'As per Product Packaging & Storage Conditions' },
        { label: 'Market Scope', value: 'Domestic & Export' }
      ],
      packagingSizes: [
        '500g / 1 kg Consumer Packs',
        '10 kg Compressed Slabs / Master Cartons',
        '30 kg Heavy-Duty Moisture-Proof Export Slab',
        'Customized Bulk Packaging as per Customer Requirement'
      ],
      storageInstruction: 'Store in a cool, dry place away from moisture and direct sunlight. Keep sealed in airtight packaging for maximum aroma and freshness.',
      status: 'available'
    },
    {
      id: 'round-seedless-tamarind',
      categoryId: 'tamarind',
      name: 'Round Seedless Tamarind',
      tagline: 'Uniform Handcrafted Concentric Discs & Artisanal Rounds',
      image: roundTamSwirl,
      gallery: [roundTamSwirl, roundTamDisc, roundTamStack, roundTamBaskets],
      description:
        'Quality tamarind is carefully selected, cleaned, and deseeded. The pulp is then shaped into uniform round portions using hygienic handling methods. The finished product is checked for quality, packed in suitable food-grade packaging, and stored under appropriate conditions to maintain its natural flavour, colour, and freshness. Perfect for traditional culinary use, retail gifting, wholesalers, and export shipments.',
      features: [
        'Selected Premium Harvest, Thoroughly Cleaned & Deseeded',
        'Artisanal Uniform Round Portions Formed with Hygienic Methods',
        'Moisture-Sealed Concentric Discs Retaining Natural Tang & Aroma',
        'Traditional Natural Packaging & Breathable Woven Basket Shipments',
        '100% Pure Tamarind Pulp with Zero Added Sugar or Preservatives',
        'Checked for Quality and Suitable for Domestic Wholesale & Export'
      ],
      specifications: [
        { label: 'Product Name', value: 'Seedless Round Tamarind' },
        { label: 'Product Type', value: 'Seedless Tamarind' },
        { label: 'Form / Shape', value: 'Uniform Round Portions / Concentric Discs' },
        { label: 'Processing', value: 'Carefully Selected, Cleaned & Deseeded' },
        { label: 'Taste', value: 'Naturally Sour and Tangy' },
        { label: 'Colour', value: 'Natural Brown' },
        { label: 'Packaging', value: 'Food-grade packaging, sealed rings & traditional woven baskets' },
        { label: 'Storage', value: 'Store under cool, dry conditions to maintain flavour & freshness' },
        { label: 'Quality Standard', value: 'Hygienically handled and checked for uniform quality' },
        { label: 'Market Scope', value: 'Culinary, Retail, Wholesale & Export' }
      ],
      packagingSizes: [
        '250g / 500g Sealed Ring Packs',
        '1 kg Artisanal Round Tins / Boxes',
        '10 kg / 20 kg Master Cartons',
        'Traditional Handwoven Breathable Baskets (Bulk / Export)'
      ],
      storageInstruction: 'Store under cool, dry conditions away from moisture and direct sunlight to maintain natural flavour, colour, and freshness.',
      status: 'available'
    },


    {
      id: 'tamarind-paste',
      categoryId: 'tamarind',
      name: 'Tamarind Pulp Paste',
      tagline: 'Rich Tamarind Flavour. Smooth Pulp. Consistent Quality.',
      image: tPastePack,
      gallery: [tPastePack, tPasteJar, tPasteBatch, tPasteCloseup, tPasteLabel],
      description:
        'Mugil Tamarind Pure Tamarind Pulp Paste is made for customers who value authentic tamarind flavour and convenient food preparation. With its rich, tangy taste and pulp-like consistency, it is suitable for a wide range of culinary and food processing applications. Available in convenient 1 kg packets, our tamarind paste is ideal for restaurants, hotels, catering businesses, pickle manufacturers, food processing industries, and wholesale distributors.',
      features: [
        'Authentic Rich Tamarind Flavour with Natural Tangy Taste',
        'Smooth Pulp-Like Consistency — Ready for Direct Use',
        'Suitable for Culinary & Food Processing Applications',
        '1 kg Convenient Packet Format for Easy Portioning & Storage',
        'Ideal for Restaurants, Hotels, Catering & Pickle Manufacturers',
        'Manufactured by Mugil Tamarind, Dharmapuri, Tamil Nadu'
      ],
      specifications: [
        { label: 'Brand', value: 'Mugil Tamarind' },
        { label: 'Product Name', value: 'Tamarind Pulp Paste' },
        { label: 'Product Category', value: 'Tamarind' },
        { label: 'Product Form', value: 'Pulp paste' },
        { label: 'Net Weight', value: '1 kg per pack' },
        { label: 'Taste Profile', value: 'Rich, naturally tangy' },
        { label: 'Consistency', value: 'Smooth, pulp-like' },
        { label: 'Usage', value: 'Culinary preparations, food processing, sauces, chutneys, curries' },
        { label: 'Intended Customers', value: 'Restaurants, hotels, catering businesses, pickle manufacturers, food processing industries, wholesale distributors' },
        { label: 'Packaging', value: '1 kg packet' },
        { label: 'Storage', value: 'Store in a cool, dry place; refrigerate after opening' },
        { label: 'Origin', value: 'Dharmapuri, Tamil Nadu, India' }
      ],
      packagingSizes: [
        '1 kg Packet',
        'Bulk / Custom Quantity on Request'
      ],
      storageInstruction: 'Store in a cool, dry place. Refrigerate after opening to maintain freshness.',
      status: 'available'
    },

    {
      id: 'karipuli-tamarind-cake',
      categoryId: 'tamarind',
      name: 'Karipuli Tamarind Cake',
      tagline: 'Compressed 1 kg Cakes — Seed-Removed, Bulk-Ready',
      image: karipuliCakeTop,
      gallery: [karipuliCakeTop, karipuliCakeSide, karipuliCakeBulk],
      description:
        'Mugil Tamarind presents premium-quality Karipuli Tamarind Cake, processed with a focus on quality, cleanliness, and consistency. Each 1 kg cake is prepared for convenient handling, storage, and bulk distribution. With seeds removed and fibrous material carefully minimized, our tamarind cake is suitable for businesses that require convenient, ready-to-process tamarind for their food production needs. Manufactured and supplied by Mugil Tamarind, based in Dharmapuri district, Tamil Nadu, we aim to provide reliable tamarind products for commercial and wholesale customers.',
      features: [
        'Seeds Removed & Fiber Minimized — Ready-to-Process Convenience',
        'First Quality Grade — Processed with Focus on Cleanliness & Consistency',
        'Compressed 1 kg Cake Format — Easy Handling, Storage & Distribution',
        '40 Cakes per Box (40 kg Net) — Ideal for Bulk & Wholesale Orders',
        'Origin: Dharmapuri District, Tamil Nadu, India',
        'Suited for Wholesalers, Distributors & Food Processing Industries'
      ],
      specifications: [
        { label: 'Brand', value: 'Mugil Tamarind' },
        { label: 'Product Name', value: 'Karipuli Tamarind Cake' },
        { label: 'Product Category', value: 'Tamarind Products' },
        { label: 'Individual Cake Weight', value: '1 kg' },
        { label: 'Total Box Weight', value: '40 kg net product weight, if confirmed' },
        { label: 'Pieces per Box', value: '40 cakes' },
        { label: 'Seed Content', value: 'Seeds removed' },
        { label: 'Fiber Content', value: 'Low fiber / fiber minimized' },
        { label: 'Quality Grade', value: 'First Quality' },
        { label: 'Product Form', value: 'Compressed tamarind cake' },
        { label: 'Origin', value: 'Dharmapuri, Tamil Nadu, India' },
        { label: 'Packaging Type', value: 'Bulk carton box' },
        { label: 'Target Customers', value: 'Wholesalers, distributors, food processing industries' },
        { label: 'Storage', value: 'Store in a cool, dry, hygienic place' },
        { label: 'Shelf Life', value: 'As specified on the approved product label' }
      ],
      packagingSizes: [
        '1 kg Individual Cake',
        '40 kg Bulk Carton Box (40 Cakes per Box)',
        'Custom Packaging on Request'
      ],
      storageInstruction: 'Store in a cool, dry, hygienic place away from moisture and direct sunlight.',
      status: 'available'
    },
    {
      id: 'loose-karipuli-30kg',
      categoryId: 'tamarind',
      name: 'Loose Karipuli 30kg Box',
      tagline: 'Bulk 30 kg Carton — Fully Seedless, Fiberless Kari Puli',
      image: looseKaripuliPacked,
      gallery: [looseKaripuliPacked, looseKaripuliOpen, looseKaripuliCloseup],
      description:
        'Mugil Tamarind Kari Puli is a premium-quality tamarind product processed for convenient commercial use. With seeds and fibrous materials removed, it offers easier handling, portioning, and preparation for food-processing applications. Available in bulk 30 kg carton packaging, Kari Puli is suitable for wholesale distribution, food manufacturers, commercial kitchens, and other businesses requiring quality tamarind in larger quantities.',
      features: [
        'Fully Seedless & Fiberless — As Specified, Ready for Commercial Use',
        'First Quality Grade — Consistent Quality with Natural Tangy Taste',
        'Loose Bulk Format for Easy Portioning & Food-Processing Applications',
        '30 kg Per Carton Box — Suited for Wholesale & Bulk Distribution',
        'Intended for Wholesalers & Food-Processing Businesses',
        'Manufactured & Supplied by Mugil Tamarind, Dharmapuri, Tamil Nadu'
      ],
      specifications: [
        { label: 'Brand', value: 'Mugil Tamarind' },
        { label: 'Product Name', value: 'Kari Puli' },
        { label: 'Product Category', value: 'Tamarind' },
        { label: 'Quality Grade', value: 'First quality' },
        { label: 'Seed Content', value: 'Fully seedless, as specified' },
        { label: 'Fiber Content', value: 'Fiberless, as specified' },
        { label: 'Product Form', value: 'Tamarind cake/block, subject to actual product format' },
        { label: 'Packing Type', value: 'Carton box' },
        { label: 'Net Weight', value: '30 kg per box' },
        { label: 'Taste Profile', value: 'Naturally tangy' },
        { label: 'Intended Customers', value: 'Wholesalers and food-processing businesses' },
        { label: 'Storage', value: 'Store in a cool, dry, hygienic place, following validated product storage requirements' },
        { label: 'Availability', value: 'Subject to order quantity and stock' },
        { label: 'Country of Origin', value: 'India, if applicable to the supplied batch' },
        { label: 'Shelf Life', value: 'To be confirmed from validated product testing and packaging details' }
      ],
      packagingSizes: [
        '30 kg Bulk Carton Box',
        'Custom Quantity on Request'
      ],
      storageInstruction: 'Store in a cool, dry, hygienic place following validated product storage requirements.',
      status: 'available'
    },
    {
      id: 'seedless-tamarind-slab-white-layer',
      categoryId: 'tamarind',
      name: 'Seedless Tamarind Slab with White Layer',
      tagline: 'Pure Tamarind | Seedless | Convenient to Use',
      image: slabWhitePack,
      gallery: [slabWhitePack, slabWhiteLayer, slabWhiteBulk, slabWhiteDetail],
      description:
        'Our Seedless Tamarind Slab with White Layer is a traditional tamarind product made from carefully selected tamarind pulp, with the seeds removed for convenient use in everyday cooking. Formed into a compact slab, it is easy to store, handle, and portion according to your needs. The natural white layer on the surface may be associated with the tamarind\'s processing or storage conditions. Its appearance alone cannot confirm whether it is natural residue or mould, so the product should be checked for safety before use.',
      features: [
        'Seedless Tamarind: Convenient tamarind pulp without seeds.',
        'Compact Slab Form: Easy to handle, portion, and store.',
        'Traditional Ingredient: Suitable for a variety of traditional recipes.',
        'Versatile Use: Ideal for preparing curries, gravies, chutneys, rasam, sambar, and tamarind-based sauces.',
        'Kitchen Essential: A practical ingredient for home kitchens, restaurants, hotels, and food-service businesses.'
      ],
      specifications: [
        { label: 'Product Name', value: 'Seedless Tamarind Slab' },
        { label: 'Form', value: 'Compact slab' },
        { label: 'Seeds', value: 'Removed' },
        { label: 'Taste', value: 'Naturally sour and tangy' },
        { label: 'Usage', value: 'Cooking and food preparation' },
        { label: 'Storage', value: 'Cool, dry place' },
        { label: 'Culinary Uses', value: 'Sambar, rasam, kuzhambu, puliyodarai, tamarind extract' }
      ],
      packagingSizes: [
        'Compact Slab Packs',
        'Bulk Master Cartons',
        'Custom Packaging on Request'
      ],
      storageInstruction: 'Store in a clean, dry place away from direct sunlight and moisture. Keep the product in an airtight food-grade container after opening. Inspect the white surface layer before use; if there is fuzzy growth, an unusual smell, or any indication of mould, do not consume the product.',
      status: 'available'
    },
    {
      id: 'seedless-tamarind-slab-without-white-layer',
      categoryId: 'tamarind',
      name: 'Seedless Tamarind Slab without White Layer',
      tagline: 'Pure Tamarind | Seedless | Convenient to Use',
      image: slabCleanPack,
      gallery: [slabCleanPack, slabCleanStack, slabCleanBlock, slabCleanCloseup],
      description:
        'Our Seedless Tamarind Slab without White Layer is a traditional tamarind product made from carefully selected tamarind pulp, with the seeds removed for convenient use in everyday cooking. Formed into a compact slab, it is easy to store, handle, and portion according to your needs. Naturally dark, clean, and tender, it provides authentic tanginess and rich pulp consistency.',
      features: [
        'Seedless Tamarind: Convenient tamarind pulp without seeds.',
        'Compact Slab Form: Easy to handle, portion, and store.',
        'Traditional Ingredient: Suitable for a variety of traditional recipes.',
        'Versatile Use: Ideal for preparing curries, gravies, chutneys, rasam, sambar, and tamarind-based sauces.',
        'Kitchen Essential: A practical ingredient for home kitchens, restaurants, hotels, and food-service businesses.'
      ],
      specifications: [
        { label: 'Product Name', value: 'Seedless Tamarind Slab' },
        { label: 'Form', value: 'Compact slab' },
        { label: 'Seeds', value: 'Removed' },
        { label: 'Taste', value: 'Naturally sour and tangy' },
        { label: 'Usage', value: 'Cooking and food preparation' },
        { label: 'Storage', value: 'Cool, dry place' },
        { label: 'Culinary Uses', value: 'Sambar, rasam, kuzhambu, puliyodarai, tamarind extract' }
      ],
      packagingSizes: [
        'Compact Slab Packs',
        'Bulk Master Cartons',
        'Custom Packaging on Request'
      ],
      storageInstruction: 'Store in a clean, dry place away from direct sunlight and moisture. Keep the product in an airtight food-grade container after opening.',
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
