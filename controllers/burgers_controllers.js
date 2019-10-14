// Import the depndencies
const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', function(req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
	burger.all(function (data) {
		let hbsObject = { burgers: data };
		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function(req, res){
	console.log(req.body.burger_name)
	burger.create('burger_name', req.body.burger_name, function(){
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function (req, res) {
	let condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.update({ devoured: req.body.devoured }, condition, function () {
		res.redirect('/burgers');
	});
});

module.exports = router;