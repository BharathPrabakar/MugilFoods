import tamarindImg from '../assets/category_tamarind.webp';
import oilImg from '../assets/category_oil.webp';
import gheeImg from '../assets/category_ghee.webp';
import honeyImg from '../assets/category_honey.webp';

import slide1Img from '../assets/slide1.webp'; // Slab Tamarind
import slide2Img from '../assets/slide2.webp'; // Round Swirl Tamarind
import slide3Img from '../assets/slide3.webp'; // Raw Tamarind Pods
import slide4Img from '../assets/slide4.webp'; // Tamarind Paste
import karipuliImg from '../assets/prod_karipuli.webp'; // Karipuli

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
      name: 'Seedless Tamarind',
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
        { label: 'Product Name', value: 'Seedless Tamarind' },
        { label: 'Product Type', value: 'Seedless Tamarind' },
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
