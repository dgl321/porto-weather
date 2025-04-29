const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 800, height: 400 });

    // 📍 IMPORTANT: Point directly to your deployed index.html page
    await page.goto('https://porto-weather-i45p1gir8-dylan-grimes-larkins-projects.vercel.app/index.html', {
        waitUntil: 'networkidle0',
    });

    await page.screenshot({ path: 'public/screenshot.png' });

    await browser.close();

    console.log('✅ Screenshot saved to public/screenshot.png');
})();