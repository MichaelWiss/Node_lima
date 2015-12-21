var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJSONresponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

var theEarth = (function() {
	var earthRadius = 3959; //miles, km is 6371

	var getDistanceFromRads = function(rads) {
	 return parseFloat(rads * earthRadius);
	};

	var getRadsFromDistance = function(distance) {
	 return parseFloat(distance / earthRadius);
	};

	return {
	   getDistanceFromRads: getDistanceFromRads,
	   getRadsFromDistance: getRadsFromDistance
	};
})();



/* Get list of locations */
module.exports.locationsListByDistance = function (req, res) {
   var lng = parseFloat (req.query.lng);
   var lat = parseFloat (req.query.lat);
   var maxDistance = parseFloat(req.query.maxDistance);
   var point = {
   	 type: "Point",
   	 coordinate: [lng, lat]
   };
   var geoOptions = {
   	spherical: true,
   	maxDistance: theEarth.getRadsFromDistance(20),
   	num: 10
   };
   if (!lng || !lat || !maxDistance) {
   	console.log('locationsListByDistance missing params');
   	sendJSONresponse(res, 404, {
   		"message": "lng, lat and maxDistance query parameters are all required"
   	});
   	return;
   }
   Loc.geoNear(point, geoOptions, function(err, results, stats) {
   	var locations;
   	console.log('Geo results', results);
   	console.log('Geo stats', stats);
   	if (err) {
   		console.log('geoNear error:', err);
   		sendJSONresponse(res, 404, err);
   	} else {
   		locations = buildLocationList(req, res, results, stats); 
        sendJSONresponse(res, 200, locations);
   	}
   });
 };

 var buildlocationList = function(req, res, results, stats) {
 	var locations = [];
 	results.forEach(function(doc) {
 		locations.push({
 			distance: theEarth.getDistanceFromRads(doc.dis),
 			name: doc.obj.name,
 			address: doc.obj.address,
 			rating: doc.obj.rating,
 			facilities: doc.obj.facilities,
 			_id: doc.obj._id
 		});
 	});
 	return locations;
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


