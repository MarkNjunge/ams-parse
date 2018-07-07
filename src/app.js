//@ts-check
const puppeteer = require("puppeteer");

const endpoints = require("./endpoints");

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  await endpoints.login(browser);

  await browser.close();
})();
