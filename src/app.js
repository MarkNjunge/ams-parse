//@ts-check
const puppeteer = require("puppeteer");

const endpoints = require("./endpoints");

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  try {
    await endpoints.login(browser);
    const attendance = await endpoints.attendance(browser);
    const details = await endpoints.details(browser);
    const dashboard = await endpoints.dashboard(browser);
    const progressReport = await endpoints.progressReport(browser);
  } catch (e) {
    console.log(e);
  }

  await browser.close();
})();
