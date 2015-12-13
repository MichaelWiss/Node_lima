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
  if (req.params && req.params.locationid) {
   Loc
    .findById(req.params.locationid)
    .exec(function(err, location) {
     if (!location) {
       sendJsonResponse (res, 404, {
       	  "message": "locationid not found"
       });
       return
     } else if (err) {
       sendJsonResponse(res, 200, location);
       return;
     }
     sendJsonResponse(res, 200, location);
    });
   } else {
   	 sendJsonResponse (res, 404, {
   	 	"message": "No locationid in request"
   	 });
   }
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


