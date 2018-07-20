require("dotenv").config();

const nodeEnv = process.env.NODE_ENV || "production";

if (!process.env.STUDENT_NO) {
  console.log("Student number is required");
  process.exit();
}

if (!process.env.PASSWORD) {
  console.log("Password number is required");
  process.exit();
}

const student = {
  studentNo: process.env.STUDENT_NO || "",
  password: process.env.PASSWORD.toString() || ""
};

function urls() {
  if (nodeEnv === "production") {
    const baseUrl =
      "https://su-sso.strathmore.edu/susams/servlet/edu/strathmore/ams/susams/";

    return {
      dashboard: baseUrl + "Dashboard.html?Command=LOAD",
      myDetails: baseUrl + "Details.html",
      marks: baseUrl + "lifecycle/coursework/Marks.html",
      attendance: baseUrl + "lifecycle/coursework/Attendance.html",
      progressReport: baseUrl + "lifecycle/coursework/ProgressReport.html",
      feesStatement: baseUrl + "financials/Statement.html"
    };
  } else {
    const baseUrl = "http://127.0.0.1:5500/public/";
    return {
      dashboard: baseUrl + "dashboard.html",
      myDetails: baseUrl + "details.html",
      marks: baseUrl + "marks.html",
      attendance: baseUrl + "attendance.html",
      progressReport: baseUrl + "progress-report.html",
      feesStatement: baseUrl + "fees-statement.html"
    };
  }
}

module.exports = {
  nodeEnv,
  student,
  urls: urls()
};
