
var db = require('./db');


//connect to database
db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
//please note i have added a "ID" field so this will make connected my tables much more seamlessly
  var sql = `CREATE TABLE Students (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(5) NOT NULL,
    FirstName VARCHAR(255) NOT NULL,
    Surname VARCHAR(255) NOT NULL,
    PhoneNumber VARCHAR(20) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Line1 VARCHAR(255) NOT NULL,
    Line2 VARCHAR(255) ,
    Town VARCHAR(255) NOT NULL,
    County VARCHAR(255) NOT NULL,
    EirCode VARCHAR(255),
    DateOfBirth DATE NOT NULL,
    ParentGuardianName VARCHAR(255) NOT NULL,
    VirtualTutorialPermission VARCHAR(5) NOT NULL,
    Gender VARCHAR(50) NOT NULL,
    Subject VARCHAR(255),
    RecordCreationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Students table created");
  });

  sql = `CREATE TABLE Tutors (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(5) NOT NULL,
    FirstName VARCHAR(255) NOT NULL,
    Surname VARCHAR(255) NOT NULL,
    PhoneNumber VARCHAR(20) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Line1 VARCHAR(255) NOT NULL,
    Line2 VARCHAR(255) ,
    Town VARCHAR(255) NOT NULL,
    County VARCHAR(255) NOT NULL,
    EirCode VARCHAR(255)
  )`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Tutors table created");
  });



  sql = `CREATE TABLE Tutorials (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    TutorialDate DATE NOT NULL,
    TutorialTime TIME NOT NULL,
    Students INT NOT NULL,
    Tutor INT NOT NULL,
    Fee INT NOT NULL,
    TutorialNumber INT NOT NULL,
    TutorialAttendance VARCHAR(20) NOT NULL,
    TutorialSubject VARCHAR(50) NOT NULL,
    TutorialNotes TEXT NOT NULL,
    FOREIGN KEY (Tutor) REFERENCES Tutors(ID)
  )`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Tutorials table created");
  });
});
