var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

/*p ost reviews */
module.exports.reviewsCreate = function (req, res) { };

/* get reviews */
module.exports.reviewsReadOne = function (req, res) { };

/* put reviews */
module.exports.reviewsUpdateOne = function(req, res) { };

/* delete location */

module.exports.reviewsDeleteOne = function(req, res) { }; 


var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};
module.exports.locationsCreate = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
};