import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';

const baseUrl = 'https://www.lasalaplazahotel.com';

const assets = [
  // Logos
  { url: '/assets/themes/1/img/media/1763988970_lasala-plaza-logo.svg', path: 'public/images/logo-main.svg' },
  { url: '/assets/themes/1/img/media/1764766326_logo-lasala-plaza-horizontal.svg', path: 'public/images/logo-horizontal.svg' },
  { url: '/assets/themes/1/img/media/1765276210_logo-lasala-scroll.svg', path: 'public/images/logo-scroll.svg' },
  { url: '/assets/themes/1/img/media/1764170319_lasala-plaza-logo-2.svg', path: 'public/images/logo-footer.svg' },
  
  // Benefits images
  { url: '/assets/themes/1/img/media/1763997678_mejor-precio-garantizado.jpg', path: 'public/images/best-price.jpg' },
  { url: '/assets/themes/1/img/media/1763997597_cancelacion-48h.jpg', path: 'public/images/free-cancellation.jpg' },
  { url: '/assets/themes/1/img/media/1763997725_late-checkout.jpg', path: 'public/images/late-checkout.jpg' },
  
  // Description background
  { url: '/assets/themes/1/img/media/1763996969_2-fondo-descripcion.thigh.webp', path: 'public/images/description-bg.webp' },
  
  // Room images
  { url: '/assets/themes/1/img/media/1764919485_1-privileged-vista-mar.thigh.webp', path: 'public/images/room-privileged-vista-mar.webp' },
  { url: '/assets/themes/1/img/media/1765878329_premium-historical-lasala-plaza.thigh.webp', path: 'public/images/room-premium-historical.webp' },
  { url: '/assets/themes/1/img/media/1772180823_springlasala-2026.thigh.webp', path: 'public/images/room-springlasala.webp' },
  { url: '/assets/themes/1/img/media/1765878479_suite-la-concha-lasala-plaza-hotel.thigh.webp', path: 'public/images/room-suite-la-concha.webp' },
  { url: '/assets/themes/1/img/media/1765878025_9-corner-historical.thigh.webp', path: 'public/images/room-corner-historical.webp' },
  { url: '/assets/themes/1/img/media/1764921226_4-historical.thigh.webp', path: 'public/images/room-historical.webp' },
  { url: '/assets/themes/1/img/media/1773400952_petite-lasala-plaza-hotel-1.thigh.jpg', path: 'public/images/room-petite.jpg' },
  { url: '/assets/themes/1/img/media/1779287534_petite-sea-view-lasala-1.thigh.jpg', path: 'public/images/room-petite-sea-view.jpg' },
  { url: '/assets/themes/1/img/media/1764917079_8-vista-puerto.thigh.webp', path: 'public/images/room-vista-puerto.webp' },
  { url: '/assets/themes/1/img/media/1764917988_3-sea-view.thigh.webp', path: 'public/images/room-sea-view.webp' },
  
  // Hotel experience images
  { url: '/assets/themes/1/img/media/1764152257_3-distribuidor-grande.thigh.webp', path: 'public/images/hotel-distribuidor-grande.webp' },
  { url: '/assets/themes/1/img/media/1764153917_3-distribuidor-rooftop.jpg', path: 'public/images/hotel-rooftop.jpg' },
  { url: '/assets/themes/1/img/media/1772009353_lobby-bar-lasala-plaza.jpg', path: 'public/images/hotel-lobby-bar.jpg' },
  { url: '/assets/themes/1/img/media/1764154332_4-distribuidor-gimnasio.jpg', path: 'public/images/hotel-gimnasio.jpg' },
  
  // Instagram images
  { url: '/assets/themes/1/img/media/1764158970_a63a8198.tmedium.webp', path: 'public/images/instagram-1.webp' },
  { url: '/assets/themes/1/img/media/1764158971_a63a8179.tmedium.webp', path: 'public/images/instagram-2.webp' },
  { url: '/assets/themes/1/img/media/1764158972_767a9250.tmedium.webp', path: 'public/images/instagram-3.webp' },
  { url: '/assets/themes/1/img/media/1764158972_767a2139.tmedium.webp', path: 'public/images/instagram-4.webp' },
  { url: '/assets/themes/1/img/media/1764158973_767a0727.tmedium.webp', path: 'public/images/instagram-5.webp' },
  { url: '/assets/themes/1/img/media/1764158974_767a0409-1.tmedium.webp', path: 'public/images/instagram-6.webp' },
  
  // Blog images
  { url: '/assets/themes/1/img/blog/san-sebastian-gastronomika-2025.webp', path: 'public/images/blog-gastronomika.webp' },
  { url: '/assets/themes/1/img/blog/que-ver-en-saint-jean-de-luz.webp', path: 'public/images/blog-saint-jean-de-luz.webp' },
  { url: '/assets/themes/1/img/blog/somebody-feed-phil-san-sebastian.webp', path: 'public/images/blog-somebody-feed-phil.webp' },
  { url: '/assets/themes/1/img/blog/que-ver-en-zumaia-pais-vasco.webp', path: 'public/images/blog-zumaia.webp' },
  { url: '/assets/themes/1/img/blog/que-ver-en-san-sebastian-donostia.webp', path: 'public/images/blog-san-sebastian.webp' },
  
  // Map
  { url: '/assets/themes/1/img/media/1764236514_mapa.thigh.webp', path: 'public/images/map.webp' },
  
  // Booking modal image
  { url: '/assets/themes/1/img/media/1780300485_summerlasala2026.tmedium.jpg', path: 'public/images/booking-modal.jpg' },
  
  // Icons
  { url: '/assets/themes/1/img/icons/close.svg', path: 'public/images/icon-close.svg' },
  
  // Favicons
  { url: '/assets/themes/1/img/preferences/favicon.png', path: 'public/seo/favicon.png' },
];

function downloadFile(url, filePath) {
  return new Promise((resolve, reject) => {
    const fullUrl = url.startsWith('http') ? url : baseUrl + url;
    const protocol = fullUrl.startsWith('https') ? https : http;
    
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    protocol.get(fullUrl, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadFile(response.headers.location, filePath)
          .then(resolve)
          .catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      
      const fileStream = fs.createWriteStream(filePath);
      response.pipe(fileStream);
      
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      
      fileStream.on('error', (err) => {
        fs.unlink(filePath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

async function downloadAll() {
  console.log('Downloading assets...');
  
  for (const asset of assets) {
    try {
      await downloadFile(asset.url, asset.path);
      console.log(`✓ Downloaded: ${asset.path}`);
    } catch (error) {
      console.error(`✗ Failed to download ${asset.url}: ${error.message}`);
    }
  }
  
  console.log('Download complete!');
}

downloadAll();
