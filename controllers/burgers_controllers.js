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

//DELETE route to throw away a burger.
router.delete("/api/burgers/:id", function(req, res) {
	var state = "id = " + req.params.id;
  
	burger.delete(state, function(result) {
	  if (result.affectedRows == 0) {
		// If no rows were changed, then the ID must not exist, so 404
		return res.status(404).end();
	  } else {
		res.status(200).end();
	  }
	});
  });
  

module.exports = router;