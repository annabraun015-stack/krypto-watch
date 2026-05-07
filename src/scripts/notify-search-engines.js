import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HOST = 'kryptowatch.de';
const INDEXNOW_KEY = '11b4ba255db042578af3b3554e29db19';
const INDEXNOW_KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap-index.xml`;

const distDir = path.resolve(__dirname, '../../dist');

async function notifySearchEngines() {
  console.log('🚀 Notifying search engines for fast indexing...');

  // 1. Submit to IndexNow (Bing, Yandex, Seznam, Naver)
  try {
    const sitemapPath = path.join(distDir, 'sitemap-0.xml');
    const newsSitemapPath = path.join(distDir, 'news-sitemap.xml');
    
    let allUrls = [];

    if (fs.existsSync(sitemapPath)) {
      const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
      const urlMatches = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)];
      allUrls.push(...urlMatches.map(m => m[1]));
    } else {
      console.warn(`⚠️ sitemap-0.xml not found at ${sitemapPath}.`);
    }

    if (fs.existsSync(newsSitemapPath)) {
      const newsSitemapContent = fs.readFileSync(newsSitemapPath, 'utf-8');
      const newsUrlMatches = [...newsSitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)];
      allUrls.push(...newsUrlMatches.map(m => m[1]));
    } else {
      console.warn(`⚠️ news-sitemap.xml not found at ${newsSitemapPath}.`);
    }

    // Remove duplicates
    const urls = [...new Set(allUrls)];

      if (urls.length > 0) {
        console.log(`📡 Sending ${urls.length} URLs to IndexNow...`);
        const response = await fetch('https://api.indexnow.org/indexnow', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify({
            host: HOST,
            key: INDEXNOW_KEY,
            keyLocation: INDEXNOW_KEY_LOCATION,
            urlList: urls,
          }),
        });

        if (response.ok || response.status === 202) {
          console.log('✅ IndexNow submission successful!');
        } else {
          console.error(`❌ IndexNow submission failed: ${response.status} ${response.statusText}`);
          const text = await response.text();
          console.error(text);
        }
      } else {
        console.warn('⚠️ No URLs found in sitemaps to submit to IndexNow');
      }
  } catch (error) {
    console.error('❌ Error notifying IndexNow:', error);
  }

    console.log('ℹ️ Note: Google and Bing sitemap ping endpoints are officially deprecated (returning 404/410). Please ensure your sitemap is submitted in Google Search Console and Bing Webmaster Tools once. IndexNow will handle subsequent updates.');
}

notifySearchEngines();
