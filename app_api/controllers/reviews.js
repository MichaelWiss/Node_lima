var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

/*p ost reviews */
module.exports.reviewsCreate = function (req, res) {
  res.status(200);
  res.json({"status" : "success"});
};

/* get reviews */
module.exports.reviewsReadOne = function (req, res) {
  res.status(200);
  res.json({"status" : "success"});
};

/* put reviews */
module.exports.reviewsUpdateOne = function(req, res) {
  res.status(200);
  res.json({"status" : "success"}); 
};

/* delete location */

module.exports.reviewsDeleteOne = function(req, res) {
  res.status(200);
  res.json({"status" : "success"});
}; 


var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};
module.exports.locationsCreate = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
};