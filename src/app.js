//@ts-check
// @ts-ignore
const argv = require("yargs")
  .describe("number", "Student number")
  .alias("n", "number")
  .describe("password", "Student password")
  .alias("p", "password")
  .help("h")
  .alias("h", "help")
  .example("npm start --number=123456 --password=secret")
  .example("npm start -n 123456 -p secret").argv;

if (argv.number) {
  process.env.STUDENT_NO = argv.number;
}

if (argv.password) {
  process.env.PASSWORD = argv.password;
}

const puppeteer = require("puppeteer");
const fs = require("fs");
const config = require("./config");

const endpoints = require("./endpoints");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  try {
    if (config.nodeEnv === "production") {
      await endpoints.login(browser);
    }
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
    console.log("Written to file");
  } catch (err) {
    console.error("There was an error!", err.message);
  }
  await browser.close();
})();
