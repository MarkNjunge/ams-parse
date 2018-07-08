const config = require("./../config");

module.exports = async function(browser) {
  console.log("Starting details...");
  const page = await browser.newPage();
  await page.goto(config.urls.myDetails);

  const details = {};
  const promises = [];

  // Get values for input fields
  /*eslint-disable quotes */
  const formInputFields = {
    postalAddress:
      "#frmDetails > table > tbody > tr:nth-child(3) > td:nth-child(2) > input",
    idPassportNumber:
      "#frmDetails > table > tbody > tr:nth-child(2) > td:nth-child(2) > input",
    town:
      "#frmDetails > table > tbody > tr:nth-child(4) > td:nth-child(2) > input",
    residence:
      "#frmDetails > table > tbody > tr:nth-child(6) > td:nth-child(2) > input",
    mobileNumber:
      "#frmDetails > table > tbody > tr:nth-child(5) > td:nth-child(4) > input",
    personalEmail:
      "#frmDetails > table > tbody > tr:nth-child(6) > td:nth-child(4) > input",
    fatherName:
      '#frmDetails > table > tbody > tr:nth-child(8) > td:nth-child(2) > input[type="text"]',
    fatherMobileNumber:
      '#frmDetails > table > tbody > tr:nth-child(9) > td:nth-child(2) > input[type="text"]',
    motherName:
      '#frmDetails > table > tbody > tr:nth-child(10) > td:nth-child(2) > input[type="text"]',
    guardiansName:
      '#frmDetails > table > tbody > tr:nth-child(12) > td:nth-child(2) > input[type="text"]',
    guardiansMobileNumber:
      '#frmDetails > table > tbody > tr:nth-child(13) > td:nth-child(2) > input[type="text"]',
    fatherEmail:
      '#frmDetails > table > tbody > tr:nth-child(8) > td:nth-child(4) > input[type="text"]',
    fatherOccupation:
      '#frmDetails > table > tbody > tr:nth-child(9) > td:nth-child(4) > input[type="text"]',
    mothersEmail:
      '#frmDetails > table > tbody > tr:nth-child(10) > td:nth-child(4) > input[type="text"]',
    mothersOccupation:
      '#frmDetails > table > tbody > tr:nth-child(11) > td:nth-child(4) > input[type="text"]',
    guardiansEmail:
      '#frmDetails > table > tbody > tr:nth-child(12) > td:nth-child(4) > input[type="text"]',
    guardiansOccupation:
      '#frmDetails > table > tbody > tr:nth-child(13) > td:nth-child(4) > input[type="text"]'
  };
  /*eslint-enable quotes */

  Object.keys(formInputFields).forEach(key => {
    const promise = page
      .evaluate(sel => {
        const element = document.querySelector(sel); // eslint-disable-line no-undef
        return element ? element.value : null;
      }, formInputFields[key])
      .then(value => (details[key] = value));

    promises.push(promise);
  });

  // Get values for dropdown fields
  const dropdownIds = {
    homeCounty: "reportComboCounty",
    religion: "reportComboReligion",
    postalCode: "reportComboPostalCode",
    maritalStatus: "reportComboMaritalStatus"
  };

  Object.keys(dropdownIds).forEach(key => {
    const promise = page
      .evaluate(sel => {
        const element = document.getElementById(sel); // eslint-disable-line no-undef
        return element
          ? element.options[element.selectedIndex].innerHTML.trim()
          : null;
      }, dropdownIds[key])
      .then(value => (details[key] = value));

    promises.push(promise);
  });

  // Important: Wait for everything to finish
  await Promise.all(promises);

  console.log("Completed details.");

  return details;
};
