//@ts-check
const cheerio = require("cheerio");

const config = require("./../config");

module.exports = async function(browser) {
  const page = await browser.newPage();
  await page.goto(config.urls.feesStatement);

  const itemsOnLoan = await getValue(page, "#paramItemsOnHold");
  const libraryCharges = await getValue(page, "#paramLibCharges");

  const totalsHTML = await getOuterHTML(
    page,
    "#content > table:nth-child(12) > tbody > tr:nth-child(13)"
  );
  const totals = await extractTotals(totalsHTML);

  const balance = await getValue(
    page,
    "#content > table:nth-child(12) > tbody > tr:nth-child(14) > td:nth-child(2)"
  );

  const tableHTML = await getOuterHTML(page, "#content > table:nth-child(12)");
  const feeRecords = await extractFeeRecords(tableHTML);

  return {
    itemsOnLoan,
    libraryCharges,
    ...totals,
    balance,
    feeRecords
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
