const attendance = [
  {
    subjectCode: "ICS 3101",
    name: "Course 1",
    group: "ICS 3 APR 18 A",
    period: "First Semester",
    lecturer: "Lecturer 1",
    totalHours: "45.00",
    absentClasses: "0",
    absentHours: "0",
    percentAbsent: "0.00%"
  },
  {
    subjectCode: "ICS 3102",
    name: "Course 2",
    group: "ICS 3 APR 18 A",
    period: "First Semester",
    lecturer: "Lecturer 2",
    totalHours: "45.00",
    absentClasses: "1",
    absentHours: "2",
    percentAbsent: "4.44%"
  },
  {
    subjectCode: "ICS 3103",
    name: "Course 3",
    group: "ICS 3 APR 18 A",
    period: "First Semester",
    lecturer: "Lecturer 3",
    totalHours: "45.00",
    absentClasses: "0",
    absentHours: "0",
    percentAbsent: "0.00%"
  },
  {
    subjectCode: "ICS 3104",
    name: "Course 4",
    group: "ICS 3 APR 18 A",
    period: "First Semester",
    lecturer: "Lecturer 4",
    totalHours: "45.00",
    absentClasses: "0",
    absentHours: "0",
    percentAbsent: "0.00%"
  },
  {
    subjectCode: "ICS 3105",
    name: "Course 5",
    group: "ICS 3 APR 18 A",
    period: "First Semester",
    lecturer: "Lecturer 5",
    totalHours: "45.00",
    absentClasses: "0",
    absentHours: "0",
    percentAbsent: "0.00%"
  },
  {
    subjectCode: "ICS 3106",
    name: "Course 6",
    group: "ICS 3 APR 18 A",
    period: "First Semester",
    lecturer: "Lecturer 6",
    totalHours: "45.00",
    absentClasses: "1",
    absentHours: "2",
    percentAbsent: "4.44%"
  },
  {
    subjectCode: "ICS 3107",
    name: "Course 7",
    group: "ICS 3 APR 18 A",
    period: "First Semester",
    lecturer: "Lecturer 7",
    totalHours: "45.00",
    absentClasses: "1",
    absentHours: "2",
    percentAbsent: "4.44%"
  },
  {
    subjectCode: "ICS 3108",
    name: "Course 8",
    group: "ICS 3 APR 18 A",
    period: "First Semester",
    lecturer: "Lecturer 8",
    totalHours: "45.00",
    absentClasses: "1",
    absentHours: "2",
    percentAbsent: "4.44%"
  }
];

const details = {
  postalAddress: "00100",
  idPassportNumber: "",
  town: "Nairobi",
  residence: "Ole Sangale",
  mobileNumber: "0712345678",
  personalEmail: "samuel.beck@mail.com",
  fatherName: "Martin Rogers",
  fatherMobileNumber: "0712345678",
  motherName: "Sonia Henry",
  guardiansName: "",
  guardiansMobileNumber: "",
  fatherEmail: "",
  fatherOccupation: "Doctor",
  mothersEmail: "",
  mothersOccupation: "Doctor",
  guardiansEmail: "",
  guardiansOccupation: "",
  homeCounty: "Nairobi",
  religion: "Baptist",
  postalCode: "NAIROBI-G.P.O NAIROBI - 00100",
  maritalStatus: "Single"
};

const dashboard = {
  image: "http://localhost:5000/profile.png",
  surname: "Beck",
  otherNames: "Samuel",
  dateOfBirth: "01/01/1997",
  mobileNo: "0712345678",
  email: "samuel.beck@mail.com",
  previousSchool: "Some school",
  programmes: [
    {
      programme: "Bachelor of Science in Informatics and Computer Science",
      syllabus: "BICS(FT)-15",
      status: "Open",
      intake: "April 2016"
    }
  ],
  mentor: {
    name: "Frazier, Darrell",
    email: "dfranzier@strathmore.edu",
    lastSeen: "01/01/2017"
  }
};

const feesStatement = {
  itemsOnLoan: "",
  libraryCharges: "",
  totalDebit: "996,360.96",
  totalCredit: "996,361.00",
  balance: "-0.04",
  feeRecords: [
    {
      date: "12-04-2016",
      documentNumber: "453393",
      documentType: "Receipt",
      debit: "0.00",
      credit: "185,366.00"
    },
    {
      date: "26-04-2016",
      documentNumber: "866415",
      documentType: "Invoice",
      debit: "393,884.00",
      credit: "0.00"
    },
    {
      date: "09-08-2016",
      documentNumber: "272191",
      documentType: "Receipt",
      debit: "0.00",
      credit: "179,524.00"
    },
    {
      date: "15-08-2016",
      documentNumber: "820403",
      documentType: "Receipt",
      debit: "0.00",
      credit: "28,994.00"
    },
    {
      date: "03-04-2017",
      documentNumber: "446439",
      documentType: "Receipt",
      debit: "0.00",
      credit: "208,518.00"
    },
    {
      date: "06-04-2017",
      documentNumber: "846763",
      documentType: "Invoice",
      debit: "403,772.96",
      credit: "0.00"
    },
    {
      date: "05-09-2017",
      documentNumber: "843023",
      documentType: "Receipt",
      debit: "0.00",
      credit: "153,957.00"
    },
    {
      date: "24-10-2017",
      documentNumber: "186457",
      documentType: "Receipt",
      debit: "0.00",
      credit: "41,298.00"
    },
    {
      date: "03-04-2018",
      documentNumber: "546302",
      documentType: "Receipt",
      debit: "0.00",
      credit: "198,704.00"
    },
    {
      date: "30-04-2018",
      documentNumber: "950460",
      documentType: "Invoice",
      debit: "198,704.00",
      credit: "0.00"
    }
  ]
};

const progressReport = {
  unitsCompleted: "30",
  totalMarks: "2,000",
  avgMark: "70.00",
  avgGrade: "A",
  completedUnits: [
    {
      academicYear: "2017-2018",
      syllabus: "BICS(FT)-15",
      year: "2",
      subjectCode: "ICS 2101",
      subjectName: "Unit 1",
      type: "OB",
      marks: "70",
      grade: "B",
      credits: "3",
      gpv: "3.00"
    },
    {
      academicYear: "2017-2018",
      syllabus: "BICS(FT)-15",
      year: "2",
      subjectCode: "ICS 2102",
      subjectName: "Unit 2",
      type: "OB",
      marks: "70",
      grade: "B",
      credits: "3",
      gpv: "3.00"
    },
    {
      academicYear: "2017-2018",
      syllabus: "BICS(FT)-15",
      year: "2",
      subjectCode: "ICS 2103",
      subjectName: "Unit 3",
      type: "OB",
      marks: "70",
      grade: "B",
      credits: "3",
      gpv: "3.00"
    },
    {
      academicYear: "2017-2018",
      syllabus: "BICS(FT)-15",
      year: "2",
      subjectCode: "ICS 2104",
      subjectName: "Unit 4",
      type: "OB",
      marks: "70",
      grade: "B",
      credits: "3",
      gpv: "3.00"
    },
    {
      academicYear: "2017-2018",
      syllabus: "BICS(FT)-15",
      year: "2",
      subjectCode: "ICS 2105",
      subjectName: "Unit 5",
      type: "OB",
      marks: "70",
      grade: "B",
      credits: "3",
      gpv: "3.00"
    },
    {
      academicYear: "2017-2018",
      syllabus: "BICS(FT)-15",
      year: "2",
      subjectCode: "ICS 2106",
      subjectName: "Unit 6",
      type: "OB",
      marks: "70",
      grade: "B",
      credits: "3",
      gpv: "3.00"
    },
    {
      academicYear: "2017-2018",
      syllabus: "BICS(FT)-15",
      year: "2",
      subjectCode: "ICS 2107",
      subjectName: "Unit 7",
      type: "OB",
      marks: "70",
      grade: "B",
      credits: "3",
      gpv: "3.00"
    },
    {
      academicYear: "2017-2018",
      syllabus: "BICS(FT)-15",
      year: "2",
      subjectCode: "ICS 2108",
      subjectName: "Unit 8",
      type: "OB",
      marks: "70",
      grade: "B",
      credits: "3",
      gpv: "3.00"
    }
  ],
  unitsNotDone: [
    {
      year: "4",
      subjectCode: "ICS 42010",
      subjectName: "Unit 10",
      type: "OB",
      credits: "3"
    },
    {
      year: "4",
      subjectCode: "ICS 42011",
      subjectName: "Unit 11",
      type: "OB",
      credits: "3"
    },
    {
      year: "4",
      subjectCode: "ICS 42012",
      subjectName: "Unit 12",
      type: "OB",
      credits: "3"
    },
    {
      year: "4",
      subjectCode: "ICS 42013",
      subjectName: "Unit 13",
      type: "OB",
      credits: "3"
    },
    {
      year: "4",
      subjectCode: "ICS 42014",
      subjectName: "Unit 14",
      type: "OB",
      credits: "3"
    }
  ]
};

module.exports = {
  attendance,
  details,
  dashboard,
  feesStatement,
  progressReport
};
