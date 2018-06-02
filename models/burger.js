var orm = require("../config/orm.js");

var burger = {
	all: function(cb){
		orm.selectAll( function(res){
			cb(res);
		});
	},
	create: function(burger, cb){
		orm.insertOne(burger.name, function(res){
			cb(res);
		});
	},
	isEaten: function(burger, isEaten, cb){
		orm.updateOne(burger, isEaten, function(res){
			cb(res);
		});
	}
}

module.exports = burger;