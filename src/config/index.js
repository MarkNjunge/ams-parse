require("dotenv").config();

const student = {
  studentNo: process.env.STUDENT_NO || "",
  password: process.env.PASSWORD.toString() || ""
};

function urls() {
  if (process.env.NODE_ENV === "production") {
    return {
      dashboard:
        "https://su-sso.strathmore.edu/susams/servlet/edu/strathmore/ams/susams/Dashboard.html?Command=LOAD",
      myDetails:
        "https://su-sso.strathmore.edu/susams/servlet/edu/strathmore/ams/susams/Details.html",
      marks:
        "https://su-sso.strathmore.edu/susams/servlet/edu/strathmore/ams/susams/lifecycle/coursework/Marks.html",
      attendance:
        "https://su-sso.strathmore.edu/susams/servlet/edu/strathmore/ams/susams/lifecycle/coursework/Attendance.html",
      progressReport:
        "https://su-sso.strathmore.edu/susams/servlet/edu/strathmore/ams/susams/lifecycle/coursework/ProgressReport.html",
      feesStatement:
        "https://su-sso.strathmore.edu/susams/servlet/edu/strathmore/ams/susams/financials/Statement.html"
    };
  } else {
    return {
      dashboard: "http://127.0.0.1:5500/public/dashboard.html",
      myDetails: "http://127.0.0.1:5500/public/details.html",
      marks: "http://127.0.0.1:5500/public/marks.html",
      attendance: "http://127.0.0.1:5500/public/attendance.html",
      progressReport: "http://127.0.0.1:5500/public/progress-report.html",
      feesStatement: "http://127.0.0.1:5500/public/fees-statement.html"
    };
  }
}

module.exports = {
  student,
  urls: urls()
};
