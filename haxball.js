const puppeteer = require('puppeteer');
async function bot () {
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
 
page
    .on('console', message =>
      console.log(`${message.type().substr(0, 3).toUpperCase()} ${message.text()}`))
    .on('pageerror', ({ message }) => console.log(message))
    .on('response', response =>
      console.log(`${response.status()} ${response.url()}`))
    .on('requestfailed', request =>
      console.log(`${request.failure().errorText} ${request.url()}`))
 
    await page.goto('https://www.haxball.com/headless', {waitUntil: 'networkidle2'});
    await page.addScriptTag({path: 'bot.js'});
 
}
bot();
console.log('Bot loaded');
