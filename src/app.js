//@ts-check
const puppeteer = require("puppeteer");
const fs = require("fs");

const endpoints = require("./endpoints");

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  try {
    await endpoints.login(browser);
    const attendance = await endpoints.attendance(browser);
    const details = await endpoints.details(browser);
    const dashboard = await endpoints.dashboard(browser);
    const feesStatement = await endpoints.feesStatement(browser);
    const progressReport = await endpoints.progressReport(browser);

    const output = {
      attendance,
      details,
      dashboard,
      feesStatement,
      progressReport
    };
    fs.writeFileSync("./output.json", JSON.stringify(output, null, " "));
  } catch (e) {
    console.log(e);
  }

  await browser.close();
})();
