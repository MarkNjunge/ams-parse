const fs = require("fs");

module.exports = async output => {
  if (!fs.existsSync("./output")) {
    fs.mkdirSync("./output");
  }

  fs.writeFileSync(
    "./output/attendance.json",
    JSON.stringify(output.attendance, null, " ")
  );

  fs.writeFileSync(
    "./output/details.json",
    JSON.stringify(output.details, null, " ")
  );

  fs.writeFileSync(
    "./output/dashboard.json",
    JSON.stringify(output.dashboard, null, " ")
  );

  fs.writeFileSync(
    "./output/feesStatement.json",
    JSON.stringify(output.feesStatement, null, " ")
  );

  fs.writeFileSync(
    "./output/completedUnits.json",
    JSON.stringify(output.progressReport.completedUnits, null, " ")
  );

  fs.writeFileSync(
    "./output/unitsNotDone.json",
    JSON.stringify(output.progressReport.unitsNotDone, null, " ")
  );

  output.progressReport.unitsNotDone = undefined;
  output.progressReport.completedUnits = undefined;

  fs.writeFileSync(
    "./output/progressReport.json",
    JSON.stringify(output.progressReport, null, " ")
  );
};
