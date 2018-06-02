var connection = require("./connection.js")

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}


var orm = {
	selectAll: function(callback) {
		var queryString = "SELECT * FROM burgers";
		connection.query(queryString, function(err, result){
			callback(result);
		});
	},
	insertOne: function(burger, callback) {
		var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
		connection.query(queryString, burger.name, function(err, result){
			callback(result);
		});
	},
	updateOne: function(burger, devoured, callback) {
		var queryString = "UPDATE burgers";

		queryString += " SET ";
		queryString += objToSql(burger);
		queryString += " WHERE ";
		queryString += devoured;

		console.log("Update one " + queryString);
		connection.query(queryString, function(err,result){
			if (err) throw err;
			callback(result);
		});
	}
};

module.exports = orm;