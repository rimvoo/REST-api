//setup mysql
var mysql = require('mysql');

//connection variables
const db = mysql.createConnection({
    host: "",
    user: "",
    password: "",
    database: ""
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connection Made to DB');
});

module.exports = db;



