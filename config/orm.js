let connection = require('./connection.js');

function objToSql(ob) {
	let arr = [];
	for (let key in ob) {
		if (ob.hasOwnProperty(key)) {
			arr.push(key + '=' + ob[key]);
		}
	}

	return arr.toString();
}

let orm = {
	selectAll: function(table, cb){
		let queryString = 'SELECT * FROM ' + table + ';';
		connection.query(queryString, function(err, result){
			if (err) throw err;
			cb(result);
		})
	},
	insertOne: function (table, burger_name, cb) {
		let queryString = "INSERT INTO " + table + " (burger_name) VALUES ('" + burger_name + "')";
		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	updateOne: function (table, objColVals, condition, cb) {
		let queryString = 'UPDATE ' + table;

		queryString = queryString + ' SET ';
		queryString = queryString + objToSql(objColVals);
		queryString = queryString + ' WHERE ';
		queryString = queryString + condition;
		console.log(condition);

		// console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
};

module.exports = orm;