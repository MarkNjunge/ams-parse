//@ts-check
const cheerio = require("cheerio");

const utils = require("./../utils");

module.exports = async function(config, browser) {
  const page = await browser.newPage();
  await page.goto(config.urls.dashboard);

  // Get the photo
  const photoHandle = await page.$("#paramImageURL");
  const image = await page.evaluate(body => body.src, photoHandle);
  await photoHandle.dispose();

  const surname = await utils.getInnerHTML(
    page,
    "#content > div.right-col > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > span"
  );

  const otherNames = await utils.getInnerHTML(
    page,
    "#content > div.right-col > div > table > tbody > tr:nth-child(3) > td:nth-child(2) > span"
  );
  const dateOfBirth = await utils.getInnerHTML(
    page,
    "#content > div.right-col > div > table > tbody > tr:nth-child(4) > td:nth-child(2) > span"
  );
  const mobileNo = await utils.getInnerHTML(
    page,
    "#content > div.right-col > div > table > tbody > tr:nth-child(5) > td:nth-child(2) > span"
  );
  const email = await utils.getInnerHTML(
    page,
    "#content > div.right-col > div > table > tbody > tr:nth-child(6) > td:nth-child(2) > span"
  );
  const previousSchool = await utils.getInnerHTML(
    page,
    "#content > div.right-col > div > table > tbody > tr:nth-child(7) > td:nth-child(2) > span"
  );

  const PROGRAMMES_TABLE_SELECTOR = "#content > div:nth-child(6) > table";
  const programmesHandle = await page.$(PROGRAMMES_TABLE_SELECTOR);
  const programmesHTML = await page.evaluate(
    body => body.outerHTML,
    programmesHandle
  );
  await programmesHandle.dispose();

  const programmes = await extactProgrammes(programmesHTML);

  const MENTORS_TABLE_SELECTOR = "#sectionMentoring > div > table";
  const mentorsHandle = await page.$(MENTORS_TABLE_SELECTOR);
  const mentorsHTML = await page.evaluate(
    body => body.outerHTML,
    mentorsHandle
  );
  await mentorsHandle.dispose();

  const mentor = await extractMentors(mentorsHTML);

  return {
    image,
    surname,
    otherNames,
    dateOfBirth,
    mobileNo,
    email,
    previousSchool,
    programmes,
    mentor
  };
};

async function extactProgrammes(html) {
  const programmes = [];

  const $ = cheerio.load(html);
  $("tr").each((i, row) => {
    if (i == 0) {
      return;
    }
    const rowHtml = "<table>" + $(row).html() + "</table>";
    const $row = cheerio.load(rowHtml);
    const rowCol = [];
    $row("td").each((j, data) => {
      rowCol.push(
        $(data)
          .text()
          .trim()
      );
    });
    programmes.push({
      programme: rowCol[0],
      syllabus: rowCol[1],
      status: rowCol[2],
      intake: rowCol[3]
    });
  });

  return programmes;
}

async function extractMentors(html) {
  const mentorsCols = [];

  const $ = cheerio.load(html);
  $("td").each((i, row) => {
    mentorsCols.push(
      $(row)
        .text()
        .trim()
    );
  });

  return {
    name: mentorsCols[0],
    email: mentorsCols[1],
    lastSeen: mentorsCols[2]
  };
}
