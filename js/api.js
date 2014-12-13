var Promise = require('bluebird');
var amazon = require('./api-amazon');
var wmBB = require('./api-walmartBB');

module.exports = function(req, res) {
  var searchQuery = req.body.items;

  var apiCalls = [
    amazon(searchQuery),
    wmBB(searchQuery, 'walmart'),
    wmBB(searchQuery, 'bestbuy')
  ];

  Promise.all(apiCalls).then(function(allOutputs) {
    var result = [];
    for (var i = 0; i < allOutputs.length; i++){
      result = result.concat(allOutputs[i]);
    }
    res.send(result);
  });

};
