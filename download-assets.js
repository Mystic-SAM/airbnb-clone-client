import fs from 'fs';
import path from 'path';
import https from 'https';

const BASE_URL = 'https://airbnb-clone-umber-two.vercel.app/assets/images/';

// The 43 listing photos in exact Photo Tour order
export const LISTING_PHOTOS = [
  // Living room 1 (0-2)
  { filename: 'photo-01.jpg', src: 'a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg' },
  { filename: 'photo-02.jpg', src: 'a45feaa2-b607-4092-83ac-5fd4b2894959.jpeg' },
  { filename: 'photo-03.jpg', src: 'f1da1c3d-0d10-481e-9b63-c71f9073f30b.jpeg' },

  // Living room 2 (3-9)
  { filename: 'photo-04.jpg', src: '090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg' },
  { filename: 'photo-05.jpg', src: '9be71047-fc52-438a-9270-75cb470f6752.jpeg' },
  { filename: 'photo-06.jpg', src: 'f6de1663-4e9c-4414-b63b-29a154a92ee1.jpeg' },
  { filename: 'photo-07.jpg', src: '2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg' },
  { filename: 'photo-08.jpg', src: '34529829-a971-44d3-ac2f-90ea3678a34d.jpeg' },
  { filename: 'photo-09.jpg', src: '153aa732-4935-48b8-a6fe-b469b6af5efc.jpeg' },
  { filename: 'photo-10.jpg', src: '3c6e6809-1bb1-47a6-8e24-aff593e1c28f.jpeg' },

  // Full kitchen (10-11)
  { filename: 'photo-11.jpg', src: '56c44812-52c0-4481-90d8-101ec1f34c7a.jpeg' },
  { filename: 'photo-12.jpg', src: 'ddc853d7-e658-405c-bedc-8f31106c447e.jpeg' },

  // Bedroom (12-17)
  { filename: 'photo-13.jpg', src: '67c61c6f-6260-4809-9510-0360e58a345d.jpeg' },
  { filename: 'photo-14.jpg', src: '1c827136-4a85-4fe0-8e69-3fd8ea19bb17.jpeg' },
  { filename: 'photo-15.jpg', src: '0622ab42-b851-4d55-9d9f-df3143bc5909.jpeg' },
  { filename: 'photo-16.jpg', src: 'a74e3c0b-3188-4442-9146-1cd4d6ea45df.jpeg' },
  { filename: 'photo-17.jpg', src: '48a8ffbc-fbf7-4f84-bc29-ee400da3f08b.jpeg' },
  { filename: 'photo-18.jpg', src: '3cf31697-f3f3-4c60-82c4-029acb119ae4.jpeg' },

  // Full bathroom (18)
  { filename: 'photo-19.jpg', src: '97c78f8a-5090-4663-aebc-ba4e13b47092.jpeg' },

  // Gym (19-23)
  { filename: 'photo-20.jpg', src: '9aa8e65f-94ac-4ba0-9a10-9ec91e536d22.jpeg' },
  { filename: 'photo-21.jpg', src: '246bd88d-4dd6-4117-a401-02a36ebfcf16.jpeg' },
  { filename: 'photo-22.jpg', src: '4fede77d-7a71-446f-89e3-263af937f3fa.jpeg' },
  { filename: 'photo-23.jpg', src: '79f59adb-5a5f-4d6c-8109-1f01f4ca0d03.jpeg' },
  { filename: 'photo-24.jpg', src: 'f19d8c0a-1d88-42a4-9218-686d4f0db7e4.jpeg' },

  // Exterior (24-29)
  { filename: 'photo-25.jpg', src: '23ea6621-6f74-4baa-acea-2fd03e312b41.jpeg' },
  { filename: 'photo-26.jpg', src: '5adfdf3e-d497-4efc-ab8c-fc559dab311e.jpeg' },
  { filename: 'photo-27.jpg', src: '608748cd-6ee7-4a71-88a2-ba79d3ddba5a.jpeg' },
  { filename: 'photo-28.jpg', src: '5b856fde-a393-41bf-b373-c9d02e64221f.jpeg' },
  { filename: 'photo-29.jpg', src: 'c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg' },
  { filename: 'photo-30.jpg', src: '42befad7-fb29-473d-91db-b03e7a544d1d.jpeg' },

  // Pool (30-32)
  { filename: 'photo-31.jpg', src: 'fc02f48f-a937-42c5-895d-f9cc3113d6ca.jpeg' },
  { filename: 'photo-32.jpg', src: '929545d3-e241-46c0-8a70-c24531ce7b54.jpeg' },
  { filename: 'photo-33.jpg', src: '8eb65a8b-e795-4870-b141-6f63b1be24ae.jpeg' },

  // Additional photos (33-42)
  { filename: 'photo-34.jpg', src: '70325367-cbae-4993-b560-18cd3f6edd53.jpeg' },
  { filename: 'photo-35.jpg', src: 'cc7a56bd-242c-498a-9aef-0cffac619e54.jpeg' },
  { filename: 'photo-36.jpg', src: '30ad93b2-293f-494d-b645-626303c6cb93.jpeg' },
  { filename: 'photo-37.jpg', src: '9642a60d-e9de-4e1a-89c2-9ebd230f4a74.jpeg' },
  { filename: 'photo-38.jpg', src: 'b6599f26-d65c-4df0-baf2-ef18c82a86a3.jpeg' },
  { filename: 'photo-39.jpg', src: 'dc01fd46-b119-48d3-a43b-f6c093e26eca.jpeg' },
  { filename: 'photo-40.jpg', src: 'fe37b80e-da8a-4225-b27b-dfbb5d763c01.jpeg' },
  { filename: 'photo-41.jpg', src: '3c90338e-86b4-423f-aae1-279e0ccc3a18.jpeg' },
  { filename: 'photo-42.jpg', src: '862d936c-0f34-4e50-af87-b519e2781d19.jpeg' },
  { filename: 'photo-43.jpg', src: '79addceb-8c2d-419b-80ff-e29af426a94c.jpeg' }
];

export function isFileValidImage(filePath) {
  if (!fs.existsSync(filePath)) return false;
  const stat = fs.statSync(filePath);
  if (stat.size < 1000) return false;
  
  const buffer = Buffer.alloc(10);
  const fd = fs.openSync(filePath, 'r');
  fs.readSync(fd, buffer, 0, 10, 0);
  fs.closeSync(fd);
  
  const isJpeg = buffer[0] === 0xFF && buffer[1] === 0xD8 && buffer[2] === 0xFF;
  const isPng = buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47;
  const isWebp = buffer.toString('utf8', 0, 4) === 'RIFF';
  return isJpeg || isPng || isWebp;
}

export function downloadImageWithTimeout(url, destPath, timeoutMs = 20000) {
  return new Promise((resolve) => {
    fs.mkdirSync(path.dirname(destPath), { recursive: true });

    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'Referer': 'https://airbnb-clone-umber-two.vercel.app/',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
      },
      timeout: timeoutMs
    }, (res) => {
      // Handle redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadImageWithTimeout(res.headers.location, destPath, timeoutMs).then(resolve);
      }

      if (res.statusCode !== 200) {
        return resolve({ success: false, error: `HTTP ${res.statusCode}` });
      }

      const contentType = res.headers['content-type'] || '';
      if (contentType.includes('text/html') || contentType.includes('application/json')) {
        return resolve({ success: false, error: `Non-image content type: ${contentType}` });
      }

      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => {
        const buffer = Buffer.concat(chunks);
        if (buffer.length < 1000) {
          return resolve({ success: false, error: `File too small (${buffer.length} bytes)` });
        }
        fs.writeFileSync(destPath, buffer);
        if (isFileValidImage(destPath)) {
          resolve({ success: true, size: buffer.length });
        } else {
          try { fs.unlinkSync(destPath); } catch {}
          resolve({ success: false, error: 'Magic bytes validation failed' });
        }
      });
      res.on('error', (err) => {
        resolve({ success: false, error: `Stream error: ${err.message}` });
      });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({ success: false, error: `Request timeout (${timeoutMs / 1000}s)` });
    });

    req.on('error', (err) => {
      resolve({ success: false, error: `Network error: ${err.message}` });
    });
  });
}

async function main() {
  console.log('=== Robust Reference Asset Pipeline ===\n');

  const listingDir = path.join(process.cwd(), 'public', 'assets', 'images', 'listing');
  fs.mkdirSync(listingDir, { recursive: true });

  let downloadedCount = 0;
  let skippedCount = 0;
  let failedCount = 0;
  const failedUrls = [];

  for (let i = 0; i < LISTING_PHOTOS.length; i++) {
    const item = LISTING_PHOTOS[i];
    const prefix = `[${String(i + 1).padStart(2, '0')}/${LISTING_PHOTOS.length}]`;
    const dest = path.join(listingDir, item.filename);
    const url = `${BASE_URL}${item.src}`;

    if (isFileValidImage(dest)) {
      const stat = fs.statSync(dest);
      console.log(`${prefix} ⏭️ Skipped ${item.filename} (already valid: ${stat.size} bytes)`);
      skippedCount++;
      continue;
    }

    console.log(`${prefix} Downloading ${item.filename}...`);
    const result = await downloadImageWithTimeout(url, dest, 20000);

    if (result.success) {
      console.log(`${prefix} ✓ Saved ${item.filename} (${result.size} bytes)`);
      downloadedCount++;
    } else {
      console.log(`${prefix} ✗ Failed ${item.filename} - Reason: ${result.error}`);
      failedCount++;
      failedUrls.push({ filename: item.filename, url, error: result.error });
    }
  }

  console.log('\n==================================================');
  console.log('DOWNLOAD SUMMARY');
  console.log('==================================================');
  console.log(`Total expected:     ${LISTING_PHOTOS.length}`);
  console.log(`Already valid/skip: ${skippedCount}`);
  console.log(`Newly downloaded:   ${downloadedCount}`);
  console.log(`Failed:             ${failedCount}`);

  if (failedUrls.length > 0) {
    console.log('\nFailed URLs:');
    failedUrls.forEach(f => console.log(` - ${f.filename}: ${f.url} (${f.error})`));
  }
}

if (process.argv[1] && process.argv[1].endsWith('download-assets.js')) {
  main();
}
