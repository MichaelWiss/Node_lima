var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

/*p ost reviews */
module.exports.reviewsCreate = function (req, res) {
  res.status(200);
  res.json({"status" : "success"});
};

/* get reviews */
module.exports.reviewsReadOne = function (req, res) {
  if (req.params && req.params.locationid && req.params.reviewid) {
  	Loc
  	  findbyId(req.params.locationid)
  	  .select('name reviews')
  	  .exec(
  	  	function(err, location) {
  	  		var response, review;
  	  		if (!location) {
  	  			sendJsonResponse(res, 404, {
  	  				"message": "locationid not found"
  	  			});
  	  	    return;
  	  		} else if (err) {
  	  		  sendJsonResponse (res, 400, err);
  	  		  return;
  	  		}
  	  		if (location.review && location.reviews.length > 0) {
  	  			review = location.reviews.id(req.params.reviewid);
  	  			if (!review) {
  	  				sendJsonResponse(res, 404, {
  	  					"message": "reviewid not found"
  	  				});
  	  			} else {
  	  			  response = {
  	  			  	location : {
  	  			  		name :location.name,
  	  			  		 id : req.params.locationid
  	  			  	},
  	  			  	review : review
  	  			  };
  	  			  sendJsonResponse(res, 200, response); 
  	  			}
  } else {
  	sendJsonResponse(res, 404, {
  		"message": "No reviews found"
  	});
  }
 }
);
 } else {
   sendJsonResponse(res, 404, {
   	 "message": "Not found, locationid and reviewid are bot required"
   });
 }
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