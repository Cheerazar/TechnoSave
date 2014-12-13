var express = require('express');
var router = express.Router();
var api = require('../js/api.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: "Techno$ave" });
});

//For the home page search bar
  //Sending a post request transfers the request
  //into the parser file to aggregate APIs.
  //js.parser is the function "parser"
  //in TechnoSave/js/api.js
router.post('/', function(req, res) {
  api(req, res);
});

module.exports = router;
