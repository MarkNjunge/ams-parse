//@ts-check
const cheerio = require("cheerio");

const config = require("./../config");

module.exports = async function getDashboard(browser) {
  const page = await browser.newPage();
  // Progress report takes over 30s
  page.setDefaultNavigationTimeout(60 * 1000);
  await page.goto(config.urls.progressReport);

  const unitsCompleted = await getValue(
    page,
    "#sectionAverages > table > tbody > tr:nth-child(2) > td:nth-child(2)"
  );

  const totalMarks = await getValue(
    page,
    "#sectionAverages > table > tbody > tr:nth-child(2) > td:nth-child(4)"
  );

  const avgMark = await getValue(
    page,
    "#sectionAverages > table > tbody > tr:nth-child(3) > td:nth-child(2)"
  );

  const avgGrade = await getValue(
    page,
    "#sectionAverages > table > tbody > tr:nth-child(3) > td:nth-child(4)"
  );

  const completedUnitsHTML = await getOuterHTML(page, "#sectionList > table");
  const completedUnits = await extractCompletedUnits(completedUnitsHTML);

  const unitsNotDoneHTML = await getOuterHTML(
    page,
    "#sectionIncompleteOb > table"
  );
  const unitsNotDone = await extractUnitsNotDone(unitsNotDoneHTML);

  return {
    unitsCompleted,
    totalMarks,
    avgMark,
    avgGrade,
    completedUnits,
    unitsNotDone
  };
};

async function getValue(page, selector) {
  return await page.evaluate(sel => {
    return document.querySelector(sel).innerHTML; // eslint-disable-line
  }, selector);
}

async function getOuterHTML(page, selector) {
  const handle = await page.$(selector);
  const value = await page.evaluate(body => body.outerHTML, handle);
  await handle.dispose();

  return value;
}

async function extractCompletedUnits(html) {
  const units = [];
  const $ = cheerio.load(html);

  $("tr").each((i, row) => {
    // First two rows are headers
    if (i == 0 || i == 1) {
      return;
    }

    const $row = cheerio.load("<table>" + $(row).html() + "</table>");
    const rowCols = [];
    $row("td").each((j, elem) => {
      rowCols.push($(elem).text());
    });

    // Skip last row with total
    if (rowCols.length != 11) {
      return;
    }

    units.push({
      academicYear: rowCols[1],
      syllabus: rowCols[2],
      year: rowCols[3],
      subjectCode: rowCols[4],
      subjectName: rowCols[5],
      type: rowCols[6],
      marks: rowCols[7],
      grade: rowCols[8],
      credits: rowCols[9],
      gpv: rowCols[10]
    });
  });

  return units;
}

async function extractUnitsNotDone(html) {
  const units = [];
  const $ = cheerio.load(html);

  $("tr").each((i, row) => {
    // First two rows are headers
    if (i == 0 || i == 1) {
      return;
    }

    const $row = cheerio.load("<table>" + $(row).html() + "</table>");
    const rowCols = [];
    $row("td").each((j, elem) => {
      rowCols.push($(elem).text());
    });

    // Skip last row with total
    if (rowCols.length != 6) {
      return;
    }

    units.push({
      year: rowCols[1],
      subjectCode: rowCols[2],
      subjectName: rowCols[3],
      type: rowCols[4],
      credits: rowCols[5]
    });
  });

  return units;
}
