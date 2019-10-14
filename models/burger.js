let orm = require('../config/orm.js');

let burger = {
	all: function (cb) {
		orm.selectAll('burgers', function (res) {
			cb(res);
		});
	},
	create: function (col, burger_name, cb) {
		orm.insertOne('burgers', burger_name, function (res) {
			cb(res);
		});
	},
	update: function (column, state, cb) {
		orm.updateOne('burgers', column, state, function (res) {
			cb(res);
		});
	}, 
	//Delete function to throw away/delete burger from database.
	delete: function(state, cb) {
		orm.delete("burgers", state, function(res) {
		  cb(res);
		});
	  }
	};
	
//};

module.exports = burger;