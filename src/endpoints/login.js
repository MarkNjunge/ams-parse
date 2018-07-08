const config = require("../config/index.js");

module.exports = async function(browser) {
  console.log("Starting login...");
  const USERNAME_SELECTOR = "#username";
  const PASSWORD_SELECTOR = "#password";
  const LOGIN_SELECTOR =
    "#fm1 > section.row.btn-row > input.btn.btn-submit.btn-block";

  // Login
  const loginPage = await browser.newPage();
  await loginPage.goto(
    "https://su-sso.strathmore.edu/cas-prd/login?service=https%3A%2F%2Fsu-sso.strathmore.edu%2Fsusams%2Fservlet%2Fedu%2Fstrathmore%2Fams%2Fsusams%2FInit.html"
  );

  // Input username
  await loginPage.click(USERNAME_SELECTOR);
  await loginPage.keyboard.type(config.student.studentNo);

  // Input password
  await loginPage.click(PASSWORD_SELECTOR);
  await loginPage.keyboard.type(config.student.password);

  // Click login button
  await loginPage.click(LOGIN_SELECTOR);

  await loginPage.waitForNavigation();

  console.log("Completed login.");

  return;
};
