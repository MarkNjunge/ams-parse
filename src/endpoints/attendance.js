//@ts-check
const cheerio = require("cheerio");

const config = require("./../config");

module.exports = async function(browser) {
  console.log("Starting attendance...");

  const ATTENDANCE_TABLE_SELECTOR = "#content > table";
  const ROW_SELECTOR = "#content > table > tbody > tr:nth-child(INDEX)"; // eslint-disable-line

  const page = await browser.newPage();
  await page.goto(config.urls.attendance);

  // Extract the html for the table
  const tableHandle = await page.$(ATTENDANCE_TABLE_SELECTOR);
  let html = await page.evaluate(body => body.outerHTML, tableHandle);
  await tableHandle.dispose();

  let units = [];

  // Extract rows from the html
  const $ = cheerio.load(html);
  $("tr").each((i, elem) => {
    // Skip the header row
    if (i > 0) {
      // Extract the columns
      const cols = extract($(elem).html());

      units[i] = {
        subjectCode: cols[0],
        name: cols[1],
        group: cols[2],
        period: cols[3],
        lecturer: cols[4],
        totalHourse: cols[5],
        absentClasses: cols[6],
        absentHours: cols[7],
        percentAbsent: cols[8]
      };
    }
  });

  // Remove null elements
  units = units.filter(Boolean);

  console.log("Completed attendance.");

  return units;
};

function extract(html) {
  // Add table tags for cheerio to work
  html = "<table><tr>" + html + "</tr></table>";
  const $ = cheerio.load(html);
  const cols = [];
  $("td").each((i, elem) => {
    cols.push($(elem).html());
  });
  return cols;
}
