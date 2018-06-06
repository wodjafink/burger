var mysql = require("mysql");

// // Setting up our connection information
// var source = {
//   localhost: {
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "",
//     database: "burgers_db"
//   }
// };

// // Creating our connection
// var connection = mysql.createConnection(source.localhost);

if(process.env.JAWSDB_URL){
  console.log("Hey running JAWS!")
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  console.log("Hey running local mysql!")

  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
  });
}


// Connecting to the database.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exporting our connection
module.exports = connection;
