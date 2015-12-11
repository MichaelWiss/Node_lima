var mongoose = require('mongoose');
var Loc = mongoose.model('Location');



/* Get location */
module.exports.locationsListByDistance = function (req, res) {
  res.status(200);
  res.json({"status" : "success"});
 };

/* post location */
module.exports.locationsCreate = function (req, res) {
  res.status(200);
  res.json({"status" : "success"});
 };

/* Get location */
module.exports.locationsReadOne = function (req, res) {
  res.status(200);
  res.json({"status" : "success"}); 
};

/* put location */
module.exports.locationsUpdateOne = function (req, res) {
  res.status(200);
  res.json({"status" : "success"});
};

/* delete location */
module.exports.locationsDeleteOne = function (req, res) { 
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


