import puppeteer from 'puppeteer';
import path from 'path';

async function generateArchitecturePdf() {
  const htmlPath = path.resolve('docs/architecture-diagram.html');
  const pdfPath = path.resolve('docs/architecture-diagram.pdf');

  const browser = await puppeteer.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: pdfPath,
    width: '1920px',
    height: '1080px',
    printBackground: true,
    landscape: true,
    margin: {
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px'
    },
    pageRanges: '1'
  });

  await browser.close();
  console.log(`Successfully generated architecture PDF at: ${pdfPath}`);
}

generateArchitecturePdf().catch((err) => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
