var mongoose = require('mongoose');
var Loc = mongoose.model('Location');



/* Get location */
module.exports.locationsRead = function (req, res) { };

/* post location */
module.exports.locationsCreate = function (req, res) {
  res.status(200);
  res.json({"status" : "success"});
 };

/* Get location */
module.exports.locationsRead = function (req, res) { };

/* put location */
module.exports.locationsUpdate = function (req, res) { };

/* delete location */
module.exports.locationsDelete = function (req, res) { };
 

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};
module.exports.locationsCreate = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
};


