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
const config = require("./config");

const endpoints = require("./endpoints");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  try {
    if (config.nodeEnv === "production") {
      await endpoints.login(config, browser);
      console.log("Login √");
    }
    const attendance = await endpoints.attendance(config, browser);
    console.log("Attendance √");

    const details = await endpoints.details(config, browser);
    console.log("Details √");

    const dashboard = await endpoints.dashboard(config, browser);
    console.log("Dashboard √");

    const feesStatement = await endpoints.feesStatement(config, browser);
    console.log("Fees statement √");

    const progressReport = await endpoints.progressReport(config, browser);
    console.log("Progress report √");

    const output = {
      attendance,
      details,
      dashboard,
      feesStatement,
      progressReport
    };

    await require("./writeToFile")(output);

    console.log("Written to file");
  } catch (err) {
    console.error("There was an error!", err.message);
  }
  await browser.close();
})();
