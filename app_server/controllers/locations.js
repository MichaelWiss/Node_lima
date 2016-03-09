var request = require('request');
var apiOptions = {
	server : "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
	apiOptions.server = "https://fierce-falls-6003.herokuapp.com";
}


var renderHomepage = function(req, res, responseBody) {
  if (!(responseBody instanceof Array)) {
	message = "API lookup error";
	responseBody = [];
} else {
	if (!responseBody.length) {
		message = "No places found nearby";
	}
}
  res.render('locations-list', {
    title: 'Loc8r - find a place to work with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapline: 'Find places to work with wifi near you!'
    },
    sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
    locations: responseBody
  });
};


/* Get 'home' page */
module.exports.homelist = function(req, res){
   var requestOptions, path;
   path = '/api/locations';
   requestOptions = {
   	  url : apiOptions.server + path,
   	  method : "GET",
   	  json : {},
   	  qs : {
   	  	lng : -0.7992599,
   	  	lat : 51.378091,
   	  	maxDistance : 20
   	  }
   };
   request(
    requestOptions,
    function(err, response, body) {
      var i, data;
      data = body;
      if (response.statusCode === 200 && data.length) {
        for (i=0; i<data.length; i++) {
          data[i].distance = _formatDistance(data[i].distance);
        }
      }
      renderHomepage(req, res, data);
     }
   	);
};

var getLocationInfo = function (req, res, callback) {
  var requestOptions, path;
  path = "/api/locations/" + req.params.locationid;
  requestOptions = {
    url : apiOptions.server + path,
    method : "GET",
    json : {}
  };
  request(
    requestOptions,
    function(err, response, body) {
      var data = body;
      if (response.statusCode === 200) {
        data.coords = {
          lng : body.coords[0],
          lat : body.coords[1]
        };
        callback(req, res, data);
      } else {
        _showError(req, res, response.statusCode);
      }
    }
  );
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res){
  getLocationInfo(req, res, function(req, res, responseData) {
    renderDetailPage(req, res, responseData);
  });
};



/* Get  'Add review' page*/
module.exports.addReview = function(req, res){
	res.render('location-review-form', {
	  title: 'Review Starcups on Loc8r',
	  pageHeader: { title: 'Review Starcups' }
	});
};

/* Get */