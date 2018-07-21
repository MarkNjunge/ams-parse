/* eslint-disable no-undef*/
const puppeteer = require("puppeteer");

const serveStatic = require("./helpers/serveStatic");
const config = require("./helpers/config");
const endpoints = require("./../src/endpoints");
const expected = require("./helpers/expected");

let browser;

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: true });
  return serveStatic.serve();
});

afterAll(async () => {
  await browser.close();
  return serveStatic.close();
});

describe("should parse", () => {
  test("attendance", async () => {
    const attendance = await endpoints.attendance(config, browser);

    for (let index = 0; index < attendance.length; index++) {
      const element = attendance[index];

      expect(element).toEqual(expected.attendance[index]);
    }
  });

  test("details", async () => {
    const details = await endpoints.details(config, browser);

    expect(details).toEqual(expected.details);
  });

  test("dashboard", async () => {
    const dashboard = await endpoints.dashboard(config, browser);

    expect(dashboard).toEqual(expected.dashboard);
  });

  test("feesStatement", async () => {
    const feesStatement = await endpoints.feesStatement(config, browser);

    expect(feesStatement).toEqual(expected.feesStatement);
  });

  test("progressReport", async () => {
    const progressReport = await endpoints.progressReport(config, browser);

    expect(progressReport).toEqual(expected.progressReport);
  });
});
