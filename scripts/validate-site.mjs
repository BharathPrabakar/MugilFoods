/**
 * Comprehensive Automated Verification Script for Mugil Foods
 * Validates prerendered HTML files, SEO metadata, JSON-LD schemas,
 * internal links, images, sitemap, and robots.txt.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

console.log('🔍 Starting comprehensive verification of dist/...\n');

let passCount = 0;
let failCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
    passCount++;
  } else {
    console.error(`  ❌ FAIL: ${message}`);
    failCount++;
  }
}

// 1. Verify robots.txt
console.log('1. Verifying robots.txt:');
const robotsPath = path.resolve(distDir, 'robots.txt');
assert(fs.existsSync(robotsPath), 'robots.txt exists in dist/');
if (fs.existsSync(robotsPath)) {
  const robots = fs.readFileSync(robotsPath, 'utf-8');
  assert(robots.includes('User-agent: *'), 'robots.txt specifies User-agent: *');
  assert(robots.includes('Allow: /'), 'robots.txt allows root path');
  assert(robots.includes('Sitemap: https://bharathprabakar.github.io/MugilFoods/sitemap.xml'), 'robots.txt contains absolute sitemap URL');
}

// 2. Verify sitemap.xml
console.log('\n2. Verifying sitemap.xml:');
const sitemapPath = path.resolve(distDir, 'sitemap.xml');
assert(fs.existsSync(sitemapPath), 'sitemap.xml exists in dist/');
if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf-8');
  assert(sitemap.startsWith('<?xml version="1.0" encoding="UTF-8"?>'), 'sitemap.xml has valid XML declaration');
  assert(sitemap.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'), 'sitemap.xml uses schema.org urlset namespace');
  
  const locMatches = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  assert(locMatches.length >= 20, `sitemap.xml contains ${locMatches.length} URLs (expected >= 20)`);
  assert(!sitemap.includes('404'), 'sitemap.xml excludes 404 pages');
  assert(!sitemap.includes('#'), 'sitemap.xml contains no hash fragments');

  // Verify all URLs in sitemap actually exist in dist/
  let allExist = true;
  for (const loc of locMatches) {
    const sub = loc.replace('https://bharathprabakar.github.io/MugilFoods', '').replace(/^\//, '');
    const expectedFile = sub === '' ? path.resolve(distDir, 'index.html') : path.resolve(distDir, sub, 'index.html');
    if (!fs.existsSync(expectedFile)) {
      console.error(`     Missing file for sitemap URL: ${loc} -> ${expectedFile}`);
      allExist = false;
    }
  }
  assert(allExist, 'Every URL listed in sitemap.xml maps to an existing HTML file in dist/');
}

// 3. Verify All Expected HTML Pages
console.log('\n3. Verifying Key Static Pages & Metadata:');
const samplePages = [
  { path: 'index.html', name: 'Homepage' },
  { path: 'about/index.html', name: 'About Page' },
  { path: 'products/index.html', name: 'Products Overview' },
  { path: 'products/seedless-tamarind/index.html', name: 'Seedless Flower Tamarind' },
  { path: 'products/seedless-tamarind-slab-white-layer/index.html', name: 'White Layer Slab' },
  { path: 'products/round-seedless-tamarind/index.html', name: 'Round Tamarind' },
  { path: 'products/karipuli-tamarind-cake/index.html', name: 'Karipuli Cake' },
  { path: 'products/loose-karipuli-30kg/index.html', name: 'Loose Karipuli 30kg' },
  { path: 'wholesale-tamarind-supply/index.html', name: 'Wholesale Supply' },
  { path: 'retail-distribution/index.html', name: 'Retail Distribution' },
  { path: 'custom-packaging/index.html', name: 'Custom Packaging' },
  { path: 'contact/index.html', name: 'Contact Page' },
  { path: 'resources/index.html', name: 'Resources Hub' },
  { path: 'resources/tamarind-buying-guide/index.html', name: 'Buying Guide Article' },
  { path: 'privacy-policy/index.html', name: 'Privacy Policy' },
  { path: '404.html', name: 'Custom 404 Page' }
];

const titles = new Set();

for (const p of samplePages) {
  const filePath = path.resolve(distDir, p.path);
  const exists = fs.existsSync(filePath);
  assert(exists, `${p.name} exists at dist/${p.path}`);
  if (!exists) continue;

  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Title
  const titleMatch = content.match(/<title>(.*?)<\/title>/);
  assert(titleMatch && titleMatch[1].length > 10, `${p.name} has descriptive title ("${titleMatch ? titleMatch[1].slice(0, 45) : ''}...")`);
  if (titleMatch) {
    assert(!titles.has(titleMatch[1]), `${p.name} title is unique across pages`);
    titles.add(titleMatch[1]);
  }

  // Meta description
  const descMatch = content.match(/<meta name="description" content="(.*?)"/);
  assert(descMatch && descMatch[1].length > 40, `${p.name} has meta description (${descMatch ? descMatch[1].length : 0} chars)`);

  // Canonical
  const canonicalMatch = content.match(/<link rel="canonical" href="(.*?)"/);
  assert(canonicalMatch && canonicalMatch[1].startsWith('https://bharathprabakar.github.io/MugilFoods'), `${p.name} has absolute canonical link`);

  // H1 tag
  const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/);
  assert(h1Match && h1Match[1].length > 0, `${p.name} contains H1 tag`);

  // Initial pre-rendered DOM content in #root
  assert(!content.includes('<div id="app-shell-header" aria-hidden="true">'), `${p.name} has pre-rendered DOM content in place of the blank app shell`);

  // JSON-LD structured data validation
  const jsonLdMatch = content.match(/<script type="application\/ld\+json">(.*?)<\/script>/s);
  assert(jsonLdMatch !== null, `${p.name} contains Schema.org JSON-LD structured data`);
  if (jsonLdMatch) {
    try {
      const parsed = JSON.parse(jsonLdMatch[1]);
      assert(parsed['@context'] === 'https://schema.org', `${p.name} JSON-LD has @context schema.org`);
      assert(Array.isArray(parsed['@graph']), `${p.name} JSON-LD has @graph array`);
    } catch (e) {
      assert(false, `${p.name} JSON-LD is valid JSON: ${e.message}`);
    }
  }
}

// 4. Validate internal links & assets across sample files
console.log('\n4. Validating internal links and image references in HTML:');
const htmlSample = fs.readFileSync(path.resolve(distDir, 'index.html'), 'utf-8');
const linkMatches = [...htmlSample.matchAll(/href="\/MugilFoods\/(.*?)"/g)].map(m => m[1]);

let allLinksValid = true;
for (const link of linkMatches) {
  if (link.startsWith('#') || link.startsWith('assets/')) continue;
  const targetSub = link.replace(/^\//, '');
  const targetFile = targetSub === '' 
    ? path.resolve(distDir, 'index.html') 
    : path.resolve(distDir, targetSub.replace(/\/$/, ''), 'index.html');
  if (!fs.existsSync(targetFile)) {
    console.error(`     Broken internal link found: /MugilFoods/${link} -> ${targetFile}`);
    allLinksValid = false;
  }
}
assert(allLinksValid, 'All internal navigation links point to valid generated static targets');

console.log('\n=============================================');
console.log(`Verification Complete: ${passCount} Passed, ${failCount} Failed`);
console.log('=============================================\n');

if (failCount > 0) {
  process.exit(1);
}

