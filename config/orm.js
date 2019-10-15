const connection = require('./connection.js');

function sqlObj(ob) {
	let arr = [];
	for (let key in ob) {
		if (ob.hasOwnProperty(key)) {
			arr.push(key + '=' + ob[key]);
		}
	}

	return arr.toString();
}

let orm = {
	selectAll: function(tableName, cb){
		let queryString = 'SELECT * FROM ' + tableName + ';';
		connection.query(queryString, function(err, res){
			if (err) throw err;
			cb(res);
		})
	},
	insertOne: function (tableName, burger_name, cb) {
		let queryString = "INSERT INTO " + tableName + " (burger_name) VALUES ('" + burger_name + "')";
		console.log(queryString);
		connection.query(queryString, function (err, res) {
			if (err) throw err;
			cb(res);
		});
	},
	updateOne: function (tableName, column, state, cb) {
		let queryString = 'UPDATE ' + tableName;

		queryString = queryString + ' SET ';
		queryString = queryString + sqlObj(column);
		queryString = queryString + ' WHERE ';
		queryString = queryString + state;
		console.log(state);

		connection.query(queryString, function (err, res) {
			if (err) throw err;
			cb(res);
		});
	},
	
    deleteOne: function(tableName, state, cb) {
		let queryString = "DELETE FROM " + tableName;
		queryString += " WHERE ";
		queryString += state;
	
		connection.query(queryString, function(err, res) {
		  if (err) throw err;
		  cb(res);
		});
	  }
	
	};

module.exports = orm;