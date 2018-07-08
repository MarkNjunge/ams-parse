//@ts-check
const cheerio = require("cheerio");

const config = require("./../config");
const utils = require("./../utils");

module.exports = async function(browser) {
  console.log("Starting fees statement...");
  const page = await browser.newPage();
  await page.goto(config.urls.feesStatement);

  const itemsOnLoan = await utils.getInnerHTML(page, "#paramItemsOnHold");
  const libraryCharges = await utils.getInnerHTML(page, "#paramLibCharges");

  const totalsHTML = await utils.getOuterHTML(
    page,
    "#content > table:nth-child(12) > tbody > tr:nth-child(13)"
  );
  const totals = await extractTotals(totalsHTML);

  const balance = await utils.getInnerHTML(
    page,
    "#content > table:nth-child(12) > tbody > tr:nth-child(14) > td:nth-child(2)"
  );

  const tableHTML = await utils.getOuterHTML(
    page,
    "#content > table:nth-child(12)"
  );
  const feeRecords = await extractFeeRecords(tableHTML);

  console.log("Completed fees statement.");

  return {
    itemsOnLoan,
    libraryCharges,
    ...totals,
    balance,
    feeRecords
  };
};

async function extractTotals(html) {
  html = "<table>" + html + "</table>";
  const totals = {};
  const $ = cheerio.load(html);
  $("td").each((i, elem) => {
    if (i == 0) {
      return;
    } else if (i == 1) {
      totals.totalDebit = $(elem).text();
    } else if (i == 2) {
      totals.totalCredit = $(elem).text();
    }
  });

  return totals;
}

async function extractFeeRecords(html) {
  const feeRecord = [];
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

    // Skip last two rows
    if (rowCols.length != 5) {
      return;
    }

    feeRecord.push({
      date: rowCols[0],
      documentNumber: rowCols[1],
      documentType: rowCols[2],
      debit: rowCols[3],
      credit: rowCols[4]
    });
  });

  return feeRecord;
}
