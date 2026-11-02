# Google Search Console (GSC) Setup & Optimization Guide for Mugil Foods

This guide provides step-by-step instructions for the website owner to set up, verify, submit, and monitor Mugil Foods in Google Search Console.

---

## 1. Domain & Deployment Configuration

- **Production URL**: `https://mugilfoods.com/`
- **Protocol**: HTTPS (enforced by Cloudflare Pages)
- **Robots.txt Location**: `https://mugilfoods.com/robots.txt`
- **XML Sitemap Location**: `https://mugilfoods.com/sitemap.xml`
- **Missing Page Handling**: Custom branded `404.html` served for all nonexistent routes.

---

## 2. Step-by-Step Google Search Console Verification

### Method A: URL Prefix Verification (Recommended for Cloudflare Pages)
1. Navigate to [Google Search Console](https://search.google.com/search-console/).
2. Click **Add Property** in the property dropdown.
3. Select **URL prefix** and enter:
   ```
   https://mugilfoods.com/
   ```
   *(Note: Ensure you include the exact protocol `https://` and trailing slash `/MugilFoods/`)*.
4. Choose one of the following verification methods:
   - **HTML Tag**: Copy the `<meta name="google-site-verification" content="..." />` tag provided by Google and paste it into `<head>` in `index.html`.
   - **HTML File**: Download the verification file (e.g. `google1234567890abcdef.html`) and place it in the `public/` directory, then run `npm run build` and push to GitHub.
5. Click **Verify**.

### Method B: Domain Property Verification (If using a Custom Domain)
1. Select **Domain** property type and enter `mugilfoods.com`.
2. Copy the TXT DNS record provided by Google.
3. Add the TXT record in your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.).
4. Click **Verify** once DNS propagates.

---

## 3. Submitting the XML Sitemap

1. In Search Console, select your Mugil Foods property.
2. In the left navigation menu, click **Sitemaps** (under the "Indexing" section).
3. In the "Add a new sitemap" input field, enter:
   ```
   sitemap.xml
   ```
4. Click **Submit**.
5. Google will fetch the sitemap. The status will initially read "Submitted" or "Processing" and then change to "Success".
6. Verify that **21 discovered URLs** are recognized.

---

## 4. Inspecting Important URLs & Requesting Indexing

For the most critical commercial landing pages, use the **URL Inspection Tool** to verify crawlability:

1. Copy one of the key URLs:
   - Homepage: `https://mugilfoods.com/`
   - Wholesale Supply: `https://mugilfoods.com/wholesale-tamarind-supply/`
   - Seedless Flower Tamarind: `https://mugilfoods.com/products/seedless-tamarind/`
   - Round Seedless Tamarind: `https://mugilfoods.com/products/round-seedless-tamarind/`
   - Karipuli Cake: `https://mugilfoods.com/products/karipuli-tamarind-cake/`
   - Contact & Enquiries: `https://mugilfoods.com/contact/`
2. Paste the URL into the search bar at the top of Google Search Console.
3. Click **Test Live URL** to confirm that Googlebot can fetch the page without errors.
4. Review the "Page fetch" status: It must state **Successful (HTTP 200)**.
5. Review the "Detected items": Verify that Google detects the structured data:
   - `Organization`
   - `LocalBusiness`
   - `Product`
   - `BreadcrumbList`
6. Click **Request Indexing**.

---

## 5. Ongoing Monitoring & Health Checks

- **Coverage / Page Indexing**: Check the "Pages" tab periodically to ensure no pages are mistakenly flagged as "Crawled - currently not indexed" or "Duplicate without user-selected canonical".
- **Mobile Usability**: Check the "Mobile Usability" tab to verify there are no viewport or touch-target warnings.
- **Search Performance**: Monitor search queries, impressions, and clicks for keywords like "wholesale tamarind supplier", "seedless tamarind slab", and "tamarind supplier in Dharmapuri".

