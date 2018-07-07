//@ts-check
const puppeteer = require("puppeteer");

const endpoints = require("./endpoints");

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  await endpoints.login(browser);
  const attendance = await endpoints.attendance(browser);
  const details = await endpoints.details(browser);
  const dashboard = await endpoints.dashboard(browser);

  await browser.close();
})();
