var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

/*post reviews */
module.exports.reviewsCreate = function (req, res) {
  var locationid = req.params.locationid;
  if (locationid) {
  	Loc
  	  .findById(LocationId)
  	  .select('reviews')
  	  .exec(
  	  	function(err, location  {
  	  		if (err) {
  	  			sendJsonResponse(res, 400, err);
  	  		} else {
  	  			doAddReview(req, res, location);
  	  		}
  	  	   }
  	  	  );
  	  } else {
  	  	sendJsonResponse(res, 404, {
  	  		"message": "Not found, locationid required"
  	  	});
  	  }
};

var doAddReview = function(req, res, location) {
  if (!location) {
  	sendJSONresponse(res, 404, "locationid not found");
  } else {
  	location.reviews.push({
  		author: req.body.author,
  		rationg: req.body.rating,
  		reviewsTexe: req.body.reviewText
  	});
  	location.save(function(err, location) {
  		var thisReview;
  		if (err) {
  			sendJSONresponse(res, 400, err);
  		} else {
  			thisReview = location.reviews[location.reviews.length -1];
  			sendJsonResponse(res, 201, thisReview);
  		}
  	});
  }
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
   	 "message": "Not found, locationid and reviewid are both required"
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