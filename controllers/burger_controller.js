var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js")

router.get("/index", function(req, res){
	burger.all(function(data){
		var hbsObject = {
			burgers:data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.get("/", function(req, res){
	res.redirect('/index');
})

router.post("/api/burgers/create", function(req, res){
	burger.create(req.body.burger_name, function() {
		res.redirect('/index');
	});
});

router.post("/api/burgers/eat/:id", function(req, res){
	burger.update(req.params.id, function(){
		res.redirect('/index');
	});
});

module.exports = router;