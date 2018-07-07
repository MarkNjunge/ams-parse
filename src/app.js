//@ts-check
const puppeteer = require("puppeteer");

const endpoints = require("./endpoints");

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  await endpoints.login(browser);
  const attendance = await endpoints.attendance(browser);
  const details = await endpoints.details(browser);

  await browser.close();
})();
