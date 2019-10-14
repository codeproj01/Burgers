// Import the depndencies
const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', function(req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
	burger.all(function (data) {
		let handlebarsObj = { burgers: data };
		res.render('index', handlebarsObj);
	});
});

router.post('/burgers/create', function(req, res){
	console.log(req.body.burger_name)
	burger.create('burger_name', req.body.burger_name, function(){
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function (req, res) {
	let state = 'id = ' + req.params.id;

	console.log('state', state);

	burger.update({ devoured: req.body.devoured }, state, function () {
		res.redirect('/burgers');
	});
});

module.exports = router;